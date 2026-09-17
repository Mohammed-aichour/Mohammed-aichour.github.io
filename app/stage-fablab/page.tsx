import Image from 'next/image';
import {
  ArrowLeft, ArrowRight, Bot, Box, BrainCircuit, Camera, Check,
  Code2, Database, Factory, Globe2, HeartHandshake, Layers3,
  MonitorSmartphone, ScanLine, Sparkles, Wrench,
} from 'lucide-react';

const months = [
  {
    index: '01', label: 'Mois 1', title: 'Observer, comprendre, prendre mes repères',
    text: 'Découverte du fonctionnement du Fablab, de son environnement de travail et de sa culture du prototypage. Cette première étape m’a permis de comprendre comment une idée passe de la conception à un objet ou à une solution testable.',
    points: ['Prise en main de l’environnement du Fablab', 'Découverte de l’impression 3D, de la CNC, de la découpe laser et du prototypage électronique', 'Observation des méthodes de conception, de fabrication et de validation'],
  },
  {
    index: '02', label: 'Mois 2', title: 'Construire des interfaces et un premier agent IA',
    text: 'Passage à la réalisation avec deux axes complémentaires : développer le portfolio qui présente mon parcours et concevoir un assistant intelligent pour faciliter l’accès aux informations du Fablab.',
    points: ['Développement et amélioration de mon portfolio', 'Conception de la logique conversationnelle de l’Agent IA', 'Organisation des informations utiles et premiers tests de réponses'],
  },
  {
    index: '03', label: 'Mois 3', title: 'Consolider et préparer les projets suivants',
    text: 'La dernière phase a servi à améliorer les réalisations, à mieux structurer mes méthodes et à préparer deux chantiers plus ambitieux : une solution de gestion pour cabinets dentaires et une expérimentation de vision avec la caméra RealSense D435.',
    points: ['Amélioration progressive de l’Agent IA et du portfolio', 'Cadrage du système de gestion de cabinet dentaire avec assistant IA', 'Préparation de la détection de personnes ou d’objets avec estimation de distance'],
  },
];

const learned = [
  { icon: Code2, label: 'Langages & interface', title: 'Python, JavaScript / TypeScript, HTML et CSS', text: 'Python pour structurer la logique de prototypes intelligents ; JavaScript et TypeScript pour construire des interfaces interactives ; HTML et CSS pour organiser et mettre en forme une expérience web responsive.' },
  { icon: BrainCircuit, label: 'Intelligence artificielle', title: 'Construire un assistant à partir d’un besoin réel', text: 'J’ai appris à cadrer le rôle d’un agent, organiser ses informations de référence, préparer ses instructions, relier une API d’IA et tester la qualité des réponses.' },
  { icon: MonitorSmartphone, label: 'Développement web', title: 'Passer d’une idée à une interface utilisable', text: 'Le portfolio m’a permis de travailler la structure des composants, l’affichage responsive, la hiérarchie visuelle, les interactions et l’amélioration continue à partir de retours concrets.' },
  { icon: Factory, label: 'Fabrication numérique', title: 'Comprendre l’écosystème d’un Fablab', text: 'Le stage m’a familiarisé avec les usages de l’impression 3D, de la CNC, de la découpe laser et du prototypage électronique, ainsi qu’avec les étapes de conception et de validation.' },
  { icon: Layers3, label: 'Méthode de projet', title: 'Analyser, découper, tester, corriger', text: 'J’ai progressé dans l’analyse d’un besoin, le découpage d’un problème en étapes, la recherche de solutions, la documentation et la présentation claire d’un projet.' },
  { icon: HeartHandshake, label: 'Compétences humaines', title: 'Autonomie, adaptation et collaboration', text: 'Cette expérience a renforcé mon organisation, mon esprit d’analyse, ma capacité à apprendre par la pratique et ma façon d’échanger dans un environnement orienté innovation.' },
];

