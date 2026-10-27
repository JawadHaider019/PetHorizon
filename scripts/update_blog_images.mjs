import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDataPath = path.resolve(__dirname, '../src/data/blogData.ts');

const imageMap = {
  'post-dog-feeding': 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=900&auto=format&fit=crop&q=80',
  'post-vax-global': 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&auto=format&fit=crop&q=80',
  'post-health-records': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&auto=format&fit=crop&q=80',
  'post-coparent-global': 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=900&auto=format&fit=crop&q=80',
  'post-puppy-checklist': 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=900&auto=format&fit=crop&q=80',
  'post-trackers-global': 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=900&auto=format&fit=crop&q=80',
  'post-budget-global': 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&auto=format&fit=crop&q=80',
  'post-vax-nyc': 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&auto=format&fit=crop&q=80',
  'post-coparent-london': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&auto=format&fit=crop&q=80',
  'post-budget-toronto': 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?w=900&auto=format&fit=crop&q=80',
  'post-trackers-sydney': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900&auto=format&fit=crop&q=80',
  'post-cat-kidney': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&auto=format&fit=crop&q=80',
  'post-emergency-vet': 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=900&auto=format&fit=crop&q=80',
  'post-toxic-foods': 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=900&auto=format&fit=crop&q=80',
  'post-potty-training': 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=900&auto=format&fit=crop&q=80',
  'post-heartworm': 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&auto=format&fit=crop&q=80',
  'post-pet-calories': 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=900&auto=format&fit=crop&q=80',
  'post-cat-feeding-enrichment': 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=900&auto=format&fit=crop&q=80',
  'post-best-pet-apps': 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=900&auto=format&fit=crop&q=80',
  'post-dog-separation-anxiety': 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=900&auto=format&fit=crop&q=80',
  'post-introduce-kitten': 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=900&auto=format&fit=crop&q=80',
  'post-dog-grooming-home': 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900&auto=format&fit=crop&q=80',
  'post-dog-dental-care': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=900&auto=format&fit=crop&q=80',
  'post-pet-sitter-checklist': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&auto=format&fit=crop&q=80',
  'post-senior-dog-care': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=900&auto=format&fit=crop&q=80',
  'post-senior-cat-care': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=900&auto=format&fit=crop&q=80',
  'post-dog-walking-schedule': 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=900&auto=format&fit=crop&q=80',
  'post-cat-litter-box-problems': 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=900&auto=format&fit=crop&q=80',
  'post-pet-travel-checklist': 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=900&auto=format&fit=crop&q=80',
  'post-summer-pet-safety': 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=900&auto=format&fit=crop&q=80',
  'post-winter-pet-care': 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&auto=format&fit=crop&q=80',
  'post-multiple-pet-management': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900&auto=format&fit=crop&q=80',
  'post-pet-first-aid-kit': 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&auto=format&fit=crop&q=80',
  'post-pet-insurance-savings': 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=900&auto=format&fit=crop&q=80'
};

let content = fs.readFileSync(blogDataPath, 'utf8');
let replacedCount = 0;

for (const [id, newUrl] of Object.entries(imageMap)) {
  const blockRegex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?coverImage:\\s*')([^']+)(')`);
  if (blockRegex.test(content)) {
    content = content.replace(blockRegex, `$1${newUrl}$3`);
    replacedCount++;
  } else {
    console.warn(`Could not find id: ${id}`);
  }
}

fs.writeFileSync(blogDataPath, content, 'utf8');
console.log(`Successfully replaced ${replacedCount} blog post cover images in ${blogDataPath}!`);
