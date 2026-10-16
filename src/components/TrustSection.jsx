import React from 'react';
import { Palette, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import { TRUST_PROPOSITIONS } from '../data/siteData';
import './TrustSection.css';

const ICON_MAP = {
  Palette: Palette,
  Smartphone: Smartphone,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
};

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-header">
          <span className="section-tag">
            <span className="section-tag-dot" /> Core Principles
          </span>
          <h2 className="trust-title">Engineered on Foundations of Rigor & Reliability</h2>
          <p className="trust-subtitle">
            Every digital solution we create is built around four uncompromising architectural values.
          </p>
        </div>

        <div className="trust-grid">
          {TRUST_PROPOSITIONS.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <div key={item.id} className="trust-card glass-card">
                <div className="trust-icon-box">
                  <IconComponent size={24} className="trust-icon" />
                  <span className="trust-index">0{index + 1}</span>
                </div>
                <h3 className="trust-card-title">{item.title}</h3>
                <p className="trust-card-desc">{item.description}</p>
                <div className="trust-card-bar" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
