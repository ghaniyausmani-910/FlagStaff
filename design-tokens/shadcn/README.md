# shadcn/ui Design Token Reference

Fetched from https://github.com/shadcn-ui/ui `main` on 2026-10-13.
Use this as a lookup when picking colors, radii, typography, or component styles for Flagstaff.

> **Flagstaff overrides applied in `globals.css`**: `--primary`, `--ring`, and
> `--sidebar-primary` (dark) now point at the Flagstaff brand `#545BD1`.
> See [../flagstaff/brand.md](../flagstaff/brand.md) for details.

## File layout

```
shadcn/
├── globals.css              → Tailwind v4 base. OKLCH color tokens, radius scale,
│                              typography slots, breakpoints, @theme block, dark mode.
├── tailwind.css             → shadcn CLI base (what gets installed into a new project).
├── themes.css               → Aggregated themes.css from the registry.
├── legacy-themes.css        → Older named themes (red/orange/green/blue/violet/etc).
├── neutrals/                → 5 neutral palettes (Tailwind v3 HSL format JSON).
│   ├── gray.json
│   ├── neutral.json
│   ├── slate.json
│   ├── stone.json
│   └── zinc.json
├── new-york/                → "new-york" style color themes (HSL JSON).
│   ├── theme-daylight.json
│   ├── theme-emerald.json
│   └── theme-midnight.json
└── styles/                  → 8 named style variants. These are COMPONENT style
    ├── style-luma.css          overrides (@apply classes on `.cn-*` selectors),
    ├── style-lyra.css          NOT raw color tokens. Use these when you want a
    ├── style-maia.css          specific component look (e.g. "nova button styling").
    ├── style-mira.css
    ├── style-nova.css
    ├── style-rhea.css
    ├── style-sera.css
    └── style-vega.css
```

## Gotchas

**Two color formats exist in the repo:**
- `globals.css` uses `oklch(...)` — Tailwind v4 convention.
- The `neutrals/*.json` and `new-york/*.json` files use HSL-space tuples like `"222.2 47.4% 11.2%"` — Tailwind v3 convention (consumed via `hsl(var(--primary))`).

If you're building against Tailwind v4, use the `oklch` values from `globals.css` and treat the neutrals as a lookup for "which hue family did shadcn pick."

**Styles vs themes:**
- A **theme** (gray, slate, midnight, etc.) = a set of color variable values.
- A **style** (nova, lyra, luma, etc.) = component-level visual choices (radii, spacing, iconography) layered via `@apply` on `.style-{name}` selectors.
- Pick one of each, or use the default (just `globals.css`).

## Quick reference: what semantic tokens exist?

Semantic color pairs (every theme defines these as `--{name}` + `--{name}-foreground`):
- background, card, popover, primary, secondary, muted, accent, destructive
- border, input, ring (standalone, no -foreground)
- chart-1 … chart-5
- sidebar, sidebar-primary, sidebar-accent, sidebar-border, sidebar-ring
- surface, code, code-highlight, code-number, selection

Radius scale (from `--radius: 0.625rem`):
- sm (0.6×), md (0.8×), lg (1×), xl (1.4×), 2xl (1.8×), 3xl (2.2×), 4xl (2.6×)

Typography slots: `--font-sans`, `--font-heading`, `--font-mono`

Breakpoints beyond Tailwind defaults: 3xl `1600px`, 4xl `2000px`
