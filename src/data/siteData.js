export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'why-us', label: 'Why Us', href: '#why-us' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const TRUST_PROPOSITIONS = [
  {
    id: 'modern-design',
    icon: 'Palette',
    title: 'Modern Design',
    description:
      'Purposeful aesthetic direction with balanced typography, generous spacing, and intuitive user flows that elevate brand perception.',
  },
  {
    id: 'responsive-dev',
    icon: 'Smartphone',
    title: 'Responsive Development',
    description:
      'Fluid multi-device layouts tailored specifically from compact mobile displays to ultrawide desktop monitors.',
  },
  {
    id: 'performance-focused',
    icon: 'Zap',
    title: 'Performance Focused',
    description:
      'Lean DOM structures, optimized asset delivery, and sub-second load times that keep visitors engaged and improve search visibility.',
  },
  {
    id: 'client-first',
    icon: 'ShieldCheck',
    title: 'Client-First Approach',
    description:
      'Transparent milestone communication, modular architecture for long-term scalability, and thorough code handoff.',
  },
];

export const SERVICES = [
  {
    id: 'business-websites',
    icon: 'Globe',
    badge: 'Core Service',
    title: 'Business Website Development',
    description:
      'Turnkey corporate and company websites that communicate value clearly, build commercial authority, and guide visitors toward conversion.',
    features: [
      'Bespoke architectural layout',
      'Content management readiness',
      'Enterprise security hygiene',
      'Accessible semantic structure',
    ],
    tags: ['Next-Gen Web', 'Scalable', 'SEO Ready'],
  },
  {
    id: 'landing-pages',
    icon: 'Flame',
    badge: 'High Conversion',
    title: 'Responsive Landing Pages',
    description:
      'High-impact, single-goal landing pages engineered to validate product launches, promote marketing campaigns, and maximize signups.',
    features: [
      'Frictionless call-to-actions',
      'A/B testing-ready sections',
      'Fast sub-second paint times',
      'Integrated tracking hooks',
    ],
    tags: ['Marketing', 'Lead Gen', 'Ultra Fast'],
  },
  {
    id: 'react-applications',
    icon: 'Code2',
    badge: 'Full Stack UI',
    title: 'React.js Web Applications',
    description:
      'Dynamic single-page applications and interactive web portals built with reusable component systems, clean state management, and robust APIs.',
    features: [
      'Modular component libraries',
      'Predictable reactive state',
      'REST & GraphQL integration',
      'Strict linting and testability',
    ],
    tags: ['React', 'JavaScript', 'SPA'],
  },
  {
    id: 'ui-ux-design',
    icon: 'Layers',
    badge: 'User Centric',
    title: 'UI/UX Design Implementation',
    description:
      'Figma-to-code translations executed with pixel precision, consistent design tokens, accessible color contrast, and refined micro-interactions.',
    features: [
      'Design token integration',
      'Accessible WCAG AA standards',
      'Subtle micro-animations',
      'Consistent design systems',
    ],
    tags: ['Design Systems', 'WCAG', 'Figma to Code'],
  },
  {
    id: 'redesign-optimization',
    icon: 'TrendingUp',
    badge: 'Modernization',
    title: 'Website Redesign & Optimization',
    description:
      'Modernizing outdated web properties with contemporary visual identity, reduced bundle sizes, improved Lighthouse metrics, and mobile-friendly layouts.',
    features: [
      'Core Web Vitals tuning',
      'Legacy markup refactoring',
      'Asset compression pipelines',
      'Bounce rate reduction focus',
    ],
    tags: ['Lighthouse 95+', 'Speed Audit', 'Refactoring'],
  },
  {
    id: 'maintenance-support',
    icon: 'Wrench',
    badge: 'Reliability',
    title: 'Website Maintenance & Evolution',
    description:
      'Ongoing technical upkeep, dependency upgrades, security patching, browser compatibility testing, and routine feature enhancements.',
    features: [
      'Dependency vulnerability scans',
      'Cross-browser sanity testing',
      'Content and layout updates',
      'Regular backup protocols',
    ],
    tags: ['Security', 'Updates', 'Uptime'],
  },
];

