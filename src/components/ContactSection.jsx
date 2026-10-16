import React, { useState, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Code2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { PROJECT_TYPES, BUDGET_RANGES, AGENCY_METADATA } from '../data/siteData';
import './ContactSection.css';

export default function ContactSection({ preselectedProject }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: '',
    budgetRange: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showBackendGuide, setShowBackendGuide] = useState(false);

  // If user clicked "Inquire" on a service card, prefill projectType
  useEffect(() => {
    if (preselectedProject) {
      setFormData((prev) => ({
        ...prev,
        projectType: preselectedProject,
      }));
    }
  }, [preselectedProject]);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Please enter your full name.';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters.';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Business email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())) {
          error = 'Please enter a valid email address.';
        }
        break;
      case 'projectType':
        if (!value) {
          error = 'Please select a project category.';
        }
        break;
      case 'budgetRange':
        if (!value) {
          error = 'Please select your estimated budget range.';
        }
        break;
      case 'description':
        if (!value.trim()) {
          error = 'Please provide a brief summary of your project requirements.';
        } else if (value.trim().length < 15) {
          error = 'Please provide at least 15 characters describing your project.';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation clearance if valid
    if (errors[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'company') {
        const err = validateField(key, formData[key]);
        if (err) newErrors[key] = err;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) element.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate async submission latency (1.2s)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      projectType: '',
      budgetRange: '',
      description: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="section-tag-dot" /> Get in Touch
          </span>
          <h2 className="section-title">Start Your Project Inquiry</h2>
          <p className="section-description">
            Tell us about your objectives, timeline, and architectural requirements. We review project inquiries within 24 business hours.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Info & Channels */}
          <div className="contact-info-panel">
            <div className="info-badge-card glass-card">
              <span className="badge badge-concept">Direct Engagement</span>
              <h3 className="info-card-title">Let's discuss how we can engineer your next milestone.</h3>
              <p className="info-card-text">
                Whether you need a bespoke web app built from scratch, an existing codebase audited, or a conversion-focused landing page, we are ready to assist.
              </p>

              <div className="contact-details-list">
                <a
                  href={`mailto:${AGENCY_METADATA.email}`}
                  className="contact-detail-item"
                  title="Placeholder business email link"
                >
                  <div className="detail-icon-wrap">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Project Inquiries (Demo Placeholder)</span>
                    <span className="detail-value">{AGENCY_METADATA.email}</span>
                  </div>
                </a>

                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Studio Location</span>
                    <span className="detail-value">{AGENCY_METADATA.location}</span>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="detail-label">Operating Schedule</span>
                    <span className="detail-value">{AGENCY_METADATA.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-socials-group">
                <span className="socials-label">Connect via Developer Platforms:</span>
                <div className="social-links-row">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="Visit GitHub (placeholder)"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="Visit LinkedIn (placeholder)"
                  >
                    <LinkedinIcon size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="Visit Twitter/X (placeholder)"
                  >
                    <TwitterIcon size={18} />
                    <span>Twitter/X</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="contact-form-panel">
            <div className="form-card glass-card">
              {/* If Form Submitted: Honest Demo Success State */}
              {isSubmitted ? (
                <div className="form-success-container animate-fade-in" role="alert">
                  <div className="success-icon-badge">
                    <CheckCircle size={36} className="text-emerald" />
                  </div>

                  <h3 className="success-title">Inquiry Validated Successfully</h3>

                  {/* Explicit Transparent Disclaimer as requested */}
                  <div className="demo-notice-box">
                    <div className="demo-notice-header">
                      <Sparkles size={16} className="text-cyan" />
                      <strong>Frontend Demonstration Notice</strong>
                    </div>
                    <p className="demo-notice-body">
                      Thank you, <strong>{submittedData?.fullName}</strong>! All inputs passed strict client-side validation. Because this site is running in frontend demo mode, no real email was dispatched.
                    </p>
                  </div>

                  <div className="submitted-summary">
                    <div className="summary-row">
                      <span className="sum-label">Business Email:</span>
                      <span className="sum-val">{submittedData?.email}</span>
                    </div>
                    <div className="summary-row">
                      <span className="sum-label">Project Type:</span>
                      <span className="sum-val">{submittedData?.projectType}</span>
                    </div>
                    <div className="summary-row">
                      <span className="sum-label">Budget Tier:</span>
                      <span className="sum-val">{submittedData?.budgetRange}</span>
                    </div>
                  </div>

                  {/* Backend Integration Guide Accordion */}
                  <div className="integration-guide-accordion">
                    <button
                      type="button"
                      className="accordion-toggle-btn"
                      onClick={() => setShowBackendGuide(!showBackendGuide)}
                      aria-expanded={showBackendGuide}
                    >
                      <div className="accordion-toggle-left">
                        <Code2 size={16} className="text-violet" />
                        <span>How to connect this form to a production backend</span>
                      </div>
                      {showBackendGuide ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {showBackendGuide && (
                      <div className="accordion-body">
                        <p className="accordion-text">
                          You can wire this form to any backend or form gateway in less than 5 minutes:
                        </p>
                        <ol className="accordion-steps">
                          <li>
                            <strong>Formspree / Formspark:</strong> Replace the submission handler with a POST request to <code>https://formspree.io/f/YOUR_FORM_ID</code>.
                          </li>
                          <li>
                            <strong>Resend / SendGrid / Node.js API:</strong> Post the payload to an Express/Next.js API route using <code>resend.emails.send()</code>.
                          </li>
                          <li>
                            <strong>EmailJS:</strong> Call <code>emailjs.sendForm('service_id', 'template_id', formRef.current)</code>.
                          </li>
                        </ol>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary btn-md reset-form-btn"
                    onClick={handleResetForm}
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                /* The Inquiry Form */
                <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-intro">
                    <h3 className="form-title">Tell Us About Your Project</h3>
                    <p className="form-subtitle">Fill in the parameters below for an actionable scoping estimate.</p>
                  </div>

                  {/* Full Name & Business Email */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <div id="fullName-error" className="error-message">
                          <AlertCircle size={14} />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Business Email <span className="req-star">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input ${errors.email ? 'has-error' : ''}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <div id="email-error" className="error-message">
                          <AlertCircle size={14} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Company Name (Optional) */}
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company / Organization <span className="optional-tag">(Optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Technologies Inc."
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Project Type & Budget Range */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="projectType" className="form-label">
                        Project Type <span className="req-star">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-select ${errors.projectType ? 'has-error' : ''}`}
                        aria-invalid={!!errors.projectType}
                        aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                      >
                        <option value="">Select a category...</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <div id="projectType-error" className="error-message">
                          <AlertCircle size={14} />
                          <span>{errors.projectType}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="budgetRange" className="form-label">
                        Budget Range <span className="req-star">*</span>
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-select ${errors.budgetRange ? 'has-error' : ''}`}
                        aria-invalid={!!errors.budgetRange}
                        aria-describedby={errors.budgetRange ? 'budgetRange-error' : undefined}
                      >
                        <option value="">Select an estimated range...</option>
                        {BUDGET_RANGES.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                      {errors.budgetRange && (
                        <div id="budgetRange-error" className="error-message">
                          <AlertCircle size={14} />
                          <span>{errors.budgetRange}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="form-group">
                    <label htmlFor="description" className="form-label">
                      Project Goals & Requirements <span className="req-star">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Outline your target timeline, core features, existing systems, or link to relevant references..."
                      value={formData.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-textarea ${errors.description ? 'has-error' : ''}`}
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? 'description-error' : undefined}
                    />
                    {errors.description && (
                      <div id="description-error" className="error-message">
                        <AlertCircle size={14} />
                        <span>{errors.description}</span>
                      </div>
                    )}
                  </div>

                  {/* Form Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Validating Submission...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send size={17} />
                      </>
                    )}
                  </button>

                  <p className="form-micro-disclaimer">
                    🔒 Client-side validation enabled. No telemetry or unsolicited marketing emails.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
