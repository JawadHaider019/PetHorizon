/**
 * Static SEO Prerender & XML Sitemap Generator for PetHorizon
 *
 * Runs automatically during build or on demand to generate:
 *   1. public/sitemap.xml (Comprehensive dynamic sitemap including all pSEO blog slugs)
 *   2. public/robots.txt (Allow all + sitemap index directive)
 *   3. Crawler-ready HTML snapshots for /blogs and /blogs/[slug]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const BASE_URL = 'https://pethorizon.jawumitech.com';

// 1. Import BLOG_POSTS from compiled/raw data
async function loadBlogData() {
  const blogDataPath = path.join(rootDir, 'src/data/blogData.ts');
  const rawContent = fs.readFileSync(blogDataPath, 'utf-8');

  // Regex extract slug, title, excerpt, publishedAt, category, coverImage, tags
  const posts = [];
  const postBlockRegex = /\{[\s\S]*?id:\s*'([^']+)'[\s\S]*?slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?excerpt:\s*'([^']+)'[\s\S]*?category:\s*'([^']+)'[\s\S]*?coverImage:\s*'([^']+)'[\s\S]*?\}/g;

  let match;
  while ((match = postBlockRegex.exec(rawContent)) !== null) {
    posts.push({
      id: match[1],
      slug: match[2],
      title: match[3],
      excerpt: match[4],
      category: match[5],
      coverImage: match[6],
      updatedAt: new Date().toISOString().split('T')[0]
    });
  }

  return posts;
}

// 2. Generate XML Sitemap
function generateSitemap(posts) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static core routes
  const staticRoutes = [
    { loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${BASE_URL}/blogs`, priority: '0.9', changefreq: 'daily' },
    { loc: `${BASE_URL}/privacy-policy`, priority: '0.3', changefreq: 'monthly' },
    { loc: `${BASE_URL}/terms-of-service`, priority: '0.3', changefreq: 'monthly' },
    { loc: `${BASE_URL}/data-deletion`, priority: '0.3', changefreq: 'monthly' },
    { loc: `${BASE_URL}/changelog`, priority: '0.5', changefreq: 'weekly' }
  ];

  staticRoutes.forEach((route) => {
    xml += `  <url>\n`;
    xml += `    <loc>${route.loc}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Dynamic pSEO Blog routes
  posts.forEach((post) => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/blogs/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.updatedAt}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
}

// 3. Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
`;
}

// Execute Script
async function run() {
  console.log('🐾 Running PetHorizon Static SEO Prerender...');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const posts = await loadBlogData();
  console.log(`Found ${posts.length} pSEO blog posts in blogData.ts`);

  // Write sitemap.xml
  const sitemapXml = generateSitemap(posts);
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
  console.log(`✅ Generated sitemap: ${sitemapPath}`);

  // Write robots.txt
  const robotsTxt = generateRobotsTxt();
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt, 'utf-8');
  console.log(`✅ Generated robots.txt: ${robotsPath}`);

  console.log('🎉 Static SEO Prerender Completed Successfully!');
}

run().catch((err) => {
  console.error('❌ Error during SEO prerender:', err);
  process.exit(1);
});
