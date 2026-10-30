/**
 * Static SEO Prerender, XML Sitemap, Robots.txt, RSS Feed, LLMs.txt & Crawler HTML Engine for PetHorizon
 *
 * Runs:
 *   --pre  : Generates public/sitemap.xml, public/robots.txt, public/rss.xml, public/llms.txt, public/llms-full.txt, IndexNow key
 *   --post : Reads dist/index.html after vite build and outputs crawler-ready, pre-rendered static HTML
 *            for /, /blogs, /changelog, /privacy-policy, /terms-of-service, /data-deletion, and all 34 /blogs/[slug]
 */

import fs from 'fs';
import path from 'path';
import process from 'node:process';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

const BASE_URL = 'https://pethorizon.jawumitech.com';
const INDEXNOW_KEY = 'c987a26f34e142b9a76d8b9e5c1204d8';

// 1. Load Data using Vite SSR module loader
async function loadAppData() {
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom'
  });

  const { BLOG_POSTS } = await vite.ssrLoadModule('./src/data/blogData.ts');
  const { getFullBlogArticle } = await vite.ssrLoadModule('./src/data/blogArticles/index.ts');

  await vite.close();
  return { BLOG_POSTS, getFullBlogArticle };
}

// 2. Generate XML Sitemap
function generateSitemap(posts) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  // Static core routes
  const staticRoutes = [
    { loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${BASE_URL}/blogs`, priority: '0.9', changefreq: 'daily' },
    { loc: `${BASE_URL}/tools/pet-calorie-calculator`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${BASE_URL}/changelog`, priority: '0.7', changefreq: 'weekly' },
    { loc: `${BASE_URL}/privacy-policy`, priority: '0.4', changefreq: 'monthly' },
    { loc: `${BASE_URL}/terms-of-service`, priority: '0.4', changefreq: 'monthly' },
    { loc: `${BASE_URL}/data-deletion`, priority: '0.4', changefreq: 'monthly' }
  ];

  const todayIso = new Date().toISOString().split('T')[0];

  staticRoutes.forEach((route) => {
    xml += `  <url>\n`;
    xml += `    <loc>${route.loc}</loc>\n`;
    xml += `    <lastmod>${todayIso}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Dynamic Blog routes (34 total)
  posts.forEach((post) => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/blogs/${post.slug}</loc>\n`;
    xml += `    <lastmod>${todayIso}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${post.featured ? '0.9' : '0.8'}</priority>\n`;
    if (post.coverImage) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${post.coverImage.replace(/&/g, '&amp;')}</image:loc>\n`;
      xml += `      <image:title>${escapeXml(post.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
}

// 3. Generate RSS 2.0 Feed
function generateRssFeed(posts) {
  const buildDate = new Date().toUTCString();
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Pet Horizon — Evidence-Based Pet Care, Health &amp; Routine Guides</title>
    <link>${BASE_URL}/blogs</link>
    <description>Comprehensive veterinary-verified guides for dog and cat owners worldwide: puppy feeding schedules, feline hydration, missed medication safety, and family routine coordination.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
`;

  posts.forEach((post) => {
    const postUrl = `${BASE_URL}/blogs/${post.slug}`;
    const pubDate = new Date(post.publishedAt || '2026-10-26').toUTCString();
    rss += `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <author>${escapeXml(post.author.name)}</author>
    </item>\n`;
  });

  rss += `  </channel>
</rss>`;
  return rss;
}

function escapeXml(unsafe) {
  return (unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function escapeHtml(unsafe) {
  return (unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 4. Generate robots.txt
function generateRobotsTxt() {
  return `# Pet Horizon - Official Robots.txt
# Technical SEO, AEO & AI Crawler Specification

# 1. Search Discovery Engines
User-agent: *
Allow: /
Disallow: /api/
Disallow: /scratch_preview.html

# 2. Dedicated Search & AI Discovery Crawlers
User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

# 3. Model Training & AI Crawlers (AEO / GEO Optimization)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

# Sitemaps & Feeds
Sitemap: ${BASE_URL}/sitemap.xml
`;
}

// 5. Generate llms.txt & llms-full.txt
function generateLlmsTxt(posts) {
  let md = `# Pet Horizon

> Smart Pet Care, Family Hub & Daily Routine Tracker for Dogs and Cats.

Pet Horizon (https://pethorizon.jawumitech.com) is a comprehensive pet care platform and Android application designed for modern multi-caregiver households. It unifies clinical health records, smart recurring medication alarms, resting energy requirement (RER) feeding schedules, and real-time family QR synchronization.

## Core Capabilities
- **Clinical Health Card**: Digital vaccination record keeping (core vs. non-core schedules for DHPP, Rabies, FVRCP) with one-tap veterinary export.
- **Medication Schedule Alerts**: Recurring dosage reminders with missed dose safety protocols and multi-caregiver adherence audit trails.
- **Feeding & Nutrition Tracker**: Daily gram portion calculations using the veterinary Resting Energy Requirement formula (70 * kg^0.75) to prevent pet obesity.
- **Family Hub QR Sync**: Instant household pairing across partners, roommates, and pet sitters with real-time status updates to eliminate double-feeding.
- **Pet Expense & Budget Manager**: Monthly expense ledger categorizing veterinary care, nutrition, medication, and grooming.

## Official App & Downloads
- Google Play Store: https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon
- Support Email: pethorizon2026@gmail.com
- Privacy Policy: ${BASE_URL}/privacy-policy
- Data Deletion: ${BASE_URL}/data-deletion
- RSS Feed: ${BASE_URL}/rss.xml

## Topic Clusters & Canonical Guides (${posts.length} Active Guides)
`;

  posts.forEach((post) => {
    md += `- [${post.title}](${BASE_URL}/blogs/${post.slug}): ${post.excerpt}\n`;
  });

  md += `\n## Extended Documentation\n`;
  md += `- [Full Clinical Text and Veterinary Protocols](${BASE_URL}/llms-full.txt)\n`;
  md += `- [Keyword Research Dataset (300+ Verified Queries)](${BASE_URL}/seo/KEYWORD_RESEARCH_300.csv)\n`;

  return md;
}

function generateLlmsFullTxt(posts, getFullBlogArticle) {
  let md = `# Pet Horizon — Complete Clinical & Care Knowledge Base\n\n`;

  posts.forEach((post) => {
    const full = getFullBlogArticle(post.slug);
    md += `## ${post.title}\n`;
    md += `**URL:** ${BASE_URL}/blogs/${post.slug}\n`;
    md += `**Category:** ${post.category} | **Target:** Worldwide English-speaking Dog & Cat Owners\n`;
    md += `**Summary:** ${post.excerpt}\n\n`;

    if (post.keyTakeaways && post.keyTakeaways.length > 0) {
      md += `### Key Takeaways\n`;
      post.keyTakeaways.forEach((k) => (md += `- ${k}\n`));
      md += `\n`;
    }

    if (full && full.sections) {
      full.sections.forEach((sec) => {
        md += `### ${sec.heading}\n`;
        if (sec.intro) md += `${sec.intro}\n\n`;
        if (sec.paragraphs) {
          sec.paragraphs.forEach((p) => (md += `${p}\n\n`));
        }
        if (sec.table) {
          md += `| ${sec.table.headers.join(' | ')} |\n`;
          md += `| ${sec.table.headers.map(() => '---').join(' | ')} |\n`;
          sec.table.rows.forEach((row) => {
            md += `| ${row.join(' | ')} |\n`;
          });
          md += `\n`;
        }
        if (sec.bulletPoints) {
          sec.bulletPoints.forEach((b) => (md += `- **${b.label}**: ${b.text}\n`));
          md += `\n`;
        }
        if (sec.warningBox) {
          md += `> **WARNING - ${sec.warningBox.title}**: ${sec.warningBox.text}\n\n`;
        }
        if (sec.routineTip) {
          md += `> **ROUTINE TIP - ${sec.routineTip.title}**: ${sec.routineTip.text}\n\n`;
        }
      });
    }

    md += `---\n\n`;
  });

  return md;
}

// 6. Pre-build execution
async function runPreBuild() {
  console.log('🐾 [SEO Pre-Build] Initializing PetHorizon SEO Artifact Generator...');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const { BLOG_POSTS, getFullBlogArticle } = await loadAppData();
  console.log(`Loaded ${BLOG_POSTS.length} pSEO blog posts.`);

  // 1. Sitemap
  const sitemapXml = generateSitemap(BLOG_POSTS);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log('✅ Generated public/sitemap.xml');

  // 2. Robots.txt
  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');
  console.log('✅ Generated public/robots.txt');

  // 3. RSS 2.0 Feed
  const rssXml = generateRssFeed(BLOG_POSTS);
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssXml, 'utf-8');
  console.log('✅ Generated public/rss.xml');

  // 4. llms.txt & llms-full.txt
  const llmsTxt = generateLlmsTxt(BLOG_POSTS);
  fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsTxt, 'utf-8');
  console.log('✅ Generated public/llms.txt');

  const llmsFullTxt = generateLlmsFullTxt(BLOG_POSTS, getFullBlogArticle);
  fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), llmsFullTxt, 'utf-8');
  console.log('✅ Generated public/llms-full.txt');

  // 5. IndexNow key file
  fs.writeFileSync(path.join(publicDir, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY, 'utf-8');
  console.log(`✅ Generated public/${INDEXNOW_KEY}.txt (IndexNow verification)`);

  console.log('🎉 [SEO Pre-Build] Completed Successfully!');
}

// 7. Post-build execution: Static HTML prerenderer
async function runPostBuild() {
  console.log('🐾 [SEO Post-Build] Prerendering Static HTML Pages into dist/...');

  const distIndexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(distIndexHtmlPath)) {
    console.error('❌ dist/index.html not found. Ensure "vite build" runs before --post.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(distIndexHtmlPath, 'utf-8');
  const { BLOG_POSTS, getFullBlogArticle } = await loadAppData();

  let prerenderCount = 0;

  // Helper to write static file
  function writePrerenderedFile(relUrl, html) {
    let targetPath;
    if (relUrl === '/' || relUrl === '') {
      targetPath = path.join(distDir, 'index.html');
    } else if (relUrl.endsWith('.html')) {
      targetPath = path.join(distDir, relUrl);
    } else {
      const folder = path.join(distDir, relUrl);
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }
      targetPath = path.join(folder, 'index.html');
    }
    fs.writeFileSync(targetPath, html, 'utf-8');
    prerenderCount++;
  }

  // Helper to replace head metadata
  function injectHead(template, { title, description, canonicalUrl, ogType, ogImage, jsonLd }) {
    let html = template;

    // Title
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
    html = html.replace(/<meta name="title" content="[^"]*"/i, `<meta name="title" content="${escapeHtml(title)}"`);
    html = html.replace(/<meta property="og:title" content="[^"]*"/i, `<meta property="og:title" content="${escapeHtml(title)}"`);
    html = html.replace(/<meta name="twitter:title" content="[^"]*"/i, `<meta name="twitter:title" content="${escapeHtml(title)}"`);

    // Description
    html = html.replace(/<meta name="description" content="[^"]*"/i, `<meta name="description" content="${escapeHtml(description)}"`);
    html = html.replace(/<meta property="og:description" content="[^"]*"/i, `<meta property="og:description" content="${escapeHtml(description)}"`);
    html = html.replace(/<meta name="twitter:description" content="[^"]*"/i, `<meta name="twitter:description" content="${escapeHtml(description)}"`);

    // Canonical
    if (html.includes('rel="canonical"')) {
      html = html.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${canonicalUrl}"`);
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
    }

    // RSS Feed link
    if (!html.includes('type="application/rss+xml"')) {
      html = html.replace('</head>', `  <link rel="alternate" type="application/rss+xml" title="Pet Horizon Blog RSS Feed" href="${BASE_URL}/rss.xml" />\n  </head>`);
    }

    // OG Url
    html = html.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${canonicalUrl}"`);
    html = html.replace(/<meta name="twitter:url" content="[^"]*"/i, `<meta name="twitter:url" content="${canonicalUrl}"`);

    // OG Type
    if (ogType) {
      html = html.replace(/<meta property="og:type" content="[^"]*"/i, `<meta property="og:type" content="${ogType}"`);
    }

    // OG Image
    if (ogImage) {
      html = html.replace(/<meta property="og:image" content="[^"]*"/i, `<meta property="og:image" content="${ogImage}"`);
      html = html.replace(/<meta name="twitter:image" content="[^"]*"/i, `<meta name="twitter:image" content="${ogImage}"`);
    }

    // Injected JSON-LD
    if (jsonLd) {
      const scriptTag = `\n  <script type="application/ld+json" id="seo-prerender-schema">\n${JSON.stringify(jsonLd, null, 2)}\n  </script>\n  `;
      html = html.replace('</head>', `${scriptTag}</head>`);
    }

    return html;
  }

  // 0. Homepage: dist/index.html is already built cleanly by Vite with full meta tags and empty #root.
  // We do NOT inject unstyled semantic HTML into #root to prevent raw text flashing on refresh.


  // 1. Prerender /blogs (Blog Hub)
  {
    const blogTitle = 'PetHorizon Blog — Evidence-Based Pet Care & Health Guides';
    const blogDesc = 'Comprehensive veterinary-verified guides for dog and cat owners worldwide: puppy feeding schedules, feline hydration, missed medication safety, and family routine coordination.';
    const blogUrl = `${BASE_URL}/blogs`;

    const blogCardsHtml = BLOG_POSTS.map((post) => `
      <article style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 24px; background: #ffffff;">
        <span style="font-size: 12px; color: #047857; font-weight: bold; text-transform: uppercase;">${escapeHtml(post.category)}</span>
        <h2 style="font-size: 20px; margin: 8px 0;"><a href="/blogs/${post.slug}" style="color: #111827; text-decoration: none;">${escapeHtml(post.title)}</a></h2>
        <p style="color: #4b5563; line-height: 1.5; font-size: 14px;">${escapeHtml(post.excerpt)}</p>
        <div style="font-size: 12px; color: #6b7280; margin-top: 12px;">By ${escapeHtml(post.author.name)} • ${escapeHtml(post.readTime)} • <a href="/blogs/${post.slug}" style="color: #047857; font-weight: 600;">Read Full Guide &rarr;</a></div>
      </article>
    `).join('\n');

    const semanticBody = `
      <header style="max-width: 960px; margin: 40px auto 20px; padding: 0 16px;">
        <nav style="font-size: 12px; color: #6b7280; margin-bottom: 16px;"><a href="/">Home</a> &gt; <span>Blogs</span></nav>
        <h1 style="font-size: 32px; font-weight: 800; color: #111827;">Pet Horizon Evidence-Based Care & Health Guides</h1>
        <p style="font-size: 16px; color: #4b5563; max-width: 720px; line-height: 1.6;">${blogDesc}</p>
      </header>
      <main style="max-width: 960px; margin: 0 auto; padding: 0 16px;">
        ${blogCardsHtml}
      </main>
      <footer style="max-width: 960px; margin: 60px auto 40px; padding: 20px 16px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">
        <p>&copy; 2026 Pet Horizon. All rights reserved. <a href="/">Home</a> • <a href="/privacy-policy">Privacy Policy</a> • <a href="/changelog">Changelog</a> • <a href="/rss.xml">RSS Feed</a></p>
      </footer>
    `;

    let html = injectHead(baseTemplate, {
      title: blogTitle,
      description: blogDesc,
      canonicalUrl: blogUrl,
      ogType: 'website',
      ogImage: `${BASE_URL}/applogo.png`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: blogTitle,
        url: blogUrl,
        description: blogDesc,
        publisher: {
          '@type': 'Organization',
          name: 'Pet Horizon',
          url: BASE_URL,
          logo: `${BASE_URL}/applogo.png`
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Blogs', item: blogUrl }
          ]
        }
      }
    });

    html = html.replace('<div id="root"></div>', `<div id="root">${semanticBody}</div>`);
    writePrerenderedFile('/blogs', html);
  }

  // 2. Prerender all 34 /blogs/[slug]
  for (const post of BLOG_POSTS) {
    const full = getFullBlogArticle(post.slug);
    const postTitle = post.metaTitle || `${post.title} | Pet Horizon`;
    const postDesc = post.metaDescription || post.excerpt;
    const postUrl = `${BASE_URL}/blogs/${post.slug}`;
    const coverImg = post.coverImage.startsWith('http') ? post.coverImage : `${BASE_URL}${post.coverImage}`;

    // Generate rich semantic HTML body for crawlers
    let articleHtml = `
      <header style="max-width: 840px; margin: 40px auto 20px; padding: 0 16px;">
        <nav style="font-size: 12px; color: #6b7280; margin-bottom: 16px;">
          <a href="/">Home</a> &gt; <a href="/blogs">Blogs</a> &gt; <span>${escapeHtml(post.category)}</span>
        </nav>
        <span style="display: inline-block; background: #ecfdf5; color: #047857; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase;">${escapeHtml(post.category)}</span>
        <h1 style="font-size: 32px; font-weight: 900; color: #111827; line-height: 1.25; margin: 16px 0;">${escapeHtml(post.title)}</h1>
        <div style="font-size: 13px; color: #6b7280; margin-bottom: 24px;">
          By <strong>${escapeHtml(post.author.name)}</strong> (${escapeHtml(post.author.role)}) • Published on ${escapeHtml(post.publishedAt)} • ${escapeHtml(post.readTime)}
        </div>
      </header>

      <main style="max-width: 840px; margin: 0 auto; padding: 0 16px; font-family: system-ui, sans-serif; line-height: 1.7; color: #374151;">
        <figure style="margin: 0 0 32px 0;">
          <img src="${coverImg}" alt="${escapeHtml(post.title)}" style="width: 100%; max-height: 440px; object-fit: cover; border-radius: 16px;" />
          <figcaption style="font-size: 12px; color: #6b7280; text-align: center; margin-top: 8px;">${escapeHtml(post.title)}</figcaption>
        </figure>

        <section style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 20px; margin-bottom: 32px;">
          <h2 style="font-size: 18px; font-weight: 800; color: #065f46; margin-top: 0;">Key Takeaways & Summary</h2>
          <ul style="margin: 12px 0 0 20px; padding: 0; color: #166534; font-size: 14px; line-height: 1.6;">
            ${(post.keyTakeaways || []).map((k) => `<li>${escapeHtml(k)}</li>`).join('')}
          </ul>
        </section>

        <p style="font-size: 18px; line-height: 1.7; color: #1f2937; margin-bottom: 32px; font-weight: 500;">${escapeHtml(full?.overviewSummary || post.excerpt)}</p>
    `;

    if (full && full.sections) {
      full.sections.forEach((sec) => {
        articleHtml += `
          <section id="${sec.id}" style="margin-bottom: 40px;">
            <h2 style="font-size: 24px; font-weight: 800; color: #111827; margin: 32px 0 16px;">${escapeHtml(sec.heading)}</h2>
            ${sec.intro ? `<p style="font-size: 16px; line-height: 1.7; color: #374151;">${escapeHtml(sec.intro)}</p>` : ''}
        `;

        if (sec.paragraphs) {
          sec.paragraphs.forEach((p) => {
            articleHtml += `<p style="font-size: 16px; line-height: 1.7; color: #374151;">${escapeHtml(p)}</p>`;
          });
        }

        if (sec.table) {
          articleHtml += `
            <div style="overflow-x: auto; margin: 24px 0; border: 1px solid #e5e7eb; border-radius: 12px;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
                <thead style="background: #f9fafb; font-weight: 700; color: #111827; border-bottom: 1px solid #e5e7eb;">
                  <tr>
                    ${sec.table.headers.map((h) => `<th style="padding: 12px 16px;">${escapeHtml(h)}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${sec.table.rows.map((row, rIdx) => `
                    <tr style="border-bottom: 1px solid #f3f4f6; background: ${rIdx % 2 === 1 ? '#f9fafb' : '#ffffff'};">
                      ${row.map((cell, cIdx) => `<td style="padding: 12px 16px; ${cIdx === 0 ? 'font-weight: 600; color: #111827;' : 'color: #4b5563;'}">${escapeHtml(cell)}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `;
        }

        if (sec.bulletPoints) {
          articleHtml += `
            <ul style="margin: 16px 0 24px 20px; padding: 0; line-height: 1.7;">
              ${sec.bulletPoints.map((b) => `<li style="margin-bottom: 10px;"><strong style="color: #111827;">${escapeHtml(b.label)}:</strong> ${escapeHtml(b.text)}</li>`).join('')}
            </ul>
          `;
        }

        if (sec.warningBox) {
          articleHtml += `
            <aside style="background: #fef2f2; border-left: 4px solid #ef4444; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
              <strong style="color: #991b1b; display: block; margin-bottom: 6px;">⚠️ ${escapeHtml(sec.warningBox.title)}</strong>
              <span style="color: #b91c1c; font-size: 14px; line-height: 1.6;">${escapeHtml(sec.warningBox.text)}</span>
            </aside>
          `;
        }

        if (sec.routineTip) {
          articleHtml += `
            <aside style="background: #f0fdf4; border-left: 4px solid #059669; border-radius: 8px; padding: 16px 20px; margin: 24px 0;">
              <strong style="color: #065f46; display: block; margin-bottom: 6px;">🐾 ${escapeHtml(sec.routineTip.title)}</strong>
              <p style="color: #047857; font-size: 14px; line-height: 1.6; margin: 0 0 10px 0;">${escapeHtml(sec.routineTip.text)}</p>
              <a href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon" style="display: inline-block; background: #047857; color: #ffffff; text-decoration: none; padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: 700;">${escapeHtml(sec.routineTip.actionLabel)}</a>
            </aside>
          `;
        }

        articleHtml += `</section>`;
      });
    }

    // App CTA box inside article
    articleHtml += `
        <div style="background: #111827; color: #ffffff; border-radius: 16px; padding: 32px 24px; margin: 48px 0; text-align: center;">
          <h3 style="font-size: 24px; font-weight: 800; margin-top: 0; color: #ffffff;">Streamline Your Pet Routine with Pet Horizon</h3>
          <p style="color: #9ca3af; font-size: 15px; max-width: 600px; margin: 12px auto 24px;">Organize medication reminders, veterinary vaccination records, and multi-user family sync in one free, privacy-first companion app.</p>
          <a href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon" style="display: inline-block; background: #10b981; color: #ffffff; font-weight: 800; padding: 14px 28px; border-radius: 9999px; text-decoration: none; font-size: 15px;">Download Pet Horizon Free on Google Play &rarr;</a>
        </div>
      </main>

      <footer style="max-width: 840px; margin: 60px auto 40px; padding: 20px 16px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">
        <p>&copy; 2026 Pet Horizon. All rights reserved. <a href="/">Home</a> • <a href="/blogs">All Guides</a> • <a href="/privacy-policy">Privacy Policy</a> • <a href="/rss.xml">RSS Feed</a></p>
      </footer>
    `;

    // Structured data
    const articleJsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${postUrl}#article`,
        headline: post.title,
        description: postDesc,
        image: [coverImg],
        datePublished: '2026-10-26T00:00:00Z',
        dateModified: new Date().toISOString(),
        author: {
          '@type': post.author.name.includes('Team') ? 'Organization' : 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
          url: BASE_URL
        },
        publisher: {
          '@type': 'Organization',
          name: 'Pet Horizon',
          url: BASE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/applogo.png`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postUrl
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${BASE_URL}/blogs` },
          { '@type': 'ListItem', position: 3, name: post.category, item: `${BASE_URL}/blogs` },
          { '@type': 'ListItem', position: 4, name: post.title, item: postUrl }
        ]
      }
    ];

    if (post.keyTakeaways && post.keyTakeaways.length > 0) {
      articleJsonLd.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.keyTakeaways.map((takeaway, idx) => {
          const colonIdx = takeaway.indexOf(':');
          const question = colonIdx > 5 && colonIdx < 80
            ? takeaway.substring(0, colonIdx).trim()
            : idx === 0
            ? `What is the key takeaway for ${post.seoKeyword || post.title}?`
            : idx === 1
            ? `How often should you follow this routine?`
            : `What is the recommended veterinary guideline for ${post.category}?`;
          return {
            '@type': 'Question',
            name: question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: takeaway
            }
          };
        })
      });
    }

    let postHtml = injectHead(baseTemplate, {
      title: postTitle,
      description: postDesc,
      canonicalUrl: postUrl,
      ogType: 'article',
      ogImage: coverImg,
      jsonLd: articleJsonLd
    });

    postHtml = postHtml.replace('<div id="root"></div>', `<div id="root">${articleHtml}</div>`);
    writePrerenderedFile(`/blogs/${post.slug}`, postHtml);
  }

  // 3. Prerender /changelog
  {
    const changelogTitle = 'Changelog & Version Release Notes | Pet Horizon';
    const changelogDesc = 'Track the latest features, improvements, expense manager enhancements, and release notes across every Pet Horizon update.';
    const changelogUrl = `${BASE_URL}/changelog`;

    let html = injectHead(baseTemplate, {
      title: changelogTitle,
      description: changelogDesc,
      canonicalUrl: changelogUrl,
      ogType: 'website',
      ogImage: `${BASE_URL}/applogo.png`
    });

    const bodyHtml = `
      <header style="max-width: 840px; margin: 40px auto 20px; padding: 0 16px;">
        <nav style="font-size: 12px; color: #6b7280; margin-bottom: 16px;"><a href="/">Home</a> &gt; <span>Changelog</span></nav>
        <h1 style="font-size: 32px; font-weight: 800; color: #111827;">Pet Horizon Product Changelog</h1>
        <p style="font-size: 16px; color: #4b5563;">Explore continuous release updates, routine sync improvements, and health card features.</p>
      </header>
    `;
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
    writePrerenderedFile('/changelog', html);
  }

  // 3.5 Prerender /tools/pet-calorie-calculator
  {
    const toolTitle = 'Pet Calorie & Daily Portion Calculator (Dogs & Cats) | Pet Horizon';
    const toolDesc = 'Free veterinary-standard pet calorie and daily food portion calculator. Calculate RER, MER, daily grams, and cup measurements for dogs and cats based on WSAVA guidelines.';
    const toolUrl = `${BASE_URL}/tools/pet-calorie-calculator`;

    let html = injectHead(baseTemplate, {
      title: toolTitle,
      description: toolDesc,
      canonicalUrl: toolUrl,
      ogType: 'website',
      ogImage: `${BASE_URL}/applogo.png`,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'PetHorizon Calorie & Portion Calculator',
          url: toolUrl,
          description: toolDesc,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: toolUrl },
            { '@type': 'ListItem', position: 3, name: 'Pet Calorie Calculator', item: toolUrl }
          ]
        }
      ]
    });

    const bodyHtml = `
      <header style="max-width: 840px; margin: 40px auto 20px; padding: 0 16px;">
        <nav style="font-size: 12px; color: #6b7280; margin-bottom: 16px;"><a href="/">Home</a> &gt; <span>Tools</span> &gt; <span>Pet Calorie Calculator</span></nav>
        <h1 style="font-size: 32px; font-weight: 800; color: #111827;">Pet Calorie & Daily Portion Calculator</h1>
        <p style="font-size: 16px; color: #4b5563; max-width: 720px; line-height: 1.6;">${toolDesc}</p>
      </header>
      <main style="max-width: 840px; margin: 0 auto; padding: 0 16px;">
        <section style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 24px; margin-bottom: 24px;">
          <h2 style="font-size: 20px; font-weight: bold; color: #047857;">Calculate RER & MER Veterinary Food Portions</h2>
          <p style="color: #4b5563; line-height: 1.6; font-size: 14px;">Use our interactive veterinary tool to calculate exact daily energy requirements (RER = 70 × Weight^0.75) and maintenance feeding portions for puppies, adult dogs, kittens, and senior cats.</p>
        </section>
      </main>
      <footer style="max-width: 840px; margin: 60px auto 40px; padding: 20px 16px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">
        <p>&copy; 2026 Pet Horizon. All rights reserved. <a href="/">Home</a> • <a href="/privacy-policy">Privacy Policy</a> • <a href="/changelog">Changelog</a></p>
      </footer>
    `;
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
    writePrerenderedFile('/tools/pet-calorie-calculator', html);
  }

  // 4. Prerender /privacy-policy
  {
    const privTitle = 'Official Privacy Policy | Pet Horizon';
    const privDesc = 'Read the official Pet Horizon privacy policy regarding encrypted pet records, zero data monetization, and local offline-first security.';
    const privUrl = `${BASE_URL}/privacy-policy`;

    let html = injectHead(baseTemplate, {
      title: privTitle,
      description: privDesc,
      canonicalUrl: privUrl,
      ogType: 'website',
      ogImage: `${BASE_URL}/applogo.png`
    });
    writePrerenderedFile('/privacy-policy', html);
  }

  // 5. Prerender /terms-of-service
  {
    const termsTitle = 'Terms of Service | Pet Horizon';
    const termsDesc = 'Read the official terms of service and license agreement for Pet Horizon mobile application and web portal.';
    const termsUrl = `${BASE_URL}/terms-of-service`;

    let html = injectHead(baseTemplate, {
      title: termsTitle,
      description: termsDesc,
      canonicalUrl: termsUrl,
      ogType: 'website',
      ogImage: `${BASE_URL}/applogo.png`
    });
    writePrerenderedFile('/terms-of-service', html);
  }

  // 6. Prerender /data-deletion
  {
    const delTitle = 'Data & Account Deletion Instructions | Pet Horizon';
    const delDesc = 'How to request complete data, account, and pet records deletion in compliance with Google Play Store policies and GDPR.';
    const delUrl = `${BASE_URL}/data-deletion`;

    let html = injectHead(baseTemplate, {
      title: delTitle,
      description: delDesc,
      canonicalUrl: delUrl,
      ogType: 'website',
      ogImage: `${BASE_URL}/applogo.png`
    });
    writePrerenderedFile('/data-deletion', html);
  }

  // 7. Prerender 404.html
  {
    let html = injectHead(baseTemplate, {
      title: '404 Page Not Found | Pet Horizon',
      description: 'Sniffing for clues, but nothing is here. The page you are looking for has wandered off.',
      canonicalUrl: `${BASE_URL}/404`,
      ogType: 'website',
      ogImage: `${BASE_URL}/applogo.png`
    });
    // Preload the lightweight 44KB 404 detective mascot so it renders instantaneously
    html = html.replace('</head>', `  <link rel="preload" href="/mascots/404-detective.webp" as="image" type="image/webp" fetchpriority="high" />\n  </head>`);
    
    // Write 404.html and /404/index.html so Vercel and direct 404 hits load our custom NotFoundPage component cleanly
    writePrerenderedFile('404.html', html);
    writePrerenderedFile('/404', html);
  }

  // 8. Copy public/rss.xml and public/seo to dist
  const publicRss = path.join(publicDir, 'rss.xml');
  if (fs.existsSync(publicRss)) {
    fs.copyFileSync(publicRss, path.join(distDir, 'rss.xml'));
  }
  const publicSeo = path.join(publicDir, 'seo');
  const distSeo = path.join(distDir, 'seo');
  if (fs.existsSync(publicSeo)) {
    if (!fs.existsSync(distSeo)) fs.mkdirSync(distSeo, { recursive: true });
    const seoFiles = fs.readdirSync(publicSeo);
    seoFiles.forEach((f) => {
      fs.copyFileSync(path.join(publicSeo, f), path.join(distSeo, f));
    });
  }

  console.log(`🎉 [SEO Post-Build] Successfully prerendered ${prerenderCount} static pages with semantic HTML & schema markup!`);
}

// 8. Entry Router
async function main() {
  const arg = process.argv[2];
  if (arg === '--post') {
    await runPostBuild();
  } else if (arg === '--pre') {
    await runPreBuild();
  } else {
    // Default: run pre-build
    await runPreBuild();
  }
}

main().catch((err) => {
  console.error('❌ Error during SEO prerender:', err);
  process.exit(1);
});
