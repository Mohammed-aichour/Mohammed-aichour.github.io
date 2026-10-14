import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const reposBase = path.resolve('..', 'github_repos');

const reposToUpdate = [
  {
    name: 'Can_2025',
    imgRel: 'screenshots/can_2025_preview.png',
    title: 'Aperçu CAN 2025 Morocco'
  },
  {
    name: 'Catalogue-Premium-Voitures-d-Exception',
    imgRel: 'screenshots/catalogue_premium_preview.png',
    title: 'Aperçu Catalogue Premium'
  },
  {
    name: 'MarocCulture',
    imgRel: 'screenshots/maroc_culture_preview.png',
    title: 'Aperçu MarocCulture'
  },
  {
    name: 'mini-social-network',
    imgRel: 'screenshots/mini_social_network_preview.png',
    title: 'Aperçu Mini Social Network'
  },
  {
    name: 'studentHub',
    imgRel: 'screenshots/student_hub_preview.png',
    title: 'Aperçu StudentHub'
  },
  {
    name: 'react-weather-gallery',
    imgRel: 'screenshots/weather_gallery_preview.png',
    title: 'Aperçu React Weather Gallery'
  }
];

for (const repo of reposToUpdate) {
  const dir = path.join(reposBase, repo.name);
  if (!fs.existsSync(dir)) continue;

  console.log(`\n================ Processing ${repo.name} ================`);
  const readmePath = path.join(dir, 'README.md');
  if (fs.existsSync(readmePath)) {
    let content = fs.readFileSync(readmePath, 'utf8');
    if (!content.includes(repo.imgRel)) {
      const bannerBlock = `\n<p align="center">\n  <img src="${repo.imgRel}" alt="${repo.title}" width="100%">\n</p>\n`;
      // Insert after badges block
      const badgeIndex = content.lastIndexOf(')]');
      if (badgeIndex !== -1) {
        const nextLine = content.indexOf('\n', badgeIndex);
        content = content.slice(0, nextLine + 1) + bannerBlock + content.slice(nextLine + 1);
      } else {
        content = bannerBlock + content;
      }
      fs.writeFileSync(readmePath, content, 'utf8');
      console.log(`Updated README.md for ${repo.name}`);
    }
  }

  // Check git status
  try {
    execSync('git add -A', { cwd: dir });
    const status = execSync('git status --porcelain', { cwd: dir, encoding: 'utf8' }).trim();
    if (status) {
      console.log(`Committing in ${repo.name}...`);
      execSync('git commit -m "docs: add authentic project screenshot preview to repository"', { cwd: dir });
      console.log(`Pushing ${repo.name} to origin...`);
      execSync('git push origin HEAD', { cwd: dir });
      console.log(`Successfully pushed ${repo.name}!`);
    } else {
      console.log(`No changes to commit for ${repo.name}`);
    }
  } catch (err) {
    console.error(`Error syncing ${repo.name}:`, err.message);
  }
}
