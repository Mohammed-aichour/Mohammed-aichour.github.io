const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgCan2025 = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f141c"/>
      <stop offset="35%" stop-color="#701215"/>
      <stop offset="75%" stop-color="#0a3d24"/>
      <stop offset="100%" stop-color="#080b10"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#ffd700" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffe259"/>
      <stop offset="100%" stop-color="#ffa751"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bgGrad)"/>
  <circle cx="600" cy="300" r="450" fill="url(#glow)"/>

  <g stroke="rgba(255,255,255,0.06)" stroke-width="1">
    <line x1="0" y1="135" x2="1200" y2="135"/>
    <line x1="0" y1="270" x2="1200" y2="270"/>
    <line x1="0" y1="405" x2="1200" y2="405"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
    <line x1="240" y1="0" x2="240" y2="675"/>
    <line x1="480" y1="0" x2="480" y2="675"/>
    <line x1="720" y1="0" x2="720" y2="675"/>
    <line x1="960" y1="0" x2="960" y2="675"/>
  </g>

  <g transform="translate(600, 200)">
    <circle cx="0" cy="0" r="80" fill="#C1272D" stroke="url(#gold)" stroke-width="4"/>
    <circle cx="0" cy="0" r="58" fill="#006233"/>
    <path d="M0 -38 L12 -12 L40 -12 L17 5 L25 32 L0 16 L-25 32 L-17 5 L-40 -12 L-12 -12 Z" fill="url(#gold)"/>
    <circle cx="0" cy="2" r="13" fill="#C1272D"/>
  </g>

  <rect x="420" y="55" width="360" height="38" rx="19" fill="rgba(255,215,0,0.12)" stroke="url(#gold)" stroke-width="1.5"/>
  <text x="600" y="80" fill="#FFD700" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" letter-spacing="2" text-anchor="middle">COUPE D'AFRIQUE DES NATIONS 2025</text>

  <text x="600" y="340" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" letter-spacing="3" text-anchor="middle">CAN 2025 MOROCCO</text>
  <text x="600" y="390" fill="#FFD700" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" letter-spacing="1.5" text-anchor="middle">PLATEFORME OFFICIELLE &amp; SUPPORTERS HUB</text>

  <g transform="translate(140, 455)">
    <rect x="30" y="0" width="180" height="48" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
    <text x="120" y="30" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Billetterie Matchs</text>

    <rect x="240" y="0" width="180" height="48" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
    <text x="330" y="30" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Guide Visa</text>

    <rect x="450" y="0" width="180" height="48" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
    <text x="540" y="30" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" text-anchor="middle">52 Rencontres</text>

    <rect x="660" y="0" width="220" height="48" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
    <text x="770" y="30" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Hôtels &amp; Transport</text>
  </g>

  <text x="600" y="580" fill="rgba(255,255,255,0.65)" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" letter-spacing="1" text-anchor="middle">Déployé sur GitHub Pages · Mode Sombre / Clair · Architecture Responsive</text>
</svg>
`;

const svgWeather = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a192f"/>
      <stop offset="40%" stop-color="#0e2a47"/>
      <stop offset="80%" stop-color="#144272"/>
      <stop offset="100%" stop-color="#0a192f"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="50%" cy="35%" r="45%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#skyGrad)"/>
  <circle cx="600" cy="270" r="380" fill="url(#sunGlow)"/>

  <g stroke="rgba(255,255,255,0.05)" stroke-width="1">
    <line x1="0" y1="135" x2="1200" y2="135"/>
    <line x1="0" y1="270" x2="1200" y2="270"/>
    <line x1="0" y1="405" x2="1200" y2="405"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
    <line x1="240" y1="0" x2="240" y2="675"/>
    <line x1="480" y1="0" x2="480" y2="675"/>
    <line x1="720" y1="0" x2="720" y2="675"/>
    <line x1="960" y1="0" x2="960" y2="675"/>
  </g>

  <!-- Cloud / Sun Icon -->
  <g transform="translate(600, 195)">
    <circle cx="40" cy="-20" r="34" fill="#fbbf24" opacity="0.9"/>
    <!-- Cloud shape -->
    <path d="M-60 25 C-60 10 -45 -5 -25 -5 C-20 -25 5 -40 30 -35 C50 -30 65 -15 65 5 C80 5 95 18 95 32 C95 48 80 55 60 55 L-45 55 C-55 55 -60 40 -60 25 Z" fill="rgba(255,255,255,0.92)"/>
  </g>

  <rect x="410" y="55" width="380" height="38" rx="19" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="600" y="80" fill="#38bdf8" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" letter-spacing="2" text-anchor="middle">REAL-TIME WEATHER &amp; PHOTO GALLERY</text>

  <text x="600" y="340" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" letter-spacing="3" text-anchor="middle">WEATHER GALLERY</text>
  <text x="600" y="390" fill="#38bdf8" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" letter-spacing="1.5" text-anchor="middle">OPEN-METEO API · PIXABAY API · REST COUNTRIES</text>

  <g transform="translate(160, 455)">
    <rect x="30" y="0" width="180" height="48" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
    <text x="120" y="30" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Météo Temps Réel</text>

    <rect x="240" y="0" width="180" height="48" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
    <text x="330" y="30" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Galerie Photos HD</text>

    <rect x="450" y="0" width="180" height="48" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
    <text x="540" y="30" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" text-anchor="middle">Recherche Mondiale</text>

    <rect x="660" y="0" width="180" height="48" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
    <text x="750" y="30" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" text-anchor="middle">React &amp; Hooks</text>
  </g>

  <text x="600" y="580" fill="rgba(255,255,255,0.65)" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" letter-spacing="1" text-anchor="middle">Déployé sur GitHub Pages · Multi-API Integration · Composants Réactifs</text>
</svg>
`;

async function run() {
  await sharp(Buffer.from(svgCan2025))
    .png({ quality: 95 })
    .toFile(path.join(__dirname, '..', 'public/assets/projects/can-2025-cover.png'));
  console.log('Generated can-2025-cover.png');

  await sharp(Buffer.from(svgWeather))
    .png({ quality: 95 })
    .toFile(path.join(__dirname, '..', 'public/assets/projects/weather-gallery-cover.png'));
  console.log('Generated weather-gallery-cover.png');
}

run().catch(console.error);
