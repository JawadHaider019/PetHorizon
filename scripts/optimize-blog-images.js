/**
 * PetHorizon Automated Blog Image Downloader, Sharp WebP Optimizer & SEO Engine
 * 
 * Features:
 *  - Downloads full landscape sources without destructive face-cropping
 *  - Generates responsive WebP variants: 1200w (Desktop), 800w (Tablet), 480w (Mobile)
 *  - Replaces cropped pug with wide landscape veterinary nutrition photo
 *  - Emits src/data/blogImagesManifest.json with SEO-rich alt texts & dimensions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const imagesBlogDir = path.join(publicDir, 'images', 'blog');
const manifestPath = path.join(rootDir, 'src', 'data', 'blogImagesManifest.json');

// Ensure output directories exist
fs.mkdirSync(imagesBlogDir, { recursive: true });

// Fallback high-res replacements for any portrait/awkwardly cropped or dead images
const REPLACEMENT_HEROES = {
  // Replace the severe close-up red-background pug with a wide, beautiful, full-dog landscape photo
  'pet-calorie-calculator-feeding-guide-apop': 'https://images.unsplash.com/photo-1535930749574-1399327ce78f',
  'household-pet-coparenting-feeding-routine-sync-london': 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8',
  'puppy-potty-training-schedule-akc-guide': 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a',
  'senior-cat-care-health-diet-comfort-guide': 'https://images.unsplash.com/photo-1561948955-570b270e7c36'
};

function cleanUnsplashUrl(rawUrl, width = 1600, height = 1000) {
  if (!rawUrl || !rawUrl.includes('images.unsplash.com')) return rawUrl;
  const baseUrl = rawUrl.split('?')[0];
  // Natural 16:10 landscape crop without zoom/face slicing
  return `${baseUrl}?auto=format&fit=crop&w=${width}&h=${height}&q=85`;
}

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function processResponsiveVariants(buffer, baseFilename) {
  const variants = [
    { suffix: '1200w', width: 1200, height: 750, quality: 82 },
    { suffix: '800w', width: 800, height: 500, quality: 82 },
    { suffix: '480w', width: 480, height: 300, quality: 82 }
  ];

  const results = {};

  for (const v of variants) {
    const filename = `${baseFilename}-${v.suffix}.webp`;
    const destPath = path.join(imagesBlogDir, filename);

    await sharp(buffer)
      .resize({
        width: v.width,
        height: v.height,
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: v.quality })
      .toFile(destPath);

    results[v.suffix] = `/images/blog/${filename}`;
  }

  return {
    src: results['1200w'],
    srcSet: `${results['480w']} 480w, ${results['800w']} 800w, ${results['1200w']} 1200w`,
    width: 1200,
    height: 750
  };
}

async function main() {
  console.log('🚀 Loading PetHorizon Blog Posts via Vite SSR...');
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true, include: [] },
    appType: 'custom'
  });

  const { BLOG_POSTS } = await vite.ssrLoadModule('./src/data/blogData.ts');
  const { getFullBlogArticle } = await vite.ssrLoadModule('./src/data/blogArticles/index.ts');
  await vite.close();

  console.log(`Found ${BLOG_POSTS.length} blog posts to optimize.\n`);

  const manifest = {};
  let processedHeroes = 0;
  let processedSections = 0;

  for (let i = 0; i < BLOG_POSTS.length; i++) {
    const post = BLOG_POSTS[i];
    console.log(`[${i + 1}/${BLOG_POSTS.length}] Processing: ${post.slug}`);

    manifest[post.slug] = {
      hero: null,
      sections: {}
    };

    // 1. Process Hero Cover Image
    try {
      let heroUrl = REPLACEMENT_HEROES[post.slug] || post.coverImage;
      const downloadUrl = cleanUnsplashUrl(heroUrl, 1600, 1000);
      const buffer = await downloadBuffer(downloadUrl);
      const baseFilename = `${post.slug}-hero`;
      const heroMetadata = await processResponsiveVariants(buffer, baseFilename);

      heroMetadata.alt = `${post.title} — Evidence-based veterinary care guide`;
      manifest[post.slug].hero = heroMetadata;
      processedHeroes++;
    } catch (err) {
      console.error(`  ❌ Failed hero image for ${post.slug}:`, err.message);
    }

    // 2. Process In-Article Section Figures
    try {
      const full = await getFullBlogArticle(post.slug);
      if (full && full.sections) {
        for (const sec of full.sections) {
          if (sec.figure && sec.figure.imageUrl) {
            const secDownloadUrl = cleanUnsplashUrl(sec.figure.imageUrl, 1400, 875);
            const secBuffer = await downloadBuffer(secDownloadUrl);
            const secBaseFilename = `${post.slug}-${sec.id}`;
            const secMetadata = await processResponsiveVariants(secBuffer, secBaseFilename);

            secMetadata.alt = sec.figure.altText || sec.figure.caption || `${sec.heading} breakdown`;
            secMetadata.caption = sec.figure.caption;
            manifest[post.slug].sections[sec.id] = secMetadata;
            processedSections++;
          }
        }
      }
    } catch (err) {
      console.warn(`  ⚠️ Failed section images for ${post.slug}:`, err.message);
    }
  }

  // Write Manifest
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`\n🎉 Success!`);
  console.log(`- Hero images generated: ${processedHeroes}`);
  console.log(`- Section figures generated: ${processedSections}`);
  console.log(`- Output directory: public/images/blog/`);
  console.log(`- Manifest saved to: src/data/blogImagesManifest.json\n`);
}

main().catch((err) => {
  console.error('Fatal optimization failure:', err);
  process.exit(1);
});
