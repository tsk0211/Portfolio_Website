# Portfolio Website

Tushar Kulkarni's personal portfolio — AI Engineer specializing in backend, LLM, and agentic systems.

Built with [Next.js](https://nextjs.org) (App Router, static export) and [Tailwind CSS](https://tailwindcss.com), styled as a terminal/dev-console UI.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces a static export in `./out`, ready for GitHub Pages.

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages.

## Content

Resume/profile content lives in `src/data/resume.ts` — update it to change skills, experience, projects, or education shown on the site.
