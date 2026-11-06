import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist! Run npm run build first.');
  process.exit(1);
}

// Recursively find all unique routes by reading their index.html
function getRouteFiles(dir, base = '') {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(base, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getRouteFiles(fullPath, relPath));
    } else if (entry.name === 'index.html') {
      const route = base === '' ? '/' : '/' + base.replace(/\\/g, '/');
      results.push({ fullPath, route });
    }
  }
  return results;
}

const routeFiles = getRouteFiles(distDir);
console.log(`Discovered ${routeFiles.length} canonical routes in dist/ (via index.html)`);

const routeData = [];
const allInternalLinks = [];
const incomingLinksMap = new Map();
const registeredRoutes = new Set(routeFiles.map(f => f.route));

registeredRoutes.forEach(r => incomingLinksMap.set(r, new Set()));

const issues = [];
const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();

for (const { fullPath, route } of routeFiles) {
  const content = fs.readFileSync(fullPath, 'utf8');

  // Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  if (!title) issues.push({ route, issue: 'Missing or empty <title>' });
  else {
    if (titles.has(title)) {
      issues.push({ route, issue: `Duplicate title with ${titles.get(title)}: "${title}"` });
    } else {
      titles.set(title, route);
    }
  }

  // Meta Description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                    content.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  const desc = descMatch ? descMatch[1].trim() : null;
  if (!desc && route !== '/404') issues.push({ route, issue: 'Missing meta description' });
  else if (desc) {
    if (descriptions.has(desc) && route !== '/404') {
      issues.push({ route, issue: `Duplicate description with ${descriptions.get(desc)}` });
    } else {
      descriptions.set(desc, route);
    }
  }

  // Canonical
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i) ||
                     content.match(/<link\s+href=["']([^"']*)["']\s+rel=["']canonical["']/i);
  const canon = canonMatch ? canonMatch[1].trim() : null;
  if (!canon && route !== '/404') issues.push({ route, issue: 'Missing canonical link' });
  else if (canon) {
    if (canonicals.has(canon) && route !== '/404') {
      issues.push({ route, issue: `Duplicate canonical with ${canonicals.get(canon)}: ${canon}` });
    } else {
      canonicals.set(canon, route);
    }
  }

  // Robots
  const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
  const robots = robotsMatch ? robotsMatch[1].trim() : null;
  if (robots && robots.includes('noindex') && route !== '/404') {
    issues.push({ route, issue: `Accidental noindex on public page: ${robots}` });
  }

  // OpenGraph
  const ogTitleMatch = content.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i);
  const ogDescMatch = content.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i);
  const ogImageMatch = content.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i);

  if (!ogTitleMatch && route !== '/404') issues.push({ route, issue: 'Missing og:title' });
  if (!ogDescMatch && route !== '/404') issues.push({ route, issue: 'Missing og:description' });
  if (!ogImageMatch && route !== '/404') issues.push({ route, issue: 'Missing og:image' });

  // H1 Tag
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : null;
  if (!h1Text && route !== '/404') issues.push({ route, issue: 'Missing or empty <h1>' });

  // JSON-LD Structured Data
  const jsonLdMatches = [...content.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  const parsedSchemas = [];
  jsonLdMatches.forEach((m, idx) => {
    try {
      const json = JSON.parse(m[1]);
      parsedSchemas.push(json);
    } catch (e) {
      issues.push({ route, issue: `Invalid JSON-LD syntax in schema #${idx + 1}: ${e.message}` });
    }
  });

  // Body content meaningful length
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyText = bodyMatch ? bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  if (bodyText.length < 200 && route !== '/404') {
    issues.push({ route, issue: `Body text suspiciously short (${bodyText.length} chars)` });
  }

  // Parse all <a href="..."> internal links
  const linkMatches = [...content.matchAll(/<a\s+[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  const pageInternalLinks = [];
  linkMatches.forEach(m => {
    const rawHref = m[1].trim();
    const anchorText = m[2].replace(/<[^>]+>/g, '').trim();
    if (rawHref.startsWith('http://') || rawHref.startsWith('https://')) {
      if (rawHref.startsWith('https://pethorizon.jawumitech.com')) {
        const pathOnly = rawHref.replace('https://pethorizon.jawumitech.com', '') || '/';
        pageInternalLinks.push({ href: pathOnly, anchorText, raw: rawHref });
      }
    } else if (rawHref.startsWith('/')) {
      pageInternalLinks.push({ href: rawHref, anchorText, raw: rawHref });
    }
  });

  pageInternalLinks.forEach(link => {
    const cleanRoute = link.href.split('#')[0].split('?')[0];
    if (cleanRoute && cleanRoute !== '') {
      allInternalLinks.push({ from: route, to: cleanRoute, anchorText: link.anchorText });
      if (incomingLinksMap.has(cleanRoute)) {
        incomingLinksMap.get(cleanRoute).add(route);
      } else {
        // Exclude static assets, files with extensions, or /rss.xml
        if (!cleanRoute.includes('.') && cleanRoute !== '/rss.xml') {
          issues.push({ route, issue: `Link to non-existent route: ${link.raw}` });
        }
      }
    }
  });

  routeData.push({
    route,
    title,
    descLength: desc ? desc.length : 0,
    h1: h1Text,
    schemas: parsedSchemas.map(s => s['@type'] || (s['@graph'] ? 'Graph' : 'Unknown')),
    internalLinksCount: pageInternalLinks.length,
    bodyLength: bodyText.length
  });
}

console.log('\n================ AUDIT SUMMARY ================');
console.log(`Total Routes Audited: ${routeData.length}`);
console.log(`Total Internal Links Discovered in Static HTML: ${allInternalLinks.length}`);
console.log(`Total Metadata / Link Issues: ${issues.length}`);

if (issues.length > 0) {
  console.log('\nIssues Found:');
  issues.forEach(i => console.log(`  [${i.route}] ${i.issue}`));
} else {
  console.log('✅ ZERO metadata, link, or schema issues found across all 48 routes!');
}

console.log('\n================ ORPHAN PAGES CHECK ================');
const orphanRoutes = [];
for (const [r, inSet] of incomingLinksMap.entries()) {
  if (r === '/' || r === '/404') continue;
  if (inSet.size === 0) {
    orphanRoutes.push(r);
  }
}
console.log(`Orphan Routes (0 incoming internal links): ${orphanRoutes.length}`);
if (orphanRoutes.length > 0) {
  orphanRoutes.forEach(r => console.log('  Orphan:', r));
} else {
  console.log('✅ ZERO orphan pages in prerendered HTML graph!');
}

console.log('\n================ CALCULATOR VERIFICATION ================');
const calorieIncoming = incomingLinksMap.get('/tools/pet-calorie-calculator');
const ageIncoming = incomingLinksMap.get('/tools/pet-age-calculator');
console.log(`/tools/pet-calorie-calculator incoming links: ${calorieIncoming ? calorieIncoming.size : 0} pages`);
console.log(`/tools/pet-age-calculator incoming links: ${ageIncoming ? ageIncoming.size : 0} pages`);

console.log('\n================ 39 BLOG ARTICLES AUDIT ================');
const blogArticles = routeData.filter(r => r.route.startsWith('/blogs/'));
console.log(`Total Blog Articles in dist/: ${blogArticles.length}`);
blogArticles.forEach(a => {
  const incoming = incomingLinksMap.get(a.route)?.size || 0;
  console.log(`  ${a.route} -> Inbound: ${incoming} | Outbound: ${a.internalLinksCount} | Words/Chars: ${a.bodyLength} | Schemas: ${a.schemas.join(', ')}`);
});
