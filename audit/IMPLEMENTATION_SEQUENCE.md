# Implementation Sequence & Plan

## Next.js Project Scaffolding Structure
We will configure a Next.js frontend-only structure:
1.  `app/` directory using **Next.js App Router**.
2.  `components/` folder divided into global subdirectories (layout, dashboards, cards, overlays, data).
3.  `styles/globals.css` with imported design system tokens and Tailwind rules.
4.  `public/Logos/` mapping the official logo directly.

## Migration Sequence Rules
1.  **Zero-Style Drift:** Every CSS styling rule and markup item is copied directly from the Stitch screens.
2.  **Atomic Migration:** Build page by page. Route mappings will load their respective screen HTML/CSS directly.
3.  **Validation:** Visually inspect 100% visual parity for desktop and mobile layouts.
