import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.resolve('public');
const backupDir = path.resolve('_legacy_assets_backup');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const unusedFiles = [
  'assets/smartgrow-concept-realistic-v2.png',
  'assets/avatar-zinedine-placeholder.png',
  'assets/stage/realsense-detection-project.png',
  'assets/stage/dental-clinic-project.png',
  'assets/stage/portfolio-avatar-scene.png',
  'assets/avatar-zinedine-v2.png',
  'assets/avatar-zinedine-v3.png',
  'assets/photo-zinedine.jpg',
  'assets/projects/smartgrow-prototype-back.jpg',
  'assets/projects/smartgrow-prototype-front.jpg',
  'assets/avatar-mohammed-v1.png',
  'assets/avatar-mohammed-v2.png',
  'assets/avatar-mohammed.jpeg',
  'Mon-CV.pdf',
];

let totalSaved = 0;

for (const relPath of unusedFiles) {
  const src = path.join(publicDir, relPath);
  if (fs.existsSync(src)) {
    const size = fs.statSync(src).size;
    totalSaved += size;
    const dest = path.join(backupDir, relPath);
    const destFolder = path.dirname(dest);
    if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });
    fs.renameSync(src, dest);
    console.log(`Archived: ${relPath} (${(size / 1024 / 1024).toFixed(2)} MB)`);
  }
}

console.log(`Total saved from public/ directory: ${(totalSaved / 1024 / 1024).toFixed(2)} MB!`);
