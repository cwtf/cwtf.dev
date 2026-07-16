# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 5 portfolio site styled with Tailwind CSS 4. Page content is centralized in `src/data/site.ts`; update that file for projects, experience, skills, education, and credentials. Reusable UI lives in `src/components/`, page shells and SEO metadata in `src/layouts/`, routes in `src/pages/`, and shared CSS in `src/styles/global.css`. Static files such as logos, `robots.txt`, and `llms.txt` belong in `public/`. Astro generates `dist/` and `.astro/`; do not edit or commit these directories.

## Build, Test, and Development Commands

- `npm ci` installs the exact dependency versions from `package-lock.json` (use `npm install` when intentionally changing dependencies).
- `npm run dev` starts Astro's development server at `http://localhost:4321` with hot reload.
- `npm run build` creates the production site in `dist/` and catches Astro/TypeScript integration errors.
- `npm run preview` serves the production build locally for final visual checks.

## Coding Style & Naming Conventions

Follow the existing two-space indentation, semicolons, and single quotes in TypeScript and Astro frontmatter. Keep TypeScript strict and define interfaces for structured content. Name Astro components in PascalCase (`BrandIcon.astro`), data properties and local variables in camelCase, and exported content collections in uppercase (`PROJECTS`). Prefer Tailwind utility classes in templates; reserve `global.css` for shared behavior, theme tokens, or selectors that utilities cannot express cleanly. No formatter or linter is configured, so match nearby code and keep diffs focused.

## Testing Guidelines

There is currently no automated test framework or coverage requirement. Before submitting a change, run `npm run build`, then inspect the affected sections with `npm run preview`. Check both light and dark themes, responsive layouts, navigation links, and external links. For SEO changes, verify metadata and JSON-LD in `src/layouts/Base.astro` and confirm the sitemap still builds.

## Commit & Pull Request Guidelines

Recent history uses Conventional Commit-style subjects, often with scopes: `feat(ui): add icon image support`, `docs(site): update project details`, or `chore(site): update academic status`. Use an imperative, concise subject and group related changes into one commit.

Pull requests should explain the user-visible result, list validation performed, and link any relevant issue. Include before/after screenshots for layout or styling changes, ideally at desktop and mobile widths. Call out content, SEO, dependency, or deployment changes explicitly.

## Security & Configuration

Never commit `.env` files or secrets. Keep browser-exposed content public-safe, and preserve `rel="noopener noreferrer"` on links opened in new tabs.
