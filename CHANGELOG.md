# Changelog

A running manifest of files added / modified / removed per working session.
Most recent first.

---

## Session 6 — Real logo integration

**Added**
- `components/icons/Logo.tsx` — real ChainCore lockup from Frame_40.svg, as
  `<Logo />` (mark + wordmark, wordmark uses currentColor) and `<LogoMark />`
  (mark only). SVG filter/gradient ids namespaced per instance via `useId`
  so multiple logos on a page don't collide.
- `public/icons-src/logo-lockup.svg`, `public/icons-src/logo-mark.svg` — sources.

**Modified**
- `components/icons/index.tsx` — removed placeholder `LogoMark`; re-exports real
  `Logo` + `LogoMark` from `./Logo`.
- `components/layout/Navbar.tsx` — uses `<Logo />` lockup; dropped manual
  mark+text and now-unused `siteConfig` import.
- `components/sections/Hero/HeroDashboard.tsx` — sidebar uses `<Logo />` lockup.

---

## Session 5 — Floating hero dashboard (Z-axis scroll reveal)

**Added**
- `components/sections/Hero/HeroDashboard.tsx` — reconstructed customer-detail
  dashboard (left nav, Client Overview tabs, Active-badge header, field grid).
  Sits on a blurred gradient glow ("floating" illusion) and performs a
  scroll-driven 3D reveal: `rotateX 22°→0°` + `scale 0.92→1` + lift, via
  Motion `useScroll`/`useTransform`, flat under reduced-motion.

**Modified**
- `components/sections/Hero/Hero.tsx` — import + render `<HeroDashboard />`
  beneath the CTAs.

---

## Session 4 — First four sections built

**Added**
- `components/icons/index.tsx` — UI + tool icon set (currentColor), `LogoMark`.
- `components/ui/Button.tsx` — primary/outline/ghost button.
- `components/layout/Navbar.tsx` — floating pill nav.
- `components/sections/Hero/Hero.tsx` + `index.ts`
- `components/sections/Hero/CircuitBackground.tsx` — circuit tracks + pulses + nodes.
- `components/sections/Mission/Mission.tsx` + `index.ts`
- `components/sections/Mission/MissionMocks.tsx` — 4 ambient-animated card mocks.
- `components/sections/Tools/Tools.tsx` + `index.ts` — 6 hover-effect feature cards.
- `components/sections/Banner/Banner.tsx` + `index.ts`
- `components/sections/Banner/BannerCanvas.tsx` — simulated cinematic wave bg.

**Modified**
- `config/sections.ts` — registered Hero, Mission, Tools, Banner (Audience &
  Partners stubbed pending assets).
- `app/layout.tsx` — mounted `<Navbar />`.
- `app/globals.css` — keyframes: node-pulse, sweep, soft-pulse, flow, spin-slow, float.

**Removed**
- `components/icons/index.ts` — replaced by `index.tsx`.

---

## Session 3 — Geist fonts + real design tokens

**Added**
- `public/fonts/Geist-VariableFont_wght.ttf`, `Geist-Italic-VariableFont_wght.ttf`, `Geist-OFL.txt`
- `app/fonts.ts` — `next/font/local` Geist setup (`--font-geist`).
- `lib/animations/circuit.ts` — circuit-pulse helper (stroke-dash technique).
- `public/assets/sections/hero-circuit.svg` — extracted circuit geometry.
- `public/assets/sections/frosted-glass.json` — extracted glass surface specs.

**Modified**
- `tokens/tokens.json` + `tokens/tokens.css` — real palette, gradients, effects.
- `tailwind.config.ts` — token colors, gradients, Geist font family.
- `app/layout.tsx` — applied `geist.variable`.
- `app/globals.css` — body font → Geist.
- `scripts/build-tokens.mjs` — emit gradients + effect vars.

---

## Session 2 — Project renamed to "ChainCore"

**Modified**
- `config/site.ts`, `package.json`, `README.md` — name/brand updated.
- Directory renamed `core-banking-site` → `chaincore`.

---

## Session 1 — Scaffold

**Added**
- App shell (`app/layout.tsx`, `page.tsx`, `globals.css`, `robots.ts`, `sitemap.ts`,
  marketing route stubs), tokens pipeline, providers (`SmoothScrollProvider`),
  `lib/animations/*`, `lib/hooks/*`, `lib/utils/cn.ts`, `config/*`, `scripts/*`,
  `components/ui/{Container,Section}.tsx`, build config files, `README.md`.
