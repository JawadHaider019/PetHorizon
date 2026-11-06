import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const BASE_URL = 'https://pethorizon.jawumitech.com';

// 39 blog slugs from blogArticles registry
const BLOG_SLUGS = [
  'dog-feeding-schedule-by-age-puppy-to-adult',
  'puppy-kitten-vaccination-schedule-booster-guide-worldwide',
  'pet-health-records-medication-schedule-tracker',
  'household-pet-coparenting-feeding-routine-sync-worldwide',
  'new-puppy-checklist-first-year-budget-guide',
  'best-pet-gps-trackers-health-wearables-review-worldwide',
  'monthly-pet-care-cost-vet-expense-budget-worldwide',
  'puppy-kitten-vaccination-schedule-booster-guide-new-york',
  'household-pet-coparenting-feeding-routine-sync-london',
  'monthly-pet-care-cost-vet-expense-budget-toronto',
  'best-pet-gps-trackers-health-wearables-review-sydney',
  'feline-kidney-disease-dehydration-cornell',
  'emergency-vet-symptoms-red-flags-petmd',
  'toxic-foods-dogs-cats-poison-checklist',
  'puppy-potty-training-schedule-akc-guide',
  'flea-tick-heartworm-prevention-ahs-protocol',
  'pet-calorie-calculator-feeding-guide-apop',
  'cat-feeding-schedule-indoor-enrichment-guide',
  'best-pet-care-apps-medication-reminders-family-sync',
  'dog-separation-anxiety-training-routine-guide',
  'how-to-introduce-kitten-to-older-cat-guide',
  'dog-grooming-at-home-beginners-step-by-step-guide',
  'dog-dental-care-brushing-teeth-periodontal-guide',
  'pet-sitter-instructions-handover-checklist-template',
  'senior-dog-care-mobility-nutrition-routine-guide',
  'senior-cat-care-health-diet-comfort-guide',
  'dog-walking-schedule-by-age-breed-exercise-guide',
  'cat-litter-box-problems-causes-solutions-guide',
  'pet-travel-checklist-flying-car-trips-vet-records',
  'summer-pet-safety-heatstroke-prevention-hot-pavement-guide',
  'winter-pet-care-cold-weather-paw-safety-guide',
  'multiple-pet-management-multi-dog-cat-household-routines',
  'pet-first-aid-kit-checklist-emergency-preparedness-plan',
  'pet-insurance-vs-savings-fund-vet-cost-guide',
  'rabbit-feeding-schedule-hay-diet-gi-stasis-guide',
  'parrot-bird-daily-routine-chop-diet-sleep-guide',
  'rescue-dog-3-3-3-rule-decompression-routine-guide',
  'dog-cat-diabetes-insulin-feeding-schedule-guide',
  'pet-microchip-registration-lookup-guide'
];

const ROUTES_TO_AUDIT = [
  '/',
  '/blogs',
  '/tools/pet-calorie-calculator',
  '/tools/pet-age-calculator',
  '/pet-calorie-calculator',
  '/pet-age-calculator',
  '/changelog',
  '/privacy-policy',
  '/terms-of-service',
  '/data-deletion',
  '/404',
  '/robots.txt',
  '/sitemap.xml',
  '/rss.xml',
  '/llms.txt',
  '/llms-full.txt',
  ...BLOG_SLUGS.map(s => `/blogs/${s}`)
];

async function checkUrl(urlPath) {
  const fullUrl = `${BASE_URL}${urlPath}`;
  return new Promise((resolve) => {
    const req = https.get(fullUrl, { headers: { 'User-Agent': 'PetHorizonP3Auditor/1.0' } }, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        resolve({
          path: urlPath,
          statusCode: res.statusCode,
          headers: res.headers,
          bodyLength: body.length,
          body: body
        });
      });
    });
    req.on('error', (err) => {
      resolve({
        path: urlPath,
        statusCode: 0,
        error: err.message
      });
    });
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({ path: urlPath, statusCode: 0, error: 'TIMEOUT' });
    });
  });
}

