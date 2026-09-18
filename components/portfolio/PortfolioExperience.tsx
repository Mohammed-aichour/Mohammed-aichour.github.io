'use client';

import Image from 'next/image';
import {
  ArrowDown, ArrowRight, ArrowUp, Bot, Brain, Check, ChevronRight, Droplets,
  CloudCog, Download, FileText, FlaskConical, GitBranch, GraduationCap,
  Layers3, Link, Mail, MapPin, Menu, Radar, Rocket, Send, Sparkles, Target, Terminal, UserRound, Users, X,
} from 'lucide-react';
import type { MouseEvent as ReactMouseEvent, SyntheticEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { portfolioData as data, type Project } from '@/app/data/portfolio';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const nav = [['Accueil', 'accueil'], ['À propos', 'a-propos'], ['Compétences', 'competences'], ['Parcours', 'parcours'], ['Projets', 'projets'], ['Objectifs', 'objectifs'], ['CV', 'cv'], ['Contact', 'contact']] as const;
const interestIcons = [Brain, FlaskConical, CloudCog, Bot];
const skillIcons = [Layers3, Sparkles, Bot, CloudCog, FlaskConical];
const projectIcons = [Droplets, Brain, Bot, Terminal, Layers3];
const greetings = ['Bonjour', 'Hello', 'Salam', 'Hola', 'Ciao'];

function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const context = canvas.getContext('2d'); if (!context) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0; let width = 0; let height = 0; let points: { x:number; y:number; vx:number; vy:number }[] = []; let lastPaint = 0;
    const resize = () => { const ratio = Math.min(window.devicePixelRatio || 1, 1.35); width = canvas.clientWidth; height = canvas.clientHeight; canvas.width = width * ratio; canvas.height = height * ratio; context.setTransform(ratio, 0, 0, ratio, 0, 0); points = Array.from({ length: width < 700 ? 14 : 30 }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16 })); };
    const paint = () => { context.clearRect(0, 0, width, height); for (let index = 0; index < points.length; index += 1) { const p = points[index]; if (!reduced) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > width) p.vx *= -1; if (p.y < 0 || p.y > height) p.vy *= -1; } for (let next = index + 1; next < points.length; next += 1) { const q = points[next]; const dx = p.x - q.x; const dy = p.y - q.y; const squaredDistance = dx * dx + dy * dy; if (squaredDistance < 16900) { const distance = Math.sqrt(squaredDistance); context.beginPath(); context.strokeStyle = `rgba(49,215,255,${(1 - distance / 130) * .14})`; context.moveTo(p.x, p.y); context.lineTo(q.x, q.y); context.stroke(); } } context.beginPath(); context.fillStyle = 'rgba(125,230,255,.42)'; context.arc(p.x, p.y, 1.15, 0, Math.PI * 2); context.fill(); } };
    const draw = (time = 0) => { if (time - lastPaint >= 32) { paint(); lastPaint = time; } if (!reduced && !document.hidden) frame = requestAnimationFrame(draw); };
    const onVisibilityChange = () => { cancelAnimationFrame(frame); if (!document.hidden && !reduced) frame = requestAnimationFrame(draw); };
    resize(); paint(); if (!reduced) frame = requestAnimationFrame(draw); window.addEventListener('resize', resize); document.addEventListener('visibilitychange', onVisibilityChange);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); document.removeEventListener('visibilitychange', onVisibilityChange); };
  }, []);
  return <canvas className="neural-canvas" ref={ref} aria-hidden="true"/>;
}

function SectionHeading({ index, kicker, title, copy }: { index:string; kicker:string; title:string; copy?:string }) {
  return <div className="section-heading reveal"><p><span>{index}</span>{kicker}</p><h2>{title}</h2>{copy && <div className="heading-copy">{copy}</div>}</div>;
}

