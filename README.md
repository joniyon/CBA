# Core Banking — Marketing Site (Scaffold)

Project skeleton only. No section or UI implementation yet — just the
structure, config, tokens/icon pipeline, providers, hooks, and an empty
section registry. Sections are added one at a time as their assets arrive.

## Stack
- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** driven by your design tokens (CSS variables)
- **Motion** for component animation, **GSAP + ScrollTrigger** for scroll choreography
- **Lenis** for smooth scrolling (auto-disabled under reduced-motion)
- **SVGR** to turn your icon SVGs into typed React components

## Getting started
```bash
npm install
npm run dev
```

## How the pieces fit
- `tokens/tokens.json` — your design tokens (source of truth). Replace the
  placeholder values, then run `npm run tokens` to regenerate `tokens/tokens.css`.
- `tailwind.config.ts` reads those CSS variables, so `bg-primary`, `py-section`,
  etc. all trace back to your tokens.
- `public/icons-src/` — drop your raw icon SVGs here, run `npm run icons`,
  and typed components appear in `components/icons/`.
- `config/sections.ts` — the section registry. Add a section here once built;
  `app/page.tsx` renders them in order.
- `components/sections/<Name>/` — each section is self-contained: markup in
  `<Name>.tsx`, animation in `<Name>.animations.ts`.
- `lib/animations/` — shared GSAP setup, Motion variants, scroll helpers.
- `lib/hooks/useReducedMotion.ts` — gate every animation through this.

## Next steps
1. Replace placeholder values in `tokens/tokens.json` with your real tokens.
2. Add your icon SVGs to `public/icons-src/` and run `npm run icons`.
3. Send the first section's SVG — we build the Hero and register it.
