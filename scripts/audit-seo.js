import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function audit() {
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const { BLOG_POSTS } = await vite.ssrLoadModule('./src/data/blogData.ts');
  const { getFullBlogArticle } = await vite.ssrLoadModule('./src/data/blogArticles/index.ts');
  await vite.close();

  console.log(`--- BLOG POST AUDIT ---`);
  console.log(`Total entries in BLOG_POSTS: ${BLOG_POSTS.length}`);

  const seenSlugs = new Set();
  const seenTitles = new Set();
  const duplicateSlugs = [];
  const duplicateTitles = [];
  const missingArticles = [];
  const articleStats = [];

  for (const post of BLOG_POSTS) {
    if (seenSlugs.has(post.slug)) duplicateSlugs.push(post.slug);
    seenSlugs.add(post.slug);

    if (seenTitles.has(post.title)) duplicateTitles.push(post.title);
    seenTitles.add(post.title);

    const fullArticle = getFullBlogArticle(post.slug);
    if (!fullArticle) {
      missingArticles.push(post.slug);
    } else {
      let wordCount = fullArticle.overviewSummary ? fullArticle.overviewSummary.split(/\s+/).length : 0;
      let sectionCount = fullArticle.sections ? fullArticle.sections.length : 0;
      let tableCount = 0;
      let warningCount = 0;
      let tipCount = 0;

      if (fullArticle.sections) {
        for (const sec of fullArticle.sections) {
          if (sec.intro) wordCount += sec.intro.split(/\s+/).length;
          if (sec.paragraphs) {
            for (const p of sec.paragraphs) wordCount += p.split(/\s+/).length;
          }
          if (sec.table) tableCount++;
          if (sec.warningBox) warningCount++;
          if (sec.routineTip) tipCount++;
        }
      }

      articleStats.push({
        slug: post.slug,
        title: post.title,
        wordCount,
        sectionCount,
        tableCount,
        warningCount,
        tipCount,
        category: post.category
      });
    }
  }

  console.log(`Duplicate Slugs (${duplicateSlugs.length}):`, duplicateSlugs);
  console.log(`Duplicate Titles (${duplicateTitles.length}):`, duplicateTitles);
  console.log(`Missing Full Articles (${missingArticles.length}):`, missingArticles);

  console.log(`\n--- ARTICLE DEPTH CHECK (Min word count / thin content) ---`);
  const thinArticles = articleStats.filter(a => a.wordCount < 400);
  console.log(`Thin Articles (<400 words) (${thinArticles.length}):`, thinArticles.map(a => `${a.slug} (${a.wordCount} words)`));

  console.log(`\n--- SUMMARY OF ALL ARTICLES ---`);
  articleStats.forEach((a, i) => {
    console.log(`${i+1}. [${a.category}] ${a.slug} -> Words: ${a.wordCount}, Sections: ${a.sectionCount}, Tables: ${a.tableCount}, Warnings: ${a.warningCount}`);
  });

  // Check sitemap.xml
  const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const sitemapUrls = [];
  const locRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    sitemapUrls.push(match[1]);
  }
  console.log(`\n--- SITEMAP AUDIT ---`);
  console.log(`Total URLs in sitemap.xml: ${sitemapUrls.length}`);

  // Check dist output
  const distDir = path.join(rootDir, 'dist');
  console.log(`\n--- DIST DIRECTORY AUDIT ---`);
  if (!fs.existsSync(distDir)) {
    console.log(`dist/ does not exist!`);
  } else {
    const distFiles = [];
    function scanDir(dir) {
      for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) scanDir(full);
        else if (file.endsWith('.html')) distFiles.push(path.relative(distDir, full));
      }
    }
    scanDir(distDir);
    console.log(`Total Prerendered HTML files in dist/: ${distFiles.length}`);
  }
}

audit().catch(console.error);
