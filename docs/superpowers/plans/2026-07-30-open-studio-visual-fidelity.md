# OPEN STUDIO Visual Fidelity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the responsive Circle LP visually match the approved first OPEN STUDIO reference through authentic raster texture assets, exact handwritten Japanese images, a quieter measured palette, and a denser working collage.

**Architecture:** Add a small project-local visual asset kit under `public/images/circle/studio/`. Components keep semantic text and use the raster assets only as decorative presentation. CSS owns responsive composition and consumes exact shared color tokens; content and checkout behavior remain unchanged.

**Tech Stack:** React 19, TypeScript, Vite, Node test runner, CSS, built-in image generation, Playwright screenshot rendering.

## Global Constraints

- Use paper `#faf9f2`, lifted paper `#fffef9`, ink `#181818`, muted ink `#696861`, vermilion `#d84018`, blue pencil `#5572ad`, tape `#d8c9a0`, and rule `rgba(24, 24, 24, 0.24)`.
- Japanese lettering must be exact and deterministic; do not generate Japanese text with an image model.
- The desktop hero headline is exactly two visual lines: `建築AIを、` and `ひとりで学ばない。`.
- Keep all existing content, analytics, checkout destinations, local reviewed photography, accessibility, and normal mobile website navigation.
- No merge or production deployment during this plan.

---

### Task 1: Lock the reference-derived visual contract

**Files:**
- Create: `tests/visual-fidelity.test.mjs`
- Modify: `tests/page-structure.test.mjs`

**Interfaces:**
- Consumes: source files and static assets through Node `fs`.
- Produces: a failing contract for palette, assets, exact copy, two-line hero markup, and mobile website behavior.

- [ ] **Step 1: Write the failing visual contract test**

```js
test('OPEN STUDIO uses the measured reference palette and physical assets', () => {
  const css = read('styles/circle.css');
  for (const value of ['#faf9f2', '#fffef9', '#181818', '#696861', '#d84018', '#5572ad', '#d8c9a0']) {
    assert.match(css, new RegExp(value.replace('#', '\\#'), 'i'));
  }
  for (const file of [
    'studio-tape-wide.webp',
    'studio-tape-short.webp',
    'studio-red-marks.webp',
    'studio-blue-marks.webp',
    'studio-paper-edge.webp',
    'hand-note-field.webp',
    'hand-note-try.webp',
    'hand-note-history.webp',
    'hand-note-tools.webp',
    'hand-note-gathering.webp',
  ]) {
    assert.ok(fs.existsSync(path.join(root, 'public/images/circle/studio', file)), file);
  }
});

test('hero keeps the approved two-line headline and exact semantic handwriting', () => {
  const hero = read('components/circle/CircleHero.tsx');
  assert.match(hero, /建築AIを、/);
  assert.match(hero, /ひとりで学ばない。/);
  assert.match(hero, /hero-title-line/);
  for (const copy of [
    '現場から学ぶ。現場で使う。',
    '一緒に、その場で試す。',
  ]) assert.match(hero, new RegExp(copy));
});
```

- [ ] **Step 2: Run the focused tests and confirm RED**

Run: `npm test -- --test-name-pattern="OPEN STUDIO|two-line"`

Expected: FAIL because the measured tokens, generated assets, and line wrappers do not exist.

- [ ] **Step 3: Update the older CSS token assertion**

Replace assertions for `--cobalt` and `--coral` with `--blue-pencil` and `--vermilion`; keep paper, ink, rule, content width, breakpoint, and no-app-shell assertions.

- [ ] **Step 4: Run the full tests and preserve the expected visual-only failures**

Run: `npm test`

Expected: existing truth/content tests pass; new visual fidelity tests fail.

- [ ] **Step 5: Commit the RED contract**

```powershell
git add tests/visual-fidelity.test.mjs tests/page-structure.test.mjs
git commit -m "test: lock reference visual fidelity"
```

