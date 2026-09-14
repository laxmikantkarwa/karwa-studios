export const capabilityStories = [
  {
    step: "01 / 05",
    title: "Scalable Interfaces",
    desc: "Responsive UI engineering built with precision typography, sub-pixel alignment, and strict WCAG 2.1 AA accessibility compliance across complex viewports.",
    tags: ["Responsive Layouts", "WCAG AA A11y", "Design Tokens"],
    accent: "primary",
  },
  {
    step: "02 / 05",
    title: "Frontend Systems & Reusable HOCs",
    desc: "Authoring reusable Higher-Order Component decorators that eliminate 40% of repetitive code while ensuring deterministic error containment.",
    tags: ["Reusable HOCs", "Normalized Redux", "Micro-Frontends"],
    accent: "secondary",
  },
  {
    step: "03 / 05",
    title: "Performance Engineering",
    desc: "Sub-second initial rendering achieved via critical CSS paths, lazy chunk boundaries, and virtualized dataset tables scrolling 50,000+ records seamlessly.",
    tags: ["0.9s Render", "50k Virtualization", "Critical CSS"],
    accent: "tertiary",
  },
  {
    step: "04 / 05",
    title: "Global Edge Architecture",
    desc: "Directing frontend architecture across 140+ international domains with multi-region AWS replication and sub-20ms edge response latency.",
    tags: ["140+ Portals", "AWS CloudFront", "Dynamic Locales"],
    accent: "primary",
  },
  {
    step: "05 / 05",
    title: "CI/CD Cloud Delivery & Leadership",
    desc: "Disciplined GitLab branching flow, automated Jest regression tests, and zero-downtime AWS deployments backed by transparent system RFC governance.",
    tags: ["Zero Downtime", "Jest Regression", "RFC Governance"],
    accent: "success",
  },
] as const;

export const showcasePanels = [
  {
    number: "01",
    label: "UI ENGINEERING",
    stat: "140+ Locales",
    title: "Scalable Multi-Locale UI",
    description:
      "Designed dynamic internationalized frontends supporting 140+ regional portals with real-time text-direction support and strict WCAG 2.1 AA audit sign-off.",
    metrics: ["-70% Latency", "100% WCAG AA"],
    tags: ["Fluid Layouts", "Tailwind Tokens"],
    accent: "primary",
  },
  {
    number: "02",
    label: "FRONTEND ARCHITECTURE",
    stat: "-40% Code Duplication",
    title: "Reusable HOC Ecosystem",
    description:
      "Devised composable Higher-Order Component decorators wrapping authorization, telemetry, and boundary errors into normalized enterprise workflows.",
    metrics: ["94.8% Jest", "Composition Decorator"],
    tags: ["React HOCs", "TypeScript"],
    accent: "secondary",
  },
  {
    number: "03",
    label: "DATA & APIS",
    stat: "1,240 req/s Stream",
    title: "Federated API Gateways",
    description:
      "Harmonized disparate backend microservices through GraphQL federated schemas with cookie-secured session tokens and instantaneous client updates.",
    metrics: ["Hardened JWT / Cookie", "GraphQL Federation"],
    tags: ["GraphQL", "Node.js Gateway"],
    accent: "primary",
  },
  {
    number: "04",
    label: "PERFORMANCE",
    stat: "0.9s Initial Render",
    title: "Sub-Second Execution",
    description:
      "Eradicated client latency through critical-path style separation, dynamic tree-shaking, and virtualized tables smoothly cycling 50,000+ data rows at 60 FPS.",
    metrics: ["185 KB Chunk", "50,000 Rows"],
    tags: ["Code Splitting", "Critical CSS"],
    accent: "tertiary",
  },
  {
    number: "05",
    label: "CI/CD & DEVOPS",
    stat: "Zero Downtime",
    title: "Automated Cloud Releases",
    description:
      "Engineered disciplined CI/CD deployment pipelines orchestrating strict TypeScript verification, Jest regression containment, and AWS CloudFront edge rollouts.",
    metrics: ["< 4.2 Mins", "Live AWS CDN"],
    tags: ["AWS S3 / CloudFront", "GitFlow Gates"],
    accent: "success",
  },
] as const;

export const sections = [
  { id: "hero-scroll-container", label: "00 // HERO" },
  { id: "metrics-strip", label: "01 // METRICS" },
  { id: "capabilities", label: "02 // CAPABILITIES" },
  { id: "horizontal-showcase-root", label: "03 // SYSTEMS" },
  { id: "scale", label: "04 // SCALE" },
  { id: "ecosystem", label: "05 // ECOSYSTEM" },
  { id: "trajectory", label: "06 // TRAJECTORY" },
  { id: "philosophy", label: "07 // PHILOSOPHY" },
  { id: "contact", label: "08 // CONTACT" },
] as const;

export const techClusters = [
  {
    title: "Core Frontend",
    icon: "devices",
    accent: "primary",
    items: [
      "React",
      "Redux",
      "Redux Toolkit",
      "Redux-Saga",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Architectural Patterns",
    icon: "account_tree",
    accent: "secondary",
    items: [
      "Reusable Components",
      "HOC Design",
      "Responsive UI",
      "State Management",
      "Micro-Frontend",
    ],
  },
  {
    title: "Backend & Data",
    icon: "dns",
    accent: "tertiary",
    items: ["Node.js", "GraphQL", "REST APIs", "Apostrophe CMS", "MySQL"],
  },
  {
    title: "DevOps & Quality",
    icon: "terminal",
    accent: "success",
    items: [
      "Git & GitLab",
      "CI/CD Pipelines",
      "Jest Testing",
      "AWS CloudFront/S3",
    ],
  },
] as const;

export const metrics = [
  {
    value: "8",
    suffix: "+",
    title: "Years Engineering",
    label: "EXPERIENCE DEPTH",
    text: "Frontend engineering progression from single-page web applications to global federated platforms.",
    accent: "primary",
  },
  {
    value: "140",
    suffix: "+",
    title: "Global Websites",
    label: "GLOBAL SCALE",
    text: "Architecture and deployment across international scale, multi-language routing, and enterprise CMS.",
    accent: "secondary",
  },
  {
    value: "70",
    suffix: "%",
    title: "Load Time Reduction",
    label: "PERFORMANCE",
    text: "Performance improvement delivered through critical CSS inlining, code splitting, and bundle optimization.",
    accent: "primary",
  },
  {
    value: "3",
    suffix: "×",
    title: "Career Stages",
    label: "TRAJECTORY",
    text: "Continuous elevation from frontend implementation to architecture, system ownership, and technical leadership.",
    accent: "tertiary",
  },
] as const;