async function runAudit() {
  console.log(`Starting Live Production HTTP Audit of ${BASE_URL}...`);
  console.log(`Auditing ${ROUTES_TO_AUDIT.length} total endpoints...\n`);

  const results = [];
  let successCount = 0;
  let redirectCount = 0;
  let failCount = 0;

  for (const p of ROUTES_TO_AUDIT) {
    const res = await checkUrl(p);
    results.push(res);
    if (res.statusCode === 200) {
      successCount++;
    } else if (res.statusCode >= 300 && res.statusCode < 400) {
      redirectCount++;
    } else {
      failCount++;
    }
  }

  console.log('--- SUMMARY STATS ---');
  console.log(`Total Tested: ${results.length}`);
  console.log(`HTTP 200: ${successCount}`);
  console.log(`Redirects: ${redirectCount}`);
  console.log(`Failures/Non-200: ${failCount}\n`);

  // Print non-200 or unexpected
  const non200 = results.filter(r => r.statusCode !== 200 && r.path !== '/404');
  if (non200.length > 0) {
    console.log('--- NON-200 RESPONSES ---');
    non200.forEach(r => console.log(`  ${r.path} -> Status: ${r.statusCode} | Error: ${r.error || 'N/A'}`));
  } else {
    console.log('✅ ALL public endpoints returned HTTP 200!');
  }

  // Check 404 response
  const notFoundRes = results.find(r => r.path === '/404');
  console.log(`\n/404 Status: ${notFoundRes ? notFoundRes.statusCode : 'NOT FOUND IN RESULTS'}`);

  // Check critical P2 microchip text in production
  const microchipRes = results.find(r => r.path === '/blogs/pet-microchip-registration-lookup-guide');
  if (microchipRes && microchipRes.body) {
    const has2026131 = microchipRes.body.includes('Commission Delegated Regulation (EU) 2026/131');
    const hasCfiaPersonal = microchipRes.body.includes('whether the animal is accompanied by its owner, and purpose');
    console.log('\n--- CRITICAL P2 LIVE CONTENT VERIFICATION ---');
    console.log(`petMicrochipGuide contains 'Commission Delegated Regulation (EU) 2026/131': ${has2026131}`);
    console.log(`petMicrochipGuide contains updated CFIA companion distinction: ${hasCfiaPersonal}`);
    if (has2026131 && hasCfiaPersonal) {
      console.log('✅ LIVE PRODUCTION HAS LATEST P2 EDITORIAL AND REGULATORY UPDATES!');
    } else {
      console.log('⚠️ LIVE PRODUCTION DOES NOT YET HAVE LATEST P2 REVISIONS!');
    }
  }

  // Check Sitemap
  const sitemapRes = results.find(r => r.path === '/sitemap.xml');
  if (sitemapRes && sitemapRes.body) {
    const hasXmlDeclaration = sitemapRes.body.includes('<?xml');
    const locMatches = [...sitemapRes.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    console.log(`\n--- SITEMAP.XML AUDIT ---`);
    console.log(`Valid XML Declaration: ${hasXmlDeclaration}`);
    console.log(`Total URLs in Live Sitemap: ${locMatches.length}`);
  }

  // Check Robots.txt
  const robotsRes = results.find(r => r.path === '/robots.txt');
  if (robotsRes && robotsRes.body) {
    console.log(`\n--- ROBOTS.TXT AUDIT ---`);
    console.log(`Length: ${robotsRes.body.length} bytes`);
    console.log(`Contains Sitemap directive: ${robotsRes.body.includes('Sitemap:')}`);
    console.log(`Content:\n${robotsRes.body.trim()}`);
  }

  // Check LLMs.txt and LLMs-full.txt
  const llmsRes = results.find(r => r.path === '/llms.txt');
  const llmsFullRes = results.find(r => r.path === '/llms-full.txt');
  console.log(`\n--- LLM READINESS ---`);
  console.log(`/llms.txt HTTP: ${llmsRes?.statusCode} (${llmsRes?.bodyLength} bytes)`);
  console.log(`/llms-full.txt HTTP: ${llmsFullRes?.statusCode} (${llmsFullRes?.bodyLength} bytes)`);

  // Check RSS
  const rssRes = results.find(r => r.path === '/rss.xml');
  console.log(`/rss.xml HTTP: ${rssRes?.statusCode} (${rssRes?.bodyLength} bytes)`);

  // Save report JSON
  fs.writeFileSync('scripts/live-audit-results.json', JSON.stringify(results.map(r => ({
    path: r.path,
    statusCode: r.statusCode,
    headers: r.headers ? {
      'content-type': r.headers['content-type'],
      'x-content-type-options': r.headers['x-content-type-options'],
      'x-frame-options': r.headers['x-frame-options'],
      'referrer-policy': r.headers['referrer-policy'],
      'content-security-policy': r.headers['content-security-policy'],
      'strict-transport-security': r.headers['strict-transport-security'],
      'cache-control': r.headers['cache-control']
    } : null,
    bodyLength: r.bodyLength
  })), null, 2));

  console.log('\nDetailed header inspection written to scripts/live-audit-results.json');
}

runAudit().catch(console.error);

