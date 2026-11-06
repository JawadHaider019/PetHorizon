import fs from 'fs';
import path from 'path';

const patterns = [
  { name: 'First Aid Guide', regex: /pet-first-aid[a-z0-9\-_]*/g },
  { name: 'Co-Parenting Guide', regex: /household-pet-coparenting[a-z0-9\-_]*/g },
  { name: 'Household Routines', regex: /(?:multi-dog-cat-household-routines|household-routines)[a-z0-9\-_]*/g },
  { name: 'Vaccination Guide', regex: /puppy-kitten-vaccination-schedule[a-z0-9\-_]*/g }
];

const results = {};
patterns.forEach(p => results[p.name] = new Set());

function scan(dir) {
  for (const entry of fs.readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.git' || entry === 'dist') continue;
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (/\.(ts|tsx|js|mjs|json|html|md|txt)$/.test(entry)) {
      const text = fs.readFileSync(full, 'utf8');
      patterns.forEach(p => {
        let match;
        while ((match = p.regex.exec(text)) !== null) {
          results[p.name].add(`${match[0]} (in ${full})`);
        }
      });
    }
  }
}

scan('.');

for (const [name, set] of Object.entries(results)) {
  console.log(`\n=================== ${name} ===================`);
  const uniqueSlugs = new Set();
  set.forEach(item => {
    const slug = item.split(' ')[0];
    uniqueSlugs.add(slug);
  });
  console.log('Unique forms found:', Array.from(uniqueSlugs));
  console.log('Detailed occurrences:');
  set.forEach(item => console.log('  ', item));
}

