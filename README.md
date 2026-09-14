# Laxmikant Karwa Portfolio

A systems-focused full-stack engineering portfolio with a frontend architecture specialization. The site presents frontend platforms, backend systems, API contracts, cloud delivery, performance work, and technical leadership through scroll-driven interactions.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Sass for organized styling
- Tailwind CSS 4
- Lenis for smooth scrolling
- Google Inter and JetBrains Mono fonts
- Material Symbols icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev     # Start the development server
npm run lint    # Run ESLint
npm run build   # Create a production build
npm run start   # Start the production server
```

## Routes

- `/` - Main portfolio with hero, metrics, full-stack overview, capabilities, systems showcase, global scale, ecosystem, career trajectory, philosophy, and contact sections.
- `/frontend` - Frontend architecture specialization, including React systems, design systems, accessibility, performance, and delivery practices.
- `/backend` - Backend systems, including APIs, services, authentication, data flows, security boundaries, and cloud delivery.
- `/documents/laxmikant-karwa.pdf` - Resume PDF, opened by Resume/CV actions in a new tab.

## Project Structure

```text
app/
  page.tsx              # Main portfolio route
  frontend/page.tsx     # Frontend architecture route
  backend/page.tsx      # Backend systems route
  layout.tsx            # Root metadata, fonts, and global styles
  globals.scss          # Sass entry point
  _base.scss            # Design tokens and global base rules
  _portfolio.scss       # Main portfolio layout and component styles
  _stack-pages.scss     # Frontend/backend detail-page styles
  tailwind.css          # Tailwind CSS entry point

components/
  portfolio-data.ts     # Shared portfolio content and section data
  portfolio-shell.tsx   # Main page composition
  portfolio-sections.tsx # Homepage sections and interactions
  stack-pages.tsx       # Shared frontend/backend page components
  smooth-scroll.tsx     # Lenis smooth-scroll controller

public/
  documents/            # Resume PDF
  stitch/               # Downloaded Stitch design assets
```

## Interaction Details

- The header is transparent at the top and gains an elevated surface while scrolling or when hovered.
- Navigation links use Lenis smooth scrolling.
- Below `1024px`, the desktop navigation becomes an animated mobile menu.
- Homepage metrics animate from `0` to their target values when entering the viewport and return toward `0` when leaving it.
- The career timeline spine grows and reverses with scroll position.
- Resume links open the PDF in a new tab.
- WhatsApp and LinkedIn contact actions open externally.
- The dark/light theme switch persists the selected theme in `localStorage`.

## Contact

- WhatsApp: [wa.me/919665511207](https://wa.me/919665511207)
- LinkedIn: [linkedin.com/in/laxmikant-karwa-406606157](https://www.linkedin.com/in/laxmikant-karwa-406606157/)
- Email: `lkkarwa95@gmail.com`
- Location: Pune, Maharashtra, India
