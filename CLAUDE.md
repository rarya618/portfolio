# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (Vite HMR)
npm run build      # type-check then bundle (tsc -b && vite build)
npm run lint       # ESLint
npm run preview    # preview the production build locally
```

No test suite is configured. Deployed to Firebase Hosting (project `russal-arya`, site `russal`, serves `dist/`) at https://russal.dev.

## Architecture

Single-theme React 19 portfolio with client-side routing (`react-router-dom`). `src/main.tsx` wraps the app in `HelmetProvider` and `BrowserRouter`; `firebase.json` rewrites every path to `index.html` so deep links work.

**Routes** (`src/App.tsx`):
- `/` — Nav → Hero → About → Work → Community → Footer (contact, plus a one-line link to consulting)
- `/project/:slug` — `ProjectPage`, looks the slug up in `PROJECTS`
- `/community` — `CommunityPage` (GDG Sydney events)
- `/speaking` — `SpeakingPage` (talks), linked from the home page community section
- `/consulting` — `ConsultingPage`, only linked from the footer
- `*` — `NotFound`

**Key files:**
- `src/data.ts` — all site content: `PROJECTS` (with optional `process` case-study steps and decisions), `GDG_EVENTS`, `TALKS`, `CONSULTING`, `CONTACT`, `STACK`, `TECH_URLS`. Edit here to update portfolio content.
- `src/types/index.ts` — shared types (`Project`, `ProjectProcess`, `ProcessStep`, `GDGEvent`, `GDGAssets`, `Talk`).
- `content/*.md` — long-form source notes for projects and community work. Not imported by the app; `data.ts` copy is written from these.

**Content conventions:** body copy in `data.ts` is lowercase prose. Inline links use markdown syntax (`[text](url)`) and are rendered by a `renderWithLinks` helper in the page components. Tags in `Project.tags` link out via `TECH_URLS`.

**SEO:** each route sets its own `<title>`, description, canonical and Open Graph tags with `react-helmet-async`. Update `public/sitemap.xml` when adding routes or projects.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite`, but components mostly use inline `style` props. Global tokens (`--bg`, `--fg`, `--mid`, `--light`), fonts (JetBrains Mono body, Cormorant Garamond via `.font-serif`), the lowercase text transform and shared classes like `.prose-link` live in `src/index.css`.
