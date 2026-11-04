import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// 1. Static file server for dist/
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  
  let filePath = path.join(distDir, reqPath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    if (fs.existsSync(path.join(distDir, reqPath + '.html'))) {
      filePath = path.join(distDir, reqPath + '.html');
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

const PORT = 3459;
await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve));

// 2. Launch Chrome Headless
const chromeProfile = path.join(os.tmpdir(), `pethorizon-chrome-${Date.now()}`);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chromeProc = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9225',
  '--disable-gpu',
  '--no-sandbox',
  '--disable-setuid-sandbox',
  `--user-data-dir=${chromeProfile}`
], { stdio: 'ignore' });

// Wait for Chrome port
for (let i = 0; i < 25; i++) {
  await new Promise((r) => setTimeout(r, 200));
  try {
    const res = await fetch('http://127.0.0.1:9225/json/version');
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

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    return res.result ? res.result.value : undefined;
  }

  close() {
    this.ws.close();
  }
}

async function createPage(url) {
  const newTargetRes = await fetch(`http://127.0.0.1:9225/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
  const target = await newTargetRes.json();
  const session = new CdpSession(target.webSocketDebuggerUrl);
  await session.send('Page.enable');
  await session.send('Runtime.enable');
  return { session, target };
}

const results = [];
function record(section, name, pass, detail = '') {
  results.push({ section, name, pass, detail });
  const icon = pass ? '✅' : '❌';
  console.log(`  ${icon} [${section}] ${name}${detail ? ` (${detail})` : ''}`);
}

console.log('\n🐾 [Pet Horizon Manual E2E Browser Testing via Real Chrome]');
console.log(`Target Local Environment: http://127.0.0.1:${PORT}`);

try {
  // ==========================================
  // TEST SUITE A: Pet Calorie Calculator
  // ==========================================
  console.log('\n--- SUITE A: Pet Calorie Calculator (Real Browser DOM Execution) ---');
  const caloriePage = await createPage(`http://127.0.0.1:${PORT}/tools/pet-calorie-calculator`);
  const cdp = caloriePage.session;

  await new Promise((r) => setTimeout(r, 1500));

  // A1: Verify page title
  const title = await cdp.eval('document.title');
  record('Calorie', 'Page loads with correct SEO Title in Chrome DOM', title.includes('Pet Calorie'), title);

  // Helper to extract all calculator_completed events
  const getCompletionEvents = async () => {
    return await cdp.eval(`
      (() => {
        const events = [];
        for (const item of (window.dataLayer || [])) {
          if (!item) continue;
          if (item[0] === 'event' && item[1] === 'calculator_completed') {
            events.push(item[2]);
          } else if (item['0'] === 'event' && item['1'] === 'calculator_completed') {
            events.push(item['2']);
          } else if (item.event === 'calculator_completed') {
            events.push(item);
          }
        }
        return events;
      })()
    `);
  };

  const initialEvents = await getCompletionEvents();
  record('Calorie', 'Initial page mount dispatches ZERO completion events', initialEvents.length === 0, `Count: ${initialEvents.length}`);

  // A2: Test Passive Sliders & Inputs
  await cdp.eval(`
    const weightSlider = document.querySelector('input[type="range"]');
    if (weightSlider) {
      weightSlider.value = 18;
      weightSlider.dispatchEvent(new Event('input', { bubbles: true }));
      weightSlider.dispatchEvent(new Event('change', { bubbles: true }));
    }
  `);

  // Wait 2500ms
  await new Promise((r) => setTimeout(r, 2500));

  const eventsAfterPassive = await getCompletionEvents();
  record(
    'Calorie',
    'Passive slider movements & value adjustments dispatch ZERO events after 2500ms debounce window',
    eventsAfterPassive.length === 0,
    `Events: ${eventsAfterPassive.length} (Old debounce bug eliminated)`
  );

  // A3: First Explicit Confirmation Click
  const clickSaveBtn = async () => {
    return await cdp.eval(`
      (() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => 
          b.textContent.includes('Feeding Routine') || b.textContent.includes('Routine Saved')
        );
        if (!btn) return 'NOT_FOUND';
        btn.click();
        return btn.textContent.trim();
      })()
    `);
  };

  await clickSaveBtn();
  await new Promise((r) => setTimeout(r, 400));

  const eventsAfterClick1 = await getCompletionEvents();
  const event1 = eventsAfterClick1[0];

  record(
    'Calorie',
    'Explicit Save/Sync click dispatches EXACTLY ONE calculator_completed event',
    eventsAfterClick1.length === 1,
    `Count: ${eventsAfterClick1.length}`
  );

  record(
    'Calorie',
    'Payload has completion_method: "user_confirmed"',
    event1?.completion_method === 'user_confirmed',
    `completion_method: "${event1?.completion_method}"`
  );

  record(
    'Calorie',
    'Payload has calculator_type: "pet_calorie" and pet_type: "dog"',
    event1?.calculator_type === 'pet_calorie' && event1?.pet_type === 'dog',
    `Type: ${event1?.calculator_type}, Pet: ${event1?.pet_type}`
  );

  // Check UI celebratory feedback
  const buttonTextDuringCelebration = await cdp.eval(`
    (() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent.includes('Routine Saved') || b.textContent.includes('Feeding Routine')
      );
      return btn ? btn.textContent.trim() : '';
    })()
  `);
  record(
    'Calorie',
    'Button displays celebratory confirmation state in DOM',
    buttonTextDuringCelebration.includes('Routine Saved & Sync Ready'),
    buttonTextDuringCelebration
  );

  // A4: Rapid Double Clicks (<4000ms cooldown)
  await clickSaveBtn();
  await clickSaveBtn();
  await clickSaveBtn();
  await new Promise((r) => setTimeout(r, 400));

  const eventsAfterRapid = await getCompletionEvents();
  record(
    'Calorie',
    'Rapid duplicate clicks (<4000ms cooldown) are strictly SUPPRESSED',
    eventsAfterRapid.length === 1,
    `Count: ${eventsAfterRapid.length} (No duplicates)`
  );

  // A5: 2.4-Second Celebration Reset
  await new Promise((r) => setTimeout(r, 2200)); // Total elapsed > 2400ms from celebration start
  const buttonTextAfterCelebration = await cdp.eval(`
    (() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent.includes('Routine Saved') || b.textContent.includes('Feeding Routine')
      );
      return btn ? btn.textContent.trim() : '';
    })()
  `);
  record(
    'Calorie',
    'Button reverts to standard confirmation state after 2.4s celebration timer',
    buttonTextAfterCelebration.includes('Save') && buttonTextAfterCelebration.includes('Feeding Routine'),
    buttonTextAfterCelebration
  );

  // A6: 4-Second Cooldown & Identical Input Repeat Completion
  await new Promise((r) => setTimeout(r, 2500)); // Total elapsed well past 4000ms (total ~5.5s)
  await clickSaveBtn();
  await new Promise((r) => setTimeout(r, 400));

  const eventsAfterCooldown = await getCompletionEvents();
  record(
    'Calorie',
    'Identical calculation after 4s cooldown dispatches EXACTLY ONE new conversion event',
    eventsAfterCooldown.length === 2,
    `Total Events: ${eventsAfterCooldown.length}`
  );

  // A7: Species Switching (Dog -> Cat)
  await cdp.eval(`
    const catTab = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.trim() === 'Cat Routine');
    if (catTab) catTab.click();
  `);
  await new Promise((r) => setTimeout(r, 500));

  await clickSaveBtn();
  await new Promise((r) => setTimeout(r, 400));

  const eventsAfterCat = await getCompletionEvents();
  record(
    'Calorie',
    'Switching to Cat Routine and confirming dispatches distinct pet_type: "cat" conversion',
    eventsAfterCat.length === 3 && eventsAfterCat[2]?.pet_type === 'cat',
    `Total Events: ${eventsAfterCat.length}, Pet: ${eventsAfterCat[2]?.pet_type}`
  );

  cdp.close();

  // ==========================================
  // TEST SUITE B: Pet Age Calculator
  // ==========================================
  console.log('\n--- SUITE B: Pet Age Calculator (Real Browser DOM Execution) ---');
  const agePage = await createPage(`http://127.0.0.1:${PORT}/tools/pet-age-calculator`);
  const ageCdp = agePage.session;

  await new Promise((r) => setTimeout(r, 1500));

  const ageTitle = await ageCdp.eval('document.title');
  record('Age', 'Page loads with correct SEO Title in Chrome DOM', ageTitle.includes('Pet Age'), ageTitle);

  const getAgeCompletionEvents = async () => {
    return await ageCdp.eval(`
      (() => {
        const events = [];
        for (const item of (window.dataLayer || [])) {
          if (!item) continue;
          if (item[0] === 'event' && item[1] === 'calculator_completed') {
            events.push(item[2]);
          } else if (item['0'] === 'event' && item['1'] === 'calculator_completed') {
            events.push(item['2']);
          } else if (item.event === 'calculator_completed') {
            events.push(item);
          }
        }
        return events;
      })()
    `);
  };

  // Passive selection
  await ageCdp.eval(`
    const buttons = Array.from(document.querySelectorAll('button'));
    const sizeBtn = buttons.find(b => b.textContent && b.textContent.includes('Large'));
    if (sizeBtn) sizeBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 2000));

  const agePassiveEvents = await getAgeCompletionEvents();
  record('Age', 'Passive option selection dispatches ZERO events', agePassiveEvents.length === 0, `Events: ${agePassiveEvents.length}`);

  // Explicit confirmation click
  const clickAgeSyncBtn = async () => {
    return await ageCdp.eval(`
      (() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => 
          b.textContent.includes('Milestones') || b.textContent.includes('Milestones Saved')
        );
        if (!btn) return 'NOT_FOUND';
        btn.click();
        return btn.textContent.trim();
      })()
    `);
  };

  await clickAgeSyncBtn();
  await new Promise((r) => setTimeout(r, 400));

  const ageEvents1 = await getAgeCompletionEvents();
  record('Age', 'Clicking Sync Milestones dispatches EXACTLY ONE event', ageEvents1.length === 1, `Count: ${ageEvents1.length}`);
  record('Age', 'Payload has calculator_type: "pet_age" and completion_method: "user_confirmed"',
    ageEvents1[0]?.calculator_type === 'pet_age' && ageEvents1[0]?.completion_method === 'user_confirmed',
    `Type: ${ageEvents1[0]?.calculator_type}, Method: ${ageEvents1[0]?.completion_method}`
  );

  // Rapid double click
  await clickAgeSyncBtn();
  await clickAgeSyncBtn();
  await new Promise((r) => setTimeout(r, 400));
  const ageRapidEvents = await getAgeCompletionEvents();
  record('Age', 'Rapid duplicate clicks are suppressed', ageRapidEvents.length === 1, `Count: ${ageRapidEvents.length}`);

  // Wait 4.5s for cooldown & celebration reset
  await new Promise((r) => setTimeout(r, 4500));
  await clickAgeSyncBtn();
  await new Promise((r) => setTimeout(r, 400));
  const ageRepeatEvents = await getAgeCompletionEvents();
  record('Age', 'Repeat confirmation after 4s cooldown dispatches ONE new event', ageRepeatEvents.length === 2, `Count: ${ageRepeatEvents.length}`);

  // Switch to Cat
  await ageCdp.eval(`
    const catBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Cat'));
    if (catBtn) catBtn.click();
  `);
  await new Promise((r) => setTimeout(r, 500));
  await clickAgeSyncBtn();
  await new Promise((r) => setTimeout(r, 400));
  const ageCatEvents = await getAgeCompletionEvents();
  record('Age', 'Switching to Cat and completing dispatches pet_type: "cat"', 
    ageCatEvents.length === 3 && ageCatEvents[2]?.pet_type === 'cat',
    `Total Events: ${ageCatEvents.length}, Pet: ${ageCatEvents[2]?.pet_type}`
  );

  ageCdp.close();

} finally {
  chromeProc.kill();
  server.close();
  try {
    fs.rmSync(chromeProfile, { recursive: true, force: true });
  } catch {}
}

const passed = results.filter(r => r.pass).length;
const total = results.length;
console.log(`\n======================================================`);
console.log(`🎯 Real Chrome E2E Results: ${passed}/${total} Passed (${Math.round((passed/total)*100)}%)`);
console.log(`======================================================\n`);

if (passed !== total) {
  process.exit(1);
}
