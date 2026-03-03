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

Output is in `dist/`. The build also creates `dist/404.html` (copy of `index.html`) so that GitHub Pages serves your SPA for every route and React Router can handle the path.

### Deploy to GitHub Pages (fix 404)

If your site is **https://&lt;username&gt;.github.io/&lt;repo-name&gt;/** (project site), you must set the base path when building, or assets and routes will break and you’ll see 404s.

1. **Build with your repo name as base path:**

   ```bash
   # Replace YOUR-REPO-NAME with your actual GitHub repo name (e.g. Amir or portfolio)
   VITE_BASE_PATH=/YOUR-REPO-NAME/ npm run build
   ```

   Example: if the repo is `Amir` and the URL is `https://johndoe.github.io/Amir/`, run:
   ```bash
   VITE_BASE_PATH=/Amir/ npm run build
   ```

2. **Deploy the contents of `dist/`:**
   - Push `dist/` to the `gh-pages` branch, or
   - Use GitHub Actions to build and deploy (in the workflow, set `VITE_BASE_PATH=/${{ github.event.repository.name }}/` and upload `dist`).

3. **In GitHub repo settings:**  
   Settings → Pages → Source: deploy from branch `gh-pages` (or from GitHub Actions), folder `/ (root)`.

After that, opening **https://&lt;username&gt;.github.io/&lt;repo-name&gt;/** or any subpath (e.g. `/Amir/case-studies`) will load the app and React Router will show the correct page. The build step creates `404.html` so that direct links and refreshes on subpaths work instead of returning 404.

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
