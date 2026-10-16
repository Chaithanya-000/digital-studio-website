import React, { useState } from 'react';
import { ArrowRight, Check, Code2, Sparkles, Shield, Cpu, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';
import { AGENCY_METADATA } from '../data/siteData';
import './AboutSection.css';

const PILLARS = [
  {
    id: 'engineering',
    icon: Code2,
    title: 'Engineering Rigor',
    tagline: 'Modern React Architecture',
    points: [
      'Component-driven modular hierarchy',
      'Clean separation of layout and business state',
      'Sub-second Core Web Vitals optimization',
      'Strict HTML5 semantic landmarks for accessibility',
    ],
  },
  {
    id: 'design',
    icon: Sparkles,
    title: 'Design Discipline',
    tagline: 'SaaS-Grade Visual Hierarchy',
    points: [
      'Bespoke 4px/8px design token grid systems',
      'High-contrast, accessible typography pairings',
      'Subtle, non-distracting micro-interactions',
      'Adaptive layouts tailored from 320px to 4K',
    ],
  },
  {
    id: 'partnership',
    icon: Shield,
    title: 'Transparent Delivery',
    tagline: 'Client-Centric Collaboration',
    points: [
      'Direct, jargon-free technical communication',
      'Clear project sprint checkpoints & deliverables',
      'Thorough source code handoff and documentation',
      'Zero vendor lock-in or undocumented dependencies',
    ],
  },
];

export default function AboutSection() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = PILLARS[activePillarIndex];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Narrative Content */}
          <div className="about-content">
            <span className="section-tag">
              <span className="section-tag-dot" /> About Our Studio
            </span>

            <h2 className="section-title">A Digital Partner for Your Next Big Idea.</h2>

            <div className="about-concept-alert">
              <div className="alert-indicator" />
              <div>
                <strong className="alert-heading">Digital Studio & Engineering Showcase</strong>
                <p className="alert-text">
                  This portfolio is crafted to demonstrate production-grade frontend engineering, premium UI/UX standards, and modern web application architecture for client projects.
                </p>
              </div>
            </div>

            <p className="about-paragraph">
              In today's crowded digital landscape, a website is far more than a brochure—it is your business's most influential commercial touchpoint. Outdated templates and sluggish pages erode credibility before potential customers even read your offer.
            </p>

            <p className="about-paragraph">
              At our digital studio, we bridge the gap between creative visual design and software engineering discipline. We build bespoke digital experiences that communicate value with clarity, engage visitors with intuitive ergonomics, and convert traffic into qualified business opportunities.
            </p>

            <div className="about-checklist">
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon text-cyan" />
                <span>Tailored architecture without generic bloated templates</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon text-cyan" />
                <span>Responsive fluid layouts engineered for all screen sizes</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon text-cyan" />
                <span>Honest, direct communication from concept to final launch</span>
              </div>
            </div>

            <div className="about-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('process')}
              >
                <span>Discover Our Approach</span>
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo('contact')}
              >
                <span>Request a Quote</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Studio Blueprint / Anatomy Visual */}
          <div className="about-visual-panel">
            <div className="studio-card glass-card">
              <div className="studio-card-header">
                <div className="studio-card-title-group">
                  <Terminal size={18} className="text-cyan" />
                  <span className="studio-title">Studio Engineering Blueprint</span>
                </div>
                <span className="badge badge-concept">Methodology</span>
              </div>

              {/* Pillar Selector Tabs */}
              <div className="pillar-tabs" role="tablist" aria-label="Engineering Pillars">
                {PILLARS.map((pillar, index) => {
                  const Icon = pillar.icon;
                  const isSelected = activePillarIndex === index;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      className={`pillar-tab ${isSelected ? 'active' : ''}`}
                      onClick={() => setActivePillarIndex(index)}
                    >
                      <Icon size={16} />
                      <span>{pillar.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Details Card */}
              <div className="pillar-detail-body">
                <div className="pillar-header-row">
                  <div>
                    <h3 className="pillar-name">{activePillar.title}</h3>
                    <span className="pillar-tagline">{activePillar.tagline}</span>
                  </div>
                  <div className="pillar-badge-indicator">
                    Pillar 0{activePillarIndex + 1}
                  </div>
                </div>

                <div className="pillar-points-list">
                  {activePillar.points.map((pt, i) => (
                    <div key={i} className="pillar-point-item">
                      <div className="pillar-check">
                        <Check size={14} />
                      </div>
                      <span className="pillar-point-text">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Bar */}
                <div className="pillar-footer-meta">
                  <div className="tech-chips">
                    <span className="chip">React.js</span>
                    <span className="chip">Vite</span>
                    <span className="chip">CSS3 Flex/Grid</span>
                    <span className="chip">Semantic HTML5</span>
                  </div>
                  <span className="fidelity-label">Production Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
