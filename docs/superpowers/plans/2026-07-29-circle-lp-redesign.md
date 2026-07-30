# Circle LP Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current generic long-form Circle page with the approved OPEN STUDIO conversion LP, grounded in monthly conversations with Sena, real product proof, a member-site preview, and authentic gathering photos.

**Architecture:** Store all offer facts in one JSON contract imported by React and read by Node tests/static-generation scripts. Replace the active component tree with focused mobile-first sections and one authored CSS system. Generate metadata and noscript content from the same contract before each build.

**Tech Stack:** React 19, TypeScript 5.8, Vite 6, plain CSS, Lucide React, Node built-in test runner

## Global Constraints

- Hero promise: `建築AIを、ひとりで学ばない。`
- Supporting line: `自分で試す。実務で使う。会社に持ち帰る。`
- Primary differentiator: `月3回、櫻本聖成と話す`
- Available services are exactly COMPASS, KAKOME, SpotPDF, MOJIOKO, and Archi-Prisma AR.
- In-preparation services are exactly AI Commander, 楽々省エネ計算, KOZO, and SIN.
- AI Commander never receives an active CTA.
- Use the supplied real gathering photos and real product screens; do not generate replacement faces.
- Mobile is a responsive website: no app bottom tabs, notification bell, installation prompt, or app shell.
- Handwritten copy is decorative annotation only; navigation and body copy use readable type.
- Existing checkout destinations and analytics events remain intact.

---

### Task 1: Single offer/content contract

**Files:**

- Create: `content/circle-content.json`
- Create: `tests/content-contract.test.mjs`
- Modify: `package.json`

**Interfaces:**

- Produces JSON keys: `hero`, `flow`, `services.available`, `services.inPreparation`, `memberPreview`, `gathering`, `plans`, `faqs`, `checkout`
- All React sections consume this JSON.
- Static generation in Task 6 consumes the same JSON.

- [ ] **Step 1: Write the failing contract test**

```js
test("service statuses and core offer stay truthful", () => {
  assert.deepEqual(
    content.services.available.map((item) => item.id),
    ["compass", "kakome", "spotpdf", "mojioko", "archi-prisma-ar"],
  );
  assert.deepEqual(
    content.services.inPreparation.map((item) => item.id),
    ["ai-commander", "energy-calc", "kozo", "sin"],
  );
  assert.equal(content.hero.interviewsPerMonth, 3);
  assert.equal(
    content.services.inPreparation.some((item) => item.cta),
    false,
  );
});
```

- [ ] **Step 2: Run and confirm failure**

Run: `node --test tests/content-contract.test.mjs`
Expected: FAIL because the content file is missing.

- [ ] **Step 3: Create the complete JSON contract and test script**

Add `"test": "node --test tests/*.test.mjs"` and make the JSON include final Japanese copy, exact plan prices, verified checkout URLs, image paths, CTA labels, and gathering qualifiers.

- [ ] **Step 4: Run focused test**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit the contract**

```powershell
git add content/circle-content.json tests/content-contract.test.mjs package.json package-lock.json
git diff --staged
git commit -m "test: lock Circle offer and service statuses"
```

### Task 2: Authentic LP assets

**Files:**

- Create: `public/images/circle/sena-profile.jpg`
- Create: `public/images/circle/gathering-table.webp`
- Create: `public/images/circle/gathering-group.webp`
- Create: `public/images/circle/compass.png`
- Create: `public/images/circle/kakome.jpg`
- Create: `public/images/circle/spotpdf.png`
- Create: `public/images/circle/mojioko.png`
- Create: `public/images/circle/archi-prisma-ar.png`
- Modify: `tests/content-contract.test.mjs`

**Interfaces:**

- Asset paths match `content/circle-content.json`.
- The test asserts every referenced file exists and is nonzero.

- [ ] **Step 1: Add failing asset-existence assertions**

```js
for (const item of [
  content.hero.portrait,
  ...content.gathering.images,
  ...content.services.available.map((service) => service.image),
]) {
  const file = path.join(projectRoot, "public", item.replace(/^\//, ""));
  assert.ok(fs.statSync(file).size > 0, `${item} must exist and be non-empty`);
}
```

- [ ] **Step 2: Run and confirm missing assets**

Run: `npm test`
Expected: FAIL listing the new asset paths.

- [ ] **Step 3: Copy the approved source files without face generation**

Use the real portrait from `D:\senaa_dev\aiarchi-portal\public\sena-profile.jpg`, the two approved `.webp` gathering photos, and the five official product screens from `D:\senaa_dev\archi-prisma-site\public\assets\products\screens`.

- [ ] **Step 4: Run tests and inspect dimensions**