function TiltCard({ children, className = '' }: { children:React.ReactNode; className?:string }) {
  const onMove = (event: ReactMouseEvent<HTMLDivElement>) => { if (window.matchMedia('(pointer: coarse)').matches) return; const el = event.currentTarget; const r = el.getBoundingClientRect(); el.style.setProperty('--rx', `${((event.clientY-r.top)/r.height-.5)*-4}deg`); el.style.setProperty('--ry', `${((event.clientX-r.left)/r.width-.5)*5}deg`); };
  return <div className={`tilt ${className}`} onMouseMove={onMove} onMouseLeave={e => { e.currentTarget.style.setProperty('--rx','0deg'); e.currentTarget.style.setProperty('--ry','0deg'); }}>{children}</div>;
}

function AgentMark({ compact = false }: { compact?:boolean }) {
  return <div className={`agent-mark ${compact?'is-compact':''}`} aria-label="Identité visuelle de l’Agent IA du Fablab">
    <span className="agent-mark-core"><Bot/><i><Sparkles/></i></span>
    {!compact&&<span className="agent-mark-word"><b>AGENT IA</b><small>FABLAB · ASSISTANT</small></span>}
  </div>;
}

function PrototypeViewer({ front, back }: { front:string; back:string }) {
  const [flipped, setFlipped] = useState(false);
  const move = (event:ReactMouseEvent<HTMLButtonElement>) => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - .5) * 2;
    event.currentTarget.style.setProperty('--turn-y', `${x * 135}deg`);
    event.currentTarget.style.setProperty('--turn-x', `${y * -7}deg`);
  };
  const reset = (event:ReactMouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.setProperty('--turn-y', '0deg');
    event.currentTarget.style.setProperty('--turn-x', '0deg');
  };
  return <button className={`prototype-viewer ${flipped?'is-flipped':''}`} data-cursor="Tourner" onMouseMove={move} onMouseLeave={reset} onClick={()=>setFlipped(value=>!value)} aria-label="Faire tourner le prototype pour voir son recto ou son verso" aria-pressed={flipped}>
    <span className="prototype-instruction">Déplacez le curseur pour tourner · Touchez pour retourner</span>
    <span className="prototype-card">
      <span className="prototype-face prototype-front"><Image src={front} alt="Visualisation réaliste du prototype SmartGrow" fill sizes="(max-width: 760px) 92vw, 42vw"/><small>Visualisation du prototype</small></span>
      <span className="prototype-face prototype-back"><Image src={back} alt="Intérieur réel du boîtier électronique SmartGrow" fill sizes="(max-width: 760px) 92vw, 42vw"/><small>Intérieur réel du boîtier</small></span>
    </span>
  </button>;
}

