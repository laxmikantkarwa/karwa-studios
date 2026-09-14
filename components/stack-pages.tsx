import Link from "next/link";
import { showcasePanels, techClusters } from "./portfolio-data";

const resumeHref = "/documents/laxmikant-karwa.pdf";

const frontendDetails = [
  [
    "Architecture",
    "Composable React systems, HOCs, design tokens, and micro-frontend boundaries.",
  ],
  [
    "Experience",
    "140+ localized portals with accessibility, internationalization, and responsive behavior built in.",
  ],
  [
    "Performance",
    "Critical CSS, code splitting, virtualization, and sub-second initial rendering.",
  ],
  [
    "Quality",
    "Strict TypeScript, Jest regression gates, component contracts, and RFC-led delivery.",
  ],
];

const backendDetails = [
  [
    "API Design",
    "GraphQL federation and REST gateways that give frontend systems stable, explicit contracts.",
  ],
  [
    "Services",
    "Node.js services, authentication flows, cookie-secured sessions, and server-driven pagination.",
  ],
  [
    "Data",
    "Normalized state, MySQL-backed workflows, asynchronous operations, and resilient data access.",
  ],
  [
    "Delivery",
    "AWS S3 and CloudFront distribution, CI/CD pipelines, cache invalidation, and zero-downtime releases.",
  ],
];

const frontendDeliveryNotes = [
  [
    "Design-system governance",
    "Tokens are treated as an API: semantic naming, predictable variants, and documented ownership keep teams moving without visual drift.",
  ],
  [
    "Runtime resilience",
    "Error boundaries, loading states, optimistic updates, and explicit empty states turn failure paths into designed product behavior.",
  ],
  [
    "Accessibility as architecture",
    "Keyboard flow, focus visibility, contrast, reduced motion, and screen-reader semantics are verified at component boundaries.",
  ],
];

const backendDeliveryNotes = [
  [
    "Contract-first delivery",
    "Schema changes are reviewed alongside frontend consumers, keeping payloads explicit and reducing integration surprises.",
  ],
  [
    "Security boundaries",
    "Session handling, authorization, input validation, and secrets stay behind clear service boundaries rather than leaking into UI code.",
  ],
  [
    "Operational feedback",
    "Logs, health checks, deployment signals, and cache behavior make production behavior visible before users report a problem.",
  ],
];

function PageHeader({ current }: { current: "frontend" | "backend" }) {
  return (
    <header className="detail-header">
      <Link className="brand" href="/">
        <span className="brand-mark">LK</span>
        <span>
          <strong>Laxmikant Karwa</strong>
          <small>Full-stack systems architect</small>
        </span>
      </Link>
      <nav>
        <Link
          className={current === "frontend" ? "active" : ""}
          href="/frontend"
        >
          Frontend
        </Link>
        <Link className={current === "backend" ? "active" : ""} href="/backend">
          Backend
        </Link>
        <a href={resumeHref} target="_blank" rel="noreferrer">
          Resume <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

function DetailPage({
  current,
  eyebrow,
  title,
  description,
  details,
  accent,
  otherLabel,
  otherHref,
  deliveryNotes,
}: {
  current: "frontend" | "backend";
  eyebrow: string;
  title: string;
  description: string;
  details: string[][];
  accent: string;
  otherLabel: string;
  otherHref: "/frontend" | "/backend";
  deliveryNotes: string[][];
}) {
  const signalItems =
    current === "frontend"
      ? showcasePanels.slice(0, 3).map((item) => [item.title, item.description])
      : techClusters
          .slice(2)
          .map((item) => [item.title, item.items.join(" · ")]);
  return (
    <>
      <PageHeader current={current} />
      <main className={`detail-page detail-${accent}`}>
        <section className="detail-hero">
          <div className="detail-hero-grid">
            <div>
              <span className="detail-kicker">{eyebrow}</span>
              <h1>{title}</h1>
              <p>{description}</p>
              <div className="detail-actions">
                <Link className="detail-button primary" href={otherHref}>
                  Explore {otherLabel} <span aria-hidden="true">→</span>
                </Link>
                <a
                  className="detail-button"
                  href={resumeHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open résumé <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="architecture-orbit" aria-hidden="true">
              <span>CLIENT</span>
              <span>CONTRACT</span>
              <span>DATA</span>
              <i />
              <b />
              <em />
            </div>
          </div>
        </section>
        <section className="detail-section">
          <div className="detail-section-heading">
            <span>01 // SYSTEM MAP</span>
            <h2>Where the work becomes leverage.</h2>
          </div>
          <div className="detail-grid">
            {details.map(([label, copy], index) => (
              <article key={label}>
                <span>0{index + 1}</span>
                <h3>{label}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="detail-section signal-section">
          <div>
            <span>02 // CONNECTED SYSTEMS</span>
            <h2>
              {current === "frontend"
                ? "The interface is the visible edge of a deeper system."
                : "Infrastructure exists to make product experiences dependable."}
            </h2>
          </div>
          <div className="signal-list">
            {signalItems.map(([label, copy]) => (
              <div key={label}>
                <b>{label}</b>
                <span>{copy}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="detail-section delivery-section">
          <div className="detail-section-heading">
            <span>03 // DELIVERY NOTES</span>
            <h2>Details that hold up after launch.</h2>
          </div>
          <div className="delivery-list">
            {deliveryNotes.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="detail-footer">
        <Link href="/">← Back to portfolio</Link>
        <span>
          Frontend specialization · Full-stack perspective · Pune / Global
        </span>
      </footer>
    </>
  );
}

export function FrontendPage() {
  return (
    <DetailPage
      current="frontend"
      accent="frontend"
      eyebrow="01 // FRONTEND ARCHITECTURE"
      title="Interfaces that carry the system."
      description="Frontend architecture is my specialization: designing resilient React platforms where accessibility, performance, design systems, and product velocity reinforce each other."
      details={frontendDetails}
      otherLabel="backend systems"
      otherHref="/backend"
      deliveryNotes={frontendDeliveryNotes}
    />
  );
}

export function BackendPage() {
  return (
    <DetailPage
      current="backend"
      accent="backend"
      eyebrow="02 // BACKEND SYSTEMS"
      title="Services that make the interface reliable."
      description="I work across the stack to make frontend promises real: explicit APIs, durable data flows, secure sessions, and cloud delivery that stays observable under pressure."
      details={backendDetails}
      otherLabel="frontend architecture"
      otherHref="/frontend"
      deliveryNotes={backendDeliveryNotes}
    />
  );
}
