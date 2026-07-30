# Sena Copy and Line-Breaks Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace customer-facing formal-name copy with `月3回、主宰のSenaと話す。` and guarantee intentional, readable line breaks on desktop and mobile.

**Architecture:** Keep the canonical promise in `circle-content.json`, split only its frequency prefix from its personal promise in `CircleHero.tsx`, and control the responsive line boundary with CSS. Continue using the existing static renderer as the single source for metadata, structured data, and noscript HTML, while normalizing sentence punctuation during generation.

**Tech Stack:** React 19, TypeScript, Vite, CSS, Node.js built-in test runner

## Global Constraints

- The exact approved hero promise is `月3回、主宰のSenaと話す。`.
- Desktop presents the promise on one visual row where space permits.
- Mobile presents `月3回、` and `主宰のSenaと話す。` on two deliberate lines.
- The browser must never split `主宰のSena` or leave punctuation by itself.
- Official identity surfaces retain `櫻本聖成`.
- The brand spelling is always `Sena`.
- Pricing, interview frequency, authentication, member-site behavior, and the paper-and-tape art direction do not change.

## File Map

- `content/circle-content.json`: canonical customer-facing Circle copy.
- `components/circle/CircleHero.tsx`: semantic hero value split and DOM order.
- `styles/circle.css`: responsive line-break behavior.
- `scripts/render-static-content.mjs`: metadata, JSON-LD, and noscript generation.
- `tests/content-contract.test.mjs`: canonical offer and official-name boundary.
- `tests/visual-fidelity.test.mjs`: hero markup and CSS contract.
- `tests/static-content.test.mjs`: generated metadata and noscript contract.
- `index.html`: generated artifact; changed only by the renderer.

---

### Task 1: Lock the Approved Copy Contract

**Files:**
- Modify: `tests/content-contract.test.mjs:12-22`
- Modify: `tests/static-content.test.mjs:9-20`
- Modify: `tests/visual-fidelity.test.mjs:49-60`

**Interfaces:**
- Consumes: existing `content.hero`, `content.flow`, `content.benefits`, and `content.faqs`.
- Produces: failing assertions for the approved copy, official-name boundary, semantic hero spans, and clean generated punctuation.

- [ ] **Step 1: Write failing content-contract assertions**

Replace the old primary-value assertion and add explicit customer-facing and
official-name checks:

```js
assert.equal(content.hero.primaryValue, '月3回、主宰のSenaと話す。');
assert.match(content.flow[0].copy, /主宰のSenaと整理します。/u);
assert.match(content.benefits.join('\n'), /主宰のSenaとオンライン面談/u);
assert.match(content.faqs.map(faq => faq.answer).join('\n'), /主宰のSenaと直接話しながら/u);
assert.doesNotMatch(
  [
    content.hero.primaryValue,
    ...content.flow.map(item => item.copy),
    ...content.benefits,
    ...content.faqs.map(faq => faq.answer),
  ].join('\n'),
  /櫻本聖成と(?:話す|整理|直接)/u,
);
```

- [ ] **Step 2: Write failing static-content assertions**

Replace the stale-name assertion and add duplicate-punctuation protection:

```js
assert.match(html, /月3回、主宰のSenaと話す。/u);
assert.match(html, /主宰のSenaと直接話しながら/u);
assert.doesNotMatch(html, /会社に持ち帰る。。/u);
```

- [ ] **Step 3: Write failing visual-fidelity assertions**

Add these assertions inside the hero fidelity test:

```js
assert.match(
  hero,
  /<span className="value-count">\{valuePrefix\}<\/span>/u,
);
assert.match(
  hero,
  /<strong>\{valuePromise\}<\/strong>/u,
);

const css = read('styles/circle.css');
assert.match(css, /\.hero-value \.value-count,[\s\S]*\.hero-value strong[\s\S]*white-space: nowrap;/u);
assert.match(css, /@media \(min-width: 680px\)[\s\S]*\.hero-value[\s\S]*flex-direction: row;/u);
```

- [ ] **Step 4: Run tests and verify RED**

Run:

```powershell
npm test
```

Expected: failures mention the old `櫻本聖成` promise and missing
`valuePrefix`/`valuePromise` markup.

- [ ] **Step 5: Commit the failing contracts**

```powershell
git add tests/content-contract.test.mjs tests/static-content.test.mjs tests/visual-fidelity.test.mjs
git commit -m "test: lock Sena copy and line breaks"
```

---

### Task 2: Update Canonical Copy and Responsive Hero Markup

**Files:**
- Modify: `content/circle-content.json:8-26,199-217`
- Modify: `components/circle/CircleHero.tsx:7-35`
- Modify: `styles/circle.css:360-386,1281-1290`

**Interfaces:**
- Consumes: `hero.interviewsPerMonth: number` and `hero.primaryValue: string`.
- Produces: `valuePrefix: string` equal to `月3回、` and
  `valuePromise: string` equal to `主宰のSenaと話す。`.

- [ ] **Step 1: Update the canonical customer-facing copy**

Use these exact values in `content/circle-content.json`:

```json
{
  "primaryValue": "月3回、主宰のSenaと話す。",
  "flowTalkCopy": "月3回のオンライン面談で、いま抱えている業務やAI活用の迷いを主宰のSenaと整理します。",
  "benefit": "月3回、主宰のSenaとオンライン面談",
  "faqAnswer": "月3回、少人数のオンライン面談を行います。自分の業務を持ち込み、主宰のSenaと直接話しながら次に試すことを決めます。"
}
```

Apply the four values to their existing keys; do not add the illustrative
`flowTalkCopy`, `benefit`, or `faqAnswer` keys.

