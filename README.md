# cwtf.dev

Personal portfolio site for Christopher Wong — technical trainer & automation consultant.

Built with [Astro](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com), deployed on Cloudflare Pages.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Editing content

All site copy lives in [`src/data/site.ts`](src/data/site.ts) — projects, work history, skills, education and certifications. Edit that file; the components render from it.

Brand icons come from the [`simple-icons`](https://simpleicons.org) npm package at build time (no external requests). Set `icon` to a simple-icons slug (e.g. `cloudflareworkers`); if a brand has no icon, leave `icon: ''` and set `monogram` + `brand` (hex colour) for the fallback badge.

## SEO / GEO

- Meta tags, Open Graph, Twitter cards and JSON-LD (`Person` + `WebSite`) live in [`src/layouts/Base.astro`](src/layouts/Base.astro)
- `public/llms.txt` — plain-language profile for generative engines
- `public/robots.txt` + `@astrojs/sitemap` (generated at build)

## Deploying to Cloudflare Pages

1. Push this repo to GitHub
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
3. Build command: `npm run build` · Output directory: `dist`
4. Add custom domain `cwtf.dev`
