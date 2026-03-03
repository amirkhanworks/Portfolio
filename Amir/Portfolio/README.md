# Amir Khan — Portfolio

Minimal, consulting-grade portfolio for **Technical Product Manager** and **Product Analyst** roles (McKinsey / MBB-style). Built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## Run locally

```bash
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build & deploy (e.g. Vercel)

```bash
npm run build
npm start
```

**Vercel:** Connect the repo to Vercel; the default build command `next build` and output directory are used automatically. Set the **root directory** to `Portfolio` if the repo root is the parent folder.

---

## How to edit content

### Case studies and site copy

- **Single data file:** All case study content lives in **`src/data/caseStudies.ts`**.
  - Edit the `caseStudies` array: each object has `slug`, `title`, `client`, `role`, `timeframe`, `headline`, `tags`, `executiveSummary`, `problem`, `usersStakeholders`, `constraints`, `approach`, `delivered`, `impact`, `learnings`, and `artifacts`.
  - To add a case study: add a new object with a URL-friendly `slug` (e.g. `my-new-project`). Sitemap is built from `caseStudies`.
  - Home shows the first 3 as “Selected experience”; the Case Studies page lists all. Reorder in `caseStudies` to change order.

### Resume PDF

- **Place your resume at:** `public/resume.pdf`.
- The site links to `/resume.pdf` for viewing and download. Replace or overwrite `public/resume.pdf` with your file (keep the name `resume.pdf`), then rebuild/redeploy.

### Contact email & LinkedIn

- **Contact page:** Update the `EMAIL` constant in **`src/components/ContactForm.tsx`** (e.g. `mailto:your@email.com`).
- **LinkedIn:** Update the `href` of the LinkedIn button in the same file to your profile URL.

### Metadata & SEO

- **Site-wide:** `src/app/layout.tsx` exports `metadata` (title, description, OpenGraph, etc.). Adjust `siteUrl`, `siteTitle`, and `siteDescription` for your domain and positioning.
- **Per page:** Each page exports its own `metadata` (title, description).
- **Sitemap:** `src/app/sitemap.ts` — add or remove routes as you add/remove pages or case studies.
- **Robots:** `src/app/robots.ts` — adjust if you need to allow/disallow specific paths.

---

## Project structure

```
Portfolio/
├── public/
│   └── resume.pdf              ← Add your PDF here
├── src/
│   ├── app/
│   │   ├── layout.tsx           Root layout, Inter font, theme script, Header/Footer
│   │   ├── page.tsx             Home (hero, proof, What I do, selected experience)
│   │   ├── globals.css          Tokens, typography
│   │   ├── about/page.tsx       About + Principles
│   │   ├── case-studies/
│   │   │   ├── page.tsx         Case studies index
│   │   │   └── [slug]/page.tsx  Case study detail
│   │   ├── contact/page.tsx     Contact (ContactForm)
│   │   ├── resume/page.tsx      Resume PDF + download
│   │   ├── sitemap.ts           Dynamic sitemap
│   │   └── robots.ts            robots.txt
│   ├── components/
│   │   ├── Header.tsx           Sticky nav, active link, theme toggle
│   │   ├── Footer.tsx           Footer links
│   │   ├── Container.tsx        Max-width wrapper
│   │   ├── Section.tsx          Section wrapper
│   │   ├── SectionHeading.tsx   Label + title + description
│   │   ├── Divider.tsx          Section separator
│   │   ├── Prose.tsx            Body copy
│   │   ├── Button.tsx           Primary/secondary/ghost
│   │   ├── Card.tsx             Card
│   │   ├── MetricCard.tsx       Proof metrics
│   │   ├── Tag.tsx              Tag/badge
│   │   ├── ThemeToggle.tsx      Light/dark (class strategy)
│   │   └── ContactForm.tsx      Mailto form
│   └── data/
│       └── caseStudies.ts       ← Edit all case study content
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## Design system

- **Tokens:** CSS variables in `globals.css` for `--bg`, `--fg`, `--muted`, `--muted-fg`, `--card`, `--border`, `--accent`, `--accent-fg`. Light/dark via `.dark` on `html`.
- **Typography:** `.text-display`, `.text-h1`, `.text-h2`, `.text-h3`, `.text-body`, `.text-small`, `.text-label` in `globals.css`. Font: Inter (next/font).
- **Theme:** Toggle in navbar; preference stored in `localStorage`; no flash (inline script in layout).

---

## Design QA checklist

Before shipping, verify:

- [ ] **Spacing consistency** — Section spacing is `space-y-16`/`space-y-12` between blocks; card grids use `gap-5`; section internal spacing is `space-y-4`/`space-y-6`.
- [ ] **Dark mode** — Toggle in header switches theme; all pages use CSS variables so colors update; no hardcoded neutrals in components.
- [ ] **Focus states** — All interactive elements (links, buttons, inputs, toggle) have visible focus ring (`focus-visible:ring-2 focus-visible:ring-[var(--ring)]` or equivalent).
- [ ] **Responsiveness** — Home hero stacks on small screens; case study grid is 1 col → 2 → 3; resume is stacked on mobile, two columns on lg; contact form stacks; Quick Facts sidebar stacks below content on small screens.
- [ ] **Semantic HTML** — Landmarks (`header`, `main`, `footer`, `nav`, `section`, `article`, `aside`); headings in order; form labels and `aria-*` where needed.
- [ ] **No external assets** — Site works on localhost without external images/fonts except Inter from next/font (Google).

---

## Tech stack

- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**
- No UI kits; minimal dependencies. Design tokens in CSS; Tailwind mapped to vars.
