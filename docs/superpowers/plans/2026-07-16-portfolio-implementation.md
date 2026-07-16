# Fajar Yusuf Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the "Serene Precision" portfolio pages in the Next.js v16 App Router application with Tailwind CSS v4.

**Architecture:** Extraction of shared layouts (Header/Footer), design tokens defined globally in CSS, and a reusable `ProjectCard` component. The images will be downloaded locally via a custom Node script.

**Tech Stack:** Next.js v16, Tailwind CSS v4, React 19, Material Symbols Outlined, Google Fonts.

## Global Constraints
- Do not use Tailwind CSS v3 configurations. Use Tailwind CSS v4 `@theme` directives in the global CSS file.
- Use `next/image` for local image rendering.
- All code imports must adhere to Next.js v16 Async Request API rules (if using params, cookies, etc. asynchronously).

---

### Task 1: Create Image Download Utility & Download Assets

**Files:**
- Create: `scripts/download-images.js`
- Test: Validate file outputs in `public/images/`

**Interfaces:**
- Produces: Local image assets in `public/images/`:
  - `maintenance-home.png`
  - `spc-home.png`
  - `leak-home.png`
  - `maintenance-work.png`
  - `spc-work.png`
  - `leak-work.png`
  - `procurement-work.png`
  - `incident-work.png`

