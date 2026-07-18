# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Christopher Wong Teng Foong ("cwtf" = his initials) at https://cwtf.dev. A single-page Astro 5 static site styled with Tailwind CSS 4, deployed to Cloudflare Pages (build command `npm run build`, output `dist/`).

## Commands

- `npm run dev` — dev server at localhost:4321
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally

There are no tests or linters. `npm run build` is the verification step: it type-checks the Astro components and prints `[icons] no simple-icons entry for slug ...` warnings when an icon slug in the data file doesn't resolve — treat those warnings as failures and fix the slug or switch to a fallback.

## Architecture

**Content and presentation are strictly separated.** All site copy (SITE metadata, HERO, PROJECTS, TRAINING, EXPERIENCE, SKILLS, EDUCATION, CERTIFICATIONS, FAQS) lives in `src/data/site.ts`. Components under `src/components/` only render what that file exports. To change wording, add a project, or update work history, edit `site.ts` — not the components.

**Single page composition.** `src/pages/index.astro` stacks the section components (Hero → Projects → Training → Experience → Skills → Education → Faq → Contact). Each section wraps `Section.astro` and has an `id` that must match both the nav links in `Nav.astro` (scroll-spy highlights the active section) and any `#anchor` links elsewhere.

**Icon system** (`BrandIcon.astro`), three tiers, checked in order:
1. `img` — path to a file in `public/logos/` (transparent-background PNGs/SVGs). Rendered monochrome by default via CSS filters and shown in full colour on hover of a parent with class `brand-hover`; add class `brand-detailed` for multicolour logos that should use grayscale instead of the brightness/invert filter (see `global.css`).
2. `icon` — a simple-icons slug (e.g. `cloudflareworkers`). `src/lib/icons.ts` resolves it at build time from the `simple-icons` npm package (`si` + capitalized slug); no external requests at runtime. Icons render in `currentColor` and take the brand hex (`--brand`) on `.brand-hover` hover.
3. `monogram` + `brand` hex — fallback badge for brands with no usable logo.

**Theming.** Tailwind 4 CSS-first config: there is no `tailwind.config.*`; theme tokens (the `accent-*` cyan palette, fonts) are defined in `@theme` inside `src/styles/global.css`, and dark mode is a class variant via `@custom-variant dark`. Dark is the default; an inline pre-paint script in `Base.astro` applies the stored preference from `localStorage.theme`, and the toggle in `Nav.astro` persists it. Any new UI must be styled for both themes.

**Interactivity is vanilla JS** in per-component `<script>` tags (typing effect in Hero, scroll-spy/theme/mobile-menu in Nav, reveal-on-scroll in index.astro); accordions are plain `<details>`. Animations respect `prefers-reduced-motion`, and `.reveal` content has a `<noscript>` visibility fallback in `Base.astro`.

**SEO / GEO.** `src/layouts/Base.astro` is the single source for meta tags, Open Graph/Twitter cards (`/og.png`), and the JSON-LD `@graph` (Person, WebSite, ProfilePage, Occupation, one SoftwareApplication per project, and a FAQPage generated from `FAQS`). The Person/credential details in that JSON-LD are partially hardcoded, so name/role changes in `site.ts` may need matching edits there. `public/llms.txt` and `public/llms-full.txt` are hand-written profiles for generative engines: keep them in sync when content in `site.ts` changes materially. Sitemap comes from `@astrojs/sitemap` with the `site` URL set in `astro.config.mjs`.

## Copy rules

- **No em-dashes** anywhere in site copy, docs, or commit messages. Use commas, colons, parentheses, or periods. En-dashes in date ranges (`Nov 2020 – Oct 2025`) are fine.
- Tone: confident showcase, never job-seeker-flavoured. Christopher is pursuing an MSc in Artificial Intelligence at Monash University Malaysia and is out of the job market; the site signals openness to interesting conversations, nothing more.
- The full name is displayed deliberately (so "wtf" reads as initials); the hero derives it from `SITE.name` and accents each initial automatically.

## Conventions

- Commit messages follow conventional-commit style seen in history: `feat(ui):`, `refactor(ui):`, `docs(llms):`, `style(ui):`.
- Profile portraits are a theme-swapped pair (`public/profile/light.png` / `dark.png`) cross-faded in `Hero.astro`; replace both together.
