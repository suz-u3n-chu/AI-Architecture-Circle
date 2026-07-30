# AI ARCHITECTURE CIRCLE LP responsive verification

Verified: 2026-07-30

## User-facing claims checked

- Primary promise is `建築AIを、ひとりで学ばない。`
- The offer leads with `月3回、主宰のSenaと話す。`.
- The supporting promise uses two intentional lines:
  `自分で試す。実務で使う。` / `会社に持ち帰る。`.
- The learning loop is presented as `話す → 試す → 持ち帰る`.
- Available services are exactly COMPASS, KAKOME, SpotPDF, MOJIOKO, and Archi-Prisma AR.
- AI Commander, 楽々省エネ計算, KOZO, and SIN are shown only as `準備中`.
- The gathering is described as optional and irregular, not as a guaranteed event.
- Annual, monthly, and student checkout links retain the existing Stripe destinations.
- The student plan states that school-email verification is required.

## Responsive visual QA

| Viewport | Result | Evidence |
| --- | --- | --- |
| 390 × 844 | No horizontal overflow (`scrollWidth = clientWidth = 390`). The headline stays on `建築AIを、` / `ひとりで学ばない。`; the supporting promise stays on its two semantic lines; the value stays on `月3回、` / `主宰のSenaと話す。`. Both value parts use `white-space: nowrap`, the mobile menu completes its open/close cycle, service and pricing cards remain in bounds, and no visible image is broken. | `outputs/circle-lp-sena-copy-390.png`, `outputs/circle-lp-390-menu.png`, `outputs/circle-lp-390-services.png`, `outputs/circle-lp-390-gathering.png`, `outputs/circle-lp-390-pricing.png` |
| 1440 × 1000 | No horizontal overflow (`scrollWidth = clientWidth = 1440`). The value uses a desktop row while `主宰のSena` remains unbroken. The supporting promise uses two deliberate semantic lines and no visible image is broken. | `outputs/circle-lp-sena-copy-1440.png` |
| 768 × 1024 | No horizontal overflow. Website-style hamburger navigation is used. Member-preview binder remains legible and the CTA stays full-width. | `outputs/circle-lp-768-member.png` |
| 1440 × 900 | No horizontal overflow. Desktop navigation, hero CTA pair, gathering collage, and three-column pricing layout remain within the content frame. | `outputs/circle-lp-1440-hero.png`, `outputs/circle-lp-1440-gathering.png`, `outputs/circle-lp-1440-pricing.png` |

## Functional QA

- Hero primary CTA points to `#pricing`.
- Hero secondary CTA points to `#member-preview`.
- The tested CTA clicks completed their smooth scroll with the target sections
  visible (`#pricing` top 375 px; `#member-preview` top 192 px).
- Desktop navigation uses section anchors; the document reserves 96 px for the sticky header.
- Mobile menu reports the correct `aria-expanded` state.
- Selecting a mobile navigation item closes the menu and restores focus to the menu button.
- The member-preview CTA points to the separate member-site preview URL.
- All three plan buttons retain their expected checkout URLs.
- FAQ controls open and close with native `details` behavior.
- Preparation cards contain zero links and zero buttons.
- No browser-console errors, page errors, failed HTTP responses, or broken
  images were observed in the refreshed 390 or 1440 px passes.

## Exploratory / off-happy-path checks

1. Resized the same layout across mobile, tablet, and desktop widths and confirmed that `scrollWidth` never exceeded `innerWidth`.
2. Checked that all preparation-only services remain non-interactive, including AI Commander, so an unavailable product cannot be entered accidentally.
3. Checked the narrower 360 × 800 viewport: `scrollWidth = 360`, both hero-value
   parts remain unbroken, and the two supporting lines remain intact.
4. Opened and closed the 390 px mobile menu and confirmed
   `aria-expanded=true/false` and `data-open=true/false` complete the full cycle.

## Boundary

This verification covers the built production bundle and its local browser behavior. It does not claim a completed live Stripe purchase or production deployment.
