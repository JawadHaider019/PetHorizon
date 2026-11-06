import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('.').filter(f => f.endsWith('.md'));
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('worldwide') || content.includes('emergency-preparedness') || content.includes('mismatch')) {
    console.log(`=== Matches in ${f} ===`);
    content.split('\n').forEach((line, idx) => {
      if (/mismatch|worldwide|emergency-preparedness|co-parenting|coparenting/i.test(line)) {
        console.log(`${idx + 1}: ${line.trim()}`);
      }
    });
  }
}

