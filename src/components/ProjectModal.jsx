import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Layers, Cpu, Smartphone, ShieldAlert } from 'lucide-react';
import './ProjectsSection.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="badge badge-concept">Concept Demonstration</span>
            <span className="modal-category">{project.category}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h3 id="modal-project-title" className="modal-title">
            {project.title}
          </h3>
          <p className="modal-subtitle">{project.subtitle}</p>

          <p className="modal-description">{project.description}</p>

          {/* Quick Metrics Grid */}
          <div className="modal-stats-grid">
            {project.stats.map((stat, i) => (
              <div key={i} className="modal-stat-box">
                <span className="modal-stat-label">{stat.label}</span>
                <span className="modal-stat-value">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Problem & Architectural Solution */}
          <div className="modal-architecture-grid">
            <div className="arch-card arch-challenge">
              <h4 className="arch-title">
                <ShieldAlert size={16} className="text-amber" /> The Architectural Challenge
              </h4>
              <p className="arch-text">{project.challenge}</p>
            </div>

            <div className="arch-card arch-solution">
              <h4 className="arch-title">
                <Cpu size={16} className="text-cyan" /> Our Engineering Solution
              </h4>
              <p className="arch-text">{project.solution}</p>
            </div>
          </div>

          {/* Key Deliverable Highlights */}
          <div className="modal-highlights">
            <h4 className="highlights-heading">Implementation Highlights</h4>
            <ul className="highlights-list">
              {project.highlights.map((item, i) => (
                <li key={i} className="highlight-item">
                  <CheckCircle size={16} className="highlight-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="modal-tech-stack">
            <span className="tech-stack-label">Technologies Implemented:</span>
            <div className="modal-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="modal-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <p className="modal-disclaimer">
            * This project architecture is engineered as a production-grade demonstration model.
          </p>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
