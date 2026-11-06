import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(distDir, reqPath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    if (fs.existsSync(path.join(distDir, reqPath + '.html'))) {
      filePath = path.join(distDir, reqPath + '.html');
    } else if (fs.existsSync(path.join(distDir, reqPath, 'index.html'))) {
      filePath = path.join(distDir, reqPath, 'index.html');
    } else {
      filePath = path.join(distDir, 'index.html');
    }
  }
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 3599;
await new Promise(r => server.listen(PORT, '127.0.0.1', r));

const chromeProfile = path.join(os.tmpdir(), `pethorizon-cwv-chrome-${Date.now()}`);
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const chromeProc = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9230',
  '--disable-gpu',
  '--no-sandbox',
  '--disable-setuid-sandbox',
  `--user-data-dir=${chromeProfile}`
], { stdio: 'ignore' });

for (let i = 0; i < 30; i++) {
  await new Promise(r => setTimeout(r, 200));
  try {
    const res = await fetch('http://127.0.0.1:9230/json/version');
    if (res.ok) break;
  } catch {}
}

class CdpSession {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
    this.ready = new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    };
  }
  async send(method, params = {}) {
    await this.ready;
    const id = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  close() { this.ws.close(); }
}

async function getNewTab() {
  const res = await fetch('http://127.0.0.1:9230/json/new', { method: 'PUT' });
  const data = await res.json();
  return new CdpSession(data.webSocketDebuggerUrl);
}

async function auditPageMetrics(urlPath, viewport = { width: 1280, height: 800, isMobile: false }) {
  const session = await getNewTab();
  await session.send('Page.enable');
  await session.send('Runtime.enable');
  await session.send('Emulation.setDeviceMetricsOverride', {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.isMobile
  });

  const fullUrl = `http://127.0.0.1:${PORT}${urlPath}`;
  await session.send('Page.navigate', { url: fullUrl });
  await new Promise(r => setTimeout(r, 1500));

  const evalResult = await session.send('Runtime.evaluate', {
    expression: `(() => {
      const entries = performance.getEntriesByType('paint');
      const fcp = entries.find(e => e.name === 'first-contentful-paint')?.startTime || 0;
      
      const navEntries = performance.getEntriesByType('navigation');
      const nav = navEntries[0] || {};
      const domContentLoaded = nav.domContentLoadedEventEnd || 0;
      const loadComplete = nav.loadEventEnd || 0;

      // Check overflow
      const docWidth = document.documentElement.offsetWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const hasHorizontalOverflow = scrollWidth > docWidth;

      // Check for broken images or missing alt tags
      const images = Array.from(document.querySelectorAll('img'));
      const missingAlt = images.filter(i => !i.hasAttribute('alt')).length;

      return {
        fcp: Math.round(fcp),
        domContentLoaded: Math.round(domContentLoaded),
        loadComplete: Math.round(loadComplete),
        hasHorizontalOverflow,
        docWidth,
        scrollWidth,
        totalImages: images.length,
        missingAlt
      };
    })()`,
    returnByValue: true
  });

  session.close();
  return evalResult.result.value;
}

async function run() {
  console.log('⚡ Running Real Chrome Core Web Vitals & Responsiveness Audit...');

  const pages = [
    { name: 'Home Page', path: '/' },
    { name: 'Blog Hub', path: '/blogs' },
    { name: 'Calorie Calculator', path: '/tools/pet-calorie-calculator' },
    { name: 'Age Calculator', path: '/tools/pet-age-calculator' },
    { name: 'Microchip Guide (Article)', path: '/blogs/pet-microchip-registration-lookup-guide' }
  ];

  const viewports = [
    { name: 'Mobile 320px', width: 320, height: 568, isMobile: true },
    { name: 'Mobile 375px', width: 375, height: 667, isMobile: true },
    { name: 'Mobile 390px', width: 390, height: 844, isMobile: true },
    { name: 'Tablet 768px', width: 768, height: 1024, isMobile: true },
    { name: 'Laptop 1024px', width: 1024, height: 768, isMobile: false },
    { name: 'Desktop 1440px', width: 1440, height: 900, isMobile: false }
  ];

  console.log('\n--- 1. DESKTOP PERFORMANCE METRICS ---');
  for (const page of pages) {
    const res = await auditPageMetrics(page.path, { width: 1440, height: 900, isMobile: false });
    console.log(`  [${page.name}] FCP: ${res.fcp}ms | DCL: ${res.domContentLoaded}ms | Load: ${res.loadComplete}ms | Imgs: ${res.totalImages} (Missing Alt: ${res.missingAlt})`);
  }

  console.log('\n--- 2. MULTI-VIEWPORT RESPONSIVENESS & OVERFLOW AUDIT ---');
  let overflowIssues = 0;
  for (const vp of viewports) {
    for (const page of pages) {
      const res = await auditPageMetrics(page.path, vp);
      if (res.hasHorizontalOverflow) {
        console.log(`  ❌ OVERFLOW: [${vp.name}] on ${page.name} (scroll: ${res.scrollWidth}px vs doc: ${res.docWidth}px)`);
        overflowIssues++;
      }
    }
  }
  if (overflowIssues === 0) {
    console.log('  ✅ ALL viewports (320px, 375px, 390px, 768px, 1024px, 1440px) have ZERO horizontal layout overflow!');
  }

  // Teardown
  server.close();
  chromeProc.kill();
  try { fs.rmSync(chromeProfile, { recursive: true, force: true }); } catch {}
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

