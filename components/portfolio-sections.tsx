"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  capabilityStories,
  metrics,
  sections,
  showcasePanels,
  techClusters,
} from "./portfolio-data";

const assetRoot = "/stitch/architectural-frontend-portfolio";
const whatsappHref = "https://wa.me/919665511207";
const linkedinHref = "https://www.linkedin.com/in/laxmikant-karwa-406606157/";

function Icon({ children }: { children: string }) {
  return (
    <span aria-hidden="true" className="material-symbols-outlined">
      {children}
    </span>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPointerOver, setIsPointerOver] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 24);
      frame = 0;
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateHeaderState);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateHeaderState();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}${isPointerOver ? " is-pointer-over" : ""}`}
      id="main-header"
      onPointerEnter={() => setIsPointerOver(true)}
      onPointerLeave={() => setIsPointerOver(false)}
    >
      <div className="container header-inner">
        <a className="brand" href="#hero-scroll-container">
          <span className="brand-mark">
            <Image
              src={`${assetRoot}/lk-monogram.png`}
              alt="LK Monogram"
              width={128}
              height={128}
            />
          </span>
          <span>
            <strong>Laxmikant Karwa</strong>
            <small>UI Architect · Tech Lead</small>
          </span>
        </a>
        <div className="availability">
          <i /> Active · Enterprise UI Architecture & Advisory
        </div>
        <div className="header-actions">
          <nav aria-label="Main Navigation">
            <a href="#capabilities">Capabilities</a>
            <a href="#horizontal-showcase-root">Systems</a>
            <a href="#stack">Stack</a>
            <a href="#scale">Scale</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#trajectory">Trajectory</a>
            <a href="#philosophy">About</a>
          </nav>
          <a className="small-button" href="#contact">
            <Icon>mail</Icon> Contact
          </a>
          <a
            className="small-button social-button"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <Icon>chat</Icon> WhatsApp
          </a>
          <a
            className="small-button resume-button"
            href="/documents/laxmikant-karwa.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Icon>description</Icon> Resume
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className={`mobile-menu-button${isMenuOpen ? " is-open" : ""}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span className="mobile-menu-icon mobile-menu-icon-open">
              <Icon>menu</Icon>
            </span>
            <span className="mobile-menu-icon mobile-menu-icon-close">
              <Icon>close</Icon>
            </span>
          </button>
        </div>
      </div>
      <div
        className={`mobile-navigation${isMenuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile Navigation">
          <a href="#capabilities" onClick={closeMenu}>
            Capabilities
          </a>
          <a href="#horizontal-showcase-root" onClick={closeMenu}>
            Systems
          </a>
          <a href="#stack" onClick={closeMenu}>
            Stack
          </a>
          <a href="#scale" onClick={closeMenu}>
            Scale
          </a>
          <a href="#ecosystem" onClick={closeMenu}>
            Ecosystem
          </a>
          <a href="#trajectory" onClick={closeMenu}>
            Trajectory
          </a>
          <a href="#philosophy" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a
            href={whatsappHref}
            onClick={closeMenu}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a
            href={linkedinHref}
            onClick={closeMenu}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            href="/documents/laxmikant-karwa.pdf"
            onClick={closeMenu}
            rel="noreferrer"
            target="_blank"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <div className="hero-scroll" id="hero-scroll-container">
      <section className="hero-stage container">
        <div className="hero-copy" id="hero-headline-block">
          <div className="eyebrow">
            <span>
              Full-stack Engineer / Frontend Architect / Engineering Lead
            </span>
            <b /> Pune, India
          </div>
          <h1>
            Frontend systems,
            <br />
            <em>built to scale.</em>
          </h1>
          <p>
            I design full-stack product systems with a frontend specialization:
            expressive interfaces, explicit APIs, durable data flows, and global
            delivery.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#horizontal-showcase-root">
              Explore my work <Icon>arrow_forward</Icon>
            </a>
            <a className="button button-dark" href="#contact">
              <Icon>alternate_email</Icon> View résumé & contact
            </a>
            <a
              className="button button-dark"
              href="/documents/laxmikant-karwa.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>description</Icon> Open CV
            </a>
          </div>
        </div>
        <div className="topology" id="hero-topology-stage">
          <div className="topology-line" />
          <div className="topology-header">
            <strong>
              <i /> Architectural Layer Pipeline
            </strong>
            <span>
              PASSING 100% CI ·{" "}
              <b id="hero-stage-state-indicator">SCROLL TO EXPAND PIPELINE</b>
            </span>
          </div>
          <div className="layer-grid">
            {[
              "UI Interfaces|WCAG 2.1 AA, fluid layout tokens|140+ Locales",
              "Components|Reusable HOCs & atomic primitives|React · TypeScript",
              "State Tree|Predictable stores & async sagas|Redux Toolkit",
              "API Federation|GraphQL gateways & session tokens|GraphQL · REST",
              "Infra & CI/CD|Zero-downtime AWS edge delivery|AWS · CloudFront",
            ].map((node, index) => {
              const [title, desc, tag] = node.split("|");
              return (
                <div className="layer-node" data-hero-node key={title}>
                  <span>0{index + 1} / LAYER</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <b>{tag}</b>
                </div>
              );
            })}
          </div>
          <div className="topology-footer">
            <span>
              ● BENCHMARK: SUB-SECOND　·　RENDER: 0.9s　·　TTI: &lt;1.4s
            </span>
            <strong>
              Interlocking Systems Pipeline Active　<Icon>bolt</Icon>
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Metrics() {
  function CountUpMetric({ metric }: { metric: (typeof metrics)[number] }) {
    const [value, setValue] = useState(0);
    const metricRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const element = metricRef.current;
      if (!element) return;

      const target = Number(metric.value);
      let animationFrame = 0;
      let displayedValue = 0;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const animate = (nextValue: number) => {
        cancelAnimationFrame(animationFrame);
        const initialValue = displayedValue;
        const start = performance.now();
        const duration = 650;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          displayedValue = initialValue + (nextValue - initialValue) * eased;
          setValue(Math.round(displayedValue));
          if (progress < 1) animationFrame = requestAnimationFrame(tick);
        };
        animationFrame = requestAnimationFrame(tick);
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (prefersReducedMotion) {
            displayedValue = entry.isIntersecting ? target : 0;
            setValue(displayedValue);
          } else {
            animate(entry.isIntersecting ? target : 0);
          }
        },
        { threshold: 0.35 },
      );

      observer.observe(element);
      return () => {
        observer.disconnect();
        cancelAnimationFrame(animationFrame);
      };
    }, [metric.value]);

    return (
      <article className="metric-card" ref={metricRef}>
        <span className={`accent-${metric.accent}`}>{metric.label}</span>
        <strong>
          {value}
          <i>{metric.suffix}</i>
        </strong>
        <h3>{metric.title}</h3>
        <p>{metric.text}</p>
      </article>
    );
  }

  return (
    <section className="metrics-strip" id="metrics-strip">
      <div className="container metrics-grid">
        {metrics.map((metric) => (
          <CountUpMetric key={metric.title} metric={metric} />
        ))}
      </div>
    </section>
  );
}

export function StackOverview() {
  return (
    <section className="stack-overview" id="stack">
      <div className="container stack-overview-grid">
        <div className="stack-overview-copy">
          <span className="section-kicker">
            <Icon>account_tree</Icon> Full-stack systems, frontend-led
          </span>
          <h2>Every polished interface has a system behind it.</h2>
          <p>
            My strongest work sits at the boundary: translating product intent
            into frontend architecture, then shaping the APIs, services, data
            contracts, and delivery paths that keep the experience fast and
            dependable.
          </p>
          <div className="stack-links">
            <a className="stack-link stack-link-primary" href="/frontend">
              <span>01</span>
              <strong>Frontend architecture</strong>
              <small>Design systems · React platforms · performance</small>
              <b>Explore →</b>
            </a>
            <a className="stack-link stack-link-secondary" href="/backend">
              <span>02</span>
              <strong>Backend systems</strong>
              <small>APIs · data flows · security · cloud delivery</small>
              <b>Explore →</b>
            </a>
          </div>
        </div>
        <div
          className="stack-diagram"
          aria-label="Full-stack architecture diagram"
        >
          <div className="diagram-node frontend-node">
            <span>01</span>
            <strong>Frontend</strong>
            <small>
              React · TypeScript
              <br />
              Design systems · UX
            </small>
          </div>
          <div className="diagram-node contract-node">
            <span>02</span>
            <strong>Contracts</strong>
            <small>
              GraphQL · REST
              <br />
              Auth · Observability
            </small>
          </div>
          <div className="diagram-node backend-node">
            <span>03</span>
            <strong>Backend</strong>
            <small>
              Node.js · MySQL
              <br />
              AWS · CI/CD
            </small>
          </div>
          <i className="diagram-connector connector-one" />
          <i className="diagram-connector connector-two" />
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(
          0.999,
          -rect.top / Math.max(1, rect.height - window.innerHeight),
        ),
      );
      const nextActive = Math.min(
        capabilityStories.length - 1,
        Math.floor(progress * capabilityStories.length),
      );
      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const story = capabilityStories[active];
  return (
    <section className="capabilities" id="capabilities" ref={containerRef}>
      <div className="container section-heading">
        <div>
          <span className="section-kicker">
            <Icon>terminal</Icon> Systemic Capabilities
          </span>
          <h2>What I build — Systems over screens.</h2>
        </div>
        <code>{"TAXONOMY // PRODUCTION STANDARDS"}</code>
      </div>
      <div className="capability-pin container">
        <div className="schematic">
          <div className="schematic-title">
            <span>{`SCHEMATIC 0${active + 1} // ${story.title.toUpperCase()}`}</span>
            <span>CORE VITALS GREEN</span>
          </div>
          <div className="schematic-body">
            <div className="diagram-grid">
              <span>semantic tokens</span>
              <span>composition boundaries</span>
              <span>edge delivery</span>
            </div>
            <div className="diagram-line">{story.desc}</div>
          </div>
          <div className="schematic-foot">
            SYSTEM STATUS <b>OPERATIONAL</b>
          </div>
        </div>
        <div className="capability-copy">
          <div className="step">
            <span>STEP {story.step}</span>
            <i>
              <b style={{ width: `${(active + 1) * 20}%` }} />
            </i>
          </div>
          <h3>{story.title}</h3>
          <p>{story.desc}</p>
          <div className="tag-list">
            {story.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Systems() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (
        !rootRef.current ||
        !trackRef.current ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      const rect = rootRef.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / Math.max(1, rect.height - window.innerHeight)),
      );
      const travel = Math.max(
        0,
        trackRef.current.scrollWidth - window.innerWidth + 120,
      );
      trackRef.current.style.transform = `translate3d(-${progress * travel}px, 0, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="systems" id="horizontal-showcase-root" ref={rootRef}>
      <div className="systems-sticky">
        <div className="container systems-heading">
          <div>
            <span className="section-kicker accent-secondary">
              <Icon>view_carousel</Icon> Horizontal Technical Showcase
            </span>
            <h2>Production Architectures Scrub</h2>
          </div>
          <span className="counter">01 / 05</span>
        </div>
        <div className="systems-window">
          <div className="systems-track" ref={trackRef}>
            {showcasePanels.map((panel) => (
              <article className="showcase-card" key={panel.number}>
                <div className="showcase-meta">
                  <span className={`accent-${panel.accent}`}>
                    {panel.number} · {panel.label}
                  </span>
                  <b>{panel.stat}</b>
                </div>
                <h3>{panel.title}</h3>
                <p>{panel.description}</p>
                <div className="showcase-metrics">
                  <span>
                    RESULT <b>{panel.metrics[0]}</b>
                  </span>
                  <span>
                    ARCHITECTURE <b>{panel.metrics[1]}</b>
                  </span>
                </div>
                <div className="tag-list">
                  {panel.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="container systems-footer">
          <span>
            <Icon>swap_horiz</Icon> SCROLL DOWN TO SCRUB PANELS HORIZONTALLY
          </span>
          <span>BIDIRECTIONAL SCROLL-DRIVEN</span>
        </div>
      </div>
    </section>
  );
}

export function Scale() {
  return (
    <section className="container section scale" id="scale">
      <div className="scale-panel">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <Icon>public</Icon> Global Reach & Footprint
            </span>
            <h2>Built for more than one screen.</h2>
            <p>
              Systems designed to operate seamlessly across multi-continent
              distributions, disparate languages, and heterogeneous enterprise
              networks.
            </p>
          </div>
          <code>LATENCY TARGET: &lt; 20ms EDGE RESPONSE</code>
        </div>
        <div className="region-grid">
          {[
            [
              "NORTH AMERICA",
              "38+ Portals",
              "Localized e-commerce & consumer catalogs across US and Canadian locales.",
            ],
            [
              "EUROPE & MEA",
              "62+ Portals",
              "Multi-lingual governance across 18 unique language engines.",
            ],
            [
              "ASIA PACIFIC",
              "40+ Portals",
              "CJK character set optimization and cellular bandwidth budgeting.",
            ],
            [
              "ENTERPRISE HUB",
              "1 Unified Engine",
              "Centralized atomic design system shared across every region.",
            ],
          ].map(([region, count, copy]) => (
            <article key={region}>
              <span>{region}</span>
              <strong>{count}</strong>
              <p>{copy}</p>
              <b>RTT: 18ms Median</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ecosystem() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="container section" id="ecosystem">
      <div className="section-heading intro">
        <div>
          <span className="section-kicker">
            <Icon>hub</Icon> Architectural Synergies
          </span>
          <h2>Under the interface — Technology constellation.</h2>
          <p>
            Every tool selected deliberately for architectural cohesion. Hover
            over any technology node to examine linked ecosystem couplings.
          </p>
        </div>
      </div>
      <div className="cluster-grid">
        {techClusters.map((cluster) => (
          <article className="cluster" key={cluster.title}>
            <div className={`cluster-title accent-${cluster.accent}`}>
              <span>{cluster.title}</span>
              <Icon>{cluster.icon}</Icon>
            </div>
            <div className="cluster-items">
              {cluster.items.map((item) => (
                <button
                  className={active === item ? "active" : ""}
                  onMouseEnter={() => setActive(item)}
                  onMouseLeave={() => setActive(null)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="status-bar">
        <span>
          <Icon>info</Icon>
          {active ? (
            <>
              <b>{active}</b> actively bound to linked engineering subsystems.
            </>
          ) : (
            "Hover over any node to highlight linked engineering subsystems."
          )}
        </span>
        <code>STRICT TYPESCRIPT + ZERO FORKING</code>
      </div>
    </section>
  );
}

export function Trajectory() {
  const roles = [
    [
      "2023 — Present · Pune, India",
      "Deputy Manager — Frontend Architecture",
      "Architecture & Leadership",
      "Directing global frontend architecture and engineering delivery across 140+ international domains. Mentoring engineers, steering code quality gates, standardizing design tokens, and leading latency optimization campaigns delivering a sustained 70% decrease in page render times.",
    ],
    [
      "2021 — 2023 · Pune, India",
      "Software Development Engineer",
      "Enterprise Engineering",
      "Engineered scalable enterprise web platforms using React, Redux, and MySQL. Implemented hardened RBAC security, cookie-based session management, server-driven pagination, and automated cloud release pipelines on AWS.",
    ],
    [
      "2018 — 2021 · Pune, India",
      "Frontend Web Engineer",
      "Frontend Implementation",
      "Built dynamic single-page applications from initial design specs to production release. Created reusable HOC abstractions, integrated REST and GraphQL endpoints, and instituted Jest unit testing gates.",
    ],
  ];
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateTimeline = () => {
      const timeline = timelineRef.current;
      const fill = timelineFillRef.current;
      if (!timeline || !fill) return;
      const rect = timeline.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );
      fill.style.height = `${progress * 100}%`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateTimeline);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateTimeline();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <section className="container section" id="trajectory">
      <div className="section-heading intro">
        <div>
          <span className="section-kicker accent-secondary">
            <Icon>timeline</Icon> Career Story
          </span>
          <h2>
            Growing from frontend implementation to architecture and leadership.
          </h2>
          <p>
            An eight-year trajectory defined by continuous technical
            progression, system ownership, and engineering mentorship.
          </p>
        </div>
      </div>
      <div className="trajectory-vector">
        <span>TRAJECTORY VECTOR:</span>
        <b>IMPLEMENTATION</b>
        <i>→</i>
        <b>ENGINEERING</b>
        <i>→</i>
        <b className="active">ARCHITECTURE + LEADERSHIP</b>
      </div>
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-spine" aria-hidden="true">
          <div className="timeline-spine-fill" ref={timelineFillRef} />
        </div>
        {roles.map(([date, title, badge, copy], index) => (
          <article key={title}>
            <div className={`timeline-dot dot-${index}`}>
              <Icon>
                {index === 0
                  ? "architecture"
                  : index === 1
                    ? "terminal"
                    : "code"}
              </Icon>
            </div>
            <div className="timeline-card">
              <span>{date}</span>
              <div>
                <h3>{title}</h3>
                <b>{badge}</b>
              </div>
              <p>{copy}</p>
              <small>
                • System ownership　 • Technical mentorship　 • Production
                delivery
              </small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="container philosophy-grid">
        <div className="portrait">
          <Image
            src={`${assetRoot}/laxmikant-karwa-portrait.png`}
            alt="Laxmikant Karwa"
            width={512}
            height={512}
          />
          <div>
            <strong>Laxmikant Karwa</strong>
            <span>UI Architect & Engineering Lead</span>
          </div>
        </div>
        <div>
          <span className="section-kicker accent-secondary">
            <Icon>psychology</Icon> Engineering Philosophy
          </span>
          <h2>Systems over screens. Principles over dogma.</h2>
          <p className="lead">
            I view frontend engineering not as skinning views, but as creating
            resilient, composable computational machines. When systems are
            decoupled, data contracts are explicit, and performance is respected
            as a feature, applications scale effortlessly.
          </p>
          <div className="tenets">
            {[
              [
                "01",
                "Build systems, not screens",
                "Great frontend systems make each successive feature faster, safer, and cheaper to release.",
              ],
              [
                "02",
                "Performance is part of the interface",
                "No visual polish compensates for latency. An interface that hesitates breaks user trust.",
              ],
              [
                "03",
                "Consistency scales better than duplication",
                "Automated linting, strict design tokens, and shared components allow large squads to move rapidly.",
              ],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <b>{number}</b>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText("lkkarwa95@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section className="container section" id="contact">
      <div className="contact-panel">
        <span className="section-kicker">
          <i /> Technical Architecture · Advisory · Engineering Leadership
        </span>
        <h2>Have a frontend problem worth solving?</h2>
        <p>
          Available for senior frontend architectural consulting, enterprise UI
          systems leadership, and select technical advisory engagements.
        </p>
        <div className="hero-actions">
          <a className="button button-light" href="mailto:lkkarwa95@gmail.com">
            <Icon>mail</Icon> Initiate Transmission (Email)
          </a>
          <a
            className="button button-whatsapp"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <Icon>chat</Icon> Connect on WhatsApp
          </a>
          <a
            className="button button-linkedin"
            href={linkedinHref}
            target="_blank"
            rel="noreferrer"
          >
            <Icon>person</Icon> LinkedIn
          </a>
          <button className="button button-dark" onClick={copyEmail}>
            <Icon>content_copy</Icon>{" "}
            {copied ? "COPIED TO CLIPBOARD" : "Copy lkkarwa95@gmail.com"}
          </button>
        </div>
        <div className="contact-details">
          <span>
            DIRECT LINE
            <strong>
              <a
                className="contact-link"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                +91-9665511207
              </a>
            </strong>
          </span>
          <span>
            BASE HEADQUARTERS<strong>Pune, Maharashtra, India</strong>
          </span>
          <span>
            ADVISORY STATUS
            <strong className="success">Open for Global Engagements</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="brand">
          <span className="brand-mark">
            <Image
              src={`${assetRoot}/lk-monogram.png`}
              alt="LK Monogram"
              width={128}
              height={128}
            />
          </span>
          <span>
            <strong>Laxmikant Karwa</strong>
            <small>© 2026 · Systems Architecture Monograph</small>
          </span>
        </div>
        <nav>
          <a href="#capabilities">Capabilities</a>
          <a href="#stack">Stack</a>
          <a href="#horizontal-showcase-root">Systems</a>
          <a href="#scale">Scale</a>
          <a href="#contact">Contact</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp ↗
          </a>
          <a href={linkedinHref} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a
            href="/documents/laxmikant-karwa.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </nav>
        <span className="footer-status">
          <i /> Crafted for high performance & scale
        </span>
      </div>
    </footer>
  );
}

export function ScrollHud() {
  const [scroll, setScroll] = useState(0);
  const [label, setLabel] = useState<string>("00 // HERO");
  const scrollRef = useRef(0);
  const labelRef = useRef("00 // HERO");
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const nextScroll = total ? Math.round((y / total) * 100) : 0;
      if (nextScroll !== scrollRef.current) {
        scrollRef.current = nextScroll;
        setScroll(nextScroll);
      }
      const current = sections.reduce(
        (result, section) =>
          (document.getElementById(section.id)?.offsetTop ?? 0) <=
          y + window.innerHeight * 0.35
            ? section
            : result,
        sections[0],
      );
      const nextLabel = current?.label ?? "00 // HERO";
      if (nextLabel !== labelRef.current) {
        labelRef.current = nextLabel;
        setLabel(nextLabel);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="scroll-progress" style={{ width: `${scroll}%` }} />
      <aside className="scroll-hud">
        <i /> <b>{label}</b>
        <span>|</span>
        {String(scroll).padStart(2, "0")} % <Icon>arrow_downward</Icon>
      </aside>
    </>
  );
}
