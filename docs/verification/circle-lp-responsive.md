# AI ARCHITECTURE CIRCLE LP responsive verification

Verified: 2026-07-29

## User-facing claims checked

- Primary promise is `建築AIを、ひとりで学ばない。`
- The offer leads with three online meetings per month with 櫻本聖成.
- The learning loop is presented as `話す → 試す → 持ち帰る`.
- Available services are exactly COMPASS, KAKOME, SpotPDF, MOJIOKO, and Archi-Prisma AR.
- AI Commander, 楽々省エネ計算, KOZO, and SIN are shown only as `準備中`.
- The gathering is described as optional and irregular, not as a guaranteed event.
- Annual, monthly, and student checkout links retain the existing Stripe destinations.
- The student plan states that school-email verification is required.

## Responsive visual QA

| Viewport | Result | Evidence |
| --- | --- | --- |
| 390 × 844 | No horizontal overflow. Hero copy and both CTAs fit before the collage begins. Mobile menu opens and closes, then returns focus to the menu button. Service cards, gathering photos, and all three price cards stay within the viewport. | `outputs/circle-lp-390-hero.png`, `outputs/circle-lp-390-menu.png`, `outputs/circle-lp-390-services.png`, `outputs/circle-lp-390-gathering.png`, `outputs/circle-lp-390-pricing.png` |
| 768 × 1024 | No horizontal overflow. Website-style hamburger navigation is used. Member-preview binder remains legible and the CTA stays full-width. | `outputs/circle-lp-768-member.png` |
| 1440 × 900 | No horizontal overflow. Desktop navigation, hero CTA pair, gathering collage, and three-column pricing layout remain within the content frame. | `outputs/circle-lp-1440-hero.png`, `outputs/circle-lp-1440-gathering.png`, `outputs/circle-lp-1440-pricing.png` |

## Functional QA

- Hero primary CTA points to `#pricing`.
- Hero secondary CTA points to `#member-preview`.
- Desktop navigation uses section anchors; the document reserves 96 px for the sticky header.
- Mobile menu reports the correct `aria-expanded` state.
- Selecting a mobile navigation item closes the menu and restores focus to the menu button.
- The member-preview CTA points to the separate member-site preview URL.
- All three plan buttons retain their expected checkout URLs.
- FAQ controls open and close with native `details` behavior.
- Preparation cards contain zero links and zero buttons.
- No browser-console errors were observed at 390, 768, or 1440 px.

## Exploratory / off-happy-path checks

1. Resized the same layout across mobile, tablet, and desktop widths and confirmed that `scrollWidth` never exceeded `innerWidth`.
2. Checked that all preparation-only services remain non-interactive, including AI Commander, so an unavailable product cannot be entered accidentally.

## Boundary

This verification covers the built production bundle and its local browser behavior. It does not claim a completed live Stripe purchase or production deployment.
