import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

async function optimizeImages() {
  console.log('Optimizing assets in:', publicDir);

  // 1. 3d-pets-transparent.png
  const mascotPng = path.join(publicDir, '3d-pets-transparent.png');
  const mascotWebp = path.join(publicDir, '3d-pets-transparent.webp');
  if (fs.existsSync(mascotPng)) {
    const origSize = fs.statSync(mascotPng).size;
    await sharp(mascotPng)
      .webp({ quality: 85, effort: 6 })
      .toFile(mascotWebp);
    const newSize = fs.statSync(mascotWebp).size;
    console.log(`Mascot: ${origSize} bytes -> ${newSize} bytes (${Math.round((1 - newSize / origSize) * 100)}% reduction)`);
  }

  // 2. cute-3d-pets.jpg
  const cutePetsJpg = path.join(publicDir, 'cute-3d-pets.jpg');
  const cutePetsWebp = path.join(publicDir, 'cute-3d-pets.webp');
  if (fs.existsSync(cutePetsJpg)) {
    const origSize = fs.statSync(cutePetsJpg).size;
    await sharp(cutePetsJpg)
      .webp({ quality: 85, effort: 6 })
      .toFile(cutePetsWebp);
    const newSize = fs.statSync(cutePetsWebp).size;
    console.log(`Cute pets: ${origSize} bytes -> ${newSize} bytes (${Math.round((1 - newSize / origSize) * 100)}% reduction)`);
  }

  // 3. Screenshots in public/screenshots
  const screenshotsDir = path.join(publicDir, 'screenshots');
  if (fs.existsSync(screenshotsDir)) {
    const files = fs.readdirSync(screenshotsDir).filter(f => f.endsWith('.png'));
    for (const file of files) {
      const srcPath = path.join(screenshotsDir, file);
      const destPath = path.join(screenshotsDir, file.replace(/\.png$/, '.webp'));
      const origSize = fs.statSync(srcPath).size;
      await sharp(srcPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(destPath);
      const newSize = fs.statSync(destPath).size;
      console.log(`Screenshot ${file}: ${origSize} bytes -> ${newSize} bytes (${Math.round((1 - newSize / origSize) * 100)}% reduction)`);
    }
  }

  console.log('Optimization complete!');
}

optimizeImages().catch(err => {
  console.error('Error optimizing assets:', err);
  process.exit(1);
});
