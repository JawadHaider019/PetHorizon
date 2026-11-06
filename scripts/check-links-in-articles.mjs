import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const vite = await createServer({
  root: rootDir,
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: 'custom',
  logLevel: 'silent'
});

const { BLOG_POSTS } = await vite.ssrLoadModule('./src/data/blogData.ts');
const { getFullBlogArticle } = await vite.ssrLoadModule('./src/data/blogArticles/index.ts');
await vite.close();

const validSlugs = new Set(BLOG_POSTS.map(p => p.slug));
validSlugs.add('pet-calorie-calculator');
validSlugs.add('pet-age-calculator');

console.log('Valid blog slugs:', validSlugs.size);

// Check all links inside all 39 full articles
const allLinks = [];
BLOG_POSTS.forEach((post, i) => {
  const full = getFullBlogArticle(post.slug);
  if (!full) {
    console.error(`Missing full article for ${post.slug}`);
    return;
  }
  const bodyText = JSON.stringify(full);
  const regex = /\]\(([^)]+)\)/g;
  let match;
  while ((match = regex.exec(bodyText)) !== null) {
    const url = match[1];
    allLinks.push({ fromSlug: post.slug, target: url });
  }
});

console.log(`Total internal/external links in article bodies: ${allLinks.length}`);

const brokenLinks = [];
allLinks.forEach(({ fromSlug, target }) => {
  if (target.startsWith('/blogs/')) {
    const targetSlug = target.replace('/blogs/', '').split('#')[0].split('?')[0];
    if (!validSlugs.has(targetSlug)) {
      brokenLinks.push({ fromSlug, target, targetSlug, type: 'BLOG' });
    }
  } else if (target.startsWith('/tools/')) {
    const targetTool = target.replace('/tools/', '').split('#')[0].split('?')[0];
    if (targetTool !== 'pet-calorie-calculator' && targetTool !== 'pet-age-calculator') {
      brokenLinks.push({ fromSlug, target, targetSlug: targetTool, type: 'TOOL' });
    }
  }
});

console.log('Broken links in article bodies:', brokenLinks.length);
if (brokenLinks.length > 0) {
  console.log(JSON.stringify(brokenLinks, null, 2));
}

// Now search specifically for the 4 mentioned patterns across all article source files in src/data/blogArticles/
const articleDir = path.join(rootDir, 'src', 'data', 'blogArticles');
const articleFiles = fs.readdirSync(articleDir).filter(f => f.endsWith('.ts'));

console.log('\n--- Searching src/data/blogArticles for suspicious patterns ---');
articleFiles.forEach(f => {
  const content = fs.readFileSync(path.join(articleDir, f), 'utf8');
  // Check for emergency-preparedness vs preparation
  if (content.includes('emergency-preparation')) {
    console.log(`[FOUND emergency-preparation] in ${f}`);
  }
  // Check for worldwide vs non-worldwide
  if (content.includes('vaccination-schedule') && !content.includes('worldwide') && !content.includes('new-york')) {
    console.log(`[FOUND non-worldwide vax] in ${f}`);
  }
  if (content.includes('household-pet-coparenting') && !content.includes('worldwide') && !content.includes('london') && !content.includes('new-york')) {
    console.log(`[FOUND non-worldwide coparent] in ${f}`);
  }
});
