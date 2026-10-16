import React from 'react';
import { ArrowUp, Mail, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { NAV_LINKS, SERVICES, AGENCY_METADATA } from '../data/siteData';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand & Narrative Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <div className="brand-mark">
                <span className="brand-mark-letter">{AGENCY_METADATA.logoInitial || 'D'}</span>
                <div className="brand-mark-glow" />
              </div>
              <span className="brand-text">
                {AGENCY_METADATA.shortName}
                <span className="brand-dot">.</span>
              </span>
            </div>

            <p className="footer-brand-desc">
              {AGENCY_METADATA.name} engineers high-performance web applications, responsive corporate sites, and modern design systems for forward-thinking organizations.
            </p>

            <div className="footer-status-pill">
              <span className="footer-status-dot" />
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Capabilities</h4>
            <ul className="footer-links-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="footer-link"
                    onClick={(e) => handleLinkClick(e, '#services')}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders & Socials Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact & Connect</h4>
            <div className="footer-contact-info">
              <p className="footer-contact-p">
                <Mail size={15} className="footer-info-icon" />
                <a href={`mailto:${AGENCY_METADATA.email}`} className="footer-email-link">
                  {AGENCY_METADATA.email}
                </a>
              </p>
              <p className="footer-contact-p">
                <MapPin size={15} className="footer-info-icon" />
                <span>{AGENCY_METADATA.location}</span>
              </p>
            </div>

            <h5 className="footer-subheading">Developer Profiles:</h5>
            <div className="footer-social-icons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="GitHub Repository (placeholder)"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn Profile (placeholder)"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="Twitter/X Profile (placeholder)"
              >
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="footer-disclaimer-box">
          <p>{AGENCY_METADATA.disclaimer}</p>
        </div>

        {/* Bottom Bar with Dynamic Copyright & Back-to-Top */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {currentYear} {AGENCY_METADATA.name}. Engineered with React.js & Vite.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of the page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
