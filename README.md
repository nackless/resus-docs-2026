# Resus Docs — Medical Publishing Engine & Automated Content Pipeline

> **All things Emergency medicine.**
> A high-performance, mobile-first medical publishing engine built with Astro, Tailwind CSS, Obsidian MDX, Pagefind static search, and Cloudflare Pages.

---

## 🌟 Key Features

- 🏥 **Evidence-Based Clinical Aesthetic:** Dark-mode native, high-contrast, clinical data tables, and custom Obsidian callouts.
- ⚡ **Lightning Fast & Edge-Native:** Built with Astro static output and deployed to Cloudflare Pages for sub-100ms global response.
- 📱 **Mobile-First Obsidian Workflow:** Write articles on mobile (Obsidian) with frontmatter templates and sync seamlessly via Git.
- 🖼️ **Flexible MDX Image Component (`<Img />`):** Full control over image float wrapping (`left`, `right`), breakout widths (`wide`, `full`), sizes, and rounded corners without inline CSS.
- 📸 **Phone Storage Protection Engine:** Automated GitHub Action uses `sharp` to downscale mobile photos (>1920px) and convert to WebP, replacing heavy local image files on phone sync.
- 🔍 **Static Search (Pagefind):** Zero-bandwidth, zero-config full-text search with keyboard shortcut (`Cmd+K`).
- 🧩 **Extensible Collection Architecture:** Easily add 5th or 6th sections in 2 minutes without altering site routing logic.

---

## 📱 Section 1: Writing & Publishing from Phone (Obsidian + Git)

### 1. Setting up Obsidian Frontmatter Template
In your Obsidian vault, create a template file named `Templates/Clinical Post.md` with the following frontmatter:

```markdown
---
title: "{{title}}"
description: "Brief summary of clinical protocol or trial appraisal."
date: {{date}}
section: "clinical-zone" # Options: "clinical-zone" | "critical-appraisal" | "cesr-portfolio" | "blog"
tags: ["resuscitation", "protocol"]
draft: false
coverImage: "/attachments/my-diagram.svg"
author: "Dr. Marcus Vance"
---

import Img from '../../components/Img.astro';
import ObsidianCallout from '../../components/ObsidianCallout.astro';

<ObsidianCallout type="critical" title="CRITICAL ALERT">
  High-acuity clinical precaution or algorithm warning.
</ObsidianCallout>

## 1. Primary Protocol
Your clinical note content here...
```

### 2. Mobile Git Sync Setup
- **iOS (iPhone / iPad):**
  1. Use **Working Copy** or the **Obsidian Git** plugin.
  2. Point the repository root to your `resus-docs` GitHub repo.
  3. When you create or edit notes in Obsidian, push changes via Working Copy.
- **Android:**
  1. Use **Obsidian Git** plugin + **Termux** / **GitJournal**.
  2. Commit and push on save or schedule auto-sync every 15 minutes.

---

## 🖼️ Section 2: Advanced `<Img />` MDX Component Usage Guide

Use the `<Img />` component directly inside your Obsidian `.mdx` notes:

### Copy-Paste MDX Image Snippets:

#### 1. Centered Large Image with Caption (Default)
```mdx
<Img
  src="/attachments/rsi-algorithm-flowchart.svg"
  alt="Emergency Airway Protocol Flowchart"
  caption="Figure 1: Complete Emergency RSI & FONA Rescue Protocol."
  align="center"
  width="lg"
  rounded="xl"
  shadow="lg"
/>
```

#### 2. Text Floating to the Right (`align="right"`)
```mdx
<Img
  src="/attachments/reason-ultrasound-echo.svg"
  alt="Subxiphoid Echo View"
  caption="Ultrasound showing cardiac standstill."
  align="right"
  width="sm"
  rounded="md"
  shadow="md"
/>
Text in your clinical note will wrap around the left side of this image cleanly...
```

#### 3. Text Floating to the Left (`align="left"`)
```mdx
<Img
  src="/attachments/reason-ultrasound-echo.svg"
  alt="Parasternal Long Axis View"
  caption="Parasternal view during pulse check."
  align="left"
  width="md"
  rounded="lg"
  shadow="none"
/>
Text in your clinical note will wrap around the right side of this image cleanly...
```

#### 4. Wide Breakout Banner (`align="wide"`)
```mdx
<Img
  src="/attachments/reason-ultrasound-echo.svg"
  alt="Landmark Trial Data Matrix"
  caption="Figure 2: REASON Trial Multicenter Results Summary Matrix."
  align="wide"
  width="full"
  rounded="xl"
  shadow="lg"
/>
```

#### 5. Custom Pixel / Percentage Width
```mdx
<Img
  src="/attachments/rsi-algorithm-flowchart.svg"
  alt="Custom Sized Diagram"
  align="center"
  width="450px"
  rounded="full"
/>
```

---

## ➕ Section 3: Adding New Sections in 2 Minutes

To add a 5th section (e.g. `Pediatric Emergency Medicine` or `Toxicology`):

### Step 1: Open `src/config/sections.ts`
Add the new section entry to the `SECTIONS` object:

```ts
export const SECTIONS: Record<string, SectionConfig> = {
  // Existing sections...
  'pediatric-em': {
    id: 'pediatric-em',
    name: 'Pediatric EM',
    slug: 'pediatric-em',
    description: 'Pediatric resuscitation algorithms, weight-based drug tables, and PEM guidance.',
    iconName: 'Baby',
    badgeColor: 'border-pink-500/30 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20',
    accentColor: '#ec4899',
    gradient: 'from-pink-500/20 via-slate-900 to-slate-950',
  },
};
```

That's it! The Astro Content Collections schema, desktop header navigation pills, mobile navigation menu, home page collection selector grid, and archive routes (`/pediatric-em`) will **automatically update**!

---

## ⚡ Section 4: Cloudflare Pages Deployment

Resus Docs deploys to Cloudflare Pages for free with zero server cost.

### Cloudflare Pages Build Settings:
- **Framework Preset:** `Astro`
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Node.js Version:** `20` or higher (Set environment variable `NODE_VERSION = 20` in Cloudflare Pages settings)

---

## 🧪 Local Development Commands

```bash
# Start local development server (http://localhost:4321)
npm run dev

# Build production static bundle & generate Pagefind search index
npm run build

# Preview production build locally
npm run preview

# Run sharp image optimization engine manually
npm run optimize-images
```

---

## 📜 Medical Disclaimer
Resus Docs is designed for emergency healthcare professionals and educational reference. Clinical decisions must account for individual patient factors and local institutional protocols.
