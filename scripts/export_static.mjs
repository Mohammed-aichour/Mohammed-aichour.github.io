import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function exportStatic() {
  console.log('--- EXPORTING STATIC HTML FOR GITHUB PAGES ---');
  const serverPath = path.join(rootDir, 'dist', 'server', 'index.js');
  const serverModule = await import(`file://${serverPath.replace(/\\/g, '/')}`);

  const pagesToExport = [
    { url: 'http://localhost/', outPath: path.join(rootDir, 'index.html') },
    { url: 'http://localhost/stage-fablab', outPath: path.join(rootDir, 'stage-fablab', 'index.html') }
  ];

  for (const page of pagesToExport) {
    const req = new Request(page.url);
    const res = await serverModule.default.fetch(req, {}, { waitUntil: () => {} });
    if (!res.ok) {
      throw new Error(`Failed to render ${page.url}: status ${res.status}`);
    }
    let html = await res.text();

    // 1. Replace Next image optimizer URLs if any with direct static asset URLs
    html = html.replace(/src="\/_next\/image\?url=([^&"'\s]+)[^"'\s]*"/g, (match, p1) => {
      const decoded = decodeURIComponent(p1);
      return `src="${decoded}"`;
    });
    html = html.replace(/imageSrcSet="\/_next\/image\?url=([^&"'\s]+)[^"'\s]*"/g, (match, p1) => {
      const decoded = decodeURIComponent(p1);
      return `imageSrcSet="${decoded}"`;
    });
    html = html.replace(/srcset="\/_next\/image\?url=([^&"'\s]+)[^"'\s]*"/g, (match, p1) => {
      const decoded = decodeURIComponent(p1);
      return `srcset="${decoded}"`;
    });

    // 2. Fix local Windows paths in inline font styles
    html = html.replace(/url\([^)]*\/fonts\/([^/]+)\/([^)]+)\)/g, 'url(/_next/static/_vinext_fonts/$2)');
    html = html.replace(/url\(C:\/[^)]*\/([^)/]+\.woff2)\)/g, 'url(/_next/static/_vinext_fonts/$1)');

    fs.mkdirSync(path.dirname(page.outPath), { recursive: true });
    fs.writeFileSync(page.outPath, html, 'utf-8');
    console.log(`Saved ${page.outPath} (${(html.length / 1024).toFixed(1)} KB)`);
  }

  // 3. Copy dist/client/_next to ./_next
  const distNext = path.join(rootDir, 'dist', 'client', '_next');
  const targetNext = path.join(rootDir, '_next');
  if (fs.existsSync(distNext)) {
    fs.cpSync(distNext, targetNext, { recursive: true });
    console.log(`Copied ${distNext} -> ${targetNext}`);
  }

  // 4. Ensure public/assets -> assets in root
  const publicAssets = path.join(rootDir, 'public', 'assets');
  const targetAssets = path.join(rootDir, 'assets');
  if (fs.existsSync(publicAssets)) {
    fs.cpSync(publicAssets, targetAssets, { recursive: true });
    console.log(`Copied ${publicAssets} -> ${targetAssets}`);
  }

  // 5. Ensure public/documents -> documents in root
  const publicDocs = path.join(rootDir, 'public', 'documents');
  const targetDocs = path.join(rootDir, 'documents');
  if (fs.existsSync(publicDocs)) {
    fs.cpSync(publicDocs, targetDocs, { recursive: true });
    console.log(`Copied ${publicDocs} -> ${targetDocs}`);
  }

  // 6. Ensure favicon.svg in root
  const publicFavicon = path.join(rootDir, 'public', 'favicon.svg');
  const targetFavicon = path.join(rootDir, 'favicon.svg');
  if (fs.existsSync(publicFavicon)) {
    fs.copyFileSync(publicFavicon, targetFavicon);
    console.log(`Copied ${publicFavicon} -> ${targetFavicon}`);
  }

  // 7. Create .nojekyll in root
  const nojekyllPath = path.join(rootDir, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '', 'utf-8');
  console.log('Created .nojekyll');

  console.log('--- STATIC EXPORT COMPLETE ---');
}

exportStatic().catch(err => {
  console.error('Error during static export:', err);
  process.exit(1);
});
