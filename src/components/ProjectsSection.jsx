import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowRight, Eye, Sparkles, Activity, ShoppingBag, ShieldCheck } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/siteData';
import ProjectModal from './ProjectModal';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="section-tag-dot" /> Portfolio Showcase
          </span>
          <h2 className="section-title">Featured Engineering & Design Architecture</h2>
          <p className="section-description">
            Explore our showcase implementations illustrating production-grade React architecture, high-density SaaS interfaces, and conversion-engineered web experiences.
          </p>
        </div>

        {/* Concept Notice Banner */}
        <div className="projects-notice-bar">
          <div className="notice-inner">
            <span className="badge badge-concept">Transparent Agency Disclosure</span>
            <span className="notice-text">
              The projects featured below are concept showcase demonstrations engineered to exhibit full technical craftsmanship, responsive layouts, and UX patterns.
            </span>
          </div>
        </div>

        {/* 3 Showcase Projects Grid */}
        <div className="projects-grid">
          {FEATURED_PROJECTS.map((project, index) => (
            <article key={project.id} className="project-card glass-card">
              {/* Visual Preview Container */}
              <div className="project-preview-wrapper">
                {/* Simulated Project Browser Window */}
                <div className="project-browser-window">
                  <div className="project-browser-topbar">
                    <div className="browser-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <span className="project-browser-title">preview.{project.id}.studio.app</span>
                    <span className="project-browser-badge">{project.previewTheme.tag}</span>
                  </div>

                  {/* Custom Handcrafted CSS/SVG Mockup based on project ID */}
                  <div className="project-mockup-canvas">
                    {/* Project 1: Apex Global Advisory */}
                    {project.id === 'apex-global' && (
                      <div className="mockup-corp">
                        <div className="corp-header">
                          <div className="corp-brand">APEX <span>ADVISORY</span></div>
                          <div className="corp-nav-pills">
                            <span>Services</span>
                            <span>Practices</span>
                            <span className="corp-nav-cta">Client Portal</span>
                          </div>
                        </div>

                        <div className="corp-hero">
                          <span className="corp-hero-tag">Enterprise Advisory</span>
                          <div className="corp-hero-heading">Strategic Growth & Digital Transformation</div>
                          <p className="corp-hero-p">Guiding Fortune 500 leadership through structural industry shifts.</p>
                        </div>

                        <div className="corp-kpi-row">
                          <div className="corp-kpi">
                            <span className="kpi-num">$4.2B</span>
                            <span className="kpi-label">Capital Advised</span>
                          </div>
                          <div className="corp-kpi">
                            <span className="kpi-num">99.8%</span>
                            <span className="kpi-label">Retention Rate</span>
                          </div>
                          <div className="corp-kpi">
                            <span className="kpi-num">120+</span>
                            <span className="kpi-label">Consultants</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Project 2: Vantage Telemetry Cloud */}
                    {project.id === 'vantage-analytics' && (
                      <div className="mockup-saas">
                        <div className="saas-top-bar">
                          <div className="saas-metric">
                            <span className="saas-dot-live" />
                            <span>14ms P99 Latency</span>
                          </div>
                          <div className="saas-metric">
                            <span className="text-emerald">99.98% Uptime</span>
                          </div>
                          <div className="saas-metric">
                            <span className="text-cyan">12 Clusters Active</span>
                          </div>
                        </div>

                        {/* Native Custom SVG Telemetry Chart */}
                        <div className="saas-chart-wrapper">
                          <svg viewBox="0 0 320 80" className="saas-svg-chart" aria-label="Live Telemetry Graph">
                            <defs>
                              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
                                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 0 60 Q 30 20, 60 45 T 120 25 T 180 50 T 240 15 T 280 35 T 320 20 L 320 80 L 0 80 Z"
                              fill="url(#chartGradient)"
                            />
                            <path
                              d="M 0 60 Q 30 20, 60 45 T 120 25 T 180 50 T 240 15 T 280 35 T 320 20"
                              fill="none"
                              stroke="#818cf8"
                              strokeWidth="2.5"
                            />
                            <circle cx="240" cy="15" r="4" fill="#38bdf8" />
                          </svg>
                        </div>

                        <div className="saas-nodes-row">
                          <div className="saas-node">
                            <span>US-East (Primary)</span>
                            <span className="node-bar"><span style={{ width: '88%' }}></span></span>
                          </div>
                          <div className="saas-node">
                            <span>EU-Central (Edge)</span>
                            <span className="node-bar"><span style={{ width: '96%' }}></span></span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Project 3: Aura Minimalist Living */}
                    {project.id === 'aura-living' && (
                      <div className="mockup-ecom">
                        <div className="ecom-header">
                          <span className="ecom-brand">AURA <span>STUDIO</span></span>
                          <span className="ecom-cart-badge"><ShoppingBag size={12} /> Bag (2)</span>
                        </div>

                        <div className="ecom-product-card">
                          <div className="ecom-visual-thumb">
                            <div className="vessel-art" />
                            <span className="ecom-tag">Architectural Grade</span>
                          </div>

                          <div className="ecom-product-info">
                            <div className="ecom-title">Handcrafted Ceramic Vessel</div>
                            <div className="ecom-price-row">
                              <span className="ecom-price">$185.00</span>
                              <span className="ecom-swatches">
                                <span className="swatch swatch-dark" />
                                <span className="swatch swatch-clay" />
                                <span className="swatch swatch-bone" />
                              </span>
                            </div>
                            <div className="ecom-btn-preview">
                              <span>Add to Curated Bag</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="project-content">
                <div className="project-category-row">
                  <span className="project-cat-name">{project.category}</span>
                  <span className="badge badge-concept">Concept Demo</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Chips */}
                <div className="project-tech-tags">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="project-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Trigger */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm project-cta-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={15} />
                    <span>View Architecture Details</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
