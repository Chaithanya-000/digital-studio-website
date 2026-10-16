import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { NAV_LINKS, AGENCY_METADATA } from '../data/siteData';
import './Navbar.css';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label={`${AGENCY_METADATA.name} Home`}
        >
          <div className="brand-mark">
            <span className="brand-mark-letter">{AGENCY_METADATA.logoInitial || 'D'}</span>
            <div className="brand-mark-glow"></div>
          </div>
          <span className="brand-text">
            {AGENCY_METADATA.shortName}
            <span className="brand-dot">.</span>
          </span>
          <span className="brand-badge">Studio</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && <span className="active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="btn btn-primary btn-sm navbar-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Let's Talk</span>
            <ArrowRight size={15} />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay / Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <span className="brand-text">
              {AGENCY_METADATA.shortName}
              <span className="brand-dot">.</span>
            </span>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-drawer-status">
            <span className="status-dot-active"></span>
            <span>Available for new projects</span>
          </div>

          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="mobile-nav-arrow" />
                </a>
              );
            })}
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href="#contact"
              className="btn btn-primary btn-lg mobile-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </a>
            <p className="mobile-footer-meta">
              Direct: <span className="text-gradient">{AGENCY_METADATA.email}</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