Run: `npm test`
Run: `Get-ChildItem public/images/circle | Select-Object Name,Length`
Expected: PASS and eight nonzero assets.

- [ ] **Step 5: Commit authentic assets**

```powershell
git add public/images/circle tests/content-contract.test.mjs
git diff --staged
git commit -m "assets: add real Circle people and product proof"
```

### Task 3: OPEN STUDIO design foundation and header

**Files:**

- Create: `styles/circle.css`
- Create: `components/circle/CircleHeader.tsx`
- Modify: `index.tsx`
- Modify: `App.tsx`
- Test: `tests/page-structure.test.mjs`

**Interfaces:**

- CSS tokens: `--paper`, `--ink`, `--cobalt`, `--coral`, `--rule`, `--content-width`
- Header anchors: `#flow`, `#member-preview`, `#services`, `#gathering`, `#pricing`
- App renders only the new Circle section tree.

- [ ] **Step 1: Write a failing page-structure source test**

```js
test("app uses the approved focused section tree", () => {
  const app = read("App.tsx");
  for (const component of [
    "CircleHeader",
    "CircleHero",
    "CircleFlow",
    "MemberPreview",
    "ServiceShelf",
    "GatheringSection",
    "ProofSection",
    "CirclePricing",
    "CircleFaq",
    "CircleFooter",
  ])
    assert.match(app, new RegExp(`<${component}`));
  assert.doesNotMatch(app, /<Roadmap|<Problems|<ToolsMarquee/);
});
```

- [ ] **Step 2: Run and confirm failure**

Run: `npm test`
Expected: FAIL because the focused component tree does not exist.

- [ ] **Step 3: Implement tokens, global paper texture, crop marks, and responsive header**

```css
:root {
  --paper: #f7f4ec;
  --ink: #171717;
  --cobalt: #1647d8;
  --coral: #ef4b2f;
  --rule: rgba(23, 23, 23, 0.18);
  --content-width: 1200px;
}
```

The mobile menu is a normal website disclosure. It must close on anchor click, return focus to its button, and never render a bottom app navigation.

- [ ] **Step 4: Run tests and build**

Run: `npm test`
Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit the foundation**

```powershell
git add styles/circle.css components/circle/CircleHeader.tsx index.tsx App.tsx tests/page-structure.test.mjs
git diff --staged
git commit -m "feat: establish Circle open studio design system"
```

### Task 4: Hero and TALK → TRY → TAKE BACK flow

**Files:**

- Create: `components/circle/CircleHero.tsx`
- Create: `components/circle/CircleFlow.tsx`
- Modify: `styles/circle.css`
- Modify: `tests/page-structure.test.mjs`

**Interfaces:**

- Hero consumes `content.hero`.
- CTA events use `window.gtag?.('event', 'cta_click', { location })`.
- Hero artifact stack uses the real portrait and COMPASS screen.

- [ ] **Step 1: Add failing copy and accessibility assertions**

```js
for (const copy of [
  "建築AIを、ひとりで学ばない。",
  "自分で試す。実務で使う。会社に持ち帰る。",
  "月3回、櫻本聖成と話す",
])
  assert.match(read("components/circle/CircleHero.tsx"), new RegExp(copy));
```

Also assert two distinct CTA labels and alt text for the portrait/product image.

- [ ] **Step 2: Run and confirm failure**

Run: `npm test`
Expected: FAIL because the files are missing.

- [ ] **Step 3: Implement the mobile-first hero and continuous flow**

Use one-column order on mobile: headline, proof artifacts, CTAs. At 900px and above use a 7/5 grid. The flow remains vertically readable and uses one decorative coral SVG path with `aria-hidden="true"`.

- [ ] **Step 4: Run tests and build**

Run: `npm test`
Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit core narrative**

```powershell
git add components/circle/CircleHero.tsx components/circle/CircleFlow.tsx styles/circle.css tests/page-structure.test.mjs
git diff --staged
git commit -m "feat: lead Circle LP with conversation and take-back flow"
```

### Task 5: Member preview, service shelf, and gathering proof

**Files:**

- Create: `components/circle/MemberPreview.tsx`
- Create: `components/circle/ServiceShelf.tsx`
- Create: `components/circle/GatheringSection.tsx`
- Modify: `styles/circle.css`
- Modify: `tests/page-structure.test.mjs`

**Interfaces:**

- Member preview CTA points to the verified member-site preview URL.
- Available services render active links only when the content contract contains one.
- Preparation services render no anchor/button.

- [ ] **Step 1: Add failing status and image-contract tests**

```js
test("preparation products have no interactive element", () => {
  const source = read("components/circle/ServiceShelf.tsx");
  assert.match(source, /services\.inPreparation/);
  assert.doesNotMatch(source, /inPreparation[\s\S]{0,400}<a/);
});
```

