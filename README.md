# Fajar Yusuf Portfolio (Serene Precision)

A premium, minimalist professional portfolio showcasing systems engineering scale, security, and precision simplicity. Designed for enterprise clients, technical recruiters, and industrial automation firms.

---

## 🚀 Core Capabilities & Brand Identity

*   **Brand Voice:** Serene Precision
*   **Tagline:** "Scale. Secure. Simplify."
*   **Aesthetic:** Clean, outcome-oriented minimalism with warm neutrals (`#FCF8FF`) and sharp indigo accents (`#4F46E5`).
*   **Focus Areas:** High-performance digital ecosystems, real-time telemetry pipelines, secure Kubernetes architectures, and industrial PLC hardware bridging.

---

## 🛠 Tech Stack

*   **Frontend Framework:** Next.js (React 19, TypeScript, App Router)
*   **Styling Engine:** Tailwind CSS v4
*   **Typography:** Plus Jakarta Sans (Display/Titles) and Inter (UI/Body)
*   **Interactive Elements:** Native `IntersectionObserver` scroll reveals, floating CSS glassmorphisms, and fluid cubic-bezier hover states.

---

## 📁 Repository Structure

```
├── app/
│   ├── globals.css         # Tailwind v4 directives, custom theme variables, and keyframes
│   ├── layout.tsx          # Font loads, page wrapper structure, and shared Navbar/Footer
│   └── page.tsx            # Home page (Hero, Selected Projects Bento Grid, Services CTA)
├── components/
│   ├── Navbar.tsx          # Responsive navigation header with active-link styling
│   ├── Footer.tsx          # Simple, semantic page footer
│   ├── ProjectCard.tsx     # Bento-ready dynamic card with interactive scale/micro-animations
│   └── ScrollReveal.tsx    # Client scroll trigger intersection wrapper
```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have Node.js (v20+) installed.

### Development

1. Install package dependencies:
   ```bash
   npm install
   ```

2. Run the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Check

Verify TypeScript compilation safety:
```bash
npx tsc --noEmit
```

### Production Build

Compile the production-ready build:
```bash
npm run build
```
