/**
 * IndexNow Protocol Submission Script for PetHorizon
 *
 * Submits all canonical URLs to the official IndexNow API (supporting Microsoft Bing,
 * Yandex, Naver, and participating search engines).
 *
 * Usage:
 *   node scripts/submit-indexnow.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { Buffer } from 'node:buffer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const HOST = 'pethorizon.jawumitech.com';
const INDEXNOW_KEY = 'c987a26f34e142b9a76d8b9e5c1204d8';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

function extractUrlsFromSitemap() {
  const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`Sitemap not found at: ${sitemapPath}. Run "npm run build" first.`);
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const locRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function submitToIndexNow(urls, endpoint = 'www.bing.com') {
  console.log(`📡 Submitting ${urls.length} URLs to IndexNow (${endpoint}) for ${HOST}...`);

  const payload = JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    urlList: urls
  });

  return new Promise((resolve) => {
    const options = {
      hostname: endpoint,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
        'User-Agent': 'PetHorizon-SeoEngine/1.0'
      }
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✅ IndexNow Submission Successful! (HTTP ${res.statusCode})`);
          console.log(`   ${urls.length} URLs successfully broadcast to Bing, Yandex, and IndexNow engines.`);
          resolve({ status: res.statusCode, body: responseBody });
        } else {
          console.warn(`⚠️ IndexNow responded with HTTP ${res.statusCode}: ${responseBody || 'No response body'}`);
          console.warn('   Note: IndexNow requires the key file to be live on production domain before accepting new keys.');
          resolve({ status: res.statusCode, body: responseBody });
        }
      });
    });

    req.on('error', (err) => {
      console.error('❌ Network error submitting to IndexNow:', err.message);
      reject(err);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  try {
    const urls = extractUrlsFromSitemap();
    const res = await submitToIndexNow(urls, 'www.bing.com');
    if (res.status !== 200 && res.status !== 202) {
      console.log('🔄 Retrying via api.indexnow.org endpoint...');
      await submitToIndexNow(urls, 'api.indexnow.org');
    }
  } catch (err) {
    console.error('❌ IndexNow script error:', err.message);
  }
}

main();
