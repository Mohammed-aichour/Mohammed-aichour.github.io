'use client';

import Image from 'next/image';
import { Bot, Check, ExternalLink, GitBranch, Sparkles, X } from 'lucide-react';
import type { Project } from '@/app/data/portfolio';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

function AgentMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`agent-mark ${compact ? 'is-compact' : ''}`} aria-label="Identité visuelle de l’Agent IA GMA LAB">
      <span className="agent-mark-core"><Bot /><i><Sparkles /></i></span>
      {!compact && <span className="agent-mark-word"><b>ASSISTANT IA</b><small>GMA LAB · FAB LAB</small></span>}
    </div>
  );
}

export default function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={open => !open && onClose()}>
      {project && (
        <DialogContent showCloseButton={false} style={{ translate: '0px 0px' }} className={`project-dialog ${project.image ? 'project-dialog-rich' : ''}`}>
          <div className="project-dialog-hero">
            <DialogHeader>
              <DialogClose className="project-close-button" aria-label="Fermer la présentation du projet"><X size={20} /></DialogClose>
              {project.id === 'gma-lab' && <AgentMark />}
              <p className="dialog-eyebrow">{project.eyebrow}</p>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>
            {project.image && (
              <div style={{ position: 'relative', width: '100%', height: '260px', borderRadius: '16px', overflow: 'hidden', marginTop: '1.2rem', border: '1px solid #31d7ff33' }}>
                <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 760px) 92vw, 42vw" />
              </div>
            )}
          </div>

          <div className="dialog-body">
            <section className="dialog-story dialog-story-main">
              <span>01 · Le projet</span>
              <h3>{project.eyebrow}</h3>
              <p>{project.detail}</p>
            </section>
            <section className="dialog-story">
              <span>02 · Technologies clés</span>
              <h3>Stack et outils mobilisés.</h3>
              <div className="tag-row">{project.technologies.map(item => <span key={item}>{item}</span>)}</div>
            </section>
            <section className="dialog-story">
              <span>03 · Compétences développées</span>
              <h3>Les acquis de cette réalisation.</h3>
              <ul>{project.skills.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul>
            </section>
          </div>

          <section className="project-status-panel">
            <div>
              <span>État d’avancement</span>
              <h3>{project.status}</h3>
            </div>
            {project.progressNote && <p>{project.progressNote}</p>}
          </section>

          {Boolean(project.github || project.demo) && (
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
              {Boolean(project.github) && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="button button-secondary" style={{ minHeight: '40px', padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}>
                  <GitBranch size={16} /> Code GitHub
                </a>
              )}
              {Boolean(project.demo) && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button button-primary" style={{ minHeight: '40px', padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}>
                  <ExternalLink size={16} /> Démo en ligne
                </a>
              )}
            </div>
          )}

          {project.steps.length > 0 && (
            <section className="build-process">
              <header>
                <span>PROCESSUS TECHNIQUE</span>
                <h3>Du besoin initial à la solution concrète.</h3>
                <p>Chaque étape représente une phase clé d’ingénierie logicielle et de conception de systèmes.</p>
              </header>
              <div className="build-steps">
                {project.steps.map(step => (
                  <article key={step.phase} className="build-step">
                    <div className="step-heading">
                      <span>{step.phase}</span>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.summary}</p>
                      </div>
                    </div>
                    <div className="tool-list">
                      {step.tools.map(tool => (
                        <div className="tool-item" key={tool.name}>
                          <h5>{tool.name}</h5>
                          <p>{tool.definition}</p>
                          <small><b>Principe :</b> {tool.principle}</small>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}
