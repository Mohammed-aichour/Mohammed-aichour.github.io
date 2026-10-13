import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, Bot, Box, BrainCircuit, Check,
  Code2, Factory, HeartHandshake, Layers3,
  MonitorSmartphone, ScanLine, Sparkles, Wrench,
} from 'lucide-react';

const months = [
  {
    index: '01',
    label: 'Étape 1',
    title: 'Analyse fonctionnelle, modélisation & immersion',
    text: 'Immersion au cœur du Fab Lab Universiapolis. Étude approfondie des besoins de maintenance des équipements (imprimantes 3D, découpe laser, CNC) et modélisation complète du système sous PowerAMC (MCD/MLD 11 tables) et diagrammes UML/DFD.',
    points: [
      'Audit du parc matériel et des consommables du Fab Lab',
      'Modélisation relationnelle rigoureuse sous PowerAMC / PowerDesigner (11 tables)',
      'Définition des cas d’utilisation, diagrammes de séquence et flux de données DFD',
    ],
  },
  {
    index: '02',
    label: 'Étape 2',
    title: 'Développement Full Stack : GMA LAB & Assistant IA',
    text: 'Développement de l’application GMAO complète : API REST sécurisée sous Node.js/Express avec Prisma ORM et SQLite, interface réactive sous React 19 et TypeScript, tableaux de bord de criticité (MTBF, MTTR), génération dynamique de bons PDF et intégration d’un agent IA sécurisé.',
    points: [
      'Architecture API REST avec Node.js, Express, Prisma ORM et base relationnelle SQLite',
      'Frontend moderne avec React 19, Vite, TypeScript et KPIs interactifs Recharts',
      'Intégration d’un assistant IA OpenAI (Function Calling) avec validation en 2 étapes et génération automatique de Bons de Travail PDF (pdf-lib)',
    ],
  },
  {
    index: '03',
    label: 'Étape 3',
    title: 'Déploiement, Vision Parking & Support technique',
    text: 'Finalisation et déploiement de la solution web GMA LAB, développement du système de vidéosurveillance Vision Parking Universiapolis sous OpenCV/Python, maintenance des postes informatiques (Linux/Windows 11) et automatisation des sauvegardes.',
    points: [
      'Déploiement et tests en conditions réelles de la plateforme GMA LAB',
      'Conception du projet Vision Parking : détection par polygones et traitement vidéo OpenCV',
      'Maintenance préventive/corrective des postes informatiques et équipements numériques (3D, Laser, CNC)',
    ],
  },
];

const learned = [
  {
    icon: Code2,
    label: 'Full Stack & APIs',
    title: 'React 19, TypeScript, Node.js, Express & Prisma',
    text: 'Conception d’architectures modulaires type-safe, création de routes d’API REST optimisées, gestion des transactions avec Prisma ORM et persistance SQLite.',
  },
  {
    icon: BrainCircuit,
    label: 'Intelligence Artificielle',
    title: 'OpenAI API Function Calling & Sécurité',
    text: 'Intégration d’un agent conversationnel capable d’exécuter des actions techniques en base de données, sécurisé par confirmation préalable en 2 étapes par le technicien.',
  },
  {
    icon: Layers3,
    label: 'Modélisation & Ingénierie',
    title: 'PowerAMC, MCD/MLD 11 tables & UML',
    text: 'Analyse fonctionnelle rigoureuse, conception de bases de données relationnelles complexes et formalisation des processus métiers de maintenance.',
  },
  {
    icon: Factory,
    label: 'Fabrication Numérique',
    title: 'Imprimantes 3D, Découpe Laser & CNC',
    text: 'Pratique concrète sur imprimantes 3D SLA et FDM, machines de découpe laser CO2 et fraiseuses à commande numérique CNC.',
  },
  {
    icon: MonitorSmartphone,
    label: 'Automatisation & Visualisation',
    title: 'Génération PDF automatisée & KPIs Recharts',
    text: 'Production dynamique de documents techniques officiels avec pdf-lib et suivi des indicateurs clés de performance industrielle (MTBF, MTTR, Disponibilité).',
  },
  {
    icon: HeartHandshake,
    label: 'Compétences Humaines',
    title: 'Rigueur technique, Autonomie & Esprit d’équipe',
    text: 'Capacité à transformer un besoin réel en produit fini fonctionnel, travail sous la supervision d’experts et assistance aux usagers du Fab Lab.',
  },
];

