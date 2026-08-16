# AI ARCHITECTURE CIRCLE LP responsive verification

Verified: 2026-08-16

The current copy and value order come from `docs/brand/CIRCLE_BRAND_SOURCE.md`, `content/circle-brand-contract.json`, and the automated tests. Production publication remains a separate approval boundary.

## 2026-08-16 brand pass

| Viewport | Result | Evidence |
| --- | --- | --- |
| 390 × 844 | No horizontal overflow or broken image after normal scrolling. The hero keeps the approved two-line promise, semantic Japanese phrase wrapping, and a handwritten image fully inside the safe width. Mobile menu open/close and services anchor navigation passed. Services, gathering, and pricing remain inside the content frame. | `docs/verification/screenshots/brand-20260816-mobile-hero.png`, `docs/verification/screenshots/brand-20260816-mobile-services.png`, `docs/verification/screenshots/brand-20260816-mobile-gathering.png`, `docs/verification/screenshots/brand-20260816-mobile-pricing.png` |
| 1440 × 1000 | No horizontal overflow or broken hero image. The learning and community promise, CTA pair, Sena portrait, gathering photograph, and record memo remain visible as one deliberate editorial composition. | `docs/verification/screenshots/brand-20260816-desktop-hero.png` |

The pricing introduction now leads with `セミナー・News・Tips` before the member page, interview, and included services. The same ordering is enforced by `tests/brand-contract.test.mjs`.

## Editorial polish verification

The final editorial pass was verified after reusing the current Archi-Prisma HP assets for all four preparation services.

| Viewport | Result | Evidence |
| --- | --- | --- |
| 1440 × 1000 | All six editorial headings use the approved desktop line groups with no heading overflow. The five available services sit in one row, all four preparation images load with a visible `準備中` overlay, and the preparation cards contain no links. The gathering copy and both real photographs are visible together. All three pricing cards render at 337 px high. `scrollWidth = clientWidth = 1440`. | `docs/verification/screenshots/editorial-desktop-full.png`, `docs/verification/screenshots/editorial-desktop-services.png`, `docs/verification/screenshots/editorial-desktop-gathering.png`, `docs/verification/screenshots/editorial-desktop-pricing.png` |
| 390 × 844 | Mobile-specific heading lines are displayed and the desktop line groups are hidden. No editorial heading overflows its 358 px content width. All preparation images load after normal scrolling, preparation cards remain non-interactive, and each pricing card stays within the 358 px content width. `scrollWidth = clientWidth = 390`. | `docs/verification/screenshots/editorial-mobile-full.png`, `docs/verification/screenshots/editorial-mobile-services.png`, `docs/verification/screenshots/editorial-mobile-gathering.png`, `docs/verification/screenshots/editorial-mobile-pricing.png` |

The mobile menu was opened through the visible menu button (`aria-expanded=true`) and a normal tap on the services navigation link closed it again (`aria-expanded=false`).

## Current user-facing contract

- Primary promise is `建築AIを、ひとりで学ばない。`
- The offer leads with `知識が増える。仲間が見つかる。`.
- The supporting promise is `建築AIを学ぶ。実務で試す。仲間と進む。`.
- The learning loop is presented as `学ぶ → 試す → つながる`.
- Online interviews remain included, but are presented after learning and community.
- Available services are exactly COMPASS, KAKOME, SpotPDF, MOJIOKO, and Archi-Prisma AR.
- AI Commander, 楽々省エネ計算, KOZO, and SIN are shown only as `準備中`.
- The gathering is described as optional and irregular, not as a guaranteed event.
- Annual, monthly, and student checkout links retain the existing Stripe destinations.
- The student plan states that school-email verification is required.

## Responsive visual QA

| Viewport | Result | Evidence |
| --- | --- | --- |
| 390 × 844 | Historical layout evidence only: no horizontal overflow, menu interaction, service cards, pricing cards, and visible images were valid at capture time. Hero copy in this image is superseded and must not be used as current copy evidence. | `outputs/circle-lp-sena-copy-390.png`, `outputs/circle-lp-390-menu.png`, `outputs/circle-lp-390-services.png`, `outputs/circle-lp-390-gathering.png`, `outputs/circle-lp-390-pricing.png` |
| 1440 × 1000 | Historical layout evidence only: no horizontal overflow and no broken visible image at capture time. Hero copy in this image is superseded. | `outputs/circle-lp-sena-copy-1440.png` |
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
