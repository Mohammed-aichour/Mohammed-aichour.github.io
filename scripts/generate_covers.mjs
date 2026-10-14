import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public', 'assets', 'projects');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. MarocCulture Cover SVG
const marocCultureSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mc-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070c18"/>
      <stop offset="50%" stop-color="#0a1224"/>
      <stop offset="100%" stop-color="#060913"/>
    </linearGradient>
    <linearGradient id="mc-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#121d33" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0a1120" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <linearGradient id="cyan-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
    <linearGradient id="emerald-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
    <radialGradient id="glow-gold" cx="0.8" cy="0.2" r="0.6">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow-cyan" cx="0.2" cy="0.8" r="0.6">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="675" fill="url(#mc-bg)"/>
  <rect width="1200" height="675" fill="url(#glow-gold)"/>
  <rect width="1200" height="675" fill="url(#glow-cyan)"/>

  <!-- Subtle grid lines -->
  <g stroke="#38bdf8" stroke-opacity="0.05" stroke-width="1">
    <line x1="0" y1="135" x2="1200" y2="135"/>
    <line x1="0" y1="270" x2="1200" y2="270"/>
    <line x1="0" y1="405" x2="1200" y2="405"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
    <line x1="240" y1="0" x2="240" y2="675"/>
    <line x1="480" y1="0" x2="480" y2="675"/>
    <line x1="720" y1="0" x2="720" y2="675"/>
    <line x1="960" y1="0" x2="960" y2="675"/>
  </g>

  <!-- Window Frame -->
  <g transform="translate(60, 45)">
    <!-- Top App Bar -->
    <rect width="1080" height="585" rx="18" fill="url(#mc-card)" stroke="#233554" stroke-width="1.5"/>
    
    <!-- Window Header -->
    <path d="M 0 18 Q 0 0 18 0 L 1062 0 Q 1080 0 1080 18 L 1080 65 L 0 65 Z" fill="#0c1526" stroke="#233554" stroke-width="1.5"/>
    <circle cx="30" cy="32" r="6" fill="#ef4444"/>
    <circle cx="50" cy="32" r="6" fill="#f59e0b"/>
    <circle cx="70" cy="32" r="6" fill="#10b981"/>

    <!-- App Title -->
    <text x="110" y="38" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="19" fill="#f8fafc" letter-spacing="0.5">
      MAROC CULTURE
    </text>
    <text x="275" y="38" font-family="system-ui, sans-serif" font-weight="500" font-size="13" fill="#94a3b8">
      — Portail du Patrimoine &amp; Météo des Villes Historiques
    </text>

    <!-- Search Input in Header -->
    <rect x="680" y="16" width="370" height="34" rx="8" fill="#162238" stroke="#2a3f63" stroke-width="1"/>
    <text x="705" y="38" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">
      Rechercher Marrakech, Fès, Agadir, Chefchaouen...
    </text>

    <!-- Hero Banner within App -->
    <g transform="translate(30, 85)">
      <rect width="1020" height="135" rx="14" fill="#0e1b30" stroke="#1e3252" stroke-width="1"/>
      <!-- Decorative Moroccan Star Pattern -->
      <polygon points="940,30 955,60 990,60 962,80 972,110 940,90 908,110 918,80 890,60 925,60" fill="#f59e0b" fill-opacity="0.18" stroke="#f59e0b" stroke-opacity="0.35" stroke-width="1.5"/>
      <text x="35" y="42" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#f59e0b" letter-spacing="2">
        PATRIMOINE NATIONAL DU ROYAUME DU MAROC
      </text>
      <text x="35" y="78" font-family="system-ui, sans-serif" font-weight="800" font-size="28" fill="#f8fafc">
        Explorez la Culture, les Médinas &amp; la Météo en Direct
      </text>
      <text x="35" y="108" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">
        Intégration d'APIs publiques (Open-Meteo, Wikipedia REST API, REST Countries) avec React 19 et Bootstrap 5.
      </text>
    </g>

    <!-- 3 City / Showcase Cards -->
    <g transform="translate(30, 240)">
      <!-- Card 1: Marrakech -->
      <rect x="0" y="0" width="320" height="230" rx="12" fill="#0d182b" stroke="#1e3252" stroke-width="1.2"/>
      <rect x="0" y="0" width="320" height="6" rx="3" fill="url(#gold-grad)"/>
      <text x="22" y="38" font-family="system-ui, sans-serif" font-weight="700" font-size="18" fill="#f8fafc">Marrakech</text>
      <text x="22" y="58" font-family="system-ui, sans-serif" font-size="12" fill="#f59e0b" font-weight="600">La Ville Ocre · Marrakech-Safi</text>
      
      <!-- Weather Pill -->
      <rect x="22" y="78" width="130" height="32" rx="16" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-opacity="0.4" stroke-width="1"/>
      <text x="38" y="99" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#fbbf24">28°C · Ensoleillé</text>

      <text x="22" y="140" font-family="system-ui, sans-serif" font-size="12.5" fill="#94a3b8">
        Médina historique inscrite à l'UNESCO,
      </text>
      <text x="22" y="158" font-family="system-ui, sans-serif" font-size="12.5" fill="#94a3b8">
        Place Jemaa el-Fna et Palais Bahia.
      </text>
      
      <!-- Tech Badge -->
      <rect x="22" y="185" width="105" height="24" rx="6" fill="#1e293b"/>
      <text x="32" y="201" font-family="monospace" font-size="10.5" fill="#38bdf8">Wikipedia API</text>
      <rect x="135" y="185" width="95" height="24" rx="6" fill="#1e293b"/>
      <text x="145" y="201" font-family="monospace" font-size="10.5" fill="#10b981">Open-Meteo</text>

      <!-- Card 2: Fès -->
      <g transform="translate(350, 0)">
        <rect x="0" y="0" width="320" height="230" rx="12" fill="#0d182b" stroke="#1e3252" stroke-width="1.2"/>
        <rect x="0" y="0" width="320" height="6" rx="3" fill="url(#cyan-grad)"/>
        <text x="22" y="38" font-family="system-ui, sans-serif" font-weight="700" font-size="18" fill="#f8fafc">Fès</text>
        <text x="22" y="58" font-family="system-ui, sans-serif" font-size="12" fill="#38bdf8" font-weight="600">Capitale Spirituelle · Fès-Meknès</text>
        
        <rect x="22" y="78" width="130" height="32" rx="16" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1"/>
        <text x="38" y="99" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#7dd3fc">22°C · Ciel Clair</text>

        <text x="22" y="140" font-family="system-ui, sans-serif" font-size="12.5" fill="#94a3b8">
          Université Al Quaraouiyine (859),
        </text>
        <text x="22" y="158" font-family="system-ui, sans-serif" font-size="12.5" fill="#94a3b8">
          Médina de Fès el-Bali et tanneries Chouara.
        </text>

        <rect x="22" y="185" width="105" height="24" rx="6" fill="#1e293b"/>
        <text x="32" y="201" font-family="monospace" font-size="10.5" fill="#38bdf8">Wikipedia API</text>
        <rect x="135" y="185" width="95" height="24" rx="6" fill="#1e293b"/>
        <text x="145" y="201" font-family="monospace" font-size="10.5" fill="#10b981">Open-Meteo</text>
      </g>

      <!-- Card 3: Chefchaouen -->
      <g transform="translate(700, 0)">
        <rect x="0" y="0" width="320" height="230" rx="12" fill="#0d182b" stroke="#1e3252" stroke-width="1.2"/>
        <rect x="0" y="0" width="320" height="6" rx="3" fill="url(#emerald-grad)"/>
        <text x="22" y="38" font-family="system-ui, sans-serif" font-weight="700" font-size="18" fill="#f8fafc">Chefchaouen</text>
        <text x="22" y="58" font-family="system-ui, sans-serif" font-size="12" fill="#34d399" font-weight="600">La Perle Bleue · Tanger-Tétouan</text>
        
        <rect x="22" y="78" width="130" height="32" rx="16" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-opacity="0.4" stroke-width="1"/>
        <text x="38" y="99" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#6ee7b7">20°C · Agréable</text>

        <text x="22" y="140" font-family="system-ui, sans-serif" font-size="12.5" fill="#94a3b8">
          Maisons bleues légendaires du Rif,
        </text>
        <text x="22" y="158" font-family="system-ui, sans-serif" font-size="12.5" fill="#94a3b8">
          Place Outa el-Hammam et artisanat berbère.
        </text>

        <rect x="22" y="185" width="105" height="24" rx="6" fill="#1e293b"/>
        <text x="32" y="201" font-family="monospace" font-size="10.5" fill="#38bdf8">Wikipedia API</text>
        <rect x="135" y="185" width="95" height="24" rx="6" fill="#1e293b"/>
        <text x="145" y="201" font-family="monospace" font-size="10.5" fill="#10b981">Open-Meteo</text>
      </g>
    </g>

    <!-- Bottom Footer Bar -->
    <g transform="translate(30, 495)">
      <rect width="1020" height="65" rx="10" fill="#0a1220" stroke="#1e2d45" stroke-width="1"/>
      <circle cx="28" cy="32" r="7" fill="#10b981"/>
      <text x="48" y="37" font-family="system-ui, sans-serif" font-weight="600" font-size="13" fill="#f8fafc">
        Services connectés : Open-Meteo v1 (Live Forecast) · Wikipedia REST API (Données Encyclopédiques) · REST Countries
      </text>
      <text x="890" y="37" font-family="monospace" font-weight="600" font-size="12" fill="#38bdf8">
        React 19 + Jest
      </text>
    </g>
  </g>
</svg>`;

// 2. Mini Social Network Cover SVG
const miniSocialNetworkSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sn-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080e1a"/>
      <stop offset="50%" stop-color="#0d182b"/>
      <stop offset="100%" stop-color="#070a13"/>
    </linearGradient>
    <linearGradient id="sn-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#111c2e" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0a1220" stop-opacity="0.98"/>
    </linearGradient>
    <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
    <radialGradient id="glow-purple" cx="0.8" cy="0.2" r="0.6">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow-blue" cx="0.2" cy="0.8" r="0.6">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="675" fill="url(#sn-bg)"/>
  <rect width="1200" height="675" fill="url(#glow-purple)"/>
  <rect width="1200" height="675" fill="url(#glow-blue)"/>

  <!-- Window Frame -->
  <g transform="translate(60, 45)">
    <rect width="1080" height="585" rx="18" fill="url(#sn-card)" stroke="#233554" stroke-width="1.5"/>
    
    <!-- Window Header -->
    <path d="M 0 18 Q 0 0 18 0 L 1062 0 Q 1080 0 1080 18 L 1080 65 L 0 65 Z" fill="#0b1322" stroke="#233554" stroke-width="1.5"/>
    <circle cx="30" cy="32" r="6" fill="#ef4444"/>
    <circle cx="50" cy="32" r="6" fill="#f59e0b"/>
    <circle cx="70" cy="32" r="6" fill="#10b981"/>

    <!-- App Title -->
    <text x="110" y="38" font-family="system-ui, sans-serif" font-weight="800" font-size="19" fill="#f8fafc">
      MINI SOCIAL NETWORK
    </text>
    <text x="340" y="38" font-family="system-ui, sans-serif" font-weight="500" font-size="13" fill="#94a3b8">
      — Architecture Full-Stack MVC : React + PHP 8.2 (PDO) + MySQL 8.0
    </text>

    <!-- Status pill -->
    <rect x="910" y="18" width="140" height="30" rx="15" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-opacity="0.4" stroke-width="1"/>
    <circle cx="925" cy="33" r="4" fill="#34d399"/>
    <text x="937" y="38" font-family="system-ui, sans-serif" font-weight="600" font-size="12" fill="#34d399">API Active (200 OK)</text>

    <!-- Main Content Grid: Left Social Feed (580px), Right Backend Architecture (440px) -->
    
    <!-- LEFT: Social Feed -->
    <g transform="translate(30, 85)">
      <!-- Post Composer -->
      <rect width="550" height="110" rx="12" fill="#0d1728" stroke="#1e3252" stroke-width="1"/>
      <circle cx="35" cy="38" r="16" fill="#0284c7"/>
      <text x="35" y="44" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#ffffff" text-anchor="middle">MA</text>
      
      <rect x="68" y="22" width="460" height="34" rx="8" fill="#16233b" stroke="#2a3f63" stroke-width="1"/>
      <text x="82" y="44" font-family="system-ui, sans-serif" font-size="13" fill="#64748b">
        Publier une mise à jour technique...
      </text>

      <g transform="translate(68, 70)">
        <rect width="75" height="26" rx="6" fill="#1e293b"/>
        <text x="14" y="17" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8">#FullStack</text>
        <rect x="85" y="0" width="60" height="26" rx="6" fill="#1e293b"/>
        <text x="96" y="17" font-family="system-ui, sans-serif" font-size="11" fill="#a855f7">#PHP8</text>
        <rect x="155" y="0" width="65" height="26" rx="6" fill="#1e293b"/>
        <text x="166" y="17" font-family="system-ui, sans-serif" font-size="11" fill="#10b981">#MySQL</text>

        <rect x="380" y="0" width="80" height="26" rx="6" fill="#0284c7"/>
        <text x="403" y="18" font-family="system-ui, sans-serif" font-weight="600" font-size="12" fill="#ffffff">Publier</text>
      </g>

      <!-- Post Card 1 -->
      <g transform="translate(0, 125)">
        <rect width="550" height="235" rx="12" fill="#0d1728" stroke="#1e3252" stroke-width="1"/>
        <!-- Header -->
        <circle cx="35" cy="36" r="18" fill="url(#blue-grad)"/>
        <text x="35" y="42" font-family="system-ui, sans-serif" font-weight="800" font-size="14" fill="#ffffff" text-anchor="middle">MA</text>
        
        <text x="68" y="32" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#f8fafc">Mohammed AICHOUR</text>
        <text x="68" y="48" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8" font-weight="500">Étudiant en Génie Informatique &amp; Full-Stack · Il y a 10m</text>

        <!-- Body -->
        <text x="25" y="85" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">
          Déploiement réussi de l'architecture MVC native en PHP 8.2 sans framework :
        </text>
        <text x="25" y="107" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">
          ✓ Modèle relationnel 3NF normalisé (users, posts, comments, likes, follows)
        </text>
        <text x="25" y="129" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">
          ✓ Sécurité renforcée avec Singleton PDO, requêtes préparées &amp; JWT Bearer
        </text>
        <text x="25" y="151" font-family="system-ui, sans-serif" font-size="13" fill="#cbd5e1">
          ✓ Client frontend réactif sous React 18 avec validation dynamique
        </text>

        <!-- Footer Stats & Actions -->
        <line x1="20" y1="180" x2="530" y2="180" stroke="#1e293b" stroke-width="1"/>
        <text x="25" y="206" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">
          ❤️ 24 j'aime
        </text>
        <text x="120" y="206" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">
          💬 8 commentaires
        </text>
        <text x="245" y="206" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">
          🔁 5 partages
        </text>

        <rect x="420" y="190" width="110" height="28" rx="6" fill="#1e293b"/>
        <text x="438" y="209" font-family="system-ui, sans-serif" font-weight="600" font-size="11.5" fill="#38bdf8">Interagir</text>
      </g>

      <!-- Bottom Badges -->
      <g transform="translate(0, 375)">
        <rect width="550" height="95" rx="10" fill="#09121f" stroke="#1e2d45" stroke-width="1"/>
        <text x="20" y="26" font-family="monospace" font-weight="700" font-size="12" fill="#38bdf8">ARCHITECTURE MVC RESTful</text>
        <text x="20" y="50" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">
          Controllers : AuthController, PostController, CommentController, LikeController
        </text>
        <text x="20" y="72" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">
          Models : User, Post, Comment, Like · Router &amp; AuthMiddleware intégrés
        </text>
      </g>
    </g>

    <!-- RIGHT: Backend Code & DB Architecture -->
    <g transform="translate(605, 85)">
      <!-- Code Window -->
      <rect width="445" height="470" rx="12" fill="#070d17" stroke="#1e2f47" stroke-width="1.2"/>
      
      <!-- Code Header -->
      <rect width="445" height="40" rx="12" fill="#0c1626"/>
      <path d="M 0 12 Q 0 0 12 0 L 433 0 Q 445 0 445 12 L 445 40 L 0 40 Z" fill="#0c1626"/>
      <circle cx="20" cy="20" r="5" fill="#ef4444"/>
      <circle cx="36" cy="20" r="5" fill="#f59e0b"/>
      <circle cx="52" cy="20" r="5" fill="#10b981"/>
      <text x="75" y="24" font-family="monospace" font-size="12" fill="#94a3b8">PostController.php (PHP 8.2)</text>

      <!-- Code lines -->
      <g transform="translate(20, 60)" font-family="monospace" font-size="12.5" line-height="1.6">
        <text y="15" fill="#64748b">1</text>
        <text x="30" y="15" fill="#f43f5e">&lt;?php</text>
        
        <text y="38" fill="#64748b">2</text>
        <text x="30" y="38" fill="#c084fc">namespace</text>
        <text x="110" y="38" fill="#e2e8f0">App\Controllers;</text>

        <text y="61" fill="#64748b">3</text>
        <text x="30" y="61" fill="#c084fc">use</text>
        <text x="65" y="61" fill="#e2e8f0">App\Database\Database;</text>

        <text y="84" fill="#64748b">4</text>
        <text x="30" y="84" fill="#c084fc">use</text>
        <text x="65" y="84" fill="#e2e8f0">App\Middleware\AuthMiddleware;</text>

        <text y="115" fill="#64748b">5</text>
        <text x="30" y="115" fill="#c084fc">class</text>
        <text x="75" y="115" fill="#38bdf8">PostController</text>
        <text x="185" y="115" fill="#e2e8f0">{</text>

        <text y="140" fill="#64748b">6</text>
        <text x="50" y="140" fill="#c084fc">public function</text>
        <text x="165" y="140" fill="#34d399">create</text>
        <text x="215" y="140" fill="#e2e8f0">($req) {</text>

        <text y="165" fill="#64748b">7</text>
        <text x="70" y="165" fill="#38bdf8">$user</text>
        <text x="115" y="165" fill="#e2e8f0">= AuthMiddleware::user();</text>

        <text y="190" fill="#64748b">8</text>
        <text x="70" y="190" fill="#38bdf8">$sql</text>
        <text x="105" y="190" fill="#e2e8f0">=</text>
        <text x="120" y="190" fill="#fbbf24">"INSERT INTO posts"</text>

        <text y="213" fill="#64748b">9</text>
        <text x="90" y="213" fill="#fbbf24">"(user_id, content, created_at)"</text>

        <text y="236" fill="#64748b">10</text>
        <text x="90" y="236" fill="#fbbf24">"VALUES (:uid, :content, NOW())"</text>
        <text x="345" y="236" fill="#e2e8f0">;</text>

        <text y="265" fill="#64748b">11</text>
        <text x="70" y="265" fill="#38bdf8">$stmt</text>
        <text x="115" y="265" fill="#e2e8f0">= $this-&gt;db-&gt;prepare($sql);</text>

        <text y="290" fill="#64748b">12</text>
        <text x="70" y="290" fill="#38bdf8">$stmt</text>
        <text x="115" y="290" fill="#e2e8f0">-&gt;execute([...]);</text>

        <text y="318" fill="#64748b">13</text>
        <text x="70" y="318" fill="#c084fc">return</text>
        <text x="125" y="318" fill="#38bdf8">Response::json</text>
        <text x="235" y="318" fill="#e2e8f0">($post, 201);</text>

        <text y="345" fill="#64748b">14</text>
        <text x="50" y="345" fill="#e2e8f0">}</text>

        <text y="370" fill="#64748b">15</text>
        <text x="30" y="370" fill="#e2e8f0">}</text>
      </g>

      <!-- Security Stamp -->
      <g transform="translate(20, 420)">
        <rect width="405" height="34" rx="8" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-opacity="0.3" stroke-width="1"/>
        <text x="15" y="22" font-family="system-ui, sans-serif" font-weight="700" font-size="11.5" fill="#34d399">
          🛡️ Sécurité : Requêtes préparées PDO · Protection XSS · Auth Bearer
        </text>
      </g>
    </g>
  </g>
</svg>`;

// 3. StudentHub Universiapolis Cover SVG
const studentHubSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sh-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070b16"/>
      <stop offset="50%" stop-color="#0a1224"/>
      <stop offset="100%" stop-color="#050812"/>
    </linearGradient>
    <linearGradient id="sh-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f192c" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0a1120" stop-opacity="0.98"/>
    </linearGradient>
    <linearGradient id="cyan-blue" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#31d7ff"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <radialGradient id="glow-sh" cx="0.8" cy="0.2" r="0.6">
      <stop offset="0%" stop-color="#31d7ff" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#sh-bg)"/>
  <rect width="1200" height="675" fill="url(#glow-sh)"/>

  <!-- Window Frame -->
  <g transform="translate(60, 45)">
    <rect width="1080" height="585" rx="18" fill="url(#sh-card)" stroke="#233554" stroke-width="1.5"/>
    
    <!-- Window Header -->
    <path d="M 0 18 Q 0 0 18 0 L 1062 0 Q 1080 0 1080 18 L 1080 65 L 0 65 Z" fill="#0a1322" stroke="#233554" stroke-width="1.5"/>
    <circle cx="30" cy="32" r="6" fill="#ef4444"/>
    <circle cx="50" cy="32" r="6" fill="#f59e0b"/>
    <circle cx="70" cy="32" r="6" fill="#10b981"/>

    <!-- App Title -->
    <text x="110" y="38" font-family="system-ui, sans-serif" font-weight="800" font-size="19" fill="#f8fafc">
      STUDENTHUB UNIVERSIAPOLIS
    </text>
    <text x="390" y="38" font-family="system-ui, sans-serif" font-weight="500" font-size="13" fill="#94a3b8">
      — Portail Académique &amp; KPIs de Performance Étudiante
    </text>

    <!-- Student Badge -->
    <rect x="790" y="18" width="260" height="30" rx="15" fill="#31d7ff" fill-opacity="0.12" stroke="#31d7ff" stroke-opacity="0.4" stroke-width="1"/>
    <text x="810" y="38" font-family="system-ui, sans-serif" font-weight="600" font-size="12" fill="#31d7ff">
      Étudiant : Mohammed AICHOUR (GI)
    </text>

    <!-- Content: 3 KPI Cards -->
    <g transform="translate(30, 85)">
      <!-- KPI 1: GPA -->
      <rect width="320" height="130" rx="12" fill="#0d182b" stroke="#1e3252" stroke-width="1.2"/>
      <text x="25" y="35" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#31d7ff" letter-spacing="1">
        MOYENNE GÉNÉRALE (GPA)
      </text>
      <text x="25" y="85" font-family="system-ui, sans-serif" font-weight="800" font-size="38" fill="#f8fafc">
        19.00
      </text>
      <text x="145" y="80" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">/ 20</text>
      
      <rect x="25" y="98" width="165" height="22" rx="4" fill="#10b981" fill-opacity="0.18"/>
      <text x="35" y="113" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#34d399">
        Mention Très Bien · Major
      </text>

      <!-- KPI 2: Attendance -->
      <g transform="translate(350, 0)">
        <rect width="320" height="130" rx="12" fill="#0d182b" stroke="#1e3252" stroke-width="1.2"/>
        <text x="25" y="35" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#10b981" letter-spacing="1">
          PRÉSENCE &amp; ASSIDUITÉ
        </text>
        <text x="25" y="85" font-family="system-ui, sans-serif" font-weight="800" font-size="38" fill="#f8fafc">
          100%
        </text>
        <text x="135" y="80" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">(48/48 séances)</text>
        <text x="25" y="113" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">
          Présence irréprochable tous modules
        </text>
      </g>

      <!-- KPI 3: ECTS -->
      <g transform="translate(700, 0)">
        <rect width="320" height="130" rx="12" fill="#0d182b" stroke="#1e3252" stroke-width="1.2"/>
        <text x="25" y="35" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#a855f7" letter-spacing="1">
          CRÉDITS VALIDÉS
        </text>
        <text x="25" y="85" font-family="system-ui, sans-serif" font-weight="800" font-size="38" fill="#f8fafc">
          60 / 60
        </text>
        <text x="175" y="80" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">ECTS</text>
        <text x="25" y="113" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">
          Cycle Ingénieur — Génie Info UIA
        </text>
      </g>
    </g>

    <!-- Table of Modules -->
    <g transform="translate(30, 235)">
      <rect width="1020" height="250" rx="12" fill="#0d1729" stroke="#1e3252" stroke-width="1.2"/>
      
      <!-- Table Header -->
      <path d="M 0 12 Q 0 0 12 0 L 1008 0 Q 1020 0 1020 12 L 1020 42 L 0 42 Z" fill="#142138"/>
      <text x="25" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#94a3b8" letter-spacing="0.5">CODE</text>
      <text x="120" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#94a3b8" letter-spacing="0.5">INTITULÉ DU MODULE</text>
      <text x="560" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#94a3b8" letter-spacing="0.5">COEFFICIENT</text>
      <text x="700" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#94a3b8" letter-spacing="0.5">NOTE / 20</text>
      <text x="860" y="26" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#94a3b8" letter-spacing="0.5">STATUT</text>

      <!-- Row 1 -->
      <g transform="translate(0, 42)">
        <line x1="0" y1="0" x2="1020" y2="0" stroke="#1e3252" stroke-width="1"/>
        <text x="25" y="32" font-family="monospace" font-size="13" fill="#31d7ff">INF-201</text>
        <text x="120" y="32" font-family="system-ui, sans-serif" font-weight="600" font-size="13.5" fill="#f8fafc">Programmation Orientée Objet &amp; C++ Moderne</text>
        <text x="560" y="32" font-family="system-ui, sans-serif" font-size="13" fill="#94a3b8">Crédits 6</text>
        <text x="700" y="32" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#f8fafc">19.50</text>
        <rect x="855" y="14" width="90" height="24" rx="12" fill="#10b981" fill-opacity="0.15"/>
        <text x="872" y="30" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#34d399">Validé</text>
      </g>

      <!-- Row 2 -->
      <g transform="translate(0, 94)">
        <line x1="0" y1="0" x2="1020" y2="0" stroke="#1e3252" stroke-width="1"/>
        <text x="25" y="32" font-family="monospace" font-size="13" fill="#31d7ff">INF-202</text>
        <text x="120" y="32" font-family="system-ui, sans-serif" font-weight="600" font-size="13.5" fill="#f8fafc">Conception des Systèmes d'Information &amp; MCD/MLD</text>
        <text x="560" y="32" font-family="system-ui, sans-serif" font-size="13" fill="#94a3b8">Crédits 5</text>
        <text x="700" y="32" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#f8fafc">19.00</text>
        <rect x="855" y="14" width="90" height="24" rx="12" fill="#10b981" fill-opacity="0.15"/>
        <text x="872" y="30" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#34d399">Validé</text>
      </g>

      <!-- Row 3 -->
      <g transform="translate(0, 146)">
        <line x1="0" y1="0" x2="1020" y2="0" stroke="#1e3252" stroke-width="1"/>
        <text x="25" y="32" font-family="monospace" font-size="13" fill="#31d7ff">INF-203</text>
        <text x="120" y="32" font-family="system-ui, sans-serif" font-weight="600" font-size="13.5" fill="#f8fafc">Réseaux Informatiques &amp; Routage Cisco CCNA</text>
        <text x="560" y="32" font-family="system-ui, sans-serif" font-size="13" fill="#94a3b8">Crédits 5</text>
        <text x="700" y="32" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#f8fafc">18.75</text>
        <rect x="855" y="14" width="90" height="24" rx="12" fill="#10b981" fill-opacity="0.15"/>
        <text x="872" y="30" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#34d399">Validé</text>
      </g>

      <!-- Row 4 -->
      <g transform="translate(0, 198)">
        <line x1="0" y1="0" x2="1020" y2="0" stroke="#1e3252" stroke-width="1"/>
        <text x="25" y="32" font-family="monospace" font-size="13" fill="#31d7ff">INF-204</text>
        <text x="120" y="32" font-family="system-ui, sans-serif" font-weight="600" font-size="13.5" fill="#f8fafc">Bases de Données Relationnelles &amp; SQL Avancé</text>
        <text x="560" y="32" font-family="system-ui, sans-serif" font-size="13" fill="#94a3b8">Crédits 6</text>
        <text x="700" y="32" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#f8fafc">19.25</text>
        <rect x="855" y="14" width="90" height="24" rx="12" fill="#10b981" fill-opacity="0.15"/>
        <text x="872" y="30" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#34d399">Validé</text>
      </g>
    </g>

    <!-- Bottom Footer Bar -->
    <g transform="translate(30, 500)">
      <rect width="1020" height="60" rx="10" fill="#09121f" stroke="#1e2d45" stroke-width="1"/>
      <circle cx="28" cy="30" r="6" fill="#31d7ff"/>
      <text x="48" y="35" font-family="system-ui, sans-serif" font-size="13" fill="#94a3b8">
        Architecture API Node.js (ESM) · Persistance SQL · Calcul dynamique GPA · École Polytechnique d'Agadir (UIA)
      </text>
    </g>
  </g>
</svg>`;

// 4. Station Météo C++ / Saad-Jebbour Cover SVG
const stationMeteoSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sm-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050a14"/>
      <stop offset="50%" stop-color="#0a1224"/>
      <stop offset="100%" stop-color="#040812"/>
    </linearGradient>
    <linearGradient id="sm-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0e172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090f1d" stop-opacity="0.98"/>
    </linearGradient>
    <linearGradient id="cyan-glow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#00f2fe"/>
      <stop offset="100%" stop-color="#4facfe"/>
    </linearGradient>
    <radialGradient id="glow-teal" cx="0.8" cy="0.3" r="0.6">
      <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#sm-bg)"/>
  <rect width="1200" height="675" fill="url(#glow-teal)"/>

  <!-- Window Frame -->
  <g transform="translate(60, 45)">
    <rect width="1080" height="585" rx="18" fill="url(#sm-card)" stroke="#233554" stroke-width="1.5"/>
    
    <!-- Window Header -->
    <path d="M 0 18 Q 0 0 18 0 L 1062 0 Q 1080 0 1080 18 L 1080 65 L 0 65 Z" fill="#091322" stroke="#233554" stroke-width="1.5"/>
    <circle cx="30" cy="32" r="6" fill="#ef4444"/>
    <circle cx="50" cy="32" r="6" fill="#f59e0b"/>
    <circle cx="70" cy="32" r="6" fill="#10b981"/>

    <!-- App Title -->
    <text x="110" y="38" font-family="system-ui, sans-serif" font-weight="800" font-size="19" fill="#f8fafc">
      STATION MÉTÉO C++ — DESIGN PATTERN OBSERVER
    </text>
    <text x="590" y="38" font-family="system-ui, sans-serif" font-weight="500" font-size="13" fill="#94a3b8">
      — Simulation IoT &amp; Patron de Conception Gang of Four
    </text>

    <!-- Tag -->
    <rect x="940" y="18" width="110" height="30" rx="15" fill="#00f2fe" fill-opacity="0.12" stroke="#00f2fe" stroke-opacity="0.4" stroke-width="1"/>
    <text x="965" y="38" font-family="monospace" font-weight="700" font-size="12" fill="#00f2fe">
      C++ 20 (GoF)
    </text>

    <!-- LEFT: Live Sensor Telemetry (480px) -->
    <g transform="translate(30, 85)">
      <!-- Telemetry Box -->
      <rect width="470" height="470" rx="12" fill="#0b1424" stroke="#1d2e47" stroke-width="1.2"/>
      <text x="25" y="35" font-family="monospace" font-weight="700" font-size="13" fill="#00f2fe" letter-spacing="1">
        FLUX DE TÉLÉMÉTRIE CAPTEURS EN DIRECT
      </text>

      <!-- Sensor 1: Temp -->
      <g transform="translate(25, 55)">
        <rect width="420" height="85" rx="10" fill="#111d33" stroke="#233857" stroke-width="1"/>
        <text x="20" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">TEMPÉRATURE AMBIANTE</text>
        <text x="20" y="65" font-family="system-ui, sans-serif" font-weight="800" font-size="28" fill="#f8fafc">23.4 °C</text>
        <!-- Waveform mini bar -->
        <rect x="260" y="35" width="140" height="24" rx="4" fill="#00f2fe" fill-opacity="0.15"/>
        <text x="280" y="52" font-family="monospace" font-size="12" fill="#38bdf8">± 0.2°C Stabilité</text>
      </g>

      <!-- Sensor 2: Humidity -->
      <g transform="translate(25, 155)">
        <rect width="420" height="85" rx="10" fill="#111d33" stroke="#233857" stroke-width="1"/>
        <text x="20" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">HUMIDITÉ RELATIVE</text>
        <text x="20" y="65" font-family="system-ui, sans-serif" font-weight="800" font-size="28" fill="#f8fafc">58.2 %</text>
        <rect x="260" y="35" width="140" height="24" rx="4" fill="#10b981" fill-opacity="0.15"/>
        <text x="285" y="52" font-family="monospace" font-size="12" fill="#34d399">Zone Optimale</text>
      </g>

      <!-- Sensor 3: Pressure -->
      <g transform="translate(25, 255)">
        <rect width="420" height="85" rx="10" fill="#111d33" stroke="#233857" stroke-width="1"/>
        <text x="20" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">PRESSION BAROMÉTRIQUE</text>
        <text x="20" y="65" font-family="system-ui, sans-serif" font-weight="800" font-size="28" fill="#f8fafc">1014.8 hPa</text>
        <rect x="260" y="35" width="140" height="24" rx="4" fill="#818cf8" fill-opacity="0.15"/>
        <text x="290" y="52" font-family="monospace" font-size="12" fill="#a5b4fc">Anticyclonique</text>
      </g>

      <!-- Terminal Output log -->
      <g transform="translate(25, 355)">
        <rect width="420" height="95" rx="8" fill="#070d17" stroke="#17263b" stroke-width="1"/>
        <text x="15" y="24" font-family="monospace" font-size="11" fill="#64748b">[STATION-LOG] Initialisation du sujet WeatherData...</text>
        <text x="15" y="44" font-family="monospace" font-size="11" fill="#34d399">[OBSERVER-1] CurrentConditionsDisplay notifié : 23.4°C / 58.2%</text>
        <text x="15" y="64" font-family="monospace" font-size="11" fill="#38bdf8">[OBSERVER-2] StatisticsDisplay : Moyenne calculée = 22.8°C</text>
        <text x="15" y="84" font-family="monospace" font-size="11" fill="#fbbf24">[OBSERVER-3] ForecastDisplay : Baromètre stable, beau temps</text>
      </g>
    </g>

    <!-- RIGHT: C++ Observer Pattern Architecture & UML (520px) -->
    <g transform="translate(530, 85)">
      <rect width="520" height="470" rx="12" fill="#070d18" stroke="#1d2e47" stroke-width="1.2"/>
      
      <!-- UML Header -->
      <rect width="520" height="40" rx="12" fill="#0c1626"/>
      <path d="M 0 12 Q 0 0 12 0 L 508 0 Q 520 0 520 12 L 520 40 L 0 40 Z" fill="#0c1626"/>
      <circle cx="20" cy="20" r="5" fill="#00f2fe"/>
      <text x="36" y="25" font-family="monospace" font-weight="700" font-size="12" fill="#f8fafc">
        PATRON DE CONCEPTION OBSERVER (UML)
      </text>

      <!-- Diagram Nodes -->
      <!-- Subject: WeatherData -->
      <g transform="translate(30, 60)">
        <rect width="210" height="90" rx="8" fill="#111e33" stroke="#00f2fe" stroke-width="1.2"/>
        <text x="15" y="24" font-family="monospace" font-weight="700" font-size="12" fill="#00f2fe">&lt;&lt;Subject&gt;&gt;</text>
        <text x="15" y="44" font-family="system-ui, sans-serif" font-weight="700" font-size="14" fill="#f8fafc">WeatherData</text>
        <text x="15" y="64" font-family="monospace" font-size="11" fill="#94a3b8">+ registerObserver()</text>
        <text x="15" y="80" font-family="monospace" font-size="11" fill="#94a3b8">+ notifyObservers()</text>
      </g>

      <!-- Interface: IObserver -->
      <g transform="translate(280, 60)">
        <rect width="210" height="90" rx="8" fill="#111e33" stroke="#818cf8" stroke-width="1.2"/>
        <text x="15" y="24" font-family="monospace" font-weight="700" font-size="12" fill="#818cf8">&lt;&lt;Interface&gt;&gt;</text>
        <text x="15" y="44" font-family="system-ui, sans-serif" font-weight="700" font-size="14" fill="#f8fafc">IObserver</text>
        <text x="15" y="68" font-family="monospace" font-size="11" fill="#94a3b8">+ update(t, h, p) = 0</text>
      </g>

      <!-- Connecting arrow -->
      <line x1="240" y1="105" x2="280" y2="105" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
      <polygon points="278,100 286,105 278,110" fill="#38bdf8"/>

      <!-- Concrete Observers -->
      <g transform="translate(30, 175)">
        <rect width="145" height="60" rx="6" fill="#0f192b" stroke="#233857" stroke-width="1"/>
        <text x="10" y="22" font-family="system-ui, sans-serif" font-weight="600" font-size="11" fill="#34d399">CurrentDisplay</text>
        <text x="10" y="42" font-family="monospace" font-size="10" fill="#64748b">+ update()</text>

        <rect x="160" y="0" width="145" height="60" rx="6" fill="#0f192b" stroke="#233857" stroke-width="1"/>
        <text x="170" y="22" font-family="system-ui, sans-serif" font-weight="600" font-size="11" fill="#38bdf8">StatisticsDisplay</text>
        <text x="170" y="42" font-family="monospace" font-size="10" fill="#64748b">+ update()</text>

        <rect x="320" y="0" width="145" height="60" rx="6" fill="#0f192b" stroke="#233857" stroke-width="1"/>
        <text x="330" y="22" font-family="system-ui, sans-serif" font-weight="600" font-size="11" fill="#fbbf24">ForecastDisplay</text>
        <text x="330" y="42" font-family="monospace" font-size="10" fill="#64748b">+ update()</text>
      </g>

      <!-- C++ Code Excerpt -->
      <g transform="translate(30, 255)">
        <rect width="460" height="195" rx="8" fill="#050a12" stroke="#16253b" stroke-width="1"/>
        <text x="15" y="24" font-family="monospace" font-size="12" fill="#c084fc">void</text>
        <text x="55" y="24" font-family="monospace" font-size="12" fill="#38bdf8">WeatherData::notifyObservers</text>
        <text x="275" y="24" font-family="monospace" font-size="12" fill="#f8fafc">() const {</text>

        <text x="30" y="52" font-family="monospace" font-size="12" fill="#c084fc">for</text>
        <text x="60" y="52" font-family="monospace" font-size="12" fill="#f8fafc">(const auto* observer : observers_) {</text>

        <text x="50" y="80" fill="#94a3b8" font-family="monospace" font-size="12">// Notification découplée de chaque abonné</text>
        <text x="50" y="104" font-family="monospace" font-size="12" fill="#f8fafc">observer-&gt;</text>
        <text x="130" y="104" font-family="monospace" font-size="12" fill="#34d399">update</text>
        <text x="180" y="104" font-family="monospace" font-size="12" fill="#f8fafc">(temperature_, humidity_, pressure_);</text>

        <text x="30" y="132" font-family="monospace" font-size="12" fill="#f8fafc">}</text>
        <text x="15" y="156" font-family="monospace" font-size="12" fill="#f8fafc">}</text>

        <text x="15" y="182" font-family="monospace" font-weight="700" font-size="11" fill="#00f2fe">
          ✓ Découplage fort · Principe Ouvert/Fermé (OCP) · Architecture Événementielle
        </text>
      </g>
    </g>
  </g>
</svg>`;

// 5. GitHub Profile Showcase Cover SVG
const githubProfileSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gh-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070c16"/>
      <stop offset="50%" stop-color="#0d1424"/>
      <stop offset="100%" stop-color="#050811"/>
    </linearGradient>
    <linearGradient id="gh-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f192c" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0a1220" stop-opacity="0.98"/>
    </linearGradient>
    <linearGradient id="cyan-purple" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <radialGradient id="glow-gh" cx="0.8" cy="0.2" r="0.6">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#gh-bg)"/>
  <rect width="1200" height="675" fill="url(#glow-gh)"/>

  <!-- Window Frame -->
  <g transform="translate(60, 45)">
    <rect width="1080" height="585" rx="18" fill="url(#gh-card)" stroke="#233554" stroke-width="1.5"/>
    
    <!-- Window Header -->
    <path d="M 0 18 Q 0 0 18 0 L 1062 0 Q 1080 0 1080 18 L 1080 65 L 0 65 Z" fill="#0a1322" stroke="#233554" stroke-width="1.5"/>
    <circle cx="30" cy="32" r="6" fill="#ef4444"/>
    <circle cx="50" cy="32" r="6" fill="#f59e0b"/>
    <circle cx="70" cy="32" r="6" fill="#10b981"/>

    <!-- App Title -->
    <text x="110" y="38" font-family="monospace" font-weight="800" font-size="18" fill="#f8fafc">
      Mohammed-aichour / README.md
    </text>
    <text x="430" y="38" font-family="system-ui, sans-serif" font-weight="500" font-size="13" fill="#94a3b8">
      — GitHub Profile Showcase &amp; Engineering Matrix
    </text>

    <!-- Public Tag -->
    <rect x="940" y="18" width="110" height="30" rx="15" fill="#38bdf8" fill-opacity="0.12" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1"/>
    <text x="962" y="38" font-family="monospace" font-weight="700" font-size="12" fill="#38bdf8">
      Profil GitHub
    </text>

    <!-- Top Typing Banner Box -->
    <g transform="translate(30, 85)">
      <rect width="1020" height="110" rx="12" fill="#09121f" stroke="#1d2f4a" stroke-width="1.2"/>
      <text x="30" y="35" font-family="monospace" font-weight="600" font-size="12" fill="#38bdf8">
        &gt; _ whoami --verbose
      </text>
      <text x="30" y="70" font-family="system-ui, sans-serif" font-weight="800" font-size="24" fill="#f8fafc">
        Mohammed AICHOUR — Ingénierie Logicielle &amp; Génie Informatique
      </text>
      <text x="30" y="94" font-family="system-ui, sans-serif" font-size="14" fill="#94a3b8">
        Étudiant en 2ᵉ année du Cycle Ingénieur @ Universiapolis – École Polytechnique d'Agadir
      </text>
    </g>

    <!-- Stats & Heatmap Grid -->
    <g transform="translate(30, 215)">
      <!-- Left: GitHub Metrics (480px) -->
      <rect width="480" height="260" rx="12" fill="#0c1626" stroke="#1e3252" stroke-width="1.2"/>
      <text x="25" y="35" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#f8fafc">
        Télémétrie GitHub &amp; Dépôts Déployés
      </text>

      <g transform="translate(25, 60)">
        <rect width="205" height="80" rx="8" fill="#111f36"/>
        <text x="15" y="28" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">DÉPÔTS GÉRÉS</text>
        <text x="15" y="60" font-family="system-ui, sans-serif" font-weight="800" font-size="28" fill="#38bdf8">10</text>
        <text x="55" y="58" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">Projets Pro</text>

        <rect x="225" y="0" width="205" height="80" rx="8" fill="#111f36"/>
        <text x="240" y="28" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">TAUX DE SUCCÈS CI/CD</text>
        <text x="240" y="60" font-family="system-ui, sans-serif" font-weight="800" font-size="28" fill="#34d399">100%</text>
        <text x="315" y="58" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">Pass Tests</text>

        <rect x="0" y="95" width="430" height="85" rx="8" fill="#111f36"/>
        <text x="15" y="122" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">LANGAGES PRINCIPAUX</text>
        <!-- Language Bars -->
        <g transform="translate(15, 135)">
          <rect width="150" height="8" rx="4" fill="#38bdf8"/>
          <rect x="155" y="0" width="100" height="8" rx="4" fill="#c084fc"/>
          <rect x="260" y="0" width="75" height="8" rx="4" fill="#10b981"/>
          <rect x="340" y="0" width="60" height="8" rx="4" fill="#f59e0b"/>

          <text x="0" y="26" font-family="system-ui, sans-serif" font-size="11" fill="#38bdf8">TypeScript 38%</text>
          <text x="110" y="26" font-family="system-ui, sans-serif" font-size="11" fill="#c084fc">C++ 25%</text>
          <text x="180" y="26" font-family="system-ui, sans-serif" font-size="11" fill="#10b981">Python 19%</text>
          <text x="265" y="26" font-family="system-ui, sans-serif" font-size="11" fill="#f59e0b">PHP/SQL 18%</text>
        </g>
      </g>

      <!-- Right: Contribution Heatmap Simulation (510px) -->
      <g transform="translate(510, 0)">
        <rect width="510" height="260" rx="12" fill="#0c1626" stroke="#1e3252" stroke-width="1.2"/>
        <text x="25" y="35" font-family="system-ui, sans-serif" font-weight="700" font-size="15" fill="#f8fafc">
          Activité de Développement &amp; Commits
        </text>

        <!-- Heatmap Grid (16 columns x 7 rows) -->
        <g transform="translate(25, 60)">
          <!-- Generate grid of commit squares -->
          ${(() => {
            let squares = '';
            const colors = ['#1e293b', '#0e4429', '#006d32', '#26a641', '#39d353'];
            for (let c = 0; c < 24; c++) {
              for (let r = 0; r < 7; r++) {
                const colorIdx = Math.floor((Math.sin(c * 1.5 + r * 2.3) + 1) * 2.2) % colors.length;
                const fill = colors[colorIdx];
                squares += `<rect x="${c * 19}" y="${r * 19}" width="14" height="14" rx="3" fill="${fill}"/>`;
              }
            }
            return squares;
          })()}
        </g>

        <!-- Heatmap Legend -->
        <g transform="translate(25, 215)">
          <text x="0" y="16" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Moins</text>
          <rect x="45" y="4" width="12" height="12" rx="2" fill="#1e293b"/>
          <rect x="62" y="4" width="12" height="12" rx="2" fill="#0e4429"/>
          <rect x="79" y="4" width="12" height="12" rx="2" fill="#006d32"/>
          <rect x="96" y="4" width="12" height="12" rx="2" fill="#26a641"/>
          <rect x="113" y="4" width="12" height="12" rx="2" fill="#39d353"/>
          <text x="135" y="16" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Plus d'activité</text>

          <text x="280" y="16" font-family="system-ui, sans-serif" font-weight="600" font-size="11.5" fill="#34d399">
            ✓ Cycle de développement continu
          </text>
        </g>
      </g>
    </g>

    <!-- Bottom Stack Badges -->
    <g transform="translate(30, 495)">
      <rect width="1020" height="65" rx="10" fill="#080f1d" stroke="#1d2e47" stroke-width="1"/>
      <text x="25" y="37" font-family="monospace" font-weight="700" font-size="12" fill="#38bdf8">
        ECOSYSTEM :
      </text>
      <g transform="translate(130, 18)">
        <rect width="80" height="28" rx="6" fill="#1e293b"/>
        <text x="14" y="18" font-family="system-ui, sans-serif" font-size="11.5" fill="#e2e8f0">React 19</text>

        <rect x="90" y="0" width="95" height="28" rx="6" fill="#1e293b"/>
        <text x="102" y="18" font-family="system-ui, sans-serif" font-size="11.5" fill="#e2e8f0">TypeScript</text>

        <rect x="195" y="0" width="85" height="28" rx="6" fill="#1e293b"/>
        <text x="207" y="18" font-family="system-ui, sans-serif" font-size="11.5" fill="#e2e8f0">Node.js</text>

        <rect x="290" y="0" width="85" height="28" rx="6" fill="#1e293b"/>
        <text x="304" y="18" font-family="system-ui, sans-serif" font-size="11.5" fill="#e2e8f0">Python</text>

        <rect x="385" y="0" width="90" height="28" rx="6" fill="#1e293b"/>
        <text x="398" y="18" font-family="system-ui, sans-serif" font-size="11.5" fill="#e2e8f0">OpenCV</text>

        <rect x="485" y="0" width="75" height="28" rx="6" fill="#1e293b"/>
        <text x="498" y="18" font-family="system-ui, sans-serif" font-size="11.5" fill="#e2e8f0">C++ 20</text>

        <rect x="570" y="0" width="75" height="28" rx="6" fill="#1e293b"/>
        <text x="584" y="18" font-family="system-ui, sans-serif" font-size="11.5" fill="#e2e8f0">MySQL</text>

        <rect x="655" y="0" width="115" height="28" rx="6" fill="#1e293b"/>
        <text x="668" y="18" font-family="system-ui, sans-serif" font-size="11.5" fill="#e2e8f0">GitHub Actions</text>

        <rect x="780" y="0" width="95" height="28" rx="6" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7" stroke-width="1"/>
        <text x="794" y="18" font-family="system-ui, sans-serif" font-weight="600" font-size="11.5" fill="#38bdf8">CI/CD Pass</text>
      </g>
    </g>
  </g>
</svg>`;

async function buildAllCovers() {
  const tasks = [
    { name: 'maroc-culture-cover.webp', svg: marocCultureSvg },
    { name: 'mini-social-network-cover.webp', svg: miniSocialNetworkSvg },
    { name: 'student-hub-cover.webp', svg: studentHubSvg },
    { name: 'station-meteo-cover.webp', svg: stationMeteoSvg },
    { name: 'github-profile-cover.webp', svg: githubProfileSvg },
  ];

  for (const t of tasks) {
    const target = path.join(outputDir, t.name);
    console.log(`Generating ${t.name}...`);
    const buffer = await sharp(Buffer.from(t.svg))
      .webp({ quality: 85, effort: 4 })
      .toBuffer();
    fs.writeFileSync(target, buffer);
    console.log(`Saved ${target} (${buffer.length} bytes)`);
  }
}

buildAllCovers().then(() => console.log('All 5 covers generated successfully!')).catch(console.error);
