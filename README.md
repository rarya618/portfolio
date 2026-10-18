# russal.dev

Personal portfolio of Russal Arya, a Sydney-based full-stack and mobile product builder. Live at [russal.dev](https://russal.dev).

Built with React 19, TypeScript, Vite, Tailwind CSS v4 and React Router, and hosted on Firebase Hosting.

## Pages

- `/` — home: work, consulting, community, about
- `/project/:slug` — case study for each project (TrackSense, Tailr, GDG Check-In App, and more)
- `/community` — GDG Sydney events and workshops
- `/consulting` — consulting services and process

## Getting started

```bash
npm install
npm run dev        # start dev server
npm run build      # type-check and build to dist/
npm run preview    # preview the production build
npm run lint       # ESLint
```

## Editing content

All site copy lives in `src/data.ts`: projects (with optional case-study steps and key decisions), community events, consulting details and contact links. Longer source notes for each project are in `content/`.

When adding a project or route, also update `public/sitemap.xml`.

## Deploying

```bash
npm run build
npx firebase-tools deploy --only hosting
```

Deploys to the `russal` hosting site in the `russal-arya` Firebase project. All paths rewrite to `index.html` so client-side routes resolve.

## License

Code is licensed under [GPL-3.0](LICENSE). Written content (including `src/data.ts` copy and `content/`) and `public/resume.pdf` are © Russal Arya, all rights reserved.
