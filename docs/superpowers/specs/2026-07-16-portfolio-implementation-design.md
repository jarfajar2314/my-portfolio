# Design Specification: Fajar Yusuf Portfolio Implementation

**Date:** 2026-07-16  
**Status:** Pending Review  
**Brand Identity:** Serene Precision  

---

## 1. Goal Description

Implement the portfolio screens designed in Stitch into the Next.js web application. The application will showcase full-stack and systems engineering projects using the "Serene Precision" theme (clean, outcome-oriented minimalism with warm neutrals and sharp indigo accents).

---

## 2. Proposed System Design

### 2.1. Routing & Directory Structure
We will set up two main pages using Next.js App Router conventions:

- `/` (Home page) -> `app/page.tsx`
- `/work` (Selected Works page) -> `app/work/page.tsx`

Additionally, shared UI blocks and utility functions will be organized as follows:

```
app/
  globals.css          # Global styles & Tailwind v4 theme customizations
  layout.tsx           # Shared page layout (Header, Footer, global fonts)
  page.tsx             # Home screen (Bento project layout)
  work/
    page.tsx           # Selected Works screen (Detailed 3-column project layout)
components/
  Navbar.tsx           # Header navigation (handles active link state, mobile menu)
  Footer.tsx           # Shared page footer
  ProjectCard.tsx      # Configurable card for projects
public/
  images/              # Downloaded local project thumbnails
scripts/
  download-images.js   # Script to download assets from Google User Content
```

---

## 3. Detailed Component Spec

### 3.1. Tailwind v4 Integration (`app/globals.css`)
Configure Tailwind v4 theme options inside the CSS file:
- Primary Color: `#3525cd` (Indigo Blue)
- Primary Container: `#4f46e5`
- Canvas Background: `#fcf8ff` (Warm, off-white)
- Surfaces: `#ffffff`
- Text Neutrals: `#1b1b24`
- Accent Elements: `.glass-card`, `.soft-shadow`, `.hover-lift`

### 3.2. Navbar Component (`components/Navbar.tsx`)
- Client Component.
- Links: `/` (Home) and `/work` (Selected Works).
- State: `isMobileMenuOpen` toggles navigation on smaller devices.
- Uses `usePathname` to apply active styles (e.g., small indigo indicator dot under the current link).

### 3.3. ProjectCard Component (`components/ProjectCard.tsx`)
- Renders project thumbnails, year, category tag, and case study links.
- Uses `next/image` for responsive local image loading.
- Handles bento-style scaling via dynamic CSS classes.

---

## 4. Asset Download Plan (`scripts/download-images.js`)
We will create a Node.js script using `https` to fetch all project screenshots from the Stitch hosted environment and save them to `public/images/`. This ensures the application loads assets locally and reliably.

---

## 5. Verification Plan

### Automated Verification
- Run `npm run build` to verify there are no compilation or TypeScript errors.
- Validate routing boundaries using Next.js build output.

### Manual Verification
- Open the application locally at `http://localhost:3000`.
- Verify the navigation menu works seamlessly between `/` and `/work`.
- Check responsiveness on mobile viewports and ensure the interactive navigation toggle works.
