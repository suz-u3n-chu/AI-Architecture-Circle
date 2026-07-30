# AI Architecture Circle LP Editorial Responsive Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** HPの正式画像と意味単位の改行を使い、サービス・交流会・料金をPCとスマートフォンで読みやすく再構成する。

**Architecture:** 再利用可能な `EditorialHeading` がPC用とスマートフォン用の行セットを描画し、各セクションが必要な行を渡す。コンテンツJSONに準備中サービスの画像と交流会コピーを持たせ、既存の各セクションはその契約を描画する。レイアウトは `styles/circle.css` のモバイルファーストCSSで再構成する。

**Tech Stack:** React 19, TypeScript, Vite, CSS, Node test runner

## Global Constraints

- AI Commanderを含む準備中4サービスはすべて「準備中」のままにする。
- 準備中カードにCTAやリンクを追加しない。
- 既存HPの審査済み画像だけを使う。
- アプリ風の固定ボトムナビゲーションは追加しない。
- PC幅とスマートフォン幅の両方で実画面を確認する。

---

### Task 1: Prepare the approved content and asset contract

**Files:**
- Modify: `tests/content-contract.test.mjs`
- Modify: `content/circle-content.json`
- Create: `public/images/circle/services/ai-commander.png`
- Create: `public/images/circle/services/energy-calc.webp`
- Create: `public/images/circle/services/kozo.webp`
- Create: `public/images/circle/services/sin.webp`

**Interfaces:**
- Consumes: the four approved HP image files.
- Produces: `services.inPreparation[].image` pointing to non-empty local assets.

- [ ] **Step 1: Write the failing asset contract test**

Extend the reviewed asset list with `content.services.inPreparation.map(service => service.image)` and assert every value is a non-empty string before resolving the file.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/content-contract.test.mjs`

Expected: FAIL because preparation services have no `image` field.

- [ ] **Step 3: Copy the reviewed images and add content paths**

Copy the four approved HP assets into `public/images/circle/services/` and add their public paths to the matching preparation service objects. Replace the gathering title and description with the approved real-world message.

- [ ] **Step 4: Run the contract test**

Run: `node --test tests/content-contract.test.mjs`

Expected: PASS.

### Task 2: Add semantic editorial headings

**Files:**
- Create: `components/circle/EditorialHeading.tsx`
- Modify: `components/circle/CircleFlow.tsx`
- Modify: `components/circle/MemberPreview.tsx`
- Modify: `components/circle/ServiceShelf.tsx`
- Modify: `components/circle/GatheringSection.tsx`
- Modify: `components/circle/ProofSection.tsx`
- Modify: `components/circle/CirclePricing.tsx`

**Interfaces:**
- Consumes: `id`, `label`, `desktopLines`, and optional `mobileLines`.
- Produces: one accessible `h2` with visual desktop and mobile line groups.

- [ ] **Step 1: Implement the heading component**

Render both line groups as `aria-hidden` spans and apply the complete sentence as the heading's `aria-label`.

- [ ] **Step 2: Replace vulnerable headings**

Pass the exact approved line sets from the design specification into each section. Keep prose content in JSON where already modeled.

- [ ] **Step 3: Run the test suite**

Run: `npm test`

Expected: all tests pass.

### Task 3: Rebuild the service and pricing composition

**Files:**
- Modify: `components/circle/ServiceShelf.tsx`
- Modify: `styles/circle.css`

**Interfaces:**
- Consumes: preparation service image paths and status labels.
- Produces: image-backed preparation cards and content-driven pricing cards without grid-row stretching.

- [ ] **Step 1: Render preparation images**

Use the same `service-image` frame as available services, add a `preparation-image` modifier, and overlay the service status. Keep cards non-interactive.

- [ ] **Step 2: Recompose section grids**

Make member and service headings full width, remove the shifted service-card rule, use five service columns on wide screens, and make the pricing section a single vertical composition with a compact benefits grid above equal-height price cards.

- [ ] **Step 3: Apply text and surface polish**

Add responsive editorial-line switching, `text-wrap` rules, image outlines, tabular price numerals, and explicit button press transitions.

- [ ] **Step 4: Run tests and build**

Run: `npm test`

Expected: all tests pass.

Run: `npm run build`

Expected: exit code 0.

### Task 4: Verify the rendered LP

**Files:**
- Modify: `docs/verification/circle-lp-responsive.md`

**Interfaces:**
- Consumes: the built Vite application.
- Produces: visual evidence for desktop and mobile layouts.

- [ ] **Step 1: Start the local preview**

Run: `npm run dev -- --host 127.0.0.1`

- [ ] **Step 2: Capture desktop and mobile pages**

Capture the full page at 1440x1000 and 390x844. Verify the named headings, four preparation images, real gathering photos, and three pricing cards.

- [ ] **Step 3: Record evidence**

Update `docs/verification/circle-lp-responsive.md` with viewport results and screenshot paths.

- [ ] **Step 4: Run final verification**

Run: `npm test`

Run: `npm run build`

Run: `git diff --check`

Expected: all commands succeed with no test failures or whitespace errors.

