import React, { useState } from 'react';
import { Compass, FileCode2, Laptop, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';
import './ProcessSection.css';

const STEP_ICONS = {
  Compass: Compass,
  FileCode2: FileCode2,
  Laptop: Laptop,
  CheckCircle2: CheckCircle2,
};

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="section-padding process-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="section-tag-dot" /> Methodology
          </span>
          <h2 className="section-title">How We Build: A Predictable Four-Step Sprint</h2>
          <p className="section-description">
            A transparent, disciplined roadmap that eliminates uncertainty. From strategic scoping to final production deployment, here is our delivery lifecycle.
          </p>
        </div>

        {/* Timeline Stepper Grid */}
        <div className="process-timeline-grid">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = STEP_ICONS[step.icon] || Compass;
            const isCurrent = activeStepIndex === index;

            return (
              <div
                key={step.step}
                className={`process-card glass-card ${isCurrent ? 'active' : ''}`}
                onClick={() => setActiveStepIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveStepIndex(index);
                  }
                }}
                aria-label={`Step ${step.step}: ${step.title}`}
              >
                {/* Step Connector Line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="process-connector" aria-hidden="true" />
                )}

                <div className="process-card-top">
                  <span className="process-step-num">{step.step}</span>
                  <div className="process-icon-wrap">
                    <Icon size={22} className="process-icon" />
                  </div>
                </div>

                <h3 className="process-step-title">{step.title}</h3>
                <span className="process-tagline">{step.tagline}</span>

                <p className="process-desc">{step.description}</p>

                <div className="process-deliverables">
                  <span className="deliverables-heading">Deliverables:</span>
                  <ul className="deliverables-list">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="deliverable-item">
                        <Check size={13} className="deliverable-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Note */}
        <div className="process-footer-callout">
          <div className="callout-pill">
            <CheckCircle2 size={16} className="text-emerald" />
            <span>Weekly Milestone Demos • No Surprise Deliverables • Full Git Version Control</span>
          </div>
        </div>
      </div>
    </section>
  );
}
