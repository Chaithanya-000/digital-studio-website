import React, { useState } from 'react';
import { ArrowRight, Code, Eye, Sparkles, Zap, Smartphone, CheckCircle, Shield, Monitor, Layout, Cpu } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('interface');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Radial Glow Elements */}
      <div className="hero-glow hero-glow-blue" aria-hidden="true" />
      <div className="hero-glow hero-glow-violet" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-content">
          <div className="section-tag hero-badge">
            <span className="section-tag-dot"></span>
            <span>Digital Product Agency & Frontend Engineering</span>
          </div>

          <h1 className="hero-title">
            We Build Digital <br />
            <span className="text-gradient">Experiences That</span> <br />
            Drive Growth.
          </h1>

          <p className="hero-description">
            Nexora crafts modern, high-performance web applications, bespoke business websites, and intuitive digital interfaces engineered for ambitious brands and growing businesses.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => scrollTo('contact')}
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => scrollTo('projects')}
            >
              <Eye size={18} />
              <span>Explore Our Work</span>
            </button>
          </div>

          {/* Value Pills Under CTAs */}
          <div className="hero-pills">
            <div className="hero-pill-item">
              <Zap size={14} className="pill-icon text-cyan" />
              <span>Sub-Second Performance</span>
            </div>
            <div className="hero-pill-divider" />
            <div className="hero-pill-item">
              <Smartphone size={14} className="pill-icon text-violet" />
              <span>Mobile-First Engineering</span>
            </div>
            <div className="hero-pill-divider" />
            <div className="hero-pill-item">
              <Shield size={14} className="pill-icon text-emerald" />
              <span>Clean Modular Code</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composition with Browser Mockup & Floating Cards */}
        <div className="hero-visual-wrapper">
          {/* Abstract geometric frame */}
          <div className="abstract-accent-grid" aria-hidden="true" />

          {/* Floating Card 1 (Top Right) */}
          <div className="floating-card floating-card-top">
            <div className="floating-icon-box blue-box">
              <Zap size={18} />
            </div>
            <div>
              <div className="floating-title">99 Lighthouse Score</div>
              <div className="floating-subtitle">Optimized Core Web Vitals</div>
            </div>
          </div>

          {/* Main Browser Mockup */}
          <div className="browser-mockup">
            {/* Browser Window Chrome */}
            <div className="browser-header">
              <div className="browser-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <div className="browser-url-bar">
                <span className="url-lock">🔒</span>
                <span className="url-text">https://nexora.digital/solutions/preview</span>
              </div>

              <div className="browser-action-icon">
                <Sparkles size={14} className="text-cyan" />
              </div>
            </div>

            {/* Browser Content Area with Tab Switcher */}
            <div className="browser-body">
              <div className="mockup-tab-bar">
                <button
                  type="button"
                  className={`mockup-tab-btn ${activeTab === 'interface' ? 'active' : ''}`}
                  onClick={() => setActiveTab('interface')}
                >
                  <Layout size={13} />
                  <span>UI Showcase</span>
                </button>
                <button
                  type="button"
                  className={`mockup-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
                  onClick={() => setActiveTab('architecture')}
                >
                  <Cpu size={13} />
                  <span>Architecture</span>
                </button>
              </div>

              {/* Tab 1: UI Showcase */}
              {activeTab === 'interface' && (
                <div className="mockup-screen-content animate-fade-in">
                  <div className="mockup-screen-header">
                    <span className="badge badge-concept">Live Component Demo</span>
                    <span className="mockup-live-indicator">
                      <span className="pulse-indicator" /> 60 FPS
                    </span>
                  </div>

                  <div className="mockup-hero-card">
                    <div className="mockup-card-label">Nexora Enterprise Engine</div>
                    <div className="mockup-card-title">Responsive Design Token System</div>
                    <p className="mockup-card-desc">
                      Modular layout with fluid typography, adaptive breakpoints, and zero layout shifts.
                    </p>

                    <div className="mockup-metric-grid">
                      <div className="mockup-metric-box">
                        <span className="metric-val">0.4s</span>
                        <span className="metric-lbl">First Contentful Paint</span>
                      </div>
                      <div className="mockup-metric-box">
                        <span className="metric-val">100%</span>
                        <span className="metric-lbl">Responsive Flex</span>
                      </div>
                      <div className="mockup-metric-box">
                        <span className="metric-val">0.00</span>
                        <span className="metric-lbl">Cumulative Layout Shift</span>
                      </div>
                    </div>
                  </div>

                  <div className="mockup-bottom-row">
                    <div className="mockup-status-card">
                      <CheckCircle size={15} className="text-emerald" />
                      <span>Clean React 19 Architecture</span>
                    </div>
                    <div className="mockup-status-card">
                      <CheckCircle size={15} className="text-cyan" />
                      <span>WCAG AA Accessible</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Architecture */}
              {activeTab === 'architecture' && (
                <div className="mockup-screen-content animate-fade-in">
                  <div className="mockup-code-header">
                    <div className="code-lang">SystemArchitecture.jsx</div>
                    <span className="badge">Production Ready</span>
                  </div>
                  <pre className="mockup-code-block">
                    <code>
                      <span className="code-kw">import</span> {'{ Component, State }'} <span className="code-kw">from</span> <span className="code-str">'@nexora/core'</span>;{'\n\n'}
                      <span className="code-comment">// Enterprise React architecture</span>{'\n'}
                      <span className="code-kw">export default function</span> <span className="code-fn">NexoraPlatform</span>() {'{'}{'\n'}
                      {'  '}<span className="code-kw">return</span> ({'\n'}
                      {'    '}&lt;<span className="code-tag">ModernApplication</span>{'\n'}
                      {'      '}performance={<span className="code-str">"sub-second"</span>}{'\n'}
                      {'      '}designSystem={<span className="code-str">"bespoke-tokens"</span>}{'\n'}
                      {'      '}accessibility={<span className="code-str">"WCAG-AA"</span>}{'\n'}
                      {'    '}/&gt;{'\n'}
                      {'  '});{'\n'}
                      {'}'}
                    </code>
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Floating Card 2 (Bottom Left) */}
          <div className="floating-card floating-card-bottom">
            <div className="floating-icon-box violet-box">
              <Smartphone size={18} />
            </div>
            <div>
              <div className="floating-title">100% Responsive Grid</div>
              <div className="floating-subtitle">Fluid from 320px to 4K</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
