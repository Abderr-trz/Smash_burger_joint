# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Smash Brothers Joint
**Updated:** 2026-10-14
**Category:** Restaurant — Smash Burger
**Design Dials:** Variance 8/10 (Bold / Asymmetric) | Motion 7/10 (Standard) | Density 4/10 (Standard)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Ink (Background) | `#171512` | `--ink` | Primary background, body |
| Ink Soft | `#24211d` | `--ink-soft` | Card backgrounds |
| Ink Lift | `#302c27` | `--ink-lift` | Elevated surfaces, badge backgrounds |
| Cream (Foreground) | `#f5eddf` | `--cream` | Primary text, headings |
| Cream Muted | `#d8cebe` | `--cream-muted` | Secondary text, descriptions |
| Orange (Primary CTA) | `#f5a800` | `--orange` | Buttons, accents, CTA, glow, ticker |
| Orange Hot | `#ff6b1a` | `--orange-hot` | Reserved for intense accents |
| Green (Secondary) | `#b6db46` | `--green` | Badges (Best-seller, Signature), stamps, FAB, focus ring |
| Line (Border) | `rgba(245, 237, 223, 0.16)` | `--line` | Card borders, dividers, section lines |

**Color Notes:** Dark warm palette — charcoal ink with creamy warm text. Orange is the dominant action color (WhatsApp CTA). Green is used for trust signals (badges, stamps, focus states). The overall mood is premium street food — bold but warm.

### Typography

