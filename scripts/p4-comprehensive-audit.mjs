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
const { getFullBlogArticle, ALL_FULL_ARTICLES } = await vite.ssrLoadModule('./src/data/blogArticles/index.ts');
await vite.close();

const BASE_URL = 'https://pethorizon.jawumitech.com';

// 1. Calculate word counts
const words = (s) => (s || '').split(/\s+/).filter(Boolean).length;
const countArticleWords = (full) =>
  !full ? 0 : words(full.overviewSummary) + full.sections.reduce((sum, s) => sum +
    words(s.heading) + words(s.intro) +
    (s.paragraphs || []).reduce((a, p) => a + words(p), 0) +
    (s.bulletPoints || []).reduce((a, b) => a + words(b.label) + words(b.text), 0) +
    (s.table ? s.table.rows.flat().reduce((a, c) => a + words(c), 0) : 0) +
    (s.stepByStep ? s.stepByStep.steps.reduce((a, st) => a + words(st.title) + words(st.description), 0) : 0) +
    words(s.warningBox?.text) + words(s.routineTip?.text), 0);

// 2. Extract outgoing links from full articles
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
const extractLinks = (full) => {
  if (!full) return [];
  const text = JSON.stringify(full);
  const links = [];
  let m;
  linkRegex.lastIndex = 0;
  while ((m = linkRegex.exec(text)) !== null) {
    links.push({ anchor: m[1], href: m[2] });
  }
  return links;
};

// 3. Map of incoming links
const incomingLinks = new Map();
BLOG_POSTS.forEach(p => incomingLinks.set(p.slug, []));
incomingLinks.set('pet-calorie-calculator', []);
incomingLinks.set('pet-age-calculator', []);

const articleData = BLOG_POSTS.map((post, idx) => {
  const full = getFullBlogArticle(post.slug);
  const outgoing = extractLinks(full);
  const wordCount = countArticleWords(full);

  outgoing.forEach(l => {
    let target = l.href;
    if (target.startsWith('/blogs/')) {
      const slug = target.replace('/blogs/', '').split('#')[0].split('?')[0];
      if (incomingLinks.has(slug)) {
        incomingLinks.get(slug).push({ fromSlug: post.slug, anchor: l.anchor });
      }
    } else if (target.startsWith('/tools/')) {
      const tool = target.replace('/tools/', '').split('#')[0].split('?')[0];
      if (incomingLinks.has(tool)) {
        incomingLinks.get(tool).push({ fromSlug: post.slug, anchor: l.anchor });
      }
    }
  });

  // Extract medical/reference sources
  const bodyStr = JSON.stringify(full || {});
  const sources = [];
  const sourceMatches = [
    'AAHA', 'WSAVA', 'AVMA', 'APOP', 'Cornell', 'PetMD', 'ASPCA', 'AKC', 'AHS',
    'NHS', 'DEFRA', 'RSPCA', 'BSAVA', 'BVA', 'CFIA', 'CVMA', 'AVA', 'VCA', 'FEDIAF',
    'ISO 11784', 'ISO 11785', 'AAFCO'
  ];
  sourceMatches.forEach(src => {
    if (bodyStr.includes(src)) sources.push(src);
  });

  return {
    index: idx + 1,
    slug: post.slug,
    title: post.title,
    h1: full?.h1 || post.title,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    category: post.category,
    targetLocation: post.targetLocation || 'Worldwide',
    seoKeyword: post.seoKeyword,
    wordCount,
    readTime: post.readTime,
    outgoingLinks: outgoing,
    sources,
    hasMedicalDisclaimer: bodyStr.includes('educational purposes only') || bodyStr.includes('consult your veterinarian') || bodyStr.includes('veterinary advice'),
    hasCalculatorLink: outgoing.some(l => l.href.includes('calculator')),
    hasPlayStoreCta: true // every article detail page has bottom App CTA
  };
});

// Attach incoming links
articleData.forEach(a => {
  a.incomingLinks = incomingLinks.get(a.slug) || [];
});

const report = {
  totalArticles: articleData.length,
  articles: articleData,
  calculatorIncomingLinks: {
    calorieCalculator: incomingLinks.get('pet-calorie-calculator') || [],
    ageCalculator: incomingLinks.get('pet-age-calculator') || []
  }
};

fs.writeFileSync(path.join(rootDir, 'scripts', 'p4-audit-data.json'), JSON.stringify(report, null, 2));
console.log('Successfully generated p4-audit-data.json');
console.log('Incoming to Pet Calorie Calculator:', report.calculatorIncomingLinks.calorieCalculator.length);
console.log('Incoming to Pet Age Calculator:', report.calculatorIncomingLinks.ageCalculator.length);

const weaklyLinked = articleData.filter(a => a.incomingLinks.length <= 1);
console.log('Articles with <= 1 incoming internal links:', weaklyLinked.length);
weaklyLinked.forEach(a => console.log(`- ${a.slug} (incoming: ${a.incomingLinks.length}, outgoing: ${a.outgoingLinks.length})`));