const work = [
  {
    status: 'RÉALISÉ · EN EXPLOITATION',
    visual: 'gma',
    image: '/assets/stage/fablab-universiapolis.jpg',
    title: 'Solution GMA LAB (GMAO Web)',
    text: 'Application complète de gestion de maintenance assistée par ordinateur pour le parc matériel (imprimantes 3D, CNC, laser) et les consommables du Fab Lab.',
    tools: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'SQLite', 'Recharts', 'pdf-lib'],
  },
  {
    status: 'RÉALISÉ · INTÉGRÉ',
    visual: 'agent',
    image: '',
    title: 'Assistant IA GMAO (Function Calling)',
    text: 'Assistant virtuel intelligent connecté aux données du Fab Lab pour guider les techniciens lors des diagnostics et des réparations avec validation en 2 étapes.',
    tools: ['OpenAI API', 'Function Calling', 'TypeScript', 'Validation 2 étapes'],
  },
  {
    status: 'RÉALISÉ · VALIDÉ',
    visual: 'parking',
    image: '/assets/projects/vision-parking-demo.png',
    title: 'Vision Parking Universiapolis',
    text: 'Surveillance vidéo intelligente et détection en temps réel de l’état d’occupation des places de stationnement du campus par vision par ordinateur.',
    tools: ['Python', 'OpenCV', 'Computer Vision', 'Polygones vectoriels', 'Dashboard'],
  },
  {
    status: 'RÉALISÉ · EN PRODUCTION',
    visual: 'fablab',
    image: '/assets/stage/fablab-universiapolis.jpg',
    title: 'Support Systèmes & Fabrication Numérique',
    text: 'Maintenance des postes informatiques (Linux/Win 11), accompagnement technique sur imprimantes 3D FDM/SLA, découpe laser et automatisation des sauvegardes.',
    tools: ['Linux', 'Windows 11', 'Impression 3D FDM/SLA', 'Découpe Laser CO2', 'CNC'],
  },
];

function StageAgentMark() {
  return (
    <div className="stage-agent-mark" aria-label="Identité visuelle de l’Assistant IA GMA LAB">
      <span><Bot /><i><Sparkles /></i></span>
      <strong>ASSISTANT IA</strong>
      <small>GMA LAB · FAB LAB</small>
    </div>
  );
}

export const metadata = {
  title: 'Stage Fablab Universiapolis — Mohammed AICHOUR',
  description: 'Stage technicien informatique & développeur full stack au Fab Lab Universiapolis : Solution GMA LAB, React 19, assistant IA, vision parking et maintenance.',
};