- [ ] **Step 1: Create the download-images script**
  Create the file `scripts/download-images.js` with the following Node.js script content:
  ```javascript
  const fs = require('fs');
  const https = require('https');
  const path = require('path');

  const dir = path.join(__dirname, '../public/images');
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  const assets = [
    { filename: 'maintenance-home.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFbkb8r6O-JMiKiAOpWTDznM71Ph_R4PvpsF98cjS_0H0c6VFF2ZGiBVNPH0XG-GWOxu030ZuloMbyigaPYGNAzE-WYOQbqLSSNbIB1Rk79XqHY3IiW_dkbVGiEkjrIiez-V_TsWibJiIoITdFl5h3oFm-YR74aUYWunvDY-3pyctV2LcGeiOQ_Us-ykSBHMpwZ3Spy3JriL1vxffH7xpdMinrDaODNZIndyCmuWYztHOP3pfkSaYOBYIjimS5hM4fTxQPaHVxMccN' },
    { filename: 'spc-home.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkzebZ1VLfAOU475kunqb__cq7RvIwY6fd382aOPryDIOYbpp_6o2sEx6ja4LggoN5myiHLG6cyCmGECum6X4gPU5KwHtgnfX1e_L9v-mduO89ar2vvdd5qUDQPaapinTMc6ldCxUJkTrIxapqw_6U3dczSwYQwC16EmJMzpzs4xEdTyhsNoA8dydviZRr_CQtvIkojdLpMUxe5gXpm_HMKly_mApnLBE_PmIg-3UTEZIPAeG7mKa7k0A-6Bud2Xyd2e84Z2W6Auw5' },
    { filename: 'leak-home.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdcuvOMGUI5-kjiLNxUa44imwP13omW8iIFQ3NaJBNYvYxTh1tNlDWnL6dI3I6m7dRT5-bG67aLyZy7_co_axpQIBME7jQO5Hx8MGIIRfPjWq0SenC5AK8LB7JEnk8Jt8KodXEcsz7awMIM_eS6bVJ5anApPN41bVlEtH72jHC7ir40D68oHwGbVsaulSDI47zFZYI9eEoIBuS3zxy4GFlzLHVF7P80r2tienI3JC6gApl3TX97T2T9p6HydICzmojR-kDGB3btamx' },
    { filename: 'maintenance-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaV5na2Tqd-Upcthsdk0V5UGYVrDlEJPuF0bMJn3-f-7jAY_exuq4w9jkljFFVexnuyvVHjewXpr1i29L1bVqVxIppQENTRRldrOvmG5eUbW2v9ONkai4Ety0Y8PGaHQSxRjaeEnN50m54fX-gz6D1cEbGP0e3_nk3IQmD-ICtmnE_TRqyREYWKHP9omjC96pkzyG5ZSN_f0eYf7K8n30XzEOIQ0xKL0XWTAocDH7VhMyO0gN1I9k8q-9RjAq7FqwCOjBzO3Ily4X5' },
    { filename: 'spc-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa81OG2_fBT7ozTBkQxsZOJ0VlcqK5oL4Me_lI9P6dgzk4gKjrm2Fr8SeAS5_XaeVenZTgKUfEDVOg0XY2uPGUdxFm-r4MPX9XGRxuIimo9GKKlu5JmwjPEel_hjfrhNC6uFqiD8kZ2zh9Lz_eWYQ5UJLZT41m5vD8h1SG1DZlZwNTXXyc3xc2AVGyWLygHLv4gnapPht194w_3YNX2qBJdapTY5fEw2cXmsECRrHjVxiYquVy65T1VA3_WfmlshPxfXVLT7wmwg5D' },
    { filename: 'leak-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-0G9yGS-LCXxzT_aDgrb1hNkhsZk7KeAuK53KWQZ7QpRe8pFzCISNybuZv1bznl4zvTkpapMdSBj_Ves7v_SbbNzHtj5Q3PaaW6ku4A45MCRAZw1DypX_RYRbF2h76Htzjn-D5VzunoYxnY3SXqPN6p7sBRF_DJp8jJYpHFZJiCHmJ4whY9IqdkXhqxsyvzlylVBKUD0r2hQuwnH5CrgLBOuORaOJIhEGROTsM_C9wSs_aUom3MjnN2eUFtTbttWG4Bjbn5tdRg04' },
    { filename: 'procurement-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD190X5NIgeMmTDd4AOcnbpAz0XAKV-ll4CVA6SFNGnwCIM7Nyo6a3WdZrlsJwvMp5eO94RVbWdxJ8SvvQqPGjb_SIrKOD_SLvYTqK9qTlusnkx74aeGsdku0z64mwTvSy5VQXsxivRKIlbAcLdSNGa0gBnNVnBg4dtoXMMFq8PLlLNReyDww2rWWLLB711XxEGfWlRPRMghoXX6MVDNs-BxOGky9T-fdbwmq_86OodQ0GhypjjUkYDJyHONqzngqrcjfxW6ED0XNC' },
    { filename: 'incident-work.png', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbtvvcSPjPY7BQOushWnU10HOr89DglrQK4ShcqULA8_Ss9NwOzNivhjprT4dZPpbXJCRUPj9SD139AGKrU9almf5nAtDApsemE66LULocnfLfD2MTIJiNzucKnFBpgiYlNChir2V_kp8W6xZM-Mp9vGUgCE6BW_WADpbAbMn4Zq3oXD7G-94zPU85nd7QCiG1b-keTbhSMYMp9I1TBrQnyg7kNhzoEIFSStQ_rqWvpHQrA5CvtDbAaTLfVexcEjXA4Zh5n1EqJQ5V' }
  ];

  let completed = 0;
  assets.forEach(asset => {
    const filePath = path.join(dir, asset.filename);
    const file = fs.createWriteStream(filePath);
    https.get(asset.url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        completed++;
        console.log(`Downloaded ${asset.filename}`);
        if (completed === assets.length) {
          console.log('All downloads finished successfully!');
        }
      });
    }).on('error', err => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${asset.filename}:`, err.message);
    });
  });
  ```

- [ ] **Step 2: Run download script to fetch assets**
  Run: `node scripts/download-images.js`
  Expected: Outputs download confirmations for all 8 files.

- [ ] **Step 3: Commit**
  ```bash
  git add scripts/download-images.js public/images/
  git commit -m "feat: add download script and fetch remote portfolio images"
  ```

---

### Task 2: Configure Theme Styles & Layout Fonts

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: Google Fonts loading framework, Tailwind v4 compiler
- Produces: Globally defined design tokens, font styling, and Material symbols inclusion

- [ ] **Step 1: Update globals.css**
  Overwrite `app/globals.css` to define the "Serene Precision" theme parameters using Tailwind CSS v4 `@theme` directive:
  ```css
  @import "tailwindcss";

  :root {
    --background: #fcf8ff;
    --foreground: #1b1b24;
  }

  @theme {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-surface-container-lowest: #ffffff;
    --color-on-surface-variant: #464555;
    --color-surface-bright: #fcf8ff;
    --color-on-secondary-fixed: #1c1b1b;
    --color-secondary-fixed-dim: #c8c6c5;
    --color-outline-variant: #c7c4d8;
    --color-on-secondary-container: #636262;
    --color-tertiary-fixed-dim: #ffb695;
    --color-surface-variant: #e4e1ee;
    --color-on-surface: #1b1b24;
    --color-on-error: #ffffff;
    --color-surface-tint: #4d44e3;
    --color-surface: #fcf8ff;
    --color-primary: #3525cd;
    --color-primary-container: #4f46e5;
    --color-surface-container-high: #eae6f4;
    --color-secondary-container: #e2dfde;
    --color-surface-container-highest: #e4e1ee;
    --color-tertiary: #7e3000;
    --color-on-background: #1b1b24;
    --color-on-tertiary: #ffffff;
    --color-secondary: #5f5e5e;
    --color-tertiary-container: #a44100;
    --color-primary-fixed-dim: #c3c0ff;
    --color-on-tertiary-fixed: #351000;
    --color-on-secondary: #ffffff;
    --color-inverse-primary: #c3c0ff;
    --color-tertiary-fixed: #ffdbcc;
    --color-on-primary-container: #dad7ff;
    --color-on-primary-fixed-variant: #3323cc;
    --color-on-tertiary-fixed-variant: #7b2f00;
    --color-on-tertiary-container: #ffd2be;
    --color-on-primary-fixed: #0f0069;
    --color-on-primary: #ffffff;
    --color-secondary-fixed: #e5e2e1;
    --color-on-error-container: #93000a;
    --color-primary-fixed: #e2dfff;
    --color-inverse-on-surface: #f3effc;
    --color-on-secondary-fixed-variant: #474746;
    --color-error: #ba1a1a;
    --color-surface-container-low: #f5f2ff;
    --color-error-container: #ffdad6;
    --color-surface-dim: #dcd8e5;
    --color-outline: #777587;
    --color-surface-container: #f0ecf9;
    --color-inverse-surface: #302f39;

    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;

    --spacing-container-max: 1280px;
    --spacing-stack-md: 24px;
    --spacing-stack-lg: 48px;
    --spacing-gutter: 24px;
    --spacing-margin-desktop: 64px;
    --spacing-margin-mobile: 20px;
    --spacing-stack-sm: 12px;

    --font-sans: var(--font-inter);
    --font-plus-jakarta-sans: var(--font-plus-jakarta-sans);
  }

  body {
    background: var(--background);
    color: var(--foreground);
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(26, 26, 26, 0.05);
  }

  .soft-shadow {
    box-shadow: 0 10px 40px -10px rgba(26, 26, 26, 0.05);
  }

  .hover-lift {
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.4s cubic-bezier(0.2, 0, 0, 1);
  }

  .hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px -15px rgba(53, 37, 205, 0.1);
  }

  .text-stroke {
    -webkit-text-stroke: 1px currentColor;
    -webkit-text-fill-color: transparent;
  }
  ```

- [ ] **Step 2: Update layout.tsx with fonts and layout structures**
  Modify `app/layout.tsx` to set up `Plus_Jakarta_Sans` and `Inter` via `next/font/google` and render the shared header navigation and footer:
  ```tsx
  import type { Metadata } from "next";
  import { Plus_Jakarta_Sans, Inter } from "next/font/google";
  import "./globals.css";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";

  const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["sans-serif"],
  });

  const inter = Inter({
    variable: "--font-inter",
    subsets: ["sans-serif"],
  });

  export const metadata: Metadata = {
    title: "Fajar Yusuf | Full-Stack & Systems Engineer Portfolio",
    description: "Professional portfolio showcasing systems engineering scale, security, and precision simplicity.",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html
        lang="en"
        className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
      >
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
            rel="stylesheet"
          />
        </head>
        <body className="min-h-full flex flex-col bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary">
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </body>
      </html>
    );
  }
  ```

- [ ] **Step 3: Commit**
  ```bash
  git add app/globals.css app/layout.tsx
  git commit -m "style: configure global styles and font loading setup"
  ```

---

### Task 3: Implement Navigation & Footer Components

**Files:**
- Create: `components/Navbar.tsx`
- Create: `components/Footer.tsx`

**Interfaces:**
- Produces: `<Navbar />` and `<Footer />` components imported in `app/layout.tsx`.

- [ ] **Step 1: Create Navbar component**
  Create `components/Navbar.tsx` with routing indicators and active menu toggles:
  ```tsx
  "use client";

  import React, { useState } from "react";
  import Link from "next/link";
  import { usePathname } from "next/navigation";

  export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
      { name: "Work", href: "/work" },
      { name: "Services", href: "/#services" },
      { name: "Contact", href: "/#contact" },
    ];

    return (
      <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-on-surface/5">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          <Link
            href="/"
            className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tighter"
          >
            Fajar Yusuf
          </Link>
          <div className="hidden md:flex items-center gap-stack-lg">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-label-md text-label-md transition-colors ${
                    isActive
                      ? "text-primary font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              className="bg-primary-container text-on-primary text-label-md font-label-md px-8 py-3 rounded-2xl hover:opacity-90 transition-opacity"
            >
              Hire Me
            </Link>
          </div>
          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface border-b border-on-surface/5 py-6 px-margin-mobile flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary-container text-on-primary text-center text-label-md font-label-md py-4 rounded-2xl"
            >
              Hire Me
            </Link>
          </div>
        )}
      </nav>
    );
  }
  ```

- [ ] **Step 2: Create Footer component**
  Create `components/Footer.tsx` matching structural layouts:
  ```tsx
  import React from "react";
  import Link from "next/link";

  export default function Footer() {
    return (
      <footer className="bg-surface border-t border-on-surface/5">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto gap-stack-md">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Fajar Yusuf
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant">
              © {new Date().getFullYear()} Fajar Yusuf. All rights reserved.
            </span>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
                Connect
              </span>
              <div className="flex gap-6">
                <a
                  className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dribbble
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
                Navigation
              </span>
              <div className="flex gap-6">
                <Link
                  className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                  href="/work"
                >
                  Projects
                </Link>
                <a
                  className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  ```

- [ ] **Step 3: Commit**
  ```bash
  git add components/Navbar.tsx components/Footer.tsx
  git commit -m "feat: add navbar and footer components with active router highlights"
  ```

---

### Task 4: Implement ProjectCard Component

**Files:**
- Create: `components/ProjectCard.tsx`

**Interfaces:**
- Produces: `<ProjectCard />` reusable UI component.

- [ ] **Step 1: Create ProjectCard component**
  Create `components/ProjectCard.tsx` rendering localized images using `next/image`:
  ```tsx
  import React from "react";
  import Image from "next/image";
  import Link from "next/link";

  interface ProjectCardProps {
    title: string;
    description: string;
    category: string;
    year?: string;
    imageSrc: string;
    link: string;
    colSpan?: string;
    aspectRatio?: string;
    isLarge?: boolean;
  }

  export default function ProjectCard({
    title,
    description,
    category,
    year,
    imageSrc,
    link,
    colSpan = "md:col-span-4",
    aspectRatio = "aspect-video",
    isLarge = false,
  }: ProjectCardProps) {
    if (isLarge) {
      return (
        <div className={`${colSpan} group cursor-pointer`}>
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden soft-shadow transition-all duration-500 hover:soft-shadow-lg card-hover h-full border border-on-surface/5 flex flex-col justify-between">
            <div className="h-[400px] relative overflow-hidden bg-surface-container">
              <Image
                src={imageSrc}
                alt={title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 flex gap-2 z-10">
                <span className="bg-surface-container-lowest/80 backdrop-blur px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider text-primary">
                  Architecture
                </span>
                <span className="bg-primary-container text-on-primary px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider">
                  {category}
                </span>
              </div>
            </div>
            <div className="p-10">
              <h3 className="font-headline-sm text-headline-sm mb-4">{title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-lg">
                {description}
              </p>
              <div className="flex items-center gap-2 text-primary font-label-md text-label-md group/link">
                View Case Study
                <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`${colSpan} group flex flex-col gap-4`}>
        <div className={`relative overflow-hidden rounded-3xl soft-shadow ${aspectRatio} bg-surface-container`}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-6 right-6 translate-y-12 group-hover:translate-y-0 transition-transform z-10">
            <Link
              className="bg-surface text-primary w-12 h-12 rounded-full flex items-center justify-center soft-shadow"
              href={link}
            >
              <span className="material-symbols-outlined">arrow_outward</span>
            </Link>
          </div>
        </div>
        <div className="px-2">
          <div className="flex items-center gap-2 mb-1">
            {year && <span className="font-label-md text-label-md text-on-surface-variant/60">{year}</span>}
            {year && <span className="w-1 h-1 bg-primary/20 rounded-full"></span>}
            <span className="font-label-md text-label-md text-primary">{category}</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add components/ProjectCard.tsx
  git commit -m "feat: implement ProjectCard modular display layouts"
  ```

---

### Task 5: Implement Home Page

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `<ProjectCard />`
- Produces: Landing layout on `/`

- [ ] **Step 1: Implement home routing structure**
  Rewrite `app/page.tsx` to mount Hero layouts and bento grids:
  ```tsx
  import React from "react";
  import Link from "next/link";
  import ProjectCard from "@/components/ProjectCard";

  export default function Home() {
    return (
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-40 md:pb-52 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="flex flex-col gap-6 max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
                Full-Stack Engineer
              </span>
              <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl leading-tight text-on-surface font-extrabold tracking-tighter">
                Scale. Secure.<br />Simplify.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Crafting high-performance digital ecosystems with a focus on precision, scalability, and intuitive engineering solutions for global enterprises.
              </p>
              <div className="flex gap-4 mt-8">
                <Link
                  href="/work"
                  className="bg-primary-container text-on-primary font-label-md text-label-md px-8 py-4 rounded-2xl flex items-center gap-2 group transition-all"
                >
                  View My Work
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block pointer-events-none">
            <div className="relative w-full h-full">
              <div className="absolute top-[10%] right-[15%] w-24 h-24 bg-white soft-shadow rounded-2xl rotate-12 animate-pulse"></div>
              <div className="absolute top-[40%] right-[30%] w-16 h-16 bg-primary-container/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-[20%] right-[5%] w-32 h-32 border-2 border-primary/5 rounded-3xl -rotate-6"></div>
              <div className="absolute top-[60%] right-[40%] text-[200px] font-black text-on-surface opacity-[0.02] select-none">
                FJ
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section (Bento Grid) */}
        <section className="py-32 bg-surface px-margin-mobile md:px-margin-desktop" id="work">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 font-bold tracking-tight">
                  Selected Projects
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Solving complex industrial and enterprise challenges through refined digital architecture.
                </p>
              </div>
              <div className="flex items-center gap-4 font-label-md text-label-md text-primary">
                <span>01 / 03</span>
                <div className="w-24 h-[1px] bg-outline-variant">
                  <div className="w-1/3 h-full bg-primary"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Project 1: Maintenance Workspace (Large) */}
              <ProjectCard
                title="Maintenance Workspace"
                description="A unified hub for managing large-scale equipment upkeep, featuring real-time telemetry and predictive scheduling engines."
                category="Enterprise"
                imageSrc="/images/maintenance-home.png"
                link="/work"
                colSpan="md:col-span-8"
                isLarge
              />
              <div className="md:col-span-4 flex flex-col gap-gutter">
                {/* Project 2: SPC Dashboard */}
                <ProjectCard
                  title="SPC Dashboard"
                  description="Statistical process control for automated factory lines."
                  category="FinTech & Data"
                  imageSrc="/images/spc-home.png"
                  link="/work"
                  colSpan="w-full"
                  aspectRatio="aspect-[4/3]"
                />
                {/* Project 3: Leak Detection */}
                <ProjectCard
                  title="Leak Detection"
                  description="IoT infrastructure for urban water management."
                  category="Environmental Tech"
                  imageSrc="/images/leak-home.png"
                  link="/work"
                  colSpan="w-full"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience / Call to Action Section */}
        <section className="py-32 bg-primary-container text-on-primary overflow-hidden relative" id="services">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg mb-8 font-extrabold tracking-tighter">
                  Let's build the future together.
                </h2>
                <p className="font-body-lg text-body-lg opacity-80 mb-12 max-w-md">
                  I am currently open to new collaborations and high-impact engineering projects. Whether it's a zero-to-one startup or enterprise scaling, I bring precision to the stack.
                </p>
                <div className="flex flex-wrap gap-6" id="contact">
                  <Link
                    href="mailto:hello@fajaryusuf.com"
                    className="bg-surface-container-lowest text-primary font-label-md text-label-md px-10 py-5 rounded-2xl soft-shadow hover:-translate-y-1 transition-all"
                  >
                    Get in touch
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-on-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">mail</span>
                    </div>
                    <span className="font-label-md text-label-md">hello@fajaryusuf.com</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative">
                    <div className="w-32 h-32 bg-white/20 rounded-3xl backdrop-blur-xl absolute -top-12 -left-12 rotate-12 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-4xl">code</span>
                    </div>
                    <div className="w-48 h-48 bg-white/10 rounded-full backdrop-blur-md absolute top-12 -right-12 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-5xl">database</span>
                    </div>
                    <div className="w-24 h-24 bg-white/30 rounded-2xl backdrop-blur-lg absolute bottom-0 left-24 -rotate-6 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl">terminal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background Graphic */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
            <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" r="40" stroke="white" strokeWidth="0.1"></circle>
              <circle cx="50" cy="50" fill="none" r="30" stroke="white" strokeWidth="0.1"></circle>
            </svg>
          </div>
        </section>
      </main>
    );
  }
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add app/page.tsx
  git commit -m "feat: complete bento-grid portfolio landing page"
  ```

---

### Task 6: Implement Selected Works Page

**Files:**
- Create: `app/work/page.tsx`

**Interfaces:**
- Consumes: `<ProjectCard />`
- Produces: Selected Works layout on `/work`

- [ ] **Step 1: Implement Selected Works route**
  Create `app/work/page.tsx` rendering all 5 projects and footer-aligned CTAs:
  ```tsx
  import React from "react";
  import Link from "next/link";
  import ProjectCard from "@/components/ProjectCard";

  export default function SelectedWorks() {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-32 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
            <div className="z-10">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase block mb-stack-sm">
                Selected Work
              </span>
              <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-stack-md font-extrabold tracking-tighter">
                Digital Experiences <br />
                <span className="text-primary italic">that Matter.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-stack-lg">
                A showcase of systematic solutions designed for complex industrial workflows and digital transformation.
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
              <div className="w-full max-w-md aspect-square relative glass-card rounded-3xl p-12 overflow-hidden hover-lift flex flex-col justify-center items-center group">
                <div className="w-24 h-24 bg-primary-container/20 rounded-2xl rotate-12 flex items-center justify-center mb-6 group-hover:rotate-0 transition-transform duration-700">
                  <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    view_quilt
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
                  Systems Architect
                </h3>
                <p className="text-center font-body-md text-on-surface-variant">
                  Bridging the gap between industrial complexity and human-centered design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Maintenance Workspace */}
            <ProjectCard
              title="Maintenance Workspace"
              description="A clean, minimalist high-fidelity UI design showing a maintenance dashboard."
              category="Heavy Industrial"
              year="2024"
              imageSrc="/images/maintenance-work.png"
              link="#"
              aspectRatio="aspect-[4/3]"
            />
            {/* Project 2: SPC Dashboard */}
            <ProjectCard
              title="SPC Dashboard"
              description="A sophisticated data visualization dashboard for statistical process control."
              category="FinTech & Data"
              year="2023"
              imageSrc="/images/spc-work.png"
              link="#"
              aspectRatio="aspect-[4/3]"
            />
            {/* Project 3: Leak Detection System */}
            <ProjectCard
              title="Leak Detection System"
              description="A minimal dark-themed interface for a leak detection monitoring system."
              category="Environmental Tech"
              year="2023"
              imageSrc="/images/leak-work.png"
              link="#"
              aspectRatio="aspect-[4/3]"
            />
            {/* Project 4: Procurement Digitalization */}
            <ProjectCard
              title="Procurement Digitalization"
              description="An editorial-style layout showcasing a procurement digitalization platform."
              category="Enterprise Software"
              year="2022"
              imageSrc="/images/procurement-work.png"
              link="#"
              colSpan="md:col-span-2"
              aspectRatio="aspect-[2/1]"
            />
            {/* Project 5: Incident Reporting */}
            <ProjectCard
              title="Incident Reporting"
              description="A task-focused mobile application screen for incident reporting."
              category="Public Safety"
              year="2022"
              imageSrc="/images/incident-work.png"
              link="#"
              colSpan="md:col-span-1"
              aspectRatio="aspect-[1/1]"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-primary/5 blur-[120px] -z-10"></div>
          <span className="font-label-md text-label-md text-primary mb-stack-sm block tracking-widest uppercase">
            Start a conversation
          </span>
          <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-stack-lg font-extrabold tracking-tighter">
            Let's Work <br />
            <span className="text-stroke text-primary">Together.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-stack-md">
            <Link
              href="mailto:hello@fajar.yusuf"
              className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-label-md text-label-md hover:scale-[1.05] transition-all shadow-xl shadow-primary/20"
            >
              hello@fajar.yusuf
            </Link>
            <Link
              href="#"
              className="border border-on-surface/10 text-on-surface px-10 py-5 rounded-2xl font-label-md text-label-md hover:bg-on-surface/5 transition-all"
            >
              Schedule a Call
            </Link>
          </div>
        </section>
      </main>
    );
  }
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add app/work/page.tsx
  git commit -m "feat: add Selected Works route and detailed gallery layout"
  ```