- [ ] **Step 2: Split the approved sentence at its semantic boundary**

In `CircleHero.tsx`, derive the two visual parts once:

```tsx
const valuePrefix = `月${hero.interviewsPerMonth}回、`;
const valuePromise = hero.primaryValue.startsWith(valuePrefix)
  ? hero.primaryValue.slice(valuePrefix.length)
  : hero.primaryValue;
```

Render them in DOM order:

```tsx
<div className="hero-value">
  <span className="value-count">{valuePrefix}</span>
  <strong>{valuePromise}</strong>
</div>
```

- [ ] **Step 3: Make mobile two lines and desktop one row**

Update the base `.hero-value` declaration:

```css
.hero-value {
  display: flex;
  max-width: 560px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin: 22px 0 0;
  padding: 13px 0;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}

.hero-value .value-count,
.hero-value strong {
  white-space: nowrap;
  word-break: keep-all;
  overflow-wrap: normal;
}
```

Add this inside the existing `@media (min-width: 680px)` block:

```css
.hero-value {
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
```

- [ ] **Step 4: Run focused tests and verify GREEN**

Run:

```powershell
node --test tests/content-contract.test.mjs tests/visual-fidelity.test.mjs
```

Expected: all focused tests pass.

- [ ] **Step 5: Commit canonical copy and layout**

```powershell
git add content/circle-content.json components/circle/CircleHero.tsx styles/circle.css tests/content-contract.test.mjs tests/visual-fidelity.test.mjs
git commit -m "feat: present the Sena conversation promise clearly"
```

---

### Task 3: Regenerate Static SEO Content Without Double Punctuation

**Files:**
- Modify: `scripts/render-static-content.mjs:43-50`
- Modify: `index.html:6-150` through the existing build script
- Test: `tests/static-content.test.mjs`

**Interfaces:**
- Consumes: sentence strings that may already end in `。`.
- Produces: one Japanese full stop between sentences and one at the end of the
  generated description.

- [ ] **Step 1: Normalize description sentence endings**

Replace the direct `join('。')` expression with:

```js
const descriptionParts = [
  content.hero.primaryValue,
  content.hero.supportingLine,
  `会員ページと${content.services.available.length}つの建築AIサービスを含む実務サークル。`,
].map(part => part.replace(/。+$/u, ''));
const description = `${descriptionParts.join('。')}。`;
```

- [ ] **Step 2: Regenerate the static artifact**

Run:

```powershell
npm run build
```

Expected: the renderer updates `index.html`; Vite completes a production build.

- [ ] **Step 3: Run the full automated suite**

Run:

```powershell
npm test
npm run build
git diff --check
```

Expected: all tests pass, both build phases succeed, and `git diff --check`
returns no output.

- [ ] **Step 4: Commit static generation changes**

```powershell
git add scripts/render-static-content.mjs tests/static-content.test.mjs index.html
git commit -m "fix: keep generated Circle copy punctuation clean"
```

---

### Task 4: Verify Real Desktop and Mobile Rendering

**Files:**
- Modify: `docs/verification/circle-lp-responsive.md`
- Create: `outputs/circle-lp-sena-copy-390.png` outside the repository
- Create: `outputs/circle-lp-sena-copy-1440.png` outside the repository

**Interfaces:**
- Consumes: production preview at `http://127.0.0.1:4173/`.
- Produces: screenshots and measured evidence for line boundaries, overflow,
  image integrity, and runtime errors.

- [ ] **Step 1: Start the production preview**

Run:

```powershell
npm run preview -- --host 127.0.0.1 --port 4173
```

Expected: Vite serves the built site at `http://127.0.0.1:4173/`.

- [ ] **Step 2: Verify 390 px mobile**

At viewport `390 × 844`, verify:

```text
hero title line 1 = 建築AIを、
hero title line 2 = ひとりで学ばない。
hero value line 1 = 月3回、
hero value line 2 = 主宰のSenaと話す。
document.scrollWidth = document.clientWidth
broken visible images = 0
page errors = 0
```

Save the screenshot as
`outputs/circle-lp-sena-copy-390.png`.

- [ ] **Step 3: Verify 1440 px desktop**

At viewport `1440 × 1000`, verify:

```text
hero value elements share one visual row
主宰のSena is not split
document.scrollWidth = document.clientWidth
broken visible images = 0
page errors = 0
```

Save the screenshot as
`outputs/circle-lp-sena-copy-1440.png`.

- [ ] **Step 4: Record verification evidence**

Add the exact viewport measurements and the approved rendered copy to
`docs/verification/circle-lp-responsive.md`.

- [ ] **Step 5: Commit verification notes**

```powershell
git add docs/verification/circle-lp-responsive.md
git commit -m "docs: verify Sena copy on desktop and mobile"
```

---

### Task 5: Publish the Reviewed Draft Branch

**Files:**
- No content changes expected.

**Interfaces:**
- Consumes: clean working tree, passing tests/build, completed visual evidence.
- Produces: updated remote branch and Draft PR #1.

- [ ] **Step 1: Run final branch checks**

```powershell
git status --short
git log -5 --oneline
npm test
npm run build
git diff --check
```

Expected: clean worktree after the build, all tests pass, and no whitespace
errors.

- [ ] **Step 2: Push the existing feature branch**

```powershell
git push origin codex/circle-lp-redesign-20260729
```

Expected: remote branch advances without a force push.

- [ ] **Step 3: Confirm Draft PR boundary**

Verify Draft PR #1 remains open and unmerged. Do not deploy production or
attach a custom domain as part of this copy change.
