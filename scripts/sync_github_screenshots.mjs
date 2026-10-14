import fs from 'fs';
import path from 'path';
import os from 'os';
import sharp from 'sharp';
import { execSync } from 'child_process';

const reposBase = path.resolve('..', 'github_repos');
const portfolioProjectsDir = path.resolve('public', 'assets', 'projects');

async function processAll() {
  console.log('--- Processing all real GitHub screenshots ---');

  // 1. Can_2025
  const canSrc = path.join(os.tmpdir(), 'can_2025_screenshot.png');
  if (fs.existsSync(canSrc)) {
    const canRepo = path.join(reposBase, 'Can_2025');
    const canScreenshotsDir = path.join(canRepo, 'screenshots');
    if (!fs.existsSync(canScreenshotsDir)) fs.mkdirSync(canScreenshotsDir, { recursive: true });
    const canTargetPng = path.join(canScreenshotsDir, 'can_2025_preview.png');
    fs.copyFileSync(canSrc, canTargetPng);
    console.log('Copied to Can_2025/screenshots/can_2025_preview.png');

    // Convert to webp for portfolio
    await sharp(canSrc)
      .resize(1200, 675, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(path.join(portfolioProjectsDir, 'can-2025-cover.webp'));
    console.log('Generated can-2025-cover.webp');
  }

  // 2. Catalogue-Premium-Voitures-d-Exception
  const catSrc = path.join(os.tmpdir(), 'catalogue_premium_screenshot.png');
  if (fs.existsSync(catSrc)) {
    const catRepo = path.join(reposBase, 'Catalogue-Premium-Voitures-d-Exception');
    const catScreenshotsDir = path.join(catRepo, 'screenshots');
    if (!fs.existsSync(catScreenshotsDir)) fs.mkdirSync(catScreenshotsDir, { recursive: true });
    const catTargetPng = path.join(catScreenshotsDir, 'catalogue_premium_preview.png');
    fs.copyFileSync(catSrc, catTargetPng);
    console.log('Copied to Catalogue-Premium/screenshots/catalogue_premium_preview.png');

    await sharp(catSrc)
      .resize(1200, 675, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(path.join(portfolioProjectsDir, 'catalogue-premium-cover.webp'));
    console.log('Generated catalogue-premium-cover.webp');
  }

  // 3. MarocCulture
  const mcSrc = path.join(os.tmpdir(), 'maroc_culture_rendered.png');
  if (fs.existsSync(mcSrc)) {
    const mcRepo = path.join(reposBase, 'MarocCulture');
    const mcScreenshotsDir = path.join(mcRepo, 'screenshots');
    if (!fs.existsSync(mcScreenshotsDir)) fs.mkdirSync(mcScreenshotsDir, { recursive: true });
    const mcTargetPng = path.join(mcScreenshotsDir, 'maroc_culture_preview.png');
    fs.copyFileSync(mcSrc, mcTargetPng);
    console.log('Copied to MarocCulture/screenshots/maroc_culture_preview.png');

    await sharp(mcSrc)
      .resize(1200, 675, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(path.join(portfolioProjectsDir, 'maroc-culture-cover.webp'));
    console.log('Generated maroc-culture-cover.webp');
  }

  // 4. mini-social-network
  const snSrc = path.join(os.tmpdir(), 'mini_social_network_real.png');
  if (fs.existsSync(snSrc)) {
    const snRepo = path.join(reposBase, 'mini-social-network');
    const snScreenshotsDir = path.join(snRepo, 'screenshots');
    if (!fs.existsSync(snScreenshotsDir)) fs.mkdirSync(snScreenshotsDir, { recursive: true });
    const snTargetPng = path.join(snScreenshotsDir, 'mini_social_network_preview.png');
    fs.copyFileSync(snSrc, snTargetPng);
    console.log('Copied to mini-social-network/screenshots/mini_social_network_preview.png');

    await sharp(snSrc)
      .resize(1200, 675, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(path.join(portfolioProjectsDir, 'mini-social-network-cover.webp'));
    console.log('Generated mini-social-network-cover.webp');
  }

  // 5. studentHub
  const shSrc = path.join(os.tmpdir(), 'student_hub_real.png');
  if (fs.existsSync(shSrc)) {
    const shRepo = path.join(reposBase, 'studentHub');
    const shScreenshotsDir = path.join(shRepo, 'screenshots');
    if (!fs.existsSync(shScreenshotsDir)) fs.mkdirSync(shScreenshotsDir, { recursive: true });
    const shTargetPng = path.join(shScreenshotsDir, 'student_hub_preview.png');
    fs.copyFileSync(shSrc, shTargetPng);
    console.log('Copied to studentHub/screenshots/student_hub_preview.png');

    await sharp(shSrc)
      .resize(1200, 675, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(path.join(portfolioProjectsDir, 'student-hub-cover.webp'));
    console.log('Generated student-hub-cover.webp');
  }

  // 6. Saad-Jebbour (wallhaven-4lod2r.png)
  const sjSrc = path.join(reposBase, 'Saad-Jebbour', 'wallhaven-4lod2r.png');
  if (fs.existsSync(sjSrc)) {
    await sharp(sjSrc)
      .resize(1200, 675, { fit: 'cover', position: 'center' })
      .webp({ quality: 82 })
      .toFile(path.join(portfolioProjectsDir, 'station-meteo-cover.webp'));
    console.log('Generated station-meteo-cover.webp from Saad-Jebbour/wallhaven-4lod2r.png');
  }

  // 7. Mohammed-aichour (profile screenshot)
  const ghProfileSrc = path.join(os.tmpdir(), 'github_profile_real.png');
  if (fs.existsSync(ghProfileSrc)) {
    const ghRepo = path.join(reposBase, 'Mohammed-aichour');
    const ghScreenshotsDir = path.join(ghRepo, 'screenshots');
    if (!fs.existsSync(ghScreenshotsDir)) fs.mkdirSync(ghScreenshotsDir, { recursive: true });
    const ghTargetPng = path.join(ghScreenshotsDir, 'profile_preview.png');
    fs.copyFileSync(ghProfileSrc, ghTargetPng);
    console.log('Copied to Mohammed-aichour/screenshots/profile_preview.png');

    await sharp(ghProfileSrc)
      .resize(1200, 675, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(path.join(portfolioProjectsDir, 'github-profile-cover.webp'));
    console.log('Generated github-profile-cover.webp from real GitHub profile');
  }

  // 8. FAB-LAB (gma-lab-dashboard.webp from FAB-LAB/app_screenshots/screenshot_dashboard.png)
  const fabSrc = path.join(reposBase, 'FAB-LAB', 'app_screenshots', 'screenshot_dashboard.png');
  if (fs.existsSync(fabSrc)) {
    await sharp(fabSrc)
      .resize(1200, 675, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(path.join(portfolioProjectsDir, 'gma-lab-dashboard.webp'));
    console.log('Regenerated gma-lab-dashboard.webp from FAB-LAB/app_screenshots/screenshot_dashboard.png');
  }

  // 9. vision-parking-universiapolis (vision-parking-demo.webp from 05_RESULTATS_DEMO/dashboard_ip7_screenshot.png)
  const vpSrc = path.join(reposBase, 'vision-parking-universiapolis', '05_RESULTATS_DEMO', 'dashboard_ip7_screenshot.png');
  if (fs.existsSync(vpSrc)) {
    await sharp(vpSrc)
      .resize(1200, 675, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(path.join(portfolioProjectsDir, 'vision-parking-demo.webp'));
    console.log('Regenerated vision-parking-demo.webp from vision-parking-universiapolis dashboard screenshot');
  }

  console.log('--- All real screenshots processed successfully! ---');
}

processAll().catch(console.error);