### Task 2: Produce the physical texture and exact lettering assets

**Files:**
- Create: `public/images/circle/studio/studio-tape-wide.webp`
- Create: `public/images/circle/studio/studio-tape-short.webp`
- Create: `public/images/circle/studio/studio-red-marks.webp`
- Create: `public/images/circle/studio/studio-blue-marks.webp`
- Create: `public/images/circle/studio/studio-paper-edge.webp`
- Create: `public/images/circle/studio/hand-note-field.webp`
- Create: `public/images/circle/studio/hand-note-try.webp`
- Create: `public/images/circle/studio/hand-note-history.webp`
- Create: `public/images/circle/studio/hand-note-tools.webp`
- Create: `public/images/circle/studio/hand-note-gathering.webp`

**Interfaces:**
- Consumes: the approved first reference image as style reference; exact copy from the design spec.
- Produces: alpha-matted WebP assets used by LP and copied unchanged into the member website.

- [ ] **Step 1: Generate five texture assets without text**

Use one built-in image generation call per asset. Example tape prompt:

```text
Use case: background-extraction
Asset type: responsive website masking-tape overlay
Primary request: one isolated strip of real Japanese beige masking tape, fibrous paper texture, semi-translucent middle, uneven hand-torn ends, photographed flat
Scene/backdrop: perfectly uniform chroma green #00ff00
Composition: centered horizontal strip, no perspective, generous clean margin
Color palette: warm desaturated beige matching #d8c9a0
Constraints: one object only, no text, no logo, no watermark, no shadow outside the tape
```

Generate corresponding prompts for the short tape, vermilion pencil mark, blue-pencil mark, and imperfect warm paper edge.

- [ ] **Step 2: Remove chroma key and validate alpha**

Run the bundled imagegen helper for every generated source:

```powershell
python "$env:CODEX_HOME\skills\.system\imagegen\scripts\remove_chroma_key.py" `
  --input "<generated-source>" `
  --output "<project-asset>" `
  --soft-matte --despill
```

Confirm each output has alpha, no green fringe, no text, and no unexpected object.

- [ ] **Step 3: Render exact handwriting images**

Use Playwright with an HTML data page loading Google Fonts `Klee One`. Render each exact string at 2x resolution on transparent background in `#d84018` or `#5572ad`, with a small rotation and opacity variation. Screenshot only the note element with `omitBackground: true`; convert PNG to WebP.

- [ ] **Step 4: Check asset dimensions and sizes**

Run: `Get-ChildItem public/images/circle/studio | Select Name,Length`

Expected: ten assets exist; each is below 160 KB when practical; no asset contains visible green.

- [ ] **Step 5: Commit the approved visual kit**

```powershell
git add public/images/circle/studio
git commit -m "assets: add OPEN STUDIO physical texture kit"
```

### Task 3: Rebuild the hero around the reference collage

**Files:**
- Modify: `components/circle/CircleHero.tsx`
- Modify: `styles/circle.css`
- Test: `tests/visual-fidelity.test.mjs`

**Interfaces:**
- Consumes: texture kit from Task 2 and existing portrait/COMPASS assets.
- Produces: accessible two-line headline, 44/56 desktop layout, layered collage, and vertical mobile translation.

- [ ] **Step 1: Add semantic line and decorative asset markup**

Use explicit spans:

```tsx
<h1 id="hero-title">
  <span className="hero-title-line">建築AIを、</span>
  <span className="hero-title-line">ひとりで学ばない。</span>
</h1>
```

Keep exact handwriting as screen-reader text plus a decorative image:

```tsx
<span className="sr-only">現場から学ぶ。現場で使う。</span>
<img className="handwriting handwriting-field" src="/images/circle/studio/hand-note-field.webp" alt="" aria-hidden="true" />
```

- [ ] **Step 2: Replace palette and CSS tape primitives**