export const FEATURED_PROJECTS = [
  {
    id: 'apex-global',
    title: 'Apex Global Advisory',
    category: 'Corporate Business Website',
    subtitle: 'Strategic enterprise consulting platform with client portal preview',
    description:
      'A multi-page corporate presence crafted for an international management consultancy firm. Features structured thought leadership insights, practice area breakdowns, and interactive consultation scheduling.',
    isConceptDemo: true,
    tags: ['React.js', 'Vite', 'Modern CSS', 'Semantic HTML5', 'Responsive Grid'],
    stats: [
      { label: 'Architecture', value: 'Component-Based' },
      { label: 'Responsive', value: '320px — 4K' },
      { label: 'Performance Tier', value: 'Class A Optimized' },
    ],
    challenge:
      'Corporate firms often struggle with dense information hierarchies that overwhelm prospects before value propositions are registered.',
    solution:
      'Engineered an asymmetric two-tier grid that cleanly isolates practice specializations while keeping primary engagement triggers persistent.',
    highlights: [
      'Custom SVG data visualizer showing service reach',
      'Client inquiry modal with validation and routing logic',
      'Full WCAG AA keyboard accessibility compliance',
      'Zero layout shift (CLS 0.00) during typography hydration',
    ],
    previewTheme: {
      primaryColor: '#38BDF8',
      accentColor: '#1E293B',
      tag: 'Enterprise Showcase',
    },
  },
  {
    id: 'vantage-analytics',
    title: 'Vantage Telemetry Cloud',
    category: 'SaaS Dashboard Interface',
    subtitle: 'Real-time observability and cloud resource telemetry dashboard',
    description:
      'A high-density web application interface engineered for monitoring distributed cloud infrastructure, throughput latency, and active service instances.',
    isConceptDemo: true,
    tags: ['React', 'CSS Grid', 'Custom SVG Charts', 'State Hooks', 'Dark Theme'],
    stats: [
      { label: 'UI Density', value: 'High / Professional' },
      { label: 'Data Widgets', value: '6 Interactive Panes' },
      { label: 'Theme', value: 'Dark Navy / Electric Violet' },
    ],
    challenge:
      'Telemetry dashboards must present hundreds of data points without causing cognitive fatigue or rendering jank.',
    solution:
      'Built a modular tile system with dynamic CSS variables, GPU-accelerated SVG sparklines, and status badges with pulse indicators.',
    highlights: [
      'Real-time animated metrics simulator with toggleable state',
      'Multi-axis resource utilization graphs rendered via native SVG',
      'Filterable server status drawer with latency indicators',
      'Optimized memory footprint with zero external graphing dependencies',
    ],
    previewTheme: {
      primaryColor: '#818CF8',
      accentColor: '#0F172A',
      tag: 'SaaS Product Showcase',
    },
  },
  {
    id: 'aura-living',
    title: 'Aura Minimalist Living',
    category: 'E-commerce Storefront',
    subtitle: 'High-conversion lifestyle catalog and architectural home goods store',
    description:
      'A sleek, minimalist digital storefront combining visual storytelling with frictionless product inspection, curated collections, and responsive cart interaction.',
    isConceptDemo: true,
    tags: ['React', 'CSS Flexbox/Grid', 'Micro-Interactions', 'Responsive Media', 'Filter System'],
    stats: [
      { label: 'Catalog Engine', value: 'Instant Filter' },
      { label: 'Checkout Path', value: '3-Step UX Flow' },
      { label: 'Visual Hierarchy', value: 'Editorial Minimal' },
    ],
    challenge:
      'Luxury and lifestyle storefronts frequently lose sales through slow media loading and clunky mobile cart transitions.',
    solution:
      'Utilized lightweight vector placeholders, streamlined slide-over drawer cart previews, and fluid grid layouts that shine on mobile.',
    highlights: [
      'Interactive product variant switcher with live price updates',
      'Quick-view modal drawer with smooth slide animation',
      'Clear inventory status indicators and tactile CTA states',
      'Fully responsive thumb-friendly mobile navigation',
    ],
    previewTheme: {
      primaryColor: '#34D399',
      accentColor: '#111827',
      tag: 'E-Commerce Showcase',
    },
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Alignment & Scope Definition',
    description:
      'We unpack your business objectives, target audience requirements, competitor landscape, and core feature priorities to establish an unambiguous project charter.',
    deliverables: ['Project Blueprint', 'User Flow Mapping', 'Tech Stack Selection'],
    icon: 'Compass',
  },
  {
    step: '02',
    title: 'Plan',
    tagline: 'Information Architecture & Wireframing',
    description:
      'Structural design comes before styling. We construct content hierarchies, component wireframes, and responsive layout specifications that eliminate guesswork.',
    deliverables: ['Information Architecture', 'Component Inventory', 'Sprint Roadmap'],
    icon: 'FileCode2',
  },
  {
    step: '03',
    title: 'Design & Develop',
    tagline: 'Iterative Engineering & Polish',
    description:
      'Translating architectural blueprints into modular React code, clean semantic HTML, and performant CSS with subtle micro-interactions and rigorous state hygiene.',
    deliverables: ['Clean React Components', 'Design System Integration', 'Responsive Testing'],
    icon: 'Laptop',
  },
  {
    step: '04',
    title: 'Test & Deliver',
    tagline: 'Quality Assurance & Launch Handover',
    description:
      'Comprehensive cross-browser verification, mobile ergonomics check, Lighthouse performance audit, and complete source code delivery with documentation.',
    deliverables: ['Lighthouse Report', 'Source Code Handoff', 'Deployment Guide'],
    icon: 'CheckCircle2',
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: 'SmartphoneCheck',
    title: 'Responsive-First Development',
    description:
      'We build mobile-first as an engineering principle, not an afterthought. Every layout is tested against real-world screen dimensions to ensure comfortable readability and touch ergonomics.',
  },
  {
    icon: 'CodeSquare',
    title: 'Clean and Maintainable Code',
    description:
      'No bloated template spaghetti. We write modular, well-commented, and standard-compliant React code that your team or future developers can easily understand and extend.',
  },
  {
    icon: 'MessageSquareShare',
    title: 'Clear Project Communication',
    description:
      'Direct, proactive project updates with defined milestones. You always know what is being built, what comes next, and when deliverables will be ready for review.',
  },
  {
    icon: 'Crosshair',
    title: 'Attention to Detail',
    description:
      'From consistent 4px/8px layout grids to carefully tuned hover transitions and accessible contrast ratios, we obsess over subtle details that build consumer trust.',
  },
  {
    icon: 'Gauge',
    title: 'Performance and Accessibility Focus',
    description:
      'Fast-loading pages with semantic markup, proper keyboard focus management, and adherence to modern web standards that benefit both search engines and all users.',
  },
];

