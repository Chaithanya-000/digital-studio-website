import React from 'react';
import { Globe, Flame, Code2, Layers, TrendingUp, Wrench, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import './ServicesSection.css';

const ICON_MAP = {
  Globe: Globe,
  Flame: Flame,
  Code2: Code2,
  Layers: Layers,
  TrendingUp: TrendingUp,
  Wrench: Wrench,
};

export default function ServicesSection({ onSelectService }) {
  const handleServiceSelect = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="section-tag-dot" /> High-Impact Capabilities
          </span>
          <h2 className="section-title">Specialized Web Services Engineered for Performance</h2>
          <p className="section-description">
            From single-page marketing landing pages to full-scale enterprise React web applications, we build digital infrastructure with precision and modern craft.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Globe;
            return (
              <div key={service.id} className="service-card glass-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <Icon size={24} className="service-icon" />
                  </div>
                  <span className="service-badge">{service.badge}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-features-list">
                  {service.features.map((feat, i) => (
                    <div key={i} className="service-feature-item">
                      <Check size={14} className="service-feature-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="service-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="service-inquire-btn"
                  onClick={() => handleServiceSelect(service.title)}
                  aria-label={`Inquire about ${service.title}`}
                >
                  <span>Inquire for Project</span>
                  <ArrowRight size={15} className="inquire-arrow" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Project Callout Banner */}
        <div className="services-callout-banner glass-card">
          <div className="callout-content">
            <h4 className="callout-title">Have a unique or multi-faceted technical requirement?</h4>
            <p className="callout-desc">
              We offer bespoke scoping, legacy frontend audits, and component system design for customized engagements.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-md callout-btn"
            onClick={() => handleServiceSelect('Other / Custom Inquiry')}
          >
            <span>Discuss Custom Scope</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
