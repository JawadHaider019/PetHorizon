import https from 'node:https';

const urls = [
  '/',
  '/blogs',
  '/blogs/pet-microchip-registration-lookup-guide',
  '/tools/pet-calorie-calculator',
  '/tools/pet-age-calculator',
  '/pet-calorie-calculator',
  '/pet-age-calculator',
  '/robots.txt',
  '/sitemap.xml',
  '/rss.xml',
  '/llms.txt',
  '/llms-full.txt',
  '/c987a26f34e142b9a76d8b9e5c1204d8.txt',
  '/BingSiteAuth.xml'
];

async function check(p) {
  return new Promise(resolve => {
    https.get('https://pethorizon.jawumitech.com' + p, r => {
      let b = '';
      r.on('data', c => b += c);
      r.on('end', () => {
        const titleMatch = b.match(/<title>([^<]+)<\/title>/);
        const scripts = [...b.matchAll(/src="([^"]+\.js)"/g)].map(m => m[1]);
        const css = [...b.matchAll(/href="([^"]+\.css)"/g)].map(m => m[1]);
        const canonical = b.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
        const h1 = b.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        resolve({
          path: p,
          statusCode: r.statusCode,
          title: titleMatch ? titleMatch[1] : null,
          h1: h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : null,
          canonical: canonical ? canonical[1] : null,
          scripts,
          css,
          len: b.length,
          preview: b.slice(0, 120).replace(/\s+/g, ' ')
        });
      });
    }).on('error', e => resolve({ path: p, error: e.message }));
  });
}

async function main() {
  const results = [];
  for (const u of urls) {
    const res = await check(u);
    results.push(res);
    console.log(JSON.stringify(res));
  }
}

main();
