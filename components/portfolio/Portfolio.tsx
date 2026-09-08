'use client';

import Image from 'next/image';
import {
  ArrowDown, ArrowRight, ArrowUp, Bot, Brain, Check, ChevronRight,
  CloudCog, Download, FileText, FlaskConical, GitBranch, GraduationCap,
  Layers3, Link, Mail, MapPin, Menu, Radar, Rocket, Send, Sparkles, Target, Terminal, UserRound, Users, X,
} from 'lucide-react';
import type { MouseEvent as ReactMouseEvent, SyntheticEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { portfolioData as data, type Project } from '@/app/data/portfolio';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const nav = [['Accueil', 'accueil'], ['À propos', 'a-propos'], ['Compétences', 'competences'], ['Parcours', 'parcours'], ['Projets', 'projets'], ['Objectifs', 'objectifs'], ['CV', 'cv'], ['Contact', 'contact']] as const;
const interestIcons = [Brain, FlaskConical, CloudCog, Bot];
const skillIcons = [Layers3, Sparkles, Bot, CloudCog, FlaskConical];
const projectIcons = [Brain, Bot, Terminal, Layers3];

function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = cursor.current;
    if (!element || !window.matchMedia('(pointer: fine)').matches) return;
    const move = (event: PointerEvent) => {
      element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      const target = (event.target as Element | null)?.closest<HTMLElement>('[data-cursor]');
      element.classList.toggle('is-active', Boolean(target));
      element.querySelector('span')!.textContent = target?.dataset.cursor || '';
    };
    const leave = () => element.classList.add('is-hidden');
    const enter = () => element.classList.remove('is-hidden');
    addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    document.documentElement.addEventListener('mouseenter', enter);
    return () => { removeEventListener('pointermove', move); document.documentElement.removeEventListener('mouseleave', leave); document.documentElement.removeEventListener('mouseenter', enter); };
  }, []);
  return <div className="custom-cursor" ref={cursor} aria-hidden="true"><span/></div>;
}

function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const context = canvas.getContext('2d'); if (!context) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0; let width = 0; let height = 0; let points: { x:number; y:number; vx:number; vy:number }[] = [];
    const resize = () => { const ratio = Math.min(window.devicePixelRatio || 1, 1.5); width = canvas.clientWidth; height = canvas.clientHeight; canvas.width = width * ratio; canvas.height = height * ratio; context.setTransform(ratio, 0, 0, ratio, 0, 0); points = Array.from({ length: width < 700 ? 22 : 48 }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18 })); };
    const draw = () => { context.clearRect(0, 0, width, height); points.forEach((p, index) => { if (!reduced) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > width) p.vx *= -1; if (p.y < 0 || p.y > height) p.vy *= -1; } points.slice(index + 1).forEach(q => { const distance = Math.hypot(p.x - q.x, p.y - q.y); if (distance < 130) { context.beginPath(); context.strokeStyle = `rgba(49,215,255,${(1 - distance / 130) * .16})`; context.moveTo(p.x, p.y); context.lineTo(q.x, q.y); context.stroke(); } }); context.beginPath(); context.fillStyle = 'rgba(125,230,255,.48)'; context.arc(p.x, p.y, 1.25, 0, Math.PI * 2); context.fill(); }); if (!reduced) frame = requestAnimationFrame(draw); };
    resize(); draw(); window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); };
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

