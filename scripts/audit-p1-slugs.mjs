import fs from 'fs';
import path from 'path';

function searchDir(dir, pattern, label) {
  const matches = [];
  function recurse(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
      if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
      const fullPath = path.join(currentDir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        recurse(fullPath);
      } else if (/\.(ts|tsx|js|mjs|json|html|md|txt)$/.test(file)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, idx) => {
          if (pattern.test(line)) {
            matches.push({ file: fullPath, line: idx + 1, text: line.trim() });
          }
        });
      }
    }
  }
  recurse(dir);
  console.log(`=== Matches for ${label} (${matches.length}) ===`);
  matches.forEach(m => console.log(`${m.file}:${m.line} -> ${m.text}`));
}

searchDir('.', /emergency-preparedness-plan/, 'emergency-preparedness-plan');
searchDir('.', /household-pet-coparenting/, 'household-pet-coparenting');
searchDir('.', /puppy-kitten-vaccination-schedule/, 'puppy-kitten-vaccination-schedule');
searchDir('.', /pet-first-aid-kit/, 'pet-first-aid-kit');
