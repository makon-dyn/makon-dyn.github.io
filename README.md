# makon-dyn.github.io

Personal portfolio for **Martina Konečná** — B2B SaaS marketing leader.

Built with **Vite + React + TypeScript + Tailwind CSS v4 + shadcn/ui**.
Warm, HubSpot-inspired identity with an Apple-style sectioned scroll layout.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages.

> One-time setup: in the repo's **Settings → Pages**, set **Source** to
> **GitHub Actions**.

## Editing content

All copy and metrics live in [`src/content.ts`](src/content.ts). Values tagged
with `// PLACEHOLDER` are realistic stand-ins — swap them for real figures.
