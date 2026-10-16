import React from 'react';
import { Smartphone, Code, MessageSquare, Sparkles, Gauge, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteData';
import './WhyUsSection.css';

const ICON_MAP = {
  SmartphoneCheck: Smartphone,
  CodeSquare: Code,
  MessageSquareShare: MessageSquare,
  Crosshair: Sparkles,
  Gauge: Gauge,
};

export default function WhyUsSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-us" className="section-padding why-us-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="section-tag-dot" /> Developer Standards
          </span>
          <h2 className="section-title">Why Ambitious Teams Choose Our Craft</h2>
          <p className="section-description">
            We avoid shortcuts, bloated page builders, and unmaintainable code. Here is how our engineering mindset protects your digital investment.
          </p>
        </div>

        {/* 5 Points Grid Layout */}
        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || Sparkles;
            const isFeatured = index === 0 || index === 3;

            return (
              <div
                key={item.title}
                className={`why-card glass-card ${isFeatured ? 'why-card-featured' : ''}`}
              >
                <div className="why-icon-wrap">
                  <Icon size={24} className="why-icon" />
                </div>

                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>

                <div className="why-card-accent" />
              </div>
            );
          })}

          {/* Interactive 6th Tile: Direct Invitation */}
          <div className="why-card why-card-cta glass-card">
            <div className="cta-tile-content">
              <span className="badge badge-concept">Collaborative Fit</span>
              <h3 className="why-cta-title">Ready for code you will actually be proud of?</h3>
              <p className="why-cta-desc">
                Let's discuss architecture, timelines, and milestones for your upcoming release.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-sm why-cta-btn"
                onClick={scrollToContact}
              >
                <span>Schedule a Scoping Call</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
