import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

for (const file of ['index.html', path.join('stage-fablab', 'index.html')]) {
  const html = fs.readFileSync(path.join(rootDir, file), 'utf-8');
  const links = [...html.matchAll(/(?:href|src)="(\/[^"#?]+)"/g)].map(m => m[1]);
  const uniqueLinks = [...new Set(links)];
  console.log(`Checking ${uniqueLinks.length} static resources in ${file}...`);
  let missing = 0;
  for (const link of uniqueLinks) {
    const localFile = path.join(rootDir, link.replace(/\//g, path.sep));
    if (!fs.existsSync(localFile)) {
      console.error(`MISSING in ${file}: ${link} -> ${localFile}`);
      missing++;
    }
  }
  if (missing === 0) {
    console.log(`SUCCESS: All referenced static assets in ${file} exist locally!`);
  } else {
    console.log(`WARNING: ${missing} assets missing in ${file}.`);
  }
}
