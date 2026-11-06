import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  const rows = [];
  for (const line of lines) {
    let p = '', inQ = false, row = [];
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') { inQ = !inQ; }
      else if (c === ',' && !inQ) { row.push(p.trim()); p = ''; }
      else { p += c; }
    }
    row.push(p.trim());
    rows.push(row);
  }
  return rows;
}

const raw = fs.readFileSync(path.join(rootDir, 'KEYWORD_RESEARCH_300.csv'), 'utf8');
const rows = parseCSV(raw);
const header = rows[0];
const dataRows = rows.slice(1);

console.log('Total keyword rows:', dataRows.length);
const markets = {};
const intents = {};
const clusters = {};

dataRows.forEach(r => {
  const cluster = r[2];
  const market = r[3];
  const intent = r[4];
  clusters[cluster] = (clusters[cluster] || 0) + 1;
  markets[market] = (markets[market] || 0) + 1;
  intents[intent] = (intents[intent] || 0) + 1;
});

console.log('Clusters:', clusters);
console.log('Markets:', markets);
console.log('Intents:', intents);
