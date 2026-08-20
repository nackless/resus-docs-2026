# Resus Docs — Medical Publishing Engine & Automated Content Pipeline

> **All things Emergency medicine.**  
> A high-performance, mobile-first medical publishing engine built with Astro, Tailwind CSS, Obsidian MDX, Pagefind static search, and Cloudflare Pages.

---

## 📋 Table of Contents

- [🌟 Project Overview & Aesthetic](#-project-overview--aesthetic)
- [🧭 Navigation Tabs & Extensible Section Architecture](#-navigation-tabs--extensible-section-architecture)
- [📱 Writing & Publishing from Obsidian (Templater Guide)](#-writing--publishing-from-obsidian-templater-guide)
- [🔗 Automatic Clean Slugs & URL Routing](#-automatic-clean-slugs--url-routing)
- [🖼️ Image Formatting Guide & `<Img />` MDX Component](#-image-formatting-guide---img--mdx-component)
- [📸 Automated Phone Storage Protection Engine (Sharp + GitHub Action)](#-automated-phone-storage-protection-engine-sharp--github-action)
- [🔍 Pagefind Static Search (Cmd+K)](#-pagefind-static-search-cmdk)
- [⚡ Cloudflare Pages Zero-Cost Deployment](#-cloudflare-pages-zero-cost-deployment)
- [🧪 Local Development Commands](#-local-development-commands)
- [📜 Medical Disclaimer](#-medical-disclaimer)

---

## 🌟 Project Overview & Aesthetic

Resus Docs is engineered for emergency medicine practitioners, clinical educators, and resuscitation leads. It provides rapid bedside reference, critical trial appraisals, CESR portfolio evidence checklists, and FOAMed reflections.

- **Theme:** Dark-mode native, evidence-based clinical aesthetic with sleek light-mode toggle.
- **Typography:** Inter / Geist for sans prose and JetBrains Mono for clinical data, code, and tables.
- **Brand Logo:** Vector `<Logo />` component combining resuscitation ECG pulse waveforms with a clinical cross and knowledge document emblem.

---

## 🧭 Navigation Tabs & Extensible Section Architecture

The platform features 4 primary section tabs out of the box:

1. **Clinical Zone** (`/clinical-zone`) — Evidence-based resuscitation algorithms, emergency procedures, and RSI protocols.
2. **Critical Appraisal** (`/critical-appraisal`) — Methodological breakdown of landmark EM trials, PICO analyses, and biostatistics.
3. **CESR / Portfolio Pathway** (`/cesr-portfolio`) — Guidance, SLO evidence mapping, audit templates, and specialist registration logbooks.
4. **Blog** (`/blog`) — Field notes, human factors, resuscitation leadership, and FOAMed reflections.

### ➕ How to Add a 5th or 6th Section in 2 Minutes

To add a new section (e.g. `Pediatric EM` or `Toxicology`), simply open `src/config/sections.ts` and add your section definition:

```ts
export const SECTIONS: Record<string, SectionConfig> = {
  // Existing sections...
  'pediatric-em': {
    id: 'pediatric-em',
    name: 'Pediatric EM',
    slug: 'pediatric-em',
    description: 'Pediatric resuscitation algorithms and PEM guidance.',
    iconName: 'Baby',
    badgeColor: 'border-pink-500/30 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20',
    accentColor: '#ec4899',
    gradient: 'from-pink-500/20 via-slate-900 to-slate-950',
  },
};
```

*The Astro Content Collections schema, header navigation bar, mobile menu drawer, homepage selectors, tag filters, and `/pediatric-em` archive pages will **automatically update**!*

---

## 📱 Writing & Publishing from Obsidian (Templater Guide)

### 1. Templater Plugin Setup
1. In Obsidian, go to **Settings** ⚙️ ➔ **Community Plugins** ➔ Enable **Templater**.
2. Set **Template folder location** to `templates`.
3. Enable **Trigger Templater on new file creation**.

### 2. Tab Section Templates (`templates/`)

When you create a new file in Obsidian, press `Alt+N` (or `Cmd+P` ➔ **Templater: Insert Template**) and pick the template for your target tab:

- **`Clinical Zone Template.mdx`** ➔ Target Tab: `/clinical-zone`
- **`Critical Appraisal Template.mdx`** ➔ Target Tab: `/critical-appraisal`
- **`CESR Portfolio Template.mdx`** ➔ Target Tab: `/cesr-portfolio`
- **`Blog Template.mdx`** ➔ Target Tab: `/blog`

*Templater automatically evaluates `<% tp.file.title %>` (note title), `<% tp.date.now("YYYY-MM-DD") %>` (today's date), and places your cursor at `<% tp.file.cursor() %>`.*

### 3. Mobile Git Sync Setup
- **iOS (iPhone / iPad):** Sync your vault using **Working Copy** or the **Obsidian Git** plugin.
- **Android:** Sync your vault using **Obsidian Git** + **Termux** or **GitJournal**.

---

## 🔗 Automatic Clean Slugs & URL Routing

Slugs are **100% automatic**:

1. **Automatic Filename Slugification (Default):**
   Naming your note `Managing a Cardiac Arrest.mdx` automatically publishes to:  
   `https://resus-docs.pages.dev/clinical-zone/managing-a-cardiac-arrest`

2. **Optional Frontmatter `slug` Override:**
   Add `slug: "custom-url"` to your note's frontmatter if you want a custom short URL:
   ```yaml
   ---
   title: "Managing a Complex Resuscitation in Cardiac Arrest"
   slug: "cardiac-arrest-resus"
   section: "clinical-zone"
   ---
   ```
   *Renders at `/clinical-zone/cardiac-arrest-resus`.*

---

## 🖼️ Image Formatting Guide & `<Img />` MDX Component

Reference images stored in `public/attachments/`:

### A. Standard Markdown Image (Simple Default)
```markdown
![Airway Diagram](/attachments/rsi-algorithm-flowchart.svg)
```
*Renders automatically centered with rounded corners (`rounded-lg`) and responsive width.*

### B. Custom `<Img />` MDX Component Snippets

Import statement at top of `.mdx` file:
```mdx
import Img from '../../components/Img.astro';
```

#### 📍 1. Centered Image with Caption
```mdx
<Img
  src="/attachments/rsi-algorithm-flowchart.svg"
  alt="Emergency Airway Flowchart"
  caption="Figure 1: Emergency RSI & FONA Rescue Protocol."
  align="center"
  width="lg"
  rounded="xl"
  shadow="lg"
/>
```

#### 👈 2. Text Floating to the Right (`align="right"`)
```mdx
<Img
  src="/attachments/reason-ultrasound-echo.svg"
  alt="POCUS Echo View"
  caption="Cardiac standstill on subxiphoid view."
  align="right"
  width="sm"
  rounded="md"
  shadow="md"
/>
Your clinical text goes here... It will automatically float to the left of the image and wrap around smoothly.
```

#### 👉 3. Text Floating to the Left (`align="left"`)
```mdx
<Img
  src="/attachments/reason-ultrasound-echo.svg"
  alt="POCUS Echo View"
  caption="Parasternal long axis view."
  align="left"
  width="md"
  rounded="lg"
  shadow="none"
/>
Your clinical text goes here... It will automatically float to the right of the image and wrap around smoothly.
```

#### ↔️ 4. Wide Breakout Banner (`align="wide"`)
```mdx
<Img
  src="/attachments/reason-ultrasound-echo.svg"
  alt="Landmark Trial Data Matrix"
  caption="Figure 2: REASON Trial Multicenter Results Matrix."
  align="wide"
  width="full"
  rounded="xl"
  shadow="lg"
/>
```

---

## 📸 Automated Phone Storage Protection Engine (Sharp + GitHub Action)

High-resolution photos taken on mobile phones (5MB - 15MB) can rapidly exhaust phone storage during Git/Obsidian sync.

- **Local Script:** `npm run optimize-images` runs `scripts/optimize-images.mjs`.
- **GitHub Action (`.github/workflows/optimize-images.yml`):**
  1. Triggers whenever photos in `public/attachments/` or `src/assets/` are pushed.
  2. Uses `sharp` to downscale images exceeding 1920px width and compress JPEGs/PNGs into modern WebP format.
  3. Commits compressed files back to Git repository.
  4. When Obsidian Sync pulls changes back to your phone, massive image files are replaced with lightweight ~150KB assets.

---

## 🔍 Pagefind Static Search (Cmd+K)

- Built-in zero-config static search using Pagefind.
- Trigger search anytime by clicking the search bar in the header or pressing `Cmd+K` / `Ctrl+K`.
- Live full-text indexing occurs automatically during static site build (`npm run build`).

---

## ⚡ Cloudflare Pages Zero-Cost Deployment

### Method 1: Cloudflare Git Integration (Automatic)
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) ➔ **Workers & Pages** ➔ **Create Application** ➔ **Pages** ➔ **Connect to Git**.
2. Select GitHub repo `nackless/resus-docs-2026`.
3. Set build settings:
   - **Framework Preset:** `Astro`
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
   - **Environment Variable:** `NODE_VERSION` = `20`
4. Click **Save and Deploy**.

### Method 2: Terminal Deployment via Wrangler CLI
```bash
# 1. Build static bundle & Pagefind index
npm run build

# 2. Deploy dist folder directly to Cloudflare Pages
npx wrangler pages deploy dist --project-name=resus-docs
```

---

## 🧪 Local Development Commands

```bash
# Start local dev server with hot-reloading (http://localhost:4321)
npm run dev

# Build production bundle and generate Pagefind search index
npm run build

# Preview production build locally
npm run preview

# Run local Sharp image optimization engine
npm run optimize-images
```

---

## 📜 Medical Disclaimer

Resus Docs is intended for qualified healthcare professionals and educational reference only. Clinical decisions must always account for individual patient factors, local institutional protocols, and senior medical consultation.
