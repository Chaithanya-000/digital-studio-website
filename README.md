# Nexora Digital Solutions 🚀

> Premium, modern SaaS-inspired digital agency website engineered for high-impact web presence, client acquisition, and freelance portfolio demonstration.

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![WCAG](https://img.shields.io/badge/Accessibility-WCAG%20AA-success)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## 🌟 Overview

**Nexora Digital Solutions** is a production-grade, responsive digital agency website built with **React**, **Vite**, **CSS3**, and **Lucide Icons**. It showcases how modern frontend engineering principles—fluid typography, component-driven modularity, clean accessibility, and sub-second load times—can be united into a commercial portfolio experience.

### Key Highlights
- **Premium Design System**: Dark navy backdrop (`#070A13`), electric blue (`#38BDF8`), and violet (`#8B5CF6`) accents with subtle glows and glassmorphic cards.
- **Fluid Multi-Device Layout**: Rigorously responsive from compact mobile phones (320px) up to ultrawide 4K monitors.
- **Handcrafted Interactive Previews**: In-browser CSS/SVG visual mockups demonstrating Corporate Advisory, SaaS Telemetry Cloud, and Minimalist E-Commerce.
- **Deep Architectural Case Studies**: Interactive modals detailing problem statements, technical solutions, and performance metrics.
- **Validated Inquiry Engine**: Client-side validated contact form with real-time feedback, accessible aria tags, and an honest demo success modal with backend integration guidance.
- **Accessibility & Performance**: Native keyboard focus traps, skip links, semantic HTML5 structure, reduced-motion media query support, and zero bloated external UI frameworks.

---

## 📐 Project Architecture

```
nexora-digital/
├── index.html                 # Semantic entry point with SEO & Open Graph meta tags
├── package.json               # Scripts and dependencies (React 19, Lucide, Vite)
├── vite.config.js             # Vite configuration with React SWC/Babel plugin
├── public/                    # Static assets & favicon
└── src/
    ├── main.jsx               # Application bootstrap with React StrictMode
    ├── App.jsx                # Root view, active section observer, and state routing
    ├── index.css              # Global design tokens, CSS reset, typography, and utilities
    ├── data/
    │   └── siteData.js        # Structured content (Nav, Trust, Services, Projects, Process)
    └── components/
        ├── Navbar.jsx         # Sticky header with backdrop blur & responsive mobile drawer
        ├── Navbar.css
        ├── Hero.jsx           # Hero headline, CTAs, interactive browser mockup & floating cards
        ├── Hero.css
        ├── TrustSection.jsx   # 4 core architectural value propositions
        ├── TrustSection.css
        ├── AboutSection.jsx   # Two-column agency narrative & interactive engineering blueprint
        ├── AboutSection.css
        ├── ServicesSection.jsx # 6 specialized services with inquiry pre-fill triggers
        ├── ServicesSection.css
        ├── ProjectsSection.jsx # 3 showcase cards with custom SVG/CSS live mockups
        ├── ProjectsSection.css
        ├── ProjectModal.jsx   # Detailed architecture modal (ESC & backdrop dismissal)
        ├── ProcessSection.jsx # 4-step delivery lifecycle timeline & deliverables
        ├── ProcessSection.css
        ├── WhyUsSection.jsx   # Developer standards & direct consultation CTA
        ├── WhyUsSection.css
        ├── ContactSection.jsx # Project inquiry form, validation, and demo backend guide
        ├── ContactSection.css
        ├── SocialIcons.jsx    # Custom lightweight SVG icons (GitHub, LinkedIn, Twitter/X)
        ├── Footer.jsx         # Footer navigation, contact info, dynamic year, and back-to-top
        └── Footer.css
```

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Styling**: Pure CSS3 Custom Properties & Modern Flexbox/Grid
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Inter*, *JetBrains Mono*)

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.0.0` or higher (Tested on `v24.18.0`)
- npm `v9.0.0` or higher

### Installation

1. **Clone or navigate into the project directory**:
   ```bash
   cd nexora-digital
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://127.0.0.1:5173/`.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes assets into production-ready bundle in `/dist`. |
| `npm run preview` | Serves the production build locally to test performance and routing. |

---

## 🔌 Connecting a Real Backend to the Contact Form

The contact form in `src/components/ContactSection.jsx` contains full client-side validation and demonstrates an honest demo success message. To connect it to a production backend or email gateway:

### Option 1: Formspree (Easiest)
1. Register at [Formspree](https://formspree.io/) and create a new form.
2. In `ContactSection.jsx`, replace `handleSubmit` with:
   ```javascript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });
   if (response.ok) {
     setIsSubmitted(true);
   }
   ```

### Option 2: Resend + Serverless Function
If deploying to Vercel or Netlify:
1. Create an API route (`/api/contact.js`):
   ```javascript
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);

   export default async function handler(req, res) {
     const { fullName, email, projectType, budgetRange, description } = req.body;
     await resend.emails.send({
       from: 'inquiries@yourdomain.com',
       to: 'your-email@yourdomain.com',
       subject: `New Project Inquiry from ${fullName}`,
       text: `${description} \n\nType: ${projectType}\nBudget: ${budgetRange}`,
     });
     res.status(200).json({ success: true });
   }
   ```

---

## 🚢 Deployment Guide

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow prompts.
3. Build command: `npm run build`, Output directory: `dist`.

### Netlify
1. Drag and drop the `dist` folder onto [Netlify Drop](https://app.netlify.com/drop), or
2. Connect your Git repository with:
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages
1. Set `base: '/repo-name/'` in `vite.config.js`.
2. Run `npm run build` and publish the `dist` directory via `gh-pages`.

---

## 🛡️ License

This project is licensed under the MIT License - feel free to customize and adapt it for client work or your personal portfolio.