export const PROJECT_TYPES = [
  'Business Website Development',
  'Responsive Landing Page',
  'React.js Web Application',
  'UI/UX Design Implementation',
  'Website Redesign & Optimization',
  'Maintenance & Support',
  'Other / Custom Inquiry',
];

export const BUDGET_RANGES = [
  '< $2,500 (Small Sprint / Landing Page)',
  '$2,500 – $5,000 (Standard Business Site)',
  '$5,000 – $10,000 (Custom Web App / Portal)',
  '$10,000+ (Comprehensive Platform)',
  'Undetermined / Need Consultation',
];

export const BRAND_CONFIG = {
  name: 'Digital Studio',
  shortName: 'Digital Studio',
  logoInitial: 'D',
  tagline: 'Engineering Digital Experiences That Drive Growth',
  email: 'hello@digitalstudio.example',
  location: 'Remote Studio (Available Globally)',
  workingHours: 'Mon – Fri: 09:00 – 18:00 UTC',
  disclaimer:
    'Digital Studio is a portfolio showcase and modern web engineering platform demonstrating production-grade frontend architecture, responsive design systems, and client delivery standards.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/example/digital-studio', icon: 'Github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/digital-studio-example', icon: 'Linkedin' },
    { label: 'X / Twitter', href: 'https://x.com/digitalstudio_ex', icon: 'Twitter' },
  ],
};

// Central export aliased for seamless consistency across components
export const AGENCY_METADATA = BRAND_CONFIG;
