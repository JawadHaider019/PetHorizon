/**
 * SEO regression checker for Pet Horizon blog data.
 * Usage: node scripts/seo-check.js [--json]
 * Verifies slug parity, word counts vs. read time, metadata lengths, duplicate images,
 * duplicate titles/descriptions, and persona names inside article bodies.
 */
import path from 'path';
import process from 'node:process';
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

const words = (s) => (s || '').split(/\s+/).filter(Boolean).length;
const countArticleWords = (full) =>
  !full ? 0 : words(full.overviewSummary) + full.sections.reduce((sum, s) => sum +
    words(s.heading) + words(s.intro) +
    (s.paragraphs || []).reduce((a, p) => a + words(p), 0) +
    (s.bulletPoints || []).reduce((a, b) => a + words(b.label) + words(b.text), 0) +
    (s.table ? s.table.rows.flat().reduce((a, c) => a + words(c), 0) : 0) +
    (s.stepByStep ? s.stepByStep.steps.reduce((a, st) => a + words(st.title) + words(st.description), 0) : 0) +
    words(s.warningBox?.text) + words(s.routineTip?.text), 0);

const imageUse = new Map();
const track = (url, where) => {
  if (!url) return;
  const key = url.split('?')[0];
  imageUse.set(key, [...(imageUse.get(key) || []), where]);
};

const rows = BLOG_POSTS.map((post, i) => {
  const full = getFullBlogArticle(post.slug);
  track(post.coverImage, `#${i + 1} cover`);
  (full?.sections || []).forEach((s) => track(s.figure?.imageUrl, `#${i + 1} figure`));
  const wc = countArticleWords(full);
  const bodyText = JSON.stringify(full || {});
  const personas = [...bodyText.matchAll(/\b(Dr\.\s+[A-Z][a-z]+\s+[A-Z][a-z]+|Alex Mercer|DVM)\b/g)].map((m) => m[0]);
  const links = [...bodyText.matchAll(/\]\((\/[^)]+|https?:[^)]+)\)/g)].map((m) => m[1]);
  return {
    n: i + 1,
    slug: post.slug,
    exactArticle: !!full && full.slug === post.slug,
    articleSlug: full?.slug || null,
    title: post.title,
    metaTitleLen: post.metaTitle.length,
    metaDescLen: post.metaDescription.length,
    readTime: post.readTime,
    words: wc,
    realMinutes: Math.max(1, Math.round(wc / 225)),
    author: post.author.name,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt || null,
    personas: [...new Set(personas)],
    internalLinks: links.filter((l) => l.startsWith('/')).length,
    externalLinks: links.filter((l) => l.startsWith('http')).length,
    sources: (post.sources || []).length
  };
});

const dupes = (key) => {
  const seen = new Map();
  BLOG_POSTS.forEach((p, i) => seen.set(p[key], [...(seen.get(p[key]) || []), i + 1]));
  return [...seen].filter(([, v]) => v.length > 1);
};

const report = {
  total: rows.length,
  slugMismatches: rows.filter((r) => !r.exactArticle).map((r) => ({ n: r.n, slug: r.slug, articleSlug: r.articleSlug })),
  duplicateImages: [...imageUse].filter(([, v]) => v.length > 1),
  duplicateTitles: dupes('title'),
  duplicateMetaTitles: dupes('metaTitle'),
  duplicateMetaDescriptions: dupes('metaDescription'),
  rows
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.table(rows.map(({ n, slug, exactArticle, words, readTime, realMinutes, metaTitleLen, metaDescLen, personas, internalLinks, externalLinks }) =>
    ({ n, slug: slug.slice(0, 44), exact: exactArticle, words, readTime, realMinutes, mt: metaTitleLen, md: metaDescLen, personas: personas.join('|'), int: internalLinks, ext: externalLinks })));
  console.log('Slug mismatches:', report.slugMismatches);
  console.log('Duplicate images:', report.duplicateImages);
  console.log('Duplicate titles/metaTitles/metaDescriptions:', report.duplicateTitles, report.duplicateMetaTitles, report.duplicateMetaDescriptions);
}