Assert the gathering component uses both approved photos and includes `参加は自由` and `不定期`.

- [ ] **Step 2: Run and confirm failure**

Run: `npm test`
Expected: FAIL because the sections are missing.

- [ ] **Step 3: Implement the binder preview, service statuses, and photo wall**

The member preview shows the newest public row, then a tracing-paper gate labeled `MEMBERS ONLY`. The service shelf renders five proof sheets followed by four quieter blueprint placeholders. The table gathering photo is primary; the group selfie is the smaller contact print.

- [ ] **Step 4: Run tests and build**

Run: `npm test`
Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit proof sections**

```powershell
git add components/circle/MemberPreview.tsx components/circle/ServiceShelf.tsx components/circle/GatheringSection.tsx styles/circle.css tests/page-structure.test.mjs
git diff --staged
git commit -m "feat: show member preview tools and real gathering proof"
```

### Task 6: Proof, pricing, FAQ, footer, and metadata generation

**Files:**

- Create: `components/circle/ProofSection.tsx`
- Create: `components/circle/CirclePricing.tsx`
- Create: `components/circle/CircleFaq.tsx`
- Create: `components/circle/CircleFooter.tsx`
- Create: `scripts/render-static-content.mjs`
- Modify: `index.html`
- Modify: `package.json`
- Modify: `styles/circle.css`
- Create: `tests/static-content.test.mjs`

**Interfaces:**

- Build script: `node scripts/render-static-content.mjs && vite build`
- Generated markers in `index.html`:
  - `CIRCLE_META_START/END`
  - `CIRCLE_JSONLD_START/END`
  - `CIRCLE_NOSCRIPT_START/END`

- [ ] **Step 1: Write failing static-content tests**

```js
test("metadata and noscript contain the current offer without stale claims", () => {
  const html = read("index.html");
  assert.match(html, /月3回、櫻本聖成/);
  assert.match(html, /5つの対象サービス/);
  assert.doesNotMatch(
    html,
    /28社|KOKOME|AI Commander.*利用可能|固定15分|固定20分/,
  );
});
```

- [ ] **Step 2: Run and confirm stale-content failure**

Run: `npm test`
Expected: FAIL against the current metadata/noscript.

- [ ] **Step 3: Implement pricing, FAQ, footer, and deterministic generator**

The generator reads only `content/circle-content.json`, escapes JSON-LD for HTML, and rewrites content only between exact markers. It must be idempotent: two consecutive runs produce no diff.

- [ ] **Step 4: Run generator twice, tests, and build**

Run: `node scripts/render-static-content.mjs`
Run: `node scripts/render-static-content.mjs`
Run: `git diff --check`
Run: `npm test`
Run: `npm run build`
Expected: second generator run produces no new diff; tests/build pass.

- [ ] **Step 5: Commit conversion and static content**

```powershell
git add components/circle/ProofSection.tsx components/circle/CirclePricing.tsx components/circle/CircleFaq.tsx components/circle/CircleFooter.tsx scripts/render-static-content.mjs index.html package.json styles/circle.css tests/static-content.test.mjs
git diff --staged
git commit -m "feat: complete Circle conversion path and truthful metadata"
```

### Task 7: Responsive and browser verification

**Files:**

- Modify: `styles/circle.css`
- Modify: `tests/page-structure.test.mjs`
- Create: `docs/verification/circle-lp-responsive.md`

**Interfaces:**

- Required widths: 390px, 768px, 1440px.
- Required interactions: menu, both hero CTAs, preview CTA, pricing CTAs, FAQ disclosure.

- [ ] **Step 1: Run complete automated checks**

Run: `npm test`
Run: `npm run build`
Run: `git diff --check`
Expected: PASS.

- [ ] **Step 2: Serve the production build**

Run: `npm run preview -- --host 127.0.0.1`
Expected: local preview URL is reachable.

- [ ] **Step 3: Inspect 390px, 768px, and 1440px**

Record for each width:

- no horizontal overflow
- readable body copy
- authentic photo crop
- preparation services have no CTA
- mobile header is a website menu, not app navigation
- checkout links and analytics locations are correct

- [ ] **Step 4: Save verification evidence**

Write `docs/verification/circle-lp-responsive.md` with build/test commands, viewport results, and screenshot paths. Do not claim live checkout completion.

- [ ] **Step 5: Commit verification adjustments**

```powershell
git add styles/circle.css tests/page-structure.test.mjs docs/verification/circle-lp-responsive.md
git diff --staged
git commit -m "test: verify Circle LP responsive conversion flow"
```