const work = [
  {
    status: 'RÉALISÉ · EN ÉVOLUTION', icon: Bot, title: 'Agent IA pour le Fablab',
    text: 'Assistant conversationnel destiné à centraliser les informations utiles, orienter les usagers et préparer l’automatisation de certaines tâches internes.',
    tools: ['Python', 'API d’IA', 'Prompting', 'Base documentaire', 'Interface web'],
  },
  {
    status: 'RÉALISÉ · AMÉLIORÉ EN CONTINU', icon: Globe2, title: 'Portfolio personnel',
    text: 'Conception d’une expérience web pour présenter mon parcours, mes projets et mes objectifs avec une identité orientée intelligence artificielle.',
    tools: ['React', 'TypeScript', 'HTML', 'CSS', 'Git'],
  },
  {
    status: 'EN COURS DE CONCEPTION', icon: Database, title: 'Gestion de cabinet dentaire + Agent IA',
    text: 'Préparation d’une plateforme pour centraliser patients, personnel, finances et équipements, avec un assistant capable d’interroger et de mettre à jour les informations.',
    tools: ['Architecture full-stack prévue', 'Base de données prévue', 'API d’IA prévue', 'Gestion des accès à définir'],
  },
  {
    status: 'EN COURS D’EXPÉRIMENTATION', icon: Camera, title: 'Détection et mesure avec RealSense D435',
    text: 'Expérimentation de vision pour détecter une personne ou un objet et exploiter la profondeur de la caméra afin d’estimer sa distance.',
    tools: ['Intel RealSense D435', 'SDK RealSense prévu', 'Vision par ordinateur', 'Tests de profondeur'],
  },
];

export const metadata = {
  title: 'Stage Fablab Universiapolis — Zinedine Tlemsani Benhattal',
  description: 'Trois mois d’apprentissage au Fablab Universiapolis : IA, développement web, fabrication numérique et projets en cours.',
};

