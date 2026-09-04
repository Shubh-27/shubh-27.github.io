# Shubh Thakkar — Backend Software Engineer Portfolio

The source code and content for the personal engineering portfolio website of **Shubh Thakkar** ([shubh-27.github.io](https://shubh-27.github.io/)), Backend Software Engineer & .NET Developer.

The site is built with **Next.js (App Router)** as a static export, featuring a restrained **"blueprint paper"** engineering aesthetic with dark/light theme support, evidence-backed impact metrics, deep architectural case studies, technical writeups, and full SEO/analytics integration.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, JavaScript) configured for static HTML/CSS/JS export (`output: 'export'`)
- **UI & Styling**: Vanilla CSS design system with CSS custom properties (variables) for theme tokens, fluid typography, and zero runtime CSS overhead
- **Typography**: Self-hosted Google Fonts (`Inter` and `IBM Plex Mono` via `next/font/google`)
- **SEO & Metadata**: Next.js Metadata API with OpenGraph cards, Twitter preview cards, and Schema.org JSON-LD Person structured data
- **Analytics**: Google Analytics 4 (gtag) and Microsoft Clarity integrated with privacy-aware loading
- **Hosting & CI/CD**: GitHub Pages deployed automatically via GitHub Actions (`.github/workflows/deploy.yml`)

---

## ⚡ Local Development

### Prerequisites

- **Node.js**: v18.17+ or v20+ (LTS recommended)
- **npm**: v9+ (bundled with Node.js)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio. Fast refresh is enabled by default.

### 3. Production Static Build & Export

```bash
npm run build
```

Builds and optimizes the static site, outputting production-ready static assets to the `out/` directory.

### 4. Preview the Production Build Locally

```bash
npm run preview
```

Serves the contents of `out/` locally to verify the production static bundle.

---

## 🌐 Deployment & Base Path Configuration

The site is configured for root-domain deployment on GitHub Pages at [https://shubh-27.github.io/](https://shubh-27.github.io/).

- In `next.config.js`, **`basePath` is intentionally set to `''` (empty string)** because the site is served directly from the user root domain (`Shubh-27.github.io`).
- If deploying under a repository subpath instead (e.g. `https://<username>.github.io/<repo-name>/`), update `next.config.js`:
  ```javascript
  const nextConfig = {
    output: 'export',
    basePath: '/<repo-name>',
    images: { unoptimized: true },
  };
  ```

Automated deployment is handled by `.github/workflows/deploy.yml` on every push to the `main` branch.

---

## 📂 Content Architecture

Portfolio content is decoupled from JSX presentation components in the `/content/` directory:

- **`content/site.js`**: Positioning, about narrative, engineering principles, and contact information.
- **`content/impact.js`**: Evidence-backed engineering metrics (e.g. 90%+ SQL latency reduction, 400+ SaaS tenants).
- **`content/skills.js`**: Capabilities categorized by backend, architecture, cloud, data, and AI/RAG.
- **`content/projects.js`**: Detailed breakdowns of featured and personal engineering projects.
- **`content/experience.js`**: Career progression timeline and technical milestones.
- **`content/articles.js`**: Technical engineering writeups and deep dives.

---

## 📄 License & Copyright

**Copyright (c) 2026 Shubh Thakkar. All Rights Reserved.**

This repository contains the source code, design, and content for my personal portfolio website. This is a personal portfolio and is **not open-source software**. All rights are reserved, and this notice is completely intentional (not an oversight).

- All content, layout, design, and source code are protected by copyright and may not be copied, reproduced, distributed, or used to create derivative works without explicit written permission.
- You are welcome to browse the source code for personal learning and reference; reproducing this design, layout, or content as your own portfolio is strictly prohibited.
- **Exception**: The personal project **CashBook** featured in this portfolio is an independent open-source project hosted at [github.com/Shubh-27/cashbook](https://github.com/Shubh-27/cashbook), which is licensed under its own separate open-source license (MIT License) — see that repository for its terms.

For full license terms, please refer to the [LICENSE](LICENSE) file at the root of this repository.
