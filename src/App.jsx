import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ProcessSection from './components/ProcessSection';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState('');

  // Track active section for navbar highlighting via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'projects', 'process', 'why-us', 'contact'];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForInquiry(serviceTitle);
  };

  return (
    <div className="app-root">
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust & Core Values */}
        <TrustSection />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Specialized Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Featured Projects & Architecture */}
        <ProjectsSection />

        {/* 6. Four-Step Process */}
        <ProcessSection />

        {/* 7. Why Choose Us / Engineering Standards */}
        <WhyUsSection />

        {/* 8. Project Inquiry / Contact Form */}
        <ContactSection preselectedProject={selectedServiceForInquiry} />
      </main>

      {/* 9. Comprehensive Footer */}
      <Footer />
    </div>
  );
}