- **Heading Font:** Fredoka (weights 500, 600, 700)
- **Body Font:** Nunito (weights 400, 500, 600, 700, 800)
- **Mood:** Street food, premium casual, energetic, bold, youthful
- **Google Fonts:** [Fredoka + Nunito](https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap');
```

**CSS Variables:**
```css
--heading: 'Fredoka', system-ui, sans-serif;
--body: 'Nunito', system-ui, sans-serif;
```

### Type Scale (Implemented)

| Element | Size | Weight | Font | Notes |
|---------|------|--------|------|-------|
| h1 | `clamp(4rem, 7vw, 7.4rem)` | 700 | Fredoka | Hero only, line-height 0.86 |
| h2 (sections) | `clamp(3.1rem, 6vw, 6.1rem)` | 700 | Fredoka | Section headings, line-height 0.9 |
| h3 (cards) | `1.35rem` | 700 | Fredoka | Menu card titles |
| Body | `1rem` | 400–500 | Nunito | Default body text |
| Eyebrow | `0.77rem` | 900 | Nunito | Uppercase, letter-spacing 0.15em |
| Price (large) | `1.6rem` | 700 | Fredoka | In card price display |
| Small/Note | `0.72rem` | 400 | Nunito | Footer, disclaimers |

### Spacing

*Density: 4/10 — Standard*

Spacing is handled with direct values (not tokenized CSS variables). Key recurring values:

| Context | Value | Usage |
|---------|-------|-------|
| Page gutter | `24px` (mobile) / `48px` (desktop) | Content width: `min(1180px, calc(100% - 48px))` |
| Section padding | `150px 0` / `110px 0` | Vertical rhythm between sections |
| Card padding | `22px` | `.menu-card-body` |
| Button padding | `0 20px` (min-height 50px) | Standard CTA |
| Gap (grid) | `18px` | Menu card grid |
| Gap (nav) | `30px` | Desktop nav links |

### Border Radius Scale

| Element | Radius |
|---------|--------|
| Header pill | `22px` |
| Buttons | `15px` |
| Cards | `26px` |
| Location section | `34px` |
| Badges | `9px` |
| Pill tags | `999px` |
| Concept image | `48% 48% 24px 24px` (organic blob) |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| Header | `0 18px 50px rgba(0, 0, 0, 0.28)` | Floating navbar |
| Card hover | `0 22px 60px rgba(0, 0, 0, 0.25)` | Menu card hover state |
| CTA glow | `0 8px 24px rgba(245, 168, 0, 0.2)` | Orange button ambient |
| CTA hover glow | `0 12px 34px rgba(245, 168, 0, 0.32)` | Orange button hover |
| Hero burger | `0 42px 35px rgba(0, 0, 0, 0.52)` | Drop shadow on hero image |

---

## Component Specs

### Buttons

```css
/* Primary CTA — Order / WhatsApp */
.order-button {
  min-height: 50px;
  padding: 0 20px;
  background: var(--orange);         /* #f5a800 */
  color: #15110a;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 900;
  box-shadow: 0 8px 24px rgba(245, 168, 0, 0.2);
}

.order-button:hover {
  background: #ffb719;
  transform: translateY(-2px);
  box-shadow: 0 12px 34px rgba(245, 168, 0, 0.32);
}

/* Secondary / Outline */
.outline-button {
  min-height: 50px;
  padding: 0 20px;
  background: transparent;
  color: var(--ink);
  border: 1px solid rgba(23, 21, 18, 0.3);
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 900;
}
```

### Cards

```css
.menu-card {
  background: var(--ink-soft);       /* #24211d */
  border: 1px solid var(--line);
  border-radius: 26px;
  overflow: hidden;
}

.menu-card:hover {
  transform: translateY(-7px);
  border-color: rgba(245, 168, 0, 0.5);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.25);
}
```

### Header (Floating Pill)

```css
.site-header {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: min(1180px, calc(100% - 32px));
  min-height: 72px;
  background: rgba(23, 21, 18, 0.88);
  border: 1px solid var(--line);
  border-radius: 22px;
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
}
```

---

## Style Guidelines

**Style:** Premium Street Food / Dark Warm

**Keywords:** Dark, warm, bold, energetic, hand-crafted, premium casual, youthful

**Best For:** Fast-casual restaurant, food truck, burger joint, street food brand

**Key Effects:** Floating pill navbar with blur, 3D parallax hero on pointer move, card hover lifts, staggered card entrance animations, ticker marquee, organic blob shapes, rotating stamps

---

## Motion

### Implemented Animations

| Name | Duration | Easing | Trigger |
|------|----------|--------|---------|
| `burger-float` | 5s infinite | ease-in-out | Hero section load |
| `ticker` | 25s infinite | linear | Always running |
| `card-in` | 420ms | default | Category switch, staggered by `--item-index * 45ms` |
| `map-pulse` | 2s infinite | ease-in-out | Location section load |
| Hero 3D tilt | 120ms | ease-out | Pointer move (cancelled on `prefers-reduced-motion`) |
| Card hover | 220ms | ease | Mouse enter |
| Button hover | 180ms | ease | Mouse enter |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Breakpoints

| Breakpoint | Key Changes |
|------------|-------------|
| `> 1050px` | Full desktop: 3-column menu grid, side-by-side hero |
| `820px – 1050px` | Hamburger nav appears, hero stacks (burger on top), 2-column menu grid |
| `≤ 600px` | Single-column everywhere, full-width CTAs, floating WhatsApp FAB appears, compact type scale |

---

## Anti-Patterns (Do NOT Use)

- ❌ **Emojis as icons** — Use SVG icons (Lucide icon set exclusively)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150–300ms)
- ❌ **Invisible focus states** — Focus states must be visible (`:focus-visible` with `--green` outline)
- ❌ **Light background** — This is a dark-theme project; do not introduce light mode without explicit instruction

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use Lucide SVGs instead)
- [ ] All icons from Lucide icon set
- [ ] `cursor: pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Dark theme: cream text on ink background
- [ ] Focus states visible for keyboard navigation (green outline)
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 600px, 820px, 1050px, 1440px
- [ ] No content hidden behind fixed navbar (scroll-padding-top: 100px)
- [ ] No horizontal scroll on mobile
- [ ] All image paths use `.webp` format
- [ ] All food images have descriptive French `alt` text
