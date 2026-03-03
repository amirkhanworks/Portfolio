# Amir Khan — Portfolio

Minimal, consulting-grade portfolio for **Technical Product Manager** and **Product Analyst** roles (McKinsey / MBB-style). Built with **React**, **Vite**, **TypeScript**, **React Router**, and **Tailwind CSS**.

**Important:** Run all commands from this directory (`Amir/Portfolio`)—where this README and `package.json` live.

---

## Run locally

```bash
cd Amir/Portfolio
npm install
npm run dev
```

Then open **http://localhost:5173** (Vite’s default port).

---

## Build & deploy

```bash
npm run build
npm run preview   # preview production build locally
```

Output is in `dist/`. Deploy `dist` to any static host (Vercel, Netlify, GitHub Pages, etc.). For client-side routing, configure your host to serve `index.html` for all routes (e.g. Vercel/Netlify do this by default for SPAs).

---

## How to edit content

### Case studies

- **Single data file:** **`src/data/caseStudies.ts`**. Edit the `caseStudies` array. Home shows the first 3 as “Selected experience”; the Case Studies page lists all.

### Resume PDF

- Put your PDF in **`public/resume.pdf`**. The site uses `/resume.pdf` for viewing and download.

### Contact email & LinkedIn

- **`src/components/ContactForm.tsx`** — update the `EMAIL` constant and the LinkedIn button `href`.

### Page titles

- **`src/Layout.tsx`** — `TITLES` object and `getPageTitle()` set the document title per route. Case study detail titles are set in **`src/pages/CaseStudyDetailPage.tsx`**.

---

## Project structure

```
Amir/Portfolio/
├── index.html
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Add your PDF here
├── src/
│   ├── main.tsx
│   ├── App.tsx             Routes + Layout wrapper
│   ├── Layout.tsx          Header, main, Footer, document title
│   ├── index.css           Tailwind + design tokens
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── CaseStudiesPage.tsx
│   │   ├── CaseStudyDetailPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ResumePage.tsx
│   │   └── ContactPage.tsx
│   ├── components/         Header, Footer, Container, Button, Card, etc.
│   └── data/
│       └── caseStudies.ts  ← Edit all case study content
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Tech stack

- **React 18** + **Vite 5** + **TypeScript**
- **React Router 6** for client-side routing
- **Tailwind CSS** with design tokens (light/dark via `.dark` on `html`)
- No UI kits; minimal dependencies.
