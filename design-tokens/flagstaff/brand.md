# Flagstaff Brand Tokens

## Brand color

**`#545BD1`** — indigo / purple-blue.

| Format | Value | Use when |
|---|---|---|
| Hex | `#545BD1` | Direct references, docs, comments |
| OKLCH | `oklch(0.531 0.181 275.6)` | Tailwind v4, `globals.css` |
| HSL | `237 58% 57%` (or `hsl(237, 58%, 57%)`) | Tailwind v3, shadcn JSON themes |
| RGB | `rgb(84, 91, 209)` | Fallback / tooling |

Foreground pair against the brand: **white** (`oklch(0.985 0 0)` / `#FBFBFB`).
Contrast against white ≈ 4.6:1 (AA for large text / button labels).

## Where it's applied in `../shadcn/globals.css`

The shadcn reference `globals.css` has been updated so these semantic tokens
point at the Flagstaff brand (both light and dark modes unless noted):

- `--primary` → brand
- `--primary-foreground` → white
- `--ring` → brand (focus rings pick up the brand)
- `--sidebar-primary` (dark mode) → brand (was a different indigo)

Everything else — background, card, muted, border, destructive, chart palette,
etc. — is still shadcn's default. Swap those once we have the Flagstaff
Grey / Purple / matte Purple / Pastel Purple / Loom Purple scales as hex.

## TODO once palette hexes are available

- Grey scale (50–900) → feeds `--background`, `--muted`, `--border`, `--input`,
  neutral surfaces.
- Purple scale (50–900) → tints of the brand for hover / pressed / disabled.
- matte / pastel / loom purples → secondary and accent variants, charts.
