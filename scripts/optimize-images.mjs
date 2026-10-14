import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const assetsDir = path.join(publicDir, 'assets');

console.log('Optimizing images with sharp...');

const activeImages = [
  'assets/avatar-mohammed.png',
  'assets/photo-mohammed.jpeg',
  'assets/projects/vision-parking-demo.png',
  'assets/projects/vision-parking-preview.jpg',
  'assets/projects/catalogue-premium-cover.jpg',
  'assets/projects/gma-lab-dashboard.png',
  'assets/projects/gma-lab-machines.png',
  'assets/projects/can-2025-cover.png',
  'assets/projects/weather-gallery-cover.png',
  'assets/stage/fablab-universiapolis.jpg',
  'assets/stage/fablab-logo.jpg',
];

for (const relPath of activeImages) {
  const fullPath = path.join(publicDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn('File not found:', relPath);
    continue;
  }
  const originalSize = fs.statSync(fullPath).size;
  const ext = path.extname(fullPath);
  const webpPath = fullPath.replace(ext, '.webp');

  const image = sharp(fullPath);
  const metadata = await image.metadata();

  // If width > 1600, resize reasonably
  if (metadata.width && metadata.width > 1600) {
    image.resize({ width: 1600, withoutEnlargement: true });
  }

  await image.webp({ quality: 82, effort: 6 }).toFile(webpPath);
  const webpSize = fs.statSync(webpPath).size;
  const reduction = (((originalSize - webpSize) / originalSize) * 100).toFixed(1);
  console.log(`Converted ${relPath} -> .webp | ${(originalSize / 1024).toFixed(1)} KB -> ${(webpSize / 1024).toFixed(1)} KB (-${reduction}%)`);
}

console.log('Image optimization complete!');
