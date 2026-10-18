# russal.dev

My portfolio site. It's live at [russal.dev](https://russal.dev).

React, TypeScript, Vite and Tailwind, hosted on Firebase.

## Running it

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`. `npm run lint` runs ESLint.

## Content

All the copy is in `src/data.ts`. My longer notes on each project are in `content/`. If you add a page or project, add it to `public/sitemap.xml` too.

## Deploying

```bash
npm run build
npx firebase-tools deploy --only hosting
```

## License

The code is [GPL-3.0](LICENSE). The writing (the copy in `src/data.ts` and everything in `content/`) and my resume are mine. Please don't reuse them without asking.
