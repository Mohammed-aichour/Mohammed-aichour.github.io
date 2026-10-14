'use client';

import Image from 'next/image';
import {
  ArrowDown, ArrowRight, ArrowUp, Bot, BrainCircuit, Check, ChevronRight,
  Code2, Database, Download, ExternalLink, FileText, GitBranch, Globe,
  GraduationCap, Layers3, Link, Mail, MapPin, Menu, Phone, Radar,
  Rocket, Send, Shield, Sparkles, Target, Terminal, UserRound, Wrench, X,
  Search, Lock, GitFork, BookOpen,
} from 'lucide-react';
import type { MouseEvent as ReactMouseEvent, SyntheticEvent } from 'react';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { portfolioData as data, type Project, type GithubRepo } from '@/app/data/portfolio';

const ProjectDialog = lazy(() => import('./ProjectDialog'));

const nav = [
  ['Accueil', 'accueil'],
  ['À propos', 'a-propos'],
  ['Compétences', 'competences'],
  ['Parcours', 'parcours'],
  ['Projets', 'projets'],
  ['Catalogue GitHub', 'catalogue-github'],
  ['Objectifs', 'objectifs'],
  ['CV', 'cv'],
  ['Contact', 'contact'],
] as const;

const interestIcons = [Layers3, Shield, BrainCircuit, Wrench];
const skillIcons = [Code2, Shield, Layers3, Database, Terminal];
const projectIcons = [Layers3, Bot, Globe, Terminal, Database, Globe];
const greetings = ['Bonjour', 'Hello', 'Salam', 'Marhaban', 'Bienvenue'];
const projectCategories = ['Tous', 'Full-Stack & GMAO', 'Vision par Ordinateur & IA', 'Web & Événementiel', 'Systèmes & Outils'] as const;

function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let points: { x: number; y: number; vx: number; vy: number }[] = [];
    let lastPaint = 0;
    let isVisible = true;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = Array.from({ length: width < 700 ? 12 : 24 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
      }));
    };

    const paint = () => {
      context.clearRect(0, 0, width, height);
      if (!reduced) {
        for (let i = 0; i < points.length; i += 1) {
          const p = points[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
      }

      // Batch all lines into a single stroke call
      context.beginPath();
      context.strokeStyle = 'rgba(49,215,255,0.08)';
      context.lineWidth = 0.75;
      for (let i = 0; i < points.length; i += 1) {
        const p = points[i];
        for (let j = i + 1; j < points.length; j += 1) {
          const q = points[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          if (dx * dx + dy * dy < 16900) {
            context.moveTo(p.x, p.y);
            context.lineTo(q.x, q.y);
          }
        }
      }
      context.stroke();

      // Batch all dots into a single fill call
      context.beginPath();
      context.fillStyle = 'rgba(125,230,255,0.4)';
      for (let i = 0; i < points.length; i += 1) {
        const p = points[i];
        context.moveTo(p.x + 1.2, p.y);
        context.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
      }
      context.fill();
    };

    const draw = (time = 0) => {
      if (!isVisible || reduced || document.hidden) return;
      if (time - lastPaint >= 33) {
        paint();
        lastPaint = time;
      }
      frame = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (isVisible && !reduced && !document.hidden) {
        frame = requestAnimationFrame(draw);
      }
    }, { threshold: 0.05 });
    observer.observe(canvas);

    const onVisibilityChange = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden && !reduced && isVisible) frame = requestAnimationFrame(draw);
    };

    resize();
    paint();
    if (!reduced) frame = requestAnimationFrame(draw);
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return <canvas className="neural-canvas" ref={ref} aria-hidden="true" />;
}

function SectionHeading({ index, kicker, title, copy }: { index: string; kicker: string; title: string; copy?: string }) {
  return (
    <div className="section-heading reveal">
      <p><span>{index}</span>{kicker}</p>
      <h2>{title}</h2>
      {copy && <div className="heading-copy">{copy}</div>}
    </div>
  );
}

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const onMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = event.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--rx', `${((event.clientY - r.top) / r.height - 0.5) * -4}deg`);
    el.style.setProperty('--ry', `${((event.clientX - r.left) / r.width - 0.5) * 5}deg`);
  };

  return (
    <div
      className={`tilt ${className}`}
      onMouseMove={onMove}
      onMouseLeave={e => {
        e.currentTarget.style.setProperty('--rx', '0deg');
        e.currentTarget.style.setProperty('--ry', '0deg');
      }}
    >
      {children}
    </div>
  );
}

function AgentMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`agent-mark ${compact ? 'is-compact' : ''}`} aria-label="Identité visuelle de l’Agent IA GMA LAB">
      <span className="agent-mark-core"><Bot /><i><Sparkles /></i></span>
      {!compact && <span className="agent-mark-word"><b>ASSISTANT IA</b><small>GMA LAB · FAB LAB</small></span>}
    </div>
  );
}


export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topic, setTopic] = useState(0);
  const [active, setActive] = useState('accueil');
  const [project, setProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [repoSearch, setRepoSearch] = useState('');
  const [repoVisibility, setRepoVisibility] = useState<string>('Tous');
  const [formState, setFormState] = useState<'idle' | 'ready'>('idle');
  const [greeting, setGreeting] = useState(0);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [transitionLabel, setTransitionLabel] = useState<string | null>(null);

  const transitionTimers = useRef<number[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const ambientWordRef = useRef<HTMLDivElement>(null);
  const scrollFrame = useRef(0);
  const sceneFrame = useRef(0);
  const scenePointer = useRef({ x: 0, y: 0, scene: null as HTMLElement | null });

  useEffect(() => {
    if (window.location.hash) {
      setIntroDone(true);
      return;
    }
    const greetingTimer = window.setInterval(() => setGreeting(value => Math.min(value + 1, greetings.length - 1)), 150);
    const leaveTimer = window.setTimeout(() => setIntroLeaving(true), 700);
    const doneTimer = window.setTimeout(() => setIntroDone(true), 950);
    return () => {
      clearInterval(greetingTimer);
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const ratio = max > 0 ? Math.min(scrollY / max, 1) : 0;
      setScrolled(previous => {
        const next = scrollY > 20;
        return previous === next ? previous : next;
      });
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
      if (ambientWordRef.current) {
        const shift = Math.min(scrollY * 0.075, 72) * -0.35;
        ambientWordRef.current.style.transform = `translate3d(${shift}px, 0, 0)`;
      }
      scrollFrame.current = 0;
    };

    const onScroll = () => {
      if (!scrollFrame.current) scrollFrame.current = requestAnimationFrame(updateScroll);
    };

    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    const timer = window.setInterval(() => setTopic(v => (v + 1) % data.dynamicTopics.length), 2600);
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      }),
      { rootMargin: '-38% 0px -55%' }
    );
    sections.forEach(s => observer.observe(s));
    const reveal = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          reveal.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
    return () => {
      cancelAnimationFrame(scrollFrame.current);
      cancelAnimationFrame(sceneFrame.current);
      removeEventListener('scroll', onScroll);
      clearInterval(timer);
      observer.disconnect();
      reveal.disconnect();
      transitionTimers.current.forEach(clearTimeout);
    };
  }, []);

  const runTransition = (label: string, action: () => void) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      action();
      return;
    }
    transitionTimers.current.forEach(clearTimeout);
    transitionTimers.current = [];
    setTransitionLabel(label);
    action();
    transitionTimers.current.push(window.setTimeout(() => setTransitionLabel(null), 460));
  };

  const navigateTo = (event: ReactMouseEvent<HTMLAnchorElement>, id: string, label: string) => {
    event.preventDefault();
    setMenuOpen(false);
    runTransition(label, () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    });
  };

  const openProject = (item: Project) => runTransition(item.title, () => setProject(item));
  const openStage = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    runTransition('Stage Fablab', () => { window.location.href = '/stage-fablab'; });
  };

  const moveScene = (event: ReactMouseEvent<HTMLElement>) => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const scene = event.currentTarget.querySelector<HTMLElement>('.avatar-scene');
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    scenePointer.current = { x, y, scene };
    if (sceneFrame.current) return;
    sceneFrame.current = requestAnimationFrame(() => {
      const current = scenePointer.current;
      const target = current.scene;
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

  const resetScene = (event: ReactMouseEvent<HTMLElement>) => {
    const scene = event.currentTarget.querySelector<HTMLElement>('.avatar-scene');
    ['--scene-x', '--scene-y', '--orbit-x', '--orbit-y', '--orbit-x-reverse', '--orbit-y-reverse'].forEach(name => scene?.style.setProperty(name, '0px'));
    scene?.style.setProperty('--avatar-rx', '0deg');
    scene?.style.setProperty('--avatar-ry', '0deg');
  };

  const submit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('ready');
    event.currentTarget.reset();
  };

  return (
    <main>
      <div className="scroll-progress" ref={progressRef} />
      {!introDone && (
        <div className={`intro intro-languages intro-fast ${introLeaving ? 'is-leaving' : ''}`} aria-hidden="true">
          <div>
            <span key={greeting}>{greetings[greeting]}</span>
            <p>Bienvenue dans mon univers</p>
          </div>
          <i />
        </div>
      )}
      <div className={`page-transition ${transitionLabel ? 'is-active' : ''}`} aria-hidden="true">
        <div>
          <span>Explorer</span>
          <strong>{transitionLabel}</strong>
        </div>
      </div>
      <NeuralCanvas />

      <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" data-cursor="Accueil" href="#accueil" onClick={event => navigateTo(event, 'accueil', 'Accueil')} aria-label="Retour à l’accueil">
          <span>M.</span><b>{data.identity.fullName}</b>
        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale">
          {nav.map(([label, id]) => (
            <a key={id} data-cursor="Aller" className={active === id ? 'active' : ''} href={`#${id}`} onClick={event => navigateTo(event, id, label)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" data-cursor="CV" href="#cv" onClick={event => navigateTo(event, 'cv', 'Curriculum vitæ')}>
          <Download size={16} /> Télécharger mon CV
        </a>
        <button className="menu-button" data-cursor="Menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="accueil" className="hero" onMouseMove={moveScene} onMouseLeave={resetScene}>
        <div className="grid-plane" aria-hidden="true" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> Portfolio Officiel · Élève Ingénieur</p>
          <h1><span>Bonjour, je suis</span>{data.identity.firstName}<i>.</i></h1>
          <p className="hero-title">{data.identity.title}</p>
          <div className="topic-line">
            <span>Spécialisation & Passion :</span>
            <strong key={topic}>{data.dynamicTopics[topic]}</strong>
          </div>
          <p className="hero-lead">
            Étudiant en 2ᵉᵐᵉ année du Cycle d’Ingénieur en Génie Informatique à l’École Polytechnique d’Agadir – Universiapolis (Option Cybersécurité & Réseaux).
            Je conçois des solutions logicielles complètes, performantes et sécurisées, de la modélisation jusqu’au déploiement.
          </p>
          <div className="hero-actions">
            <a className="button button-primary magnetic" data-cursor="Aller" href="#parcours" onClick={event => navigateTo(event, 'parcours', 'Mon parcours')}>
              Découvrir mon parcours <ArrowDown size={17} />
            </a>
            <a className="button button-secondary magnetic" data-cursor="Aller" href="#projets" onClick={event => navigateTo(event, 'projets', 'Mes projets')}>
              Voir mes projets <ArrowRight size={17} />
            </a>
          </div>
          <div className="social-row">
            <span>Réseaux</span>
            <a href={data.identity.linkedin} target="_blank" rel="noopener noreferrer" className="social-active" title="LinkedIn" aria-label="LinkedIn">
              <Link size={18} />
            </a>
            <a href={data.identity.github} target="_blank" rel="noopener noreferrer" className="social-active" title="GitHub" aria-label="GitHub">
              <GitBranch size={18} />
            </a>
            <a href={`mailto:${data.identity.email}`} className="social-active" title="Email" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="avatar-scene" data-cursor="Bonjour">
          <div className="speech-bubble">
            Salut, moi c’est Mohammed 👋
            <small>Élève Ingénieur en Génie Informatique · Cybersécurité & Full Stack.</small>
          </div>
          <div className="orbit orbit-one"><span>CYBER</span></div>
          <div className="orbit orbit-two"><span>DEV</span></div>
          <div className="avatar-halo" />
          <Image
            className="avatar"
            src={data.identity.avatar}
            alt={`Portrait officiel de ${data.identity.fullName}`}
            width={800}
            height={1000}
            priority
          />
          <div className="avatar-card">
            <span>TRAJECTOIRE</span>
            <b>Cybersécurité × Full Stack</b>
          </div>
        </div>
        <div className="hero-ambient-word" ref={ambientWordRef} aria-hidden="true">MOHAMMED</div>
        <a className="scroll-cue" href="#a-propos" onClick={event => navigateTo(event, 'a-propos', 'À propos')}>
          <span>Défiler pour explorer</span><i><ArrowDown size={15} /></i>
        </a>
      </section>

      <div className="discipline-marquee" aria-hidden="true">
        <div>
          {[...data.dynamicTopics, ...data.dynamicTopics].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section id="a-propos" className="section about-section">
        <SectionHeading index="01" kicker="À propos" title="Rigueur, curiosité et passion pour l’ingénierie." />
        <div className="about-grid">
          <div className="photo-frame reveal media-reveal" data-cursor="Portrait">
            {data.identity.photo ? (
              <Image src={data.identity.photo} alt={`Portrait officiel de ${data.identity.fullName}`} fill sizes="(max-width: 820px) 100vw, 42vw" />
            ) : (
              <>
                <div className="photo-grid" />
                <UserRound size={74} />
                <span>PHOTO PROFESSIONNELLE</span>
              </>
            )}
          </div>
          <div className="about-copy reveal">
            <p className="bio">{data.bio}</p>
            <div className="quick-facts">
              <div><MapPin /><span>Localisation<b>{data.identity.location}</b></span></div>
              <div><GraduationCap /><span>Formation<b>Génie Informatique (Universiapolis)</b></span></div>
              <div><Shield /><span>Option<b>{data.identity.option}</b></span></div>
              <div><Target /><span>Ambition<b>{data.identity.ambition}</b></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section interests-section">
        <SectionHeading
          index="02"
          kicker="Centres d’intérêt"
          title="Quatre piliers technologiques majeurs."
          copy="Des domaines complémentaires qui structurent mon projet d’ingénieur et les solutions concrètes que je développe."
        />
        <div className="interests-grid">
          {data.interests.map((item, index) => {
            const Icon = interestIcons[index % interestIcons.length];
            return (
              <TiltCard key={item.title} className="interest-card reveal">
                <div className="interest-number">0{index + 1}</div>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-trace" />
              </TiltCard>
            );
          })}
        </div>
      </section>

      <section id="competences" className="section skills-section">
        <SectionHeading
          index="03"
          kicker="Domaines d’expertise"
          title="Maîtriser les fondations. Concevoir avec rigueur."
          copy="Un socle solide combinant le développement Full Stack moderne, la cybersécurité, les protocoles réseaux et la modélisation système."
        />
        <div className="skills-grid">
          {data.skills.map((skill, index) => {
            const Icon = skillIcons[index % skillIcons.length];
            return (
              <article className={`skill-panel learning-card reveal skill-${index + 1}`} key={skill.title}>
                <header>
                  <span><Icon size={21} /></span>
                  <h3>{skill.title}</h3>
                </header>
                <p className="learning-principle">{skill.principle}</p>
                <div className="learning-objective">
                  <span>Compétences & Outils</span>
                  <p>{skill.objective}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="parcours" className="section timeline-section">
        <SectionHeading
          index="04"
          kicker="Parcours académique & professionnel"
          title="Une trajectoire continue d’apprentissage et d’impact."
          copy="De la formation scientifique aux projets industriels en Fab Lab et aux certifications professionnelles."
        />
        <div className="timeline">
          {data.timeline.map((item, index) => (
            <article className={`timeline-item reveal ${'href' in item ? 'is-clickable' : ''}`} key={`${item.title}-${index}`}>
              <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="timeline-node"><span /></div>
              <div className="timeline-content">
                <p>{item.date}</p>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <div>{item.description}</div>
                {'href' in item && (
                  <a className="timeline-link" href={item.href} onClick={openStage} data-cursor="Découvrir">
                    Consulter le détail du stage Fab Lab <ArrowRight size={17} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section engagement-section">
        <SectionHeading
          index="05"
          kicker="Engagement technique"
          title="Fab Lab & Écosystème Universiapolis."
          copy="L’ingénierie au service du terrain : accompagnement, maintenance des systèmes et support opérationnel."
        />
        <article className="engagement-card reveal">
          <div className="engagement-icon"><Wrench /></div>
          <div className="engagement-copy">
            <p>{data.engagement.label}</p>
            <h3>{data.engagement.title}</h3>
            <div>{data.engagement.description}</div>
          </div>
          <div className="engagement-objective">
            <span>Ce que cet engagement renforce</span>
            <p>{data.engagement.objective}</p>
            <small>{data.engagement.note}</small>
          </div>
        </article>
      </section>

      <section id="projets" className="section projects-section">
        <SectionHeading
          index="06"
          kicker="Travaux & Projets sélectionnés"
          title="Des réalisations concrètes et opérationnelles."
          copy="Chaque projet illustre une étape d’ingénierie : de l'analyse fonctionnelle au développement, à la sécurité et au déploiement en production."
        />
        <div className="project-filter-bar reveal" role="tablist" aria-label="Filtrer les projets par domaine">
          {projectCategories.map(cat => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-showcase">
          {data.projects
            .filter(item => selectedCategory === 'Tous' || ('category' in item && item.category === selectedCategory))
            .map((item, index) => {
              const Icon = projectIcons[index % projectIcons.length];
              return (
                <article className={`project-feature project-${index + 1} reveal`} key={item.id}>
                  <button className="project-hit" data-cursor="Voir" onClick={() => openProject(item as unknown as Project)} aria-label={`Voir les détails du projet ${item.title}`}>
                    <div className={`project-visual media-reveal ${item.image ? 'has-project-image' : ''} ${item.id === 'gma-lab' ? 'agent-project-visual' : ''}`}>
                      <div className="visual-grid" />
                      {item.image ? (
                        <Image className="project-cover" src={item.image} alt={`Illustration du projet ${item.title}`} fill sizes="(max-width: 1050px) 100vw, 58vw" />
                      ) : item.id === 'gma-lab' ? (
                        <AgentMark />
                      ) : (
                        <Icon />
                      )}
                      <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                      <span className="project-status">{item.status}</span>
                    </div>
                    <div className="project-info">
                      <div className="project-kicker">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <p>{item.eyebrow}</p>
                        {'category' in item && item.category && (
                          <span className="project-category-badge">{item.category}</span>
                        )}
                      </div>
                      <h3>{item.title}</h3>
                      <div>{item.description}</div>
                      <div className="project-footer">
                        <div className="tag-row" style={{ marginTop: 0 }}>
                          {item.technologies.slice(0, 3).map(tech => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                        <span className="project-open">Découvrir le projet <ArrowRight size={18} /></span>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
        </div>
      </section>

      <section id="catalogue-github" className="section catalog-section">
        <SectionHeading
          index="07"
          kicker="Master Catalog GitHub"
          title="Tous mes dépôts audités & modernisés."
          copy="Exploration interactive des 10 dépôts issus de mon profil GitHub : solutions industrielles, vision par ordinateur, architectures privées et collaborations académiques."
        />

        <div className="catalog-toolbar reveal">
          <div className="catalog-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Rechercher un dépôt par nom, techno (React, Python, PHP, C++...) ou description..."
              value={repoSearch}
              onChange={e => setRepoSearch(e.target.value)}
              aria-label="Rechercher parmi tous les dépôts GitHub"
            />
          </div>
          <div className="catalog-filters" role="tablist" aria-label="Filtrer les dépôts par visibilité">
            {(['Tous', 'Public', 'Privé', 'Fork', 'Profil'] as const).map(vis => {
              const count = vis === 'Tous'
                ? data.githubRepositories.length
                : data.githubRepositories.filter(r => r.visibility === vis).length;
              return (
                <button
                  key={vis}
                  type="button"
                  role="tab"
                  aria-selected={repoVisibility === vis}
                  onClick={() => setRepoVisibility(vis)}
                  className={`filter-pill ${repoVisibility === vis ? 'active' : ''}`}
                >
                  {vis === 'Tous' ? `Tous (${count})` : `${vis}s (${count})`}
                </button>
              );
            })}
          </div>
        </div>

        <div className="catalog-grid">
          {data.githubRepositories
            .filter(repo => {
              const matchesVis = repoVisibility === 'Tous' || repo.visibility === repoVisibility;
              const q = repoSearch.toLowerCase().trim();
              const matchesQuery = !q ||
                repo.name.toLowerCase().includes(q) ||
                repo.title.toLowerCase().includes(q) ||
                repo.description.toLowerCase().includes(q) ||
                repo.category.toLowerCase().includes(q) ||
                repo.technologies.some(t => t.toLowerCase().includes(q));
              return matchesVis && matchesQuery;
            })
            .map(repo => {
              const matchingProject = data.projects.find(p => p.github?.toLowerCase().includes(repo.name.toLowerCase()) || p.id === repo.id.replace('repo-', ''));
              return (
                <article key={repo.id} className="catalog-card reveal">
                  <header className="catalog-card-header">
                    <span className="catalog-repo-name">
                      <GitBranch size={16} />
                      {repo.name}
                    </span>
                    <div className="catalog-badges">
                      <span className={`catalog-badge catalog-badge-${repo.visibility.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')}`}>
                        {repo.visibility}
                      </span>
                      <span className="project-category-badge">{repo.category}</span>
                    </div>
                  </header>

                  <h3 className="catalog-card-title">{repo.title}</h3>
                  <p className="catalog-card-desc">{repo.description}</p>

                  <div className="catalog-card-meta">
                    {repo.technologies.map(t => (
                      <span key={t} className="catalog-tech-tag">{t}</span>
                    ))}
                  </div>

                  <footer className="catalog-card-footer">
                    <div className="catalog-links">
                      {repo.github && (
                        <a
                          href={repo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="catalog-link-btn"
                          aria-label={`Voir le code source de ${repo.name} sur GitHub`}
                        >
                          <GitBranch size={14} /> GitHub
                        </a>
                      )}
                      {'demo' in repo && repo.demo && (
                        <a
                          href={repo.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="catalog-link-btn primary"
                          aria-label={`Accéder à la démo en ligne de ${repo.name}`}
                        >
                          <ExternalLink size={14} /> Démo
                        </a>
                      )}
                      {matchingProject && (
                        <button
                          type="button"
                          className="catalog-link-btn"
                          onClick={() => openProject(matchingProject as unknown as Project)}
                          aria-label={`Voir l'étude de cas pour ${repo.name}`}
                        >
                          <Layers3 size={14} /> Étude de cas
                        </button>
                      )}
                    </div>
                    <span className="catalog-status-note">{repo.status}</span>
                  </footer>
                </article>
              );
            })}
        </div>
      </section>

      <section id="objectifs" className="section goals-section">
        <SectionHeading
          index="08"
          kicker="Vision & Objectifs"
          title="Construire. Sécuriser. Exceller."
          copy="Une démarche structurée pour évoluer vers l’excellence en ingénierie logicielle et en cybersécurité des systèmes d’information."
        />
        <div className="goals-path">
          <div className="path-line" />
          {data.goals.map((goal, index) => (
            <article className="goal-card reveal" key={goal.horizon}>
              <div className="goal-top">
                <span>{goal.index}</span>
                {index === 0 ? <Radar /> : index === 1 ? <Rocket /> : <Sparkles />}
              </div>
              <h3>{goal.horizon}</h3>
              <ul>
                {goal.items.map(item => (
                  <li key={item}><ChevronRight size={15} />{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="cv" className="section cv-section">
        <div className="cv-shell reveal">
          <div className="cv-preview">
            <div className="document">
              <header>
                <span>MA</span>
                <div>
                  <b>{data.identity.fullName}</b>
                  <small>Génie Informatique · Cybersécurité & Réseaux</small>
                </div>
              </header>
              <div className="doc-columns">
                <div><i /><i /><i /><i /><i /><i /></div>
                <div><i /><i /><i /><i /></div>
              </div>
              <div className="placeholder-stamp" style={{ border: '1px solid #31d7ff', color: '#31d7ff' }}>CV OFFICIEL DISPONIBLE</div>
            </div>
          </div>
          <div className="cv-copy">
            <p className="eyebrow"><FileText size={15} /> Curriculum vitæ</p>
            <h2>Mon parcours, en un coup d’œil.</h2>
            <div>
              Consultez et téléchargez mon curriculum vitæ au format PDF détaillant mon cursus à l’École Polytechnique d’Agadir – Universiapolis, mes compétences Full Stack, mes projets Fab Lab et mes certifications professionnelles.
            </div>
            <ul>
              <li><Check /> 2ᵉᵐᵉ année du Cycle d’Ingénieur en Génie Informatique</li>
              <li><Check /> Option Cybersécurité & Réseaux (Universiapolis Agadir)</li>
              <li><Check /> Développeur Full Stack & Expérience au Fab Lab</li>
              <li><Check /> Certifications Cisco Packet Tracer & Design Patterns</li>
            </ul>
            <a className="button button-primary" href={data.identity.cv} download="Mon-CV-Mohammed-Aichour.pdf" target="_blank" rel="noopener noreferrer">
              Télécharger mon CV <Download size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <SectionHeading
          index="09"
          kicker="Contact"
          title="Construisons la suite ensemble."
          copy="À la recherche d’un stagiaire rigoureux, d’un profil pour un projet innovant ou pour échanger sur des défis réseau et sécurité ?"
        />
        <div className="contact-grid">
          <aside className="contact-details reveal">
            <h3>Restons en contact</h3>
            <p>N’hésitez pas à me contacter directement par téléphone, e-mail ou sur mes réseaux professionnels.</p>
            <a href={`mailto:${data.identity.email}`} className="contact-link" target="_blank" rel="noopener noreferrer">
              <Mail /><span>Adresse e-mail<b>{data.identity.email}</b></span>
            </a>
            <a href={`tel:${data.identity.phone}`} className="contact-link">
              <Phone size={18} /><span>Téléphone<b>{data.identity.phoneDisplay}</b></span>
            </a>
            <a href={data.identity.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Link /><span>LinkedIn<b>mohammed-aichour</b></span>
            </a>
            <a href={data.identity.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <GitBranch /><span>GitHub<b>Mohammed-aichour</b></span>
            </a>
            <small><Sparkles size={14} /> Basé à {data.identity.location}</small>
          </aside>
          <form className="contact-form reveal" onSubmit={submit}>
            <div className="field-row">
              <label>Nom<input name="name" required minLength={2} placeholder="Votre nom" /></label>
              <label>E-mail<input name="email" required type="email" placeholder="vous@exemple.com" /></label>
            </div>
            <label>Sujet<input name="subject" required minLength={3} placeholder="Sujet de votre message" /></label>
            <label>Message<textarea name="message" required minLength={10} rows={6} placeholder="Écrivez votre message ici..." /></label>
            <button className="button button-primary" type="submit">Envoyer le message <Send size={17} /></button>
            {formState === 'ready' && (
              <output className="form-note">
                <Check size={16} /> Message préparé avec succès.
              </output>
            )}
            <small>Formulaire de contact direct · Réponse sous 24h.</small>
          </form>
        </div>
      </section>

      <footer>
        <div>
          <a className="brand" href="#accueil" onClick={event => navigateTo(event, 'accueil', 'Accueil')}>
            <span>M.</span><b>{data.identity.fullName}</b>
          </a>
          <p>2ᵉᵐᵉ année du Cycle d’Ingénieur en Génie Informatique · Option Cybersécurité & Réseaux · Universiapolis Agadir</p>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} {data.identity.fullName} — Tous droits réservés</span>
          <span>Portfolio officiel · Conçu pour l’ingénierie et l’innovation.</span>
        </div>
        <a className="back-top" href="#accueil" onClick={event => navigateTo(event, 'accueil', 'Accueil')} aria-label="Revenir en haut">
          <ArrowUp />
        </a>
      </footer>

      <Suspense fallback={null}>
        {project && <ProjectDialog project={project} onClose={() => setProject(null)} />}
      </Suspense>
    </main>
  );
}