export default function StageFablabPage() {
  return (
    <main className="stage-page">
      <header className="stage-nav">
        <Link href="/#parcours" className="stage-back" data-cursor="Retour">
          <ArrowLeft size={18} /> Retour au portfolio
        </Link>
        <Image src="/assets/stage/fablab-logo.jpg" alt="Logo du Fablab Universiapolis" width={180} height={72} />
      </header>

      <section className="stage-hero">
        <div className="stage-hero-copy">
          <p className="stage-kicker">
            <Sparkles size={15} /> Expérience · Fab Lab Universiapolis
          </p>
          <h1><span>GMA LAB & Ingénierie Full Stack</span> au service du Fab Lab.</h1>
          <p>
            Immersion professionnelle intensive en tant que stagiaire technicien informatique et développeur full stack.
            Conception et déploiement de la solution web GMA LAB, modélisation de données, développement d’API REST, intégration d’un assistant IA et maintenance de parc.
          </p>
          <div className="stage-hero-meta">
            <span>10 Juil. – 21 Août 2026</span>
            <span>Agadir, Maroc</span>
            <span>Encadrant : M. El Mehdi KIBBOU</span>
          </div>
        </div>
        <figure className="stage-hero-media">
          <Image
            src="/assets/stage/fablab-universiapolis.jpg"
            alt="Espace de fabrication numérique du Fablab Universiapolis"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <figcaption>Le Fab Lab Universiapolis · Espace de fabrication numérique et d’expérimentation</figcaption>
        </figure>
        <div className="stage-orbit" aria-hidden="true">
          <span>GMAO</span><i>REACT</i><b>IA</b>
        </div>
      </section>

      <section className="stage-intro stage-container">
        <p className="stage-section-index">01 · LE CONTEXTE</p>
        <div>
          <h2>Un environnement d’innovation technologique et de fabrication numérique.</h2>
          <p>
            Le Fab Lab Universiapolis rassemble des équipements de pointe en fabrication numérique, prototypage électronique, robotique et informatique industrielle.
            Dans le cadre de mon stage, la mission principale consistait à digitaliser et moderniser intégralement la maintenance du parc machines et la gestion des consommables grâce à une solution sur mesure performante, intuitive et évolutive.
          </p>
        </div>
      </section>

      <section className="stage-months stage-container">
        <header>
          <p className="stage-section-index">02 · ÉTAPES DU PROJET</p>
          <h2>Une démarche d’ingénierie rigoureuse.</h2>
        </header>
        <div className="stage-month-list">
          {months.map(month => (
            <article key={month.index} className="stage-month">
              <span>{month.index}</span>
              <div>
                <p>{month.label}</p>
                <h3>{month.title}</h3>
                <div>{month.text}</div>
                <ul>
                  {month.points.map(point => (
                    <li key={point}><Check size={16} />{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stage-learning">
        <div className="stage-container">
          <header>
            <p className="stage-section-index">03 · COMPÉTENCES DÉVELOPPÉES</p>
            <h2>Des méthodologies solides et des technologies modernes.</h2>
            <p>
              Ce stage a permis de mettre en pratique l’ensemble du cycle de vie logiciel, de la modélisation conceptuelle jusqu’au déploiement et à l’exploitation.
            </p>
          </header>
          <div className="stage-learning-grid">
            {learned.map(item => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon />
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                  <div>{item.text}</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="stage-work stage-container">
        <header>
          <p className="stage-section-index">04 · RÉALISATIONS MAJEURES</p>
          <h2>Projets livrés et déployés au Fab Lab.</h2>
          <p>
            Découvrez les projets opérationnels développés pendant la durée de mon immersion.
          </p>
        </header>
        <div className="stage-work-list">
          {work.map((item, index) => (
            <article key={item.title}>
              <div className={`stage-work-visual stage-work-${item.visual}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.visual === 'agent' ? (
                  <StageAgentMark />
                ) : (
                  <Image
                    src={item.image}
                    alt={`Illustration du projet ${item.title}`}
                    fill
                    sizes="(max-width: 1000px) 100vw, 42vw"
                  />
                )}
              </div>
              <div className="stage-work-copy">
                <p>{item.status}</p>
                <h3>{item.title}</h3>
                <div>{item.text}</div>
                <ul>
                  {item.tools.map(tool => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stage-tools stage-container">
        <p className="stage-section-index">05 · ÉQUIPEMENTS & ENVIRONNEMENT</p>
        <div>
          <h2>Du code aux machines numériques de précision.</h2>
          <p>
            L’expérience au Fab Lab m’a permis de travailler directement avec les équipements de fabrication numérique : imprimantes 3D résine SLA et filaire FDM, machines de découpe laser CO2, et fraiseuses CNC, tout en assurant le support technique informatique et la sécurité des postes.
          </p>
          <div className="stage-tool-cloud">
            <span><Box />Imprimantes 3D SLA & FDM</span>
            <span><Wrench />Fraiseuse CNC</span>
            <span><ScanLine />Découpeuse Laser CO2</span>
          </div>
        </div>
      </section>

      <section className="stage-thanks">
        <div className="stage-container">
          <p className="stage-section-index">06 · REMERCIEMENTS</p>
          <h2>Une expérience humaine et technique inestimable.</h2>
          <div className="stage-thanks-grid">
            <p>
              Je tiens à exprimer ma profonde gratitude à mon encadrant, <b>M. El Mehdi KIBBOU</b>, pour sa confiance, son accompagnement bienveillant et ses conseils d’ingénierie avisés tout au long du stage.
            </p>
            <p>
              J’adresse également mes sincères remerciements aux enseignants et responsables de l’<b>École Polytechnique d’Agadir – Universiapolis</b> pour la qualité de la formation dispensée.
            </p>
            <p>
              Enfin, merci chaleureusement à <b>l’équipe du Fab Lab Universiapolis</b> pour leur accueil dynamique, leur esprit de collaboration et les échanges techniques stimulants.
            </p>
          </div>
        </div>
      </section>

      <footer className="stage-footer">
        <div>
          <span>MA</span>
          <p>
            Mohammed AICHOUR<br />
            <small>2ᵉᵐᵉ année du Cycle d’Ingénieur en Génie Informatique · Universiapolis Agadir</small>
          </p>
        </div>
        <Link href="/#projets">
          Découvrir mes projets <ArrowRight size={17} />
        </Link>
      </footer>
    </main>
  );
}
