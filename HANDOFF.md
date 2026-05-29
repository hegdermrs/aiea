# AI Execution Accelerator — Handoff

Last updated: **2026-05-29**

Single-page marketing site for **AI Execution Accelerator** (Antonio Centeno). Designjoy-inspired dark landing page with animated feature cards, `metal-fx` hover borders, and a cohort countdown.

---

## Quick start

```bash
npm install
npm run dev    # http://localhost:3000 — uses webpack (required for metal-fx in dev)
npm run build
npm start
```

**Important:** Dev must use `next dev --webpack` (see `package.json`). Turbopack breaks `metal-fx` locally; production build is fine.

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 App Router |
| Styling | Tailwind CSS v4, shadcn/ui |
| Motion | Framer Motion |
| Hero orb | `@paper-design/shaders-react` |
| Metal borders / CTAs | `metal-fx` (chromatic preset) |
| Icons | Lucide |

---

## Page structure (`app/page.tsx`)

1. **Nav** — sticky header, section links, compact countdown (lg+), Apply CTA, mobile sheet
2. **Hero** — headline, shader orb, embedded proof marquee (tools)
3. **Problem** — narrative + 3 pillar feature cards
4. **Differentiators** — 4 cards (2×2)
5. **How it works** — 4-step timeline
6. **Outcomes** — 4 cards
7. **Membership benefits** — 6 cards (3×2)
8. **Founder** — Antonio bio
9. **Testimonials** — 3 quote cards + stat strip
10. **Pricing** — single tier card
11. **FAQ** — accordion
12. **Final CTA** — full countdown + Apply
13. **Footer**

---

## Key files

| Path | Purpose |
|------|---------|
| `lib/constants.ts` | All copy, nav links, cohort date, testimonials, previews map keys |
| `lib/metal-fx-loader.ts` | Shared dynamic import + resume for WebGL singleton |
| `components/metal-cta.tsx` | Apply buttons — chromatic metal, always on |
| `components/metal-border-card.tsx` | Card wrapper — chromatic ring on hover only |
| `components/feature-card.tsx` | Preview top (fixed height) + text bottom, equal-height grids |
| `components/card-previews.tsx` | Animated mini-UIs per card type |
| `components/countdown.tsx` | `default` (Final CTA) and `compact` (nav) variants |
| `components/sections/*` | One component per page section |
| `components/section-backdrop.tsx` | Faded radial + grid texture per section |
| `app/globals.css` | `.metal-cta-root`, `.metal-card-root`, marquee animation |

---

## Content & config to update before launch

### 1. Application URL

```ts
// lib/constants.ts
export const APPLY_URL = "#";  // → real Typeform / Calendly / checkout URL
```

Used on all Apply buttons and nav CTA.

### 2. Cohort countdown

Countdown target is derived in `lib/constants.ts`:

```ts
const COHORT_COUNTDOWN_ANCHOR = new Date("2026-05-29T09:00:00-05:00");
const WEEKS_UNTIL_COHORT = 11;
export const COHORT_START_DATE = cohortStartFromAnchor(anchor, weeks);
```

**Current target:** **August 14, 2026, 9:00 AM CT** (11 weeks from anchor).

To reset: set `COHORT_COUNTDOWN_ANCHOR` to today and adjust `WEEKS_UNTIL_COHORT`. Nav shows a one-line `Starts in 76d 05h 07m` (xl+); Final CTA uses full digit boxes.

### 3. Testimonials

`TESTIMONIALS` in `lib/constants.ts` are **placeholders**. Replace with verified member quotes before publishing.

### 4. Optional content gaps (from original brief)

Not yet on the page: deep audit section, optional Antonio 1:1 callout, long cost-comparison block, extra FAQ items. Source copy may live in `content.txt` if present in repo.

---

## Design / implementation notes

### Equal-height cards

Grids use default stretch + `h-full` on `SectionReveal` → `FeatureCard` / `MetalBorderCard`. Preview area is fixed at 180px (188px sm+); text block grows so cards in a row match height.

**Critical:** metal-fx marks its wrapper `display: inline-flex` via a runtime-injected stylesheet, which collapses each card to its content height (uneven rows) and prevents the ring from tracing the full card. `app/globals.css` overrides this with `.metal-card-root { display: flex !important; width/height: 100% !important }` so cards fill the grid cell. Don't remove this rule.

### metal-fx usage

- **Buttons (`MetalCta`):** direct child `<a>` / `<button>`, `preset="chromatic"`, `theme="dark"`, always animating
- **Cards (`MetalBorderCard`):** `disableGlow`, library chrome hidden via `.metal-card-root`. Ring is a static metallic frame at rest (`strength 0.32`, `paused`) and animates on hover (`strength 0.95`, unpaused). Pausing non-hovered cards avoids ~25 instances compositing every frame.
- **Loader:** always import via `lib/metal-fx-loader.ts` to avoid duplicate WebGL instances

### Countdown hydration

`Countdown` uses a `mounted` flag so server and client don’t mismatch on tick values. Placeholder zeros render until mount.

### Section backgrounds

`SectionBackdrop` variants: default, `warm`, `cool` — subtle radial fades + grid, not full-bleed color blocks.

---

## Known limitations

- Dev server must use webpack flag for metal-fx
- `APPLY_URL` is `#` — links don’t go anywhere yet
- Testimonials are fictional placeholders
- Benefits section overlaps pricing “includes” by design (marketing repetition)

---

## Deployment checklist

- [ ] Set `APPLY_URL`
- [ ] Confirm / update `COHORT_COUNTDOWN_ANCHOR` and `WEEKS_UNTIL_COHORT`
- [ ] Replace `TESTIMONIALS` with real quotes
- [ ] Run `npm run build` and smoke-test Apply links, countdown, mobile nav
- [ ] Verify metal hover on cards and CTAs in production (not just dev)

---

## Contact / product

- **Product:** AI Execution Accelerator
- **Founder:** Antonio Centeno
- **Positioning:** Cohort-based AI implementation (audit → weekly mastermind → dedicated engineer → shipped tools), max 12 members, 12-week program