function ProjectDialog({ project, onClose }: { project:Project|null; onClose:()=>void }) {
  return <Dialog open={Boolean(project)} onOpenChange={open => !open && onClose()}>
    {project && <DialogContent showCloseButton={false} style={{translate:'0px 0px'}} className={`project-dialog ${project.frontImage?'project-dialog-rich':''}`}>
      <div className="project-dialog-hero"><DialogHeader><DialogClose className="project-close-button" aria-label="Fermer la présentation du projet"><X size={20}/></DialogClose>{project.id==='agent-fablab'&&<AgentMark/>}<p className="dialog-eyebrow">{project.eyebrow}</p><DialogTitle>{project.title}</DialogTitle><DialogDescription>{project.description}</DialogDescription></DialogHeader>{project.frontImage&&project.backImage&&<PrototypeViewer front={project.frontImage} back={project.backImage}/>}</div>
      <div className="dialog-body">
        <section className="dialog-story dialog-story-main"><span>01 · Le projet</span><h3>{project.id==='smartgrow'?'Une irrigation guidée par l’état du sol.':project.id==='agent-fablab'?'Une information utile, au bon moment.':'Une idée, un objectif concret.'}</h3><p>{project.detail}</p></section>
        <section className="dialog-story"><span>02 · Outils clés</span><h3>Les technologies mobilisées.</h3><div className="tag-row">{project.technologies.map(item => <span key={item}>{item}</span>)}</div></section>
        <section className="dialog-story"><span>03 · Progression</span><h3>Les compétences développées.</h3><ul>{project.skills.map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul></section>
      </div>
      <section className="project-status-panel"><div><span>État d’avancement</span><h3>{project.status}</h3></div>{project.progressNote&&<p>{project.progressNote}</p>}</section>
      {project.steps.length>0&&<section className="build-process"><header><span>PROCESSUS TECHNIQUE</span><h3>{project.id==='smartgrow'?'Du sol à l’interface, étape par étape.':'De la question à la réponse, étape par étape.'}</h3><p>{project.id==='smartgrow'?'Chaque outil joue un rôle précis dans la chaîne de mesure, de décision et d’action.':'Chaque brique aide l’agent à comprendre la demande, retrouver le bon contexte et produire une réponse utile.'}</p></header><div className="build-steps">{project.steps.map(step=><article key={step.phase} className="build-step"><div className="step-heading"><span>{step.phase}</span><div><h4>{step.title}</h4><p>{step.summary}</p></div></div><div className="tool-list">{step.tools.map(tool=><div className="tool-item" key={tool.name}><h5>{tool.name}</h5><p>{tool.definition}</p><small><b>Principe :</b> {tool.principle}</small></div>)}</div></article>)}</div></section>}
    </DialogContent>}
  </Dialog>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [topic, setTopic] = useState(0); const [active, setActive] = useState('accueil'); const [project, setProject] = useState<Project|null>(null); const [formState, setFormState] = useState<'idle'|'ready'>('idle');
  const [greeting, setGreeting] = useState(0); const [introLeaving, setIntroLeaving] = useState(false); const [introDone, setIntroDone] = useState(false); const [transitionLabel, setTransitionLabel] = useState<string|null>(null);
  const transitionTimers = useRef<number[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const scrollFrame = useRef(0);
  const sceneFrame = useRef(0);
  const scenePointer = useRef({ x:0, y:0, scene:null as HTMLElement|null });
  useEffect(() => {
    const greetingTimer = window.setInterval(() => setGreeting(value => Math.min(value + 1, greetings.length - 1)), 190);
    const leaveTimer = window.setTimeout(() => setIntroLeaving(true), 1050);
    const doneTimer = window.setTimeout(() => setIntroDone(true), 1280);
    return () => { clearInterval(greetingTimer); clearTimeout(leaveTimer); clearTimeout(doneTimer); };
  }, []);
  useEffect(() => {
    const updateScroll = () => { const max = document.documentElement.scrollHeight - innerHeight; const ratio = max > 0 ? Math.min(scrollY / max, 1) : 0; setScrolled(previous => { const next = scrollY > 20; return previous === next ? previous : next; }); if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`; document.documentElement.style.setProperty('--scroll-shift', `${Math.min(scrollY * .075, 72)}px`); scrollFrame.current = 0; };
    const onScroll = () => { if (!scrollFrame.current) scrollFrame.current = requestAnimationFrame(updateScroll); };
    onScroll(); addEventListener('scroll', onScroll, { passive:true }); const timer = window.setInterval(() => setTopic(v => (v+1)%data.dynamicTopics.length), 2600);
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]')); const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin:'-38% 0px -55%' }); sections.forEach(s => observer.observe(s));
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); } }), { threshold:.12 }); document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
    return () => { cancelAnimationFrame(scrollFrame.current); cancelAnimationFrame(sceneFrame.current); removeEventListener('scroll', onScroll); clearInterval(timer); observer.disconnect(); reveal.disconnect(); transitionTimers.current.forEach(clearTimeout); };
  }, []);
  const runTransition = (label:string, action:()=>void) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { action(); return; }
    transitionTimers.current.forEach(clearTimeout); transitionTimers.current = [];
    setTransitionLabel(label);
    action();
    transitionTimers.current.push(window.setTimeout(() => setTransitionLabel(null), 460));
  };
  const navigateTo = (event:ReactMouseEvent<HTMLAnchorElement>, id:string, label:string) => {
    event.preventDefault(); setMenuOpen(false);
    runTransition(label, () => {
      document.getElementById(id)?.scrollIntoView({ behavior:'auto', block:'start' });
      history.replaceState(null, '', `#${id}`);
    });
  };
  const openProject = (item:Project) => runTransition(item.title, () => setProject(item));
  const openStage = (event:ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    runTransition('Stage Fablab', () => { window.location.href = '/stage-fablab'; });
  };
  const moveScene = (event: ReactMouseEvent<HTMLElement>) => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const scene = event.currentTarget.querySelector<HTMLElement>('.avatar-scene');
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    scenePointer.current = { x, y, scene };
    if (sceneFrame.current) return;
    sceneFrame.current = requestAnimationFrame(() => {
      const current = scenePointer.current; const target = current.scene;
      target?.style.setProperty('--scene-x', `${current.x * 28}px`);
      target?.style.setProperty('--scene-y', `${current.y * 20}px`);
      target?.style.setProperty('--avatar-ry', `${current.x * 8}deg`);
      target?.style.setProperty('--avatar-rx', `${current.y * -5}deg`);
      target?.style.setProperty('--orbit-x', `${current.x * -18}px`);
      target?.style.setProperty('--orbit-y', `${current.y * -14}px`);
      target?.style.setProperty('--orbit-x-reverse', `${current.x * 13}px`);
      target?.style.setProperty('--orbit-y-reverse', `${current.y * 10}px`);
      sceneFrame.current = 0;
    });
  };
  const resetScene = (event:ReactMouseEvent<HTMLElement>) => {
    const scene = event.currentTarget.querySelector<HTMLElement>('.avatar-scene');
    ['--scene-x','--scene-y','--orbit-x','--orbit-y','--orbit-x-reverse','--orbit-y-reverse'].forEach(name => scene?.style.setProperty(name, '0px'));
    scene?.style.setProperty('--avatar-rx', '0deg'); scene?.style.setProperty('--avatar-ry', '0deg');
  };
  const submit = (event: SyntheticEvent<HTMLFormElement>) => { event.preventDefault(); setFormState('ready'); event.currentTarget.reset(); };

  return <main>
    <div className="scroll-progress" ref={progressRef}/>
    {!introDone && <div className={`intro intro-languages intro-fast ${introLeaving?'is-leaving':''}`} aria-hidden="true"><div><span key={greeting}>{greetings[greeting]}</span><p>Bienvenue dans mon univers</p></div><i/></div>}
    <div className={`page-transition ${transitionLabel?'is-active':''}`} aria-hidden="true"><div><span>Explorer</span><strong>{transitionLabel}</strong></div></div><NeuralCanvas/>
    <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" data-cursor="Accueil" href="#accueil" onClick={event=>navigateTo(event,'accueil','Accueil')} aria-label="Retour à l’accueil"><span>Z.</span><b>Zinedine</b></a>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale">{nav.map(([label,id]) => <a key={id} data-cursor="Aller" className={active===id?'active':''} href={`#${id}`} onClick={event=>navigateTo(event,id,label)}>{label}</a>)}</nav>
      <a className="nav-cta" data-cursor="CV" href="#cv" onClick={event=>navigateTo(event,'cv','Curriculum vitæ')}><Download size={16}/> Télécharger mon CV</a><button className="menu-button" data-cursor="Menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen?'Fermer le menu':'Ouvrir le menu'} aria-expanded={menuOpen}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section id="accueil" className="hero" onMouseMove={moveScene} onMouseLeave={resetScene}><div className="grid-plane" aria-hidden="true"/><div className="orb orb-a"/><div className="orb orb-b"/>
      <div className="hero-copy"><p className="eyebrow"><Sparkles size={15}/> Portfolio · Parcours en construction</p><h1><span>Bonjour, je suis</span>{data.identity.firstName}<i>.</i></h1><p className="hero-title">{data.identity.title}</p><div className="topic-line"><span>Je construis dans</span><strong key={topic}>{data.dynamicTopics[topic]}</strong></div><p className="hero-lead">Je construis progressivement des solutions intelligentes à la rencontre du développement, de la recherche et de l’innovation.</p><div className="hero-actions"><a className="button button-primary magnetic" data-cursor="Aller" href="#parcours" onClick={event=>navigateTo(event,'parcours','Mon parcours')}>Découvrir mon parcours <ArrowDown size={17}/></a><a className="button button-secondary magnetic" data-cursor="Aller" href="#projets" onClick={event=>navigateTo(event,'projets','Mes projets')}>Voir mes projets <ArrowRight size={17}/></a></div><div className="social-row"><span>Profils à compléter</span><span className="social-disabled" title="LinkedIn à compléter"><Link size={18}/></span><span className="social-disabled" title="GitHub à compléter"><GitBranch size={18}/></span></div></div>
      <div className="avatar-scene" data-cursor="Bonjour"><div className="speech-bubble">Salut, moi c’est Zinedine 👋<small>Futur ingénieur et chercheur en intelligence artificielle.</small></div><div className="orbit orbit-one"><span>AI</span></div><div className="orbit orbit-two"><span>01</span></div><div className="avatar-halo"/><Image className="avatar" src={data.identity.avatar} alt="Avatar provisoire original de Zinedine" width={1024} height={1536} priority/><div className="avatar-card"><span>TRAJECTOIRE</span><b>Ingénierie × Recherche</b></div></div>
      <div className="hero-ambient-word" aria-hidden="true">ZINEDINE</div>
      <a className="scroll-cue" href="#a-propos" onClick={event=>navigateTo(event,'a-propos','À propos')}><span>Défiler pour explorer</span><i><ArrowDown size={15}/></i></a>
    </section><div className="discipline-marquee" aria-hidden="true"><div>{[...data.dynamicTopics,...data.dynamicTopics].map((item,index)=><span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div></div>

    <section id="a-propos" className="section about-section"><SectionHeading index="01" kicker="À propos" title="Curieux aujourd’hui. Utile demain."/><div className="about-grid"><div className="photo-frame reveal media-reveal" data-cursor="Portrait">{data.identity.photo?<Image src={data.identity.photo} alt="Portrait professionnel de Zinedine" fill/>:<><div className="photo-grid"/><UserRound size={74}/><span>PHOTO PROFESSIONNELLE</span><small>Emplacement à personnaliser</small></>}</div><div className="about-copy reveal"><p className="bio">{data.bio}</p><div className="quick-facts"><div><MapPin/><span>Localisation<b>{data.identity.location}</b></span></div><div><GraduationCap/><span>Formation<b>Génie Informatique</b></span></div><div><Brain/><span>Orientation<b>Intelligence artificielle</b></span></div><div><Target/><span>Ambition<b>Ingénieur et chercheur en IA</b></span></div></div></div></div></section>

    <section className="section interests-section"><SectionHeading index="02" kicker="Centres d’intérêt" title="Quatre territoires à explorer." copy="Des domaines complémentaires qui structurent mon projet professionnel et les solutions que je souhaite apprendre à construire."/><div className="interests-grid">{data.interests.map((item,index)=>{const Icon=interestIcons[index];return <TiltCard key={item.title} className="interest-card reveal"><div className="interest-number">0{index+1}</div><Icon/><h3>{item.title}</h3><p>{item.description}</p><div className="card-trace"/></TiltCard>})}</div></section>

    <section id="competences" className="section skills-section"><SectionHeading index="03" kicker="Axes d’apprentissage" title="Comprendre les principes. Construire avec intention." copy="Je développe actuellement une vision globale des domaines qui composeront mon futur métier, sans afficher de langages ni de niveaux artificiels."/><div className="skills-grid">{data.skills.map((skill,index)=>{const Icon=skillIcons[index];return <article className={`skill-panel learning-card reveal skill-${index+1}`} key={skill.title}><header><span><Icon size={21}/></span><h3>{skill.title}</h3></header><p className="learning-principle">{skill.principle}</p><div className="learning-objective"><span>Objectif</span><p>{skill.objective}</p></div></article>})}</div></section>

    <section id="parcours" className="section timeline-section"><SectionHeading index="04" kicker="Parcours" title="Chaque étape prépare la suivante." copy="Une trajectoire honnête, encore ouverte, entre formation, expérimentation et ambition scientifique."/><div className="timeline">{data.timeline.map((item,index)=><article className={`timeline-item reveal ${'href' in item?'is-clickable':''}`} key={item.title}><div className="timeline-index">{String(index+1).padStart(2,'0')}</div><div className="timeline-node"><span/></div><div className="timeline-content"><p>{item.date}</p><h3>{item.title}</h3><h4>{item.subtitle}</h4><div>{item.description}</div>{'href' in item&&<a className="timeline-link" href={item.href} onClick={openStage} data-cursor="Découvrir">Explorer les trois mois <ArrowRight size={17}/></a>}</div></article>)}</div></section>

    <section className="section engagement-section"><SectionHeading index="05" kicker="Engagement associatif" title="Rotaract Universiapolis." copy="Au-delà de la technique, je souhaite aussi progresser par l’action collective et les rencontres."/><article className="engagement-card reveal"><div className="engagement-icon"><Users/></div><div className="engagement-copy"><p>{data.engagement.label}</p><h3>{data.engagement.title}</h3><div>{data.engagement.description}</div></div><div className="engagement-objective"><span>Ce que cet engagement construit</span><p>{data.engagement.objective}</p><small>{data.engagement.note}</small></div></article></section>

    <section id="projets" className="section projects-section"><SectionHeading index="06" kicker="Travaux sélectionnés" title="Des idées qui prennent forme." copy="Chaque projet documente une étape réelle : explorer un problème, tester une piste et apprendre en construisant."/><div className="projects-showcase">{data.projects.map((item,index)=>{const Icon=projectIcons[index];return <article className={`project-feature project-${index+1} reveal`} key={item.id}><button className="project-hit" data-cursor="Voir" onClick={()=>openProject(item)} aria-label={`Voir les détails du projet ${item.title}`}><div className={`project-visual media-reveal ${item.image?'has-project-image':''} ${item.id==='agent-fablab'?'agent-project-visual':''}`}><div className="visual-grid"/>{item.image?<Image className="project-cover" src={item.image} alt={item.id==='smartgrow'?'Visualisation réaliste du prototype SmartGrow':`Illustration du projet ${item.title}`} fill sizes="(max-width: 1050px) 100vw, 58vw"/>:item.id==='agent-fablab'?<AgentMark/>:<Icon/>}<span className="project-index">{String(index+1).padStart(2,'0')}</span><span className="project-status">{item.status}</span></div><div className="project-info"><div className="project-kicker"><span>{String(index+1).padStart(2,'0')}</span><p>{item.eyebrow}</p></div><h3>{item.title}</h3><div>{item.description}</div><div className="project-footer"><span className="project-open">Découvrir <ArrowRight size={18}/></span></div></div></button></article>})}</div></section>

    <section id="objectifs" className="section goals-section"><SectionHeading index="07" kicker="Objectifs" title="Apprendre. Construire. Contribuer." copy="Un chemin progressif : consolider les fondations, créer des systèmes complets, puis contribuer aux avancées de l’intelligence artificielle."/><div className="goals-path"><div className="path-line"/>{data.goals.map((goal,index)=><article className="goal-card reveal" key={goal.horizon}><div className="goal-top"><span>{goal.index}</span>{index===0?<Radar/>:index===1?<Rocket/>:<Sparkles/>}</div><h3>{goal.horizon}</h3><ul>{goal.items.map(item=><li key={item}><ChevronRight size={15}/>{item}</li>)}</ul></article>)}</div></section>

    <section id="cv" className="section cv-section"><div className="cv-shell reveal"><div className="cv-preview"><div className="document"><header><span>ZT</span><div><b>Zinedine Tlemsani Benhattal</b><small>Génie Informatique · Intelligence artificielle</small></div></header><div className="doc-columns"><div><i/><i/><i/><i/><i/><i/></div><div><i/><i/><i/><i/></div></div><div className="placeholder-stamp">APERÇU À REMPLACER</div></div></div><div className="cv-copy"><p className="eyebrow"><FileText size={15}/> Curriculum vitæ</p><h2>Mon parcours, en une page.</h2><div>Le véritable fichier PDF n’est pas encore ajouté. L’emplacement est prêt : déposez le CV dans le dossier public, puis renseignez son chemin dans le fichier de données.</div><ul><li><Check/>Formation en Génie Informatique</li><li><Check/>Orientation intelligence artificielle</li><li><Check/>Projets et progression</li></ul>{data.identity.cv?<a className="button button-primary" href={data.identity.cv} download>Télécharger mon CV <Download size={17}/></a>:<span className="button button-disabled"><Download size={17}/> CV à ajouter</span>}</div></div></section>

    <section id="contact" className="section contact-section"><SectionHeading index="08" kicker="Contact" title="Construisons la suite." copy="Une idée, un projet étudiant ou simplement l’envie d’échanger autour de l’intelligence artificielle ?"/><div className="contact-grid"><aside className="contact-details reveal"><h3>Restons en contact</h3><p>Mes coordonnées publiques seront affichées ici une fois complétées.</p><div className="contact-link disabled"><Mail/><span>Adresse e-mail<b>À compléter</b></span></div><div className="contact-link disabled"><Link/><span>LinkedIn<b>Profil à compléter</b></span></div><div className="contact-link disabled"><GitBranch/><span>GitHub<b>Profil à compléter</b></span></div><small><Sparkles size={14}/> Basé à Agadir, Maroc</small></aside><form className="contact-form reveal" onSubmit={submit}><div className="field-row"><label>Nom<input name="name" required minLength={2} placeholder="Votre nom"/></label><label>E-mail<input name="email" required type="email" placeholder="vous@exemple.com"/></label></div><label>Sujet<input name="subject" required minLength={3} placeholder="Le sujet de votre message"/></label><label>Message<textarea name="message" required minLength={10} rows={6} placeholder="Écrivez votre message ici…"/></label><button className="button button-primary" type="submit">Préparer le message <Send size={17}/></button>{formState==='ready'&&<output className="form-note"><Check size={16}/> Formulaire validé. L’envoi sera disponible après connexion d’un service e-mail.</output>}<small>Interface locale : aucun message n’est transmis pour le moment. Connexion EmailJS, Resend ou API à configurer.</small></form></div></section>

    <footer><div><a className="brand" href="#accueil" onClick={event=>navigateTo(event,'accueil','Accueil')}><span>Z.</span><b>{data.identity.fullName}</b></a><p>Un parcours en construction entre ingénierie, IA et recherche.</p></div><div className="footer-meta"><span>© {new Date().getFullYear()} — Tous droits réservés</span><span>Conçu pour évoluer.</span></div><a className="back-top" href="#accueil" onClick={event=>navigateTo(event,'accueil','Accueil')} aria-label="Revenir en haut"><ArrowUp/></a></footer>
    <ProjectDialog project={project} onClose={()=>setProject(null)}/>
  </main>;
}