export default function StageFablabPage() {
  return <main className="stage-page">
    <header className="stage-nav">
      <a href="/#parcours" className="stage-back"><ArrowLeft size={18}/> Retour au portfolio</a>
      <Image src="/assets/stage/fablab-logo.jpg" alt="Logo du Fablab Universiapolis" width={180} height={72}/>
    </header>

    <section className="stage-hero">
      <div className="stage-hero-copy">
        <p className="stage-kicker"><Sparkles size={15}/> Expérience · Fablab Universiapolis</p>
        <h1><span>Trois mois</span> pour apprendre en construisant.</h1>
        <p>Une immersion dans un environnement de fabrication numérique où j’ai développé mes compétences en intelligence artificielle, en création d’interfaces et en conduite de projets techniques.</p>
        <div className="stage-hero-meta"><span>03 mois</span><span>Dates à compléter</span><span>Agadir, Maroc</span></div>
      </div>
      <figure className="stage-hero-media">
        <Image src="/assets/stage/fablab-universiapolis.jpg" alt="Espace de fabrication numérique du Fablab Universiapolis, extrait du rapport de stage" fill priority sizes="(max-width: 900px) 100vw, 48vw"/>
        <figcaption>Le Fablab Universiapolis · espace de travail et d’expérimentation</figcaption>
      </figure>
      <div className="stage-orbit" aria-hidden="true"><span>IA</span><i>WEB</i><b>LAB</b></div>
    </section>

    <section className="stage-intro stage-container">
      <p className="stage-section-index">01 · LE CONTEXTE</p>
      <div><h2>Un laboratoire pour transformer les idées en prototypes.</h2><p>Le Fablab Universiapolis réunit des outils de fabrication numérique, de prototypage électronique, de programmation et de robotique. Pendant ce stage, j’ai découvert son fonctionnement, ses équipements et surtout une méthode : avancer par l’expérimentation, documenter ce qui fonctionne et améliorer ce qui doit l’être.</p></div>
    </section>

    <section className="stage-months stage-container">
      <header><p className="stage-section-index">02 · LES TROIS MOIS</p><h2>Une progression en trois temps.</h2></header>
      <div className="stage-month-list">{months.map(month=><article key={month.index} className="stage-month"><span>{month.index}</span><div><p>{month.label}</p><h3>{month.title}</h3><div>{month.text}</div><ul>{month.points.map(point=><li key={point}><Check size={16}/>{point}</li>)}</ul></div></article>)}</div>
    </section>

    <section className="stage-learning">
      <div className="stage-container"><header><p className="stage-section-index">03 · CE QUE J’AI APPRIS</p><h2>Des outils, mais surtout une manière de réfléchir.</h2><p>Les langages et technologies prennent leur sens lorsqu’ils servent un besoin clair. Voici les acquis principaux développés au fil du stage.</p></header><div className="stage-learning-grid">{learned.map(item=>{const Icon=item.icon;return <article key={item.title}><Icon/><p>{item.label}</p><h3>{item.title}</h3><div>{item.text}</div></article>})}</div></div>
    </section>

    <section className="stage-work stage-container">
      <header><p className="stage-section-index">04 · RÉALISATIONS & SUITE</p><h2>Ce que j’ai construit. Ce que je prépare.</h2><p>Les statuts distinguent les réalisations du stage des projets encore en cours de conception ou d’expérimentation.</p></header>
      <div className="stage-work-list">{work.map((item,index)=>{const Icon=item.icon;return <article key={item.title}><div className="stage-work-visual"><span>{String(index+1).padStart(2,'0')}</span><Icon/></div><div className="stage-work-copy"><p>{item.status}</p><h3>{item.title}</h3><div>{item.text}</div><ul>{item.tools.map(tool=><li key={tool}>{tool}</li>)}</ul>{index===0&&<a href="/#projets" className="stage-project-link">Voir le projet dans le portfolio <ArrowRight size={17}/></a>}</div></article>})}</div>
    </section>

    <section className="stage-tools stage-container">
      <p className="stage-section-index">05 · ÉQUIPEMENTS DÉCOUVERTS</p>
      <div><h2>Du numérique au prototype physique.</h2><p>Le rapport de stage présente plusieurs équipements disponibles au Fablab : imprimantes 3D et résine, machine CNC, CNC pour circuits imprimés, découpeuse laser et matériel de prototypage électronique. Cette découverte m’a aidé à mieux comprendre le lien entre conception, fabrication, test et amélioration.</p><div className="stage-tool-cloud"><span><Box/>Impression 3D</span><span><Wrench/>CNC</span><span><ScanLine/>Découpe laser</span><span><BrainCircuit/>Prototypage électronique</span></div></div>
    </section>

    <section className="stage-thanks">
      <div className="stage-container"><p className="stage-section-index">06 · REMERCIEMENTS</p><h2>Une expérience rendue possible par l’accompagnement.</h2><div className="stage-thanks-grid"><p>Je remercie sincèrement <b>Monsieur Kibbou</b> pour sa confiance et ses conseils, qui ont contribué à mon apprentissage et à mon évolution pendant le stage.</p><p>J’adresse également ma gratitude à <b>Monsieur Abdellatif</b> pour son encadrement, sa disponibilité et l’accompagnement qui m’a permis d’aborder les projets avec davantage de rigueur.</p><p>Enfin, je remercie <b>l’ensemble de l’équipe du Fablab Universiapolis</b> pour son accueil, son esprit de collaboration et le soutien apporté pendant ces trois mois.</p></div></div>
    </section>

    <footer className="stage-footer"><div><span>ZT</span><p>Zinedine Tlemsani Benhattal<br/><small>Un parcours en construction entre ingénierie, IA et recherche.</small></p></div><a href="/#projets">Découvrir mes projets <ArrowRight size={17}/></a></footer>
  </main>;
}
