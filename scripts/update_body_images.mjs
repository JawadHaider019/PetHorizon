import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.resolve(__dirname, '../src/data/blogArticles');

const fileReplacements = {
  'bestPetCareApps.ts': [
    { from: '1548767797-d8c844163c4c', to: '1576765608535-5f04d1e3f289' }
  ],
  'catFeedingEnrichment.ts': [
    { from: '1514888286974-6c03e2ca1dba', to: '1545249390-6bdfa286032f' }
  ],
  'catKidney.ts': [
    { from: '1514888286974-6c03e2ca1dba', to: '1571566882372-1598d88abd90' }
  ],
  'dogFeedingSchedule.ts': [
    { from: '1589924691995-400dc9ecc119', to: '1563460716037-460b3dd14abb' },
    { from: '1548767797-d8c844163c4c', to: '1583512603805-3cc6b41f3edb' }
  ],
  'dogSeparationAnxiety.ts': [
    { from: '1548767797-d8c844163c4c', to: '1587402092301-725e37c70fd8' }
  ],
  'householdCoParenting.ts': [
    { from: '1548767797-d8c844163c4c', to: '1558788353-f76d92427f16' },
    { from: '1583511655857-d19b40a7a54e', to: '1517423440428-a5a00ad493e8' },
    { from: '1516734212186-a967f81ad0d7', to: '1560807707-8cc77767d783' }
  ],
  'monthlyBudgetGuide.ts': [
    { from: '1576201836106-db1758fd1c97', to: '1588943211346-0908a1fb0b01' },
    { from: '1509299349698-dd22323b5963', to: '1518717758536-85ae29035b6d' },
    { from: '1535268647677-300dbf3d78d1', to: '1534447677768-be436bb09401' }
  ],
  'newPuppyChecklist.ts': [
    { from: '1548767797-d8c844163c4c', to: '1596492784531-6e6eb5ea9993' },
    { from: '1535268647677-300dbf3d78d1', to: '1548681528-6a5c45b66b42' }
  ],
  'petHealthRecords.ts': [
    { from: '1576201836106-db1758fd1c97', to: '1526336024174-e58f5cdd8e13' },
    { from: '1583511655857-d19b40a7a54e', to: '1529778873920-4da4926a72c2' }
  ],
  'petTrackersReview.ts': [
    { from: '1576201836106-db1758fd1c97', to: '1513245543132-31f507417b26' },
    { from: '1535268647677-300dbf3d78d1', to: '1592194996308-7b43878e84a6' },
    { from: '1506973035872-a4ec16b8e8d9', to: '1516139008210-96e45dccd83b' }
  ],
  'seniorDogCare.ts': [
    { from: '1535268647677-300dbf3d78d1', to: '1522069169874-c58ec4b76be5' }
  ],
  'vaccinationSchedule.ts': [
    { from: '1628009368231-7bb7cfcb0def', to: '1568572933382-74d440642117' },
    { from: '1576201836106-db1758fd1c97', to: '1535930749574-1399327ce78f' },
    { from: '1548767797-d8c844163c4c', to: '1541781774459-bb2af2f05b55' }
  ]
};

let totalReplacements = 0;

for (const [filename, rules] of Object.entries(fileReplacements)) {
  const filePath = path.join(dir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  for (const { from, to } of rules) {
    if (content.includes(from)) {
      content = content.replaceAll(from, to);
      totalReplacements++;
      console.log(`Replaced ${from} -> ${to} in ${filename}`);
    } else {
      console.warn(`Target ${from} not found in ${filename}`);
    }
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`\nSuccessfully applied ${totalReplacements} image replacements!`);