function ProjectDialog({ project, onClose }: { project:Project|null; onClose:()=>void }) {
  return <Dialog open={Boolean(project)} onOpenChange={open => !open && onClose()}>
    {project && <DialogContent className="project-dialog">
      <DialogHeader><p className="dialog-eyebrow">{project.eyebrow}</p><DialogTitle>{project.title}</DialogTitle><DialogDescription>{project.description}</DialogDescription></DialogHeader>
      <div className="dialog-body"><div><h4>À propos du projet</h4><p>{project.detail}</p></div><div><h4>Technologies</h4><div className="tag-row">{project.technologies.map(item => <span key={item}>{item}</span>)}</div></div><div><h4>Compétences développées</h4><ul>{project.skills.map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul></div></div>
      <div className="dialog-status"><span>Statut actuel</span><b>{project.status}</b></div>
    </DialogContent>}
  </Dialog>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [topic, setTopic] = useState(0); const [active, setActive] = useState('accueil'); const [progress, setProgress] = useState(0); const [project, setProject] = useState<Project|null>(null); const [formState, setFormState] = useState<'idle'|'ready'>('idle');
  useEffect(() => {
    const onScroll = () => { const max = document.documentElement.scrollHeight - innerHeight; setScrolled(scrollY > 20); setProgress(max > 0 ? (scrollY/max)*100 : 0); document.documentElement.style.setProperty('--scroll-shift', `${Math.min(scrollY * .075, 72)}px`); };
    onScroll(); addEventListener('scroll', onScroll, { passive:true }); const timer = window.setInterval(() => setTopic(v => (v+1)%data.dynamicTopics.length), 2600);
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]')); const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin:'-38% 0px -55%' }); sections.forEach(s => observer.observe(s));
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); } }), { threshold:.12 }); document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
    return () => { removeEventListener('scroll', onScroll); clearInterval(timer); observer.disconnect(); reveal.disconnect(); };
  }, []);
  const moveScene = (event: ReactMouseEvent<HTMLElement>) => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const scene = event.currentTarget.querySelector<HTMLElement>('.avatar-scene');
    scene?.style.setProperty('--scene-x', `${((event.clientX - rect.left) / rect.width - .5) * 10}px`);
    scene?.style.setProperty('--scene-y', `${((event.clientY - rect.top) / rect.height - .5) * 8}px`);
  };
  const submit = (event: SyntheticEvent<HTMLFormElement>) => { event.preventDefault(); setFormState('ready'); event.currentTarget.reset(); };

  return <main>
    <CustomCursor/><div className="scroll-progress" style={{ width:`${progress}%` }}/><div className="intro" aria-hidden="true"><span>Z</span><p>Zinedine</p></div><NeuralCanvas/>
    <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" data-cursor="Accueil" href="#accueil" aria-label="Retour à l’accueil"><span>Z.</span><b>Zinedine</b></a>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale">{nav.map(([label,id]) => <a key={id} data-cursor="Explorer" className={active===id?'active':''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="nav-cta" data-cursor="CV" href="#cv"><Download size={16}/> Télécharger mon CV</a><button className="menu-button" data-cursor="Menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen?'Fermer le menu':'Ouvrir le menu'} aria-expanded={menuOpen}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section id="accueil" className="hero" onMouseMove={moveScene}><div className="grid-plane" aria-hidden="true"/><div className="orb orb-a"/><div className="orb orb-b"/>
      <div className="hero-copy"><p className="eyebrow"><Sparkles size={15}/> Portfolio · Parcours en construction</p><h1><span>Bonjour, je suis</span>{data.identity.firstName}<i>.</i></h1><p className="hero-title">{data.identity.title}</p><div className="topic-line"><span>Je construis dans</span><strong key={topic}>{data.dynamicTopics[topic]}</strong></div><p className="hero-lead">Je construis progressivement des solutions intelligentes à la rencontre du développement, de la recherche et de l’innovation.</p><div className="hero-actions"><a className="button button-primary magnetic" data-cursor="Explorer" href="#parcours">Découvrir mon parcours <ArrowDown size={17}/></a><a className="button button-secondary magnetic" data-cursor="Projets" href="#projets">Voir mes projets <ArrowRight size={17}/></a></div><div className="social-row"><span>Profils à compléter</span><span className="social-disabled" title="LinkedIn à compléter"><Link size={18}/></span><span className="social-disabled" title="GitHub à compléter"><GitBranch size={18}/></span></div></div>
      <div className="avatar-scene" data-cursor="Bonjour"><div className="speech-bubble">Salut, moi c’est Zinedine 👋<small>Futur ingénieur et chercheur en intelligence artificielle.</small></div><div className="orbit orbit-one"><span>AI</span></div><div className="orbit orbit-two"><span>01</span></div><div className="avatar-halo"/><Image className="avatar" src={data.identity.avatar} alt="Avatar provisoire original de Zinedine" width={1024} height={1536} priority/><div className="avatar-card"><span>TRAJECTOIRE</span><b>Ingénierie × Recherche</b></div></div>
      <div className="hero-ambient-word" aria-hidden="true">ZINEDINE</div>
      <a className="scroll-cue" href="#a-propos"><span>Défiler pour explorer</span><i><ArrowDown size={15}/></i></a>
    </section><div className="discipline-marquee" aria-hidden="true"><div>{[...data.dynamicTopics,...data.dynamicTopics].map((item,index)=><span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div></div>

    <section id="a-propos" className="section about-section"><SectionHeading index="01" kicker="À propos" title="Curieux aujourd’hui. Utile demain."/><div className="about-grid"><div className="photo-frame reveal media-reveal" data-cursor="Portrait">{data.identity.photo?<Image src={data.identity.photo} alt="Portrait professionnel de Zinedine" fill/>:<><div className="photo-grid"/><UserRound size={74}/><span>PHOTO PROFESSIONNELLE</span><small>Emplacement à personnaliser</small></>}</div><div className="about-copy reveal"><p className="bio">{data.bio}</p><div className="quick-facts"><div><MapPin/><span>Localisation<b>{data.identity.location}</b></span></div><div><GraduationCap/><span>Formation<b>Génie Informatique</b></span></div><div><Brain/><span>Orientation<b>Intelligence artificielle</b></span></div><div><Target/><span>Ambition<b>Ingénieur et chercheur en IA</b></span></div></div></div></div></section>

    <section className="section interests-section"><SectionHeading index="02" kicker="Centres d’intérêt" title="Quatre territoires à explorer." copy="Des domaines complémentaires qui structurent mon projet professionnel et les solutions que je souhaite apprendre à construire."/><div className="interests-grid">{data.interests.map((item,index)=>{const Icon=interestIcons[index];return <TiltCard key={item.title} className="interest-card reveal"><div className="interest-number">0{index+1}</div><Icon/><h3>{item.title}</h3><p>{item.description}</p><div className="card-trace"/></TiltCard>})}</div></section>

    <section id="competences" className="section skills-section"><SectionHeading index="03" kicker="Axes d’apprentissage" title="Comprendre les principes. Construire avec intention." copy="Je développe actuellement une vision globale des domaines qui composeront mon futur métier, sans afficher de langages ni de niveaux artificiels."/><div className="skills-grid">{data.skills.map((skill,index)=>{const Icon=skillIcons[index];return <article className={`skill-panel learning-card reveal skill-${index+1}`} key={skill.title}><header><span><Icon size={21}/></span><h3>{skill.title}</h3></header><p className="learning-principle">{skill.principle}</p><div className="learning-objective"><span>Objectif</span><p>{skill.objective}</p></div></article>})}</div></section>

    <section id="parcours" className="section timeline-section"><SectionHeading index="04" kicker="Parcours" title="Chaque étape prépare la suivante." copy="Une trajectoire honnête, encore ouverte, entre formation, expérimentation et ambition scientifique."/><div className="timeline">{data.timeline.map((item,index)=><article className="timeline-item reveal" key={item.title}><div className="timeline-index">{String(index+1).padStart(2,'0')}</div><div className="timeline-node"><span/></div><div className="timeline-content"><p>{item.date}</p><h3>{item.title}</h3><h4>{item.subtitle}</h4><div>{item.description}</div></div></article>)}</div></section>

    <section className="section engagement-section"><SectionHeading index="05" kicker="Engagement associatif" title="Rotaract Universiapolis." copy="Au-delà de la technique, je souhaite aussi progresser par l’action collective et les rencontres."/><article className="engagement-card reveal"><div className="engagement-icon"><Users/></div><div className="engagement-copy"><p>{data.engagement.label}</p><h3>{data.engagement.title}</h3><div>{data.engagement.description}</div></div><div className="engagement-objective"><span>Ce que cet engagement construit</span><p>{data.engagement.objective}</p><small>{data.engagement.note}</small></div></article></section>

    <section id="projets" className="section projects-section"><SectionHeading index="06" kicker="Travaux sélectionnés" title="Des idées qui prennent forme." copy="Chaque projet documente une étape réelle : explorer un problème, tester une piste et apprendre en construisant."/><div className="projects-showcase">{data.projects.map((item,index)=>{const Icon=projectIcons[index];return <article className={`project-feature project-${index+1} reveal`} key={item.id}><button className="project-hit" data-cursor="Voir le projet" onClick={()=>setProject(item)} aria-label={`Voir les détails du projet ${item.title}`}><div className="project-visual media-reveal"><div className="visual-grid"/><span className="project-index">{String(index+1).padStart(2,'0')}</span><Icon/><span className="project-status">{item.status}</span></div><div className="project-info"><div className="project-kicker"><span>{String(index+1).padStart(2,'0')}</span><p>{item.eyebrow}</p></div><h3>{item.title}</h3><div>{item.description}</div><div className="project-footer"><div className="tag-row">{item.technologies.slice(0,2).map(t=><span key={t}>{t}</span>)}</div><span className="project-open">Découvrir <ArrowRight size={18}/></span></div></div></button></article>})}</div></section>

    <section id="objectifs" className="section goals-section"><SectionHeading index="07" kicker="Objectifs" title="Apprendre. Construire. Contribuer." copy="Un chemin progressif : consolider les fondations, créer des systèmes complets, puis contribuer aux avancées de l’intelligence artificielle."/><div className="goals-path"><div className="path-line"/>{data.goals.map((goal,index)=><article className="goal-card reveal" key={goal.horizon}><div className="goal-top"><span>{goal.index}</span>{index===0?<Radar/>:index===1?<Rocket/>:<Sparkles/>}</div><h3>{goal.horizon}</h3><ul>{goal.items.map(item=><li key={item}><ChevronRight size={15}/>{item}</li>)}</ul></article>)}</div></section>

    <section id="cv" className="section cv-section"><div className="cv-shell reveal"><div className="cv-preview"><div className="document"><header><span>ZT</span><div><b>Zinedine Tlemsani Benhattal</b><small>Génie Informatique · Intelligence artificielle</small></div></header><div className="doc-columns"><div><i/><i/><i/><i/><i/><i/></div><div><i/><i/><i/><i/></div></div><div className="placeholder-stamp">APERÇU À REMPLACER</div></div></div><div className="cv-copy"><p className="eyebrow"><FileText size={15}/> Curriculum vitæ</p><h2>Mon parcours, en une page.</h2><div>Le véritable fichier PDF n’est pas encore ajouté. L’emplacement est prêt : déposez le CV dans le dossier public, puis renseignez son chemin dans le fichier de données.</div><ul><li><Check/>Formation en Génie Informatique</li><li><Check/>Orientation intelligence artificielle</li><li><Check/>Projets et progression</li></ul>{data.identity.cv?<a className="button button-primary" href={data.identity.cv} download>Télécharger mon CV <Download size={17}/></a>:<span className="button button-disabled"><Download size={17}/> CV à ajouter</span>}</div></div></section>

    <section id="contact" className="section contact-section"><SectionHeading index="08" kicker="Contact" title="Construisons la suite." copy="Une idée, un projet étudiant ou simplement l’envie d’échanger autour de l’intelligence artificielle ?"/><div className="contact-grid"><aside className="contact-details reveal"><h3>Restons en contact</h3><p>Mes coordonnées publiques seront affichées ici une fois complétées.</p><div className="contact-link disabled"><Mail/><span>Adresse e-mail<b>À compléter</b></span></div><div className="contact-link disabled"><Link/><span>LinkedIn<b>Profil à compléter</b></span></div><div className="contact-link disabled"><GitBranch/><span>GitHub<b>Profil à compléter</b></span></div><small><Sparkles size={14}/> Basé à Agadir, Maroc</small></aside><form className="contact-form reveal" onSubmit={submit}><div className="field-row"><label>Nom<input name="name" required minLength={2} placeholder="Votre nom"/></label><label>E-mail<input name="email" required type="email" placeholder="vous@exemple.com"/></label></div><label>Sujet<input name="subject" required minLength={3} placeholder="Le sujet de votre message"/></label><label>Message<textarea name="message" required minLength={10} rows={6} placeholder="Écrivez votre message ici…"/></label><button className="button button-primary" type="submit">Préparer le message <Send size={17}/></button>{formState==='ready'&&<output className="form-note"><Check size={16}/> Formulaire validé. L’envoi sera disponible après connexion d’un service e-mail.</output>}<small>Interface locale : aucun message n’est transmis pour le moment. Connexion EmailJS, Resend ou API à configurer.</small></form></div></section>

    <footer><div><a className="brand" href="#accueil"><span>Z.</span><b>{data.identity.fullName}</b></a><p>Un parcours en construction entre ingénierie, IA et recherche.</p></div><div className="footer-meta"><span>© {new Date().getFullYear()} — Tous droits réservés</span><span>Conçu pour évoluer.</span></div><a className="back-top" href="#accueil" aria-label="Revenir en haut"><ArrowUp/></a></footer>
    <ProjectDialog project={project} onClose={()=>setProject(null)}/>
  </main>;
}
