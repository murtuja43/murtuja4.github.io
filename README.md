# Murtuja Kayes — Portfolio

Personal portfolio of **Murtuja Kayes** — AI Engineer & ML Researcher with an
Applied Mathematics background. Live at **[www.murtuja.me](https://www.murtuja.me)**.

Built as a premium, dark-mode single-page site and deployed as a static export
to GitHub Pages.

## Tech stack

- **Next.js 15** (App Router, `output: 'export'` static export)
- **React 19** · **TypeScript** (strict)
- **Tailwind CSS** + CSS-variable design tokens
- **Framer Motion** animations · custom canvas particle field
- **Lucide** icons · **Geist** Sans/Mono fonts
- **Web3Forms** contact form · client-side **GitHub API** activity section

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Customize content

All copy, projects, skills, stats, and links live in one typed file:

- **[`src/data/content.ts`](src/data/content.ts)** — single source of truth.

### Things to fill in

| What | Where |
|------|-------|
| **Resume PDF** | drop a file at `public/resume.pdf` |
| **Profile photo** | drop a file at `public/profile.jpg` (falls back to a monogram) |
| **Web3Forms key** | `contact.web3formsKey` in `content.ts` (get one at [web3forms.com](https://web3forms.com)) |
| **Social links** | `socials`, `contentPlatforms` in `content.ts` |
| **Project repo/demo URLs** | `projects[].github` / `projects[].demo` |
| **GitHub username** | `github.username` (drives the live Activity section) |

## Deployment

Pushing to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
static export and publishes it to GitHub Pages. The custom domain
(`www.murtuja.me`) is preserved via `public/CNAME` and re-emitted into the build
output on every deploy.

> **One-time setup:** in the repo's **Settings → Pages**, set **Source** to
> **GitHub Actions**.

## License

© Murtuja Kayes. All rights reserved.
