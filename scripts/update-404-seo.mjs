import fs from 'fs';

let content = fs.readFileSync('scripts/prerender-seo.js', 'utf8');

const old404Block = `  // 7. Prerender 404.html
  {
    let html = injectHead(baseTemplate, {
      title: '404 Page Not Found | Pet Horizon',
      description: 'Sniffing for clues, but nothing is here. Return to Pet Horizon home, veterinary calculators, or pet care guides.',
      canonicalUrl: \`\${BASE_URL}/404\`,
      ogType: 'website',
      ogImage: \`\${BASE_URL}/applogo.png\`
    });
    // Preload the lightweight 44KB 404 detective mascot so it renders instantaneously
    html = html.replace('</head>', \`  <link rel="preload" href="/mascots/404-detective.webp" as="image" type="image/webp" fetchpriority="high" />\\n  </head>\`);
    const notFoundBody = \`<main style="max-width: 840px; margin: 40px auto; padding: 0 16px;"><h1>404 Page Not Found</h1><p>The page you are looking for has wandered off. Return to <a href="/">Pet Horizon Home</a> or browse our <a href="/blogs">Pet Care Guides</a>.</p></main>\`;
    html = html.replace(/<div id="root">[\\s\\S]*?<\\/div>/i, \`<div id="root">\${notFoundBody}</div>\`);
    
    // Write 404.html and /404/index.html so Vercel and direct 404 hits load our custom NotFoundPage component cleanly
    writePrerenderedFile('404.html', html);
    writePrerenderedFile('/404', html);
  }`;

const new404Block = `  // 7. Prerender 404.html
  {
    let html = injectHead(baseTemplate, {
      title: '404 Page Not Found | Pet Horizon',
      description: 'Sniffing for clues, but nothing is here. Return to Pet Horizon home, veterinary calculators, or pet care guides.',
      canonicalUrl: \`\${BASE_URL}/404\`,
      ogType: 'website',
      ogImage: \`\${BASE_URL}/applogo.png\`
    });
    // Enforce noindex on 404 and remove self-canonical to avoid misleading search engines
    html = html.replace(/<meta name="robots" content="[^"]*"/i, '<meta name="robots" content="noindex, follow"');
    html = html.replace(/<link rel="canonical" href="[^"]*"\\s*\\/?>\\n?/i, '');
    html = html.replace(/<meta property="og:url" content="[^"]*"\\s*\\/?>\\n?/i, '');
    html = html.replace(/<meta name="twitter:url" content="[^"]*"\\s*\\/?>\\n?/i, '');

    // Preload the lightweight 44KB 404 detective mascot so it renders instantaneously
    html = html.replace('</head>', \`  <link rel="preload" href="/mascots/404-detective.webp" as="image" type="image/webp" fetchpriority="high" />\\n  </head>\`);
    const notFoundBody = \`
      <main style="max-width: 840px; margin: 40px auto; padding: 0 16px; font-family: system-ui, -apple-system, sans-serif; text-align: center; color: #374151;">
        <h1 style="font-size: 36px; font-weight: 800; color: #111827; margin-bottom: 16px;">404 — Page Not Found</h1>
        <p style="font-size: 18px; color: #4b5563; max-width: 560px; margin: 0 auto 24px;">The page you are looking for has wandered off. Explore our free veterinary calculators or browse comprehensive pet care guides.</p>
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px;">
          <a href="/" style="display: inline-block; background: #047857; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">Home</a>
          <a href="/tools/pet-calorie-calculator" style="display: inline-block; background: #f3f4f6; color: #111827; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">Calorie Calculator</a>
          <a href="/tools/pet-age-calculator" style="display: inline-block; background: #f3f4f6; color: #111827; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">Age Calculator</a>
          <a href="/blogs" style="display: inline-block; background: #f3f4f6; color: #111827; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">Pet Care Guides</a>
        </div>
      </main>
    \`;
    html = html.replace(/<div id="root">[\\s\\S]*?<\\/div>/i, \`<div id="root">\${notFoundBody}</div>\`);
    
    // Write 404.html and /404/index.html so Vercel and direct 404 hits load our custom NotFoundPage component cleanly
    writePrerenderedFile('404.html', html);
    writePrerenderedFile('/404', html);
  }`;

content = content.replace(old404Block, new404Block);
fs.writeFileSync('scripts/prerender-seo.js', content, 'utf8');
console.log('Updated 404 prerender block in scripts/prerender-seo.js');