Define `--blue-pencil` and `--vermilion`, update buttons/index labels, and replace `.tape` solid backgrounds with the raster tape assets. Add `.paper-edge` overlays and ensure decoration has `pointer-events: none`.

- [ ] **Step 3: Implement the desktop collage and mobile stack**

Use a 44/56 grid at 900 px and wider. Keep portrait, COMPASS screen, memo, and pencil marks overlapping within the right column. Below 900 px, place the collage after the CTAs and constrain all transformed sheets inside the viewport.

- [ ] **Step 4: Run focused and full tests**

Run: `npm test -- --test-name-pattern="OPEN STUDIO|two-line"` then `npm test`.

Expected: visual contract and all existing tests pass.

- [ ] **Step 5: Commit hero fidelity**

```powershell
git add components/circle/CircleHero.tsx styles/circle.css tests/visual-fidelity.test.mjs
git commit -m "feat: match the OPEN STUDIO hero reference"
```

### Task 4: Apply the physical system to the remaining LP

**Files:**
- Modify: `components/circle/CircleFlow.tsx`
- Modify: `components/circle/MemberPreview.tsx`
- Modify: `components/circle/ServiceShelf.tsx`
- Modify: `components/circle/GatheringSection.tsx`
- Modify: `components/circle/CirclePricing.tsx`
- Modify: `styles/circle.css`
- Test: `tests/visual-fidelity.test.mjs`

**Interfaces:**
- Consumes: exact handwriting and texture assets.
- Produces: reference-density TALK/TRY/TAKE BACK, binder preview, real gathering contact prints, quieter service sheets, and restrained pricing.

- [ ] **Step 1: Replace font-only notes with semantic text plus decorative images**

Use the five exact note images in their matching sections. Retain visible or screen-reader semantic copy and make all images decorative.

- [ ] **Step 2: Increase collage density without app UI**

Add construction rules, red/blue pencil marks, tape, and paper-edge layers. Keep the existing tabs, service status truth, locked preview, and no links on preparation items.

- [ ] **Step 3: Correct section scale**

Reduce oversized serif headings, keep generous whitespace, and ensure the gathering section shows both real photographs without clipping at 1440, 768, or 390 px.

- [ ] **Step 4: Run full tests and build**

Run: `npm test; npm run build`

Expected: 0 failures and successful production build.

- [ ] **Step 5: Commit the completed LP visual system**

```powershell
git add components/circle styles/circle.css tests/visual-fidelity.test.mjs
git commit -m "feat: carry OPEN STUDIO texture through the LP"
```

### Task 5: Verify visual fidelity at responsive sizes

**Files:**
- Modify: `docs/verification/circle-lp-responsive.md`
- Create/update externally: responsive screenshots under the review output directory.

**Interfaces:**
- Consumes: built production bundle.
- Produces: current evidence for hero, member preview, gathering, services, and pricing.

- [ ] **Step 1: Build and run the production preview**

Run: `npm run build` then `npm run preview -- --host 127.0.0.1 --port 4173`.

- [ ] **Step 2: Capture 1440 × 1000, 768 × 1024, and 390 × 844**

Capture hero, member preview, gathering, services, and pricing. Confirm zero horizontal overflow through `document.documentElement.scrollWidth === window.innerWidth`.

- [ ] **Step 3: Compare against the approved first reference**

Reject and fix:

- saturated cobalt surfaces;
- CSS rectangle tape;
- orphaned `ひ` or `い。`;
- clipped gathering copy or photos;
- insufficient right-side collage density;
- generated or incorrect Japanese lettering.

- [ ] **Step 4: Run final verification**

Run: `npm test; npm run build; git diff --check; git status --short`.

Expected: tests and build pass; diff check is clean; only intentional uncommitted verification documentation remains before commit.

- [ ] **Step 5: Commit verification evidence**

```powershell
git add docs/verification/circle-lp-responsive.md
git commit -m "docs: verify reference fidelity across breakpoints"
```
