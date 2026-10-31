/**
 * Generates Google Search Central compliant favicons from public/applogo.png
 * Google requires square favicons in multiples of 48px (48x48, 96x96, 144x144, 192x192, 512x512)
 * plus a root /favicon.ico fallback for Googlebot-Image.
 */

import fs from 'fs';
import path from 'path';
import { Buffer } from 'node:buffer';
import process from 'node:process';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '..', 'public');
const srcLogo = path.join(publicDir, 'applogo.png');

export async function generateFavicons() {
  if (!fs.existsSync(srcLogo)) {
    console.warn('⚠️ public/applogo.png not found, skipping favicon generation.');
    return;
  }

  const targets = [
    { file: 'favicon-48x48.png', size: 48 },
    { file: 'favicon-96x96.png', size: 96 },
    { file: 'favicon-144x144.png', size: 144 },
    { file: 'favicon-192x192.png', size: 192 },
    { file: 'favicon-512x512.png', size: 512 },
    { file: 'apple-touch-icon.png', size: 180 }
  ];

  for (const t of targets) {
    const outPath = path.join(publicDir, t.file);
    await sharp(srcLogo)
      .resize(t.size, t.size, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toFile(outPath);
  }

  // Generate multi-resolution /favicon.ico (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    icoSizes.map((sz) =>
      sharp(srcLogo).resize(sz, sz, { fit: 'cover' }).png({ compressionLevel: 9 }).toBuffer()
    )
  );

  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * icoSizes.length;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(icoSizes.length, 4);

  const dirEntries = icoSizes.map((sz, i) => {
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(sz, 0);
    entry.writeUInt8(sz, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buf.length;
    return entry;
  });

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...pngBuffers]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // Also update /favicon.svg to embed the PH App Logo so cached SVG crawler requests resolve to the App Logo
  const b64 = (
    await sharp(srcLogo).resize(96, 96, { fit: 'cover' }).png({ compressionLevel: 9 }).toBuffer()
  ).toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">\n  <image width="96" height="96" href="data:image/png;base64,${b64}" />\n</svg>\n`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf-8');

  console.log('✅ Generated Google-compliant App Logo favicons (.ico, 48x48, 96x96, 144x144, 192x192, 512x512, apple-touch-icon, .svg)');
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  generateFavicons().catch((err) => {
    console.error('❌ Favicon generation failed:', err);
    process.exit(1);
  });
}
