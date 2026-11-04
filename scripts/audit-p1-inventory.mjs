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
const { ALL_FULL_ARTICLES, getFullBlogArticle } = await vite.ssrLoadModule('./src/data/blogArticles/index.ts');
await vite.close();

const categories = new Map();
BLOG_POSTS.forEach(p => {
  categories.set(p.category, (categories.get(p.category) || 0) + 1);
});

console.log('=== CATEGORY BREAKDOWN ===');
for (const [cat, count] of categories.entries()) {
  console.log(`- ${cat}: ${count} articles`);
}

const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

console.log('\n=== COMPLETE 39 ARTICLES INVENTORY ===');
const inventoryTable = BLOG_POSTS.map((post, idx) => {
  const full = getFullBlogArticle(post.slug);
  const links = [];
  const scanText = (text, loc) => {
    if (!text) return;
    let match;
    linkRegex.lastIndex = 0;
    while ((match = linkRegex.exec(text)) !== null) {
      links.push({ anchor: match[1], url: match[2], loc });
    }
  };
  if (full) {
    scanText(full.overviewSummary, 'overviewSummary');
    (full.sections || []).forEach((sec, sIdx) => {
      scanText(sec.heading, `sec[${sIdx}].h`);
      scanText(sec.intro, `sec[${sIdx}].intro`);
      (sec.paragraphs || []).forEach((p, pIdx) => scanText(p, `sec[${sIdx}].p[${pIdx}]`));
      (sec.bulletPoints || []).forEach((b, bIdx) => {
        scanText(b.label, `sec[${sIdx}].b[${bIdx}].lbl`);
        scanText(b.text, `sec[${sIdx}].b[${bIdx}].txt`);
      });
      if (sec.warningBox) scanText(sec.warningBox.text, `sec[${sIdx}].warn`);
      if (sec.routineTip) scanText(sec.routineTip.text, `sec[${sIdx}].tip`);
    });
  }

  return {
    index: idx + 1,
    title: post.title,
    slug: post.slug,
    category: post.category,
    seoKeyword: post.seoKeyword,
    targetLocation: post.targetLocation,
    featured: post.featured,
    searchRankBadge: post.searchRankBadge,
    links
  };
});

console.log(JSON.stringify(inventoryTable, null, 2));
