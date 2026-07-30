# OPEN STUDIO visual fidelity design

## Goal

Bring the LP and member website materially closer to the approved first reference image. The reference is the visual target, not loose inspiration. The result must retain normal responsive website behavior while reproducing the reference's warm drafting-paper palette, pasted-document density, real tape texture, and handwritten red/blue annotations.

## Approved approach

Use a hybrid asset system:

- AI-generated raster assets for physical textures: masking tape, torn paper edges, pencil strokes, circles, arrows, checks, and stamps.
- Deterministic Japanese lettering rendered into optimized images from the approved handwriting typeface. Generative models must not be trusted to spell Japanese copy.
- Semantic HTML remains the source of truth. Decorative lettering images are `aria-hidden`; equivalent readable text remains in the document.
- Shared filenames, colors, and spacing rules are used by the LP and member website so both surfaces belong to one studio.

A full-page generated image is rejected because it would damage responsiveness, accessibility, SEO, and maintainability. CSS-only tape and handwriting are rejected because they look too clean and artificial.

## Reference-derived palette

Replace the current bright cobalt/coral scheme with the quieter colors measured from the first approved reference:

- drafting paper: `#faf9f2`
- lifted paper: `#fffef9`
- paper shadow: `rgba(43, 39, 31, 0.14)`
- ink: `#181818`
- secondary ink: `#696861`
- vermilion pencil: `#d84018`
- blue pencil: `#5572ad`
- masking tape base: `#d8c9a0`
- construction rule: `rgba(24, 24, 24, 0.24)`

Blue is an annotation color only. Primary CTAs use vermilion. Large areas must not use saturated blue.

## Generated asset set

Create project-local optimized assets:

- `studio-tape-wide.webp`: warm semi-translucent masking tape with visible fibers and uneven torn ends.
- `studio-tape-short.webp`: a shorter rotated tape variant.
- `studio-red-marks.webp`: separate red-pencil underline, arrow, check, and circle marks on transparency.
- `studio-blue-marks.webp`: separate blue-pencil underline, note arrow, and stamp-like circle on transparency.
- `studio-paper-edge.webp`: subtle imperfect paper edge and fold texture.

Generate each on a flat removable chroma-key background, remove the background locally, inspect the alpha matte, and copy the final assets into each consuming repository. No generated text, logos, watermarks, hands, or extra objects may appear.

Each asset should stay below 160 KB when practical. Hero-critical tape may load eagerly; non-critical paper and marks load with their section.

## Handwritten lettering

The approved handwriting copy is:

- `現場から学ぶ。現場で使う。`
- `一緒に、その場で試す。`
- `過去の記録も、検索していつでも見返せる。`
- `同じサブスクで、使える道具が増えていく。`
- `希望者で、たまにご飯とお酒。`

Render these exact strings at 2x resolution using `Klee One` with slight baseline variation, imperfect opacity, and the reference vermilion or blue. Export transparent WebP or PNG images. The text must remain legible and exact; no AI-generated Japanese glyphs are allowed.

## LP composition

### Desktop, 1200 px and wider

- The first view follows the reference's two-column balance: approximately 44% copy and 56% working collage.
- The Japanese headline is at most two intentional lines: `建築AIを、` / `ひとりで学ばない。`. No orphaned `ひ` or `い。`.
- The right collage overlaps the portrait, COMPASS screen, meeting memo, and one additional working document. Tape and paper edges are raster textures rather than CSS rectangles.
- Registration and preview CTAs remain visible without competing with the collage.
- TALK / TRY / TAKE BACK reads like three annotated drawing notes, with thin construction rules and small hand marks.

### Tablet and mobile

- At 768 px and below, content becomes a normal vertical website.
- The headline keeps the same two semantic lines and scales without orphaned characters.
- The collage follows the CTA and uses two to three overlapping sheets without horizontal overflow.
- Handwriting remains readable at 16 px equivalent size; decorative marks never cover links or body text.

### Gathering and member preview

- The two real gathering photos retain white contact-print borders, slight independent rotation, tape, and handwritten caption.
- Member preview resembles the ring-bound paper stack in the reference: tabs, latest visible row, tracing-paper lock layer, and blue member stamp.

## Member website composition

- Reuse the same paper, ink, vermilion, blue-pencil, tape, and paper-edge assets.
- Keep the member website calmer than the LP, but not sterile: one tape/paper treatment and one handwritten annotation per major section.
- Reduce oversized editorial headlines so functional content is visible earlier.
- Mobile remains a website with a normal menu and vertical flow, not an app shell.
- Personal identity remains an initial derived from the verified email until a separate profile feature is designed. Do not imply that avatar upload exists.

## Accessibility and performance

- Generated decorative assets use empty alternative text or `aria-hidden`.
- Every handwritten message also exists as readable DOM text.
- Text contrast must meet WCAG AA.
- At 390 px, 768 px, and 1440 px there is no horizontal overflow, clipped heading, or covered control.
- Respect `prefers-reduced-motion`; these assets do not require animation.

## Verification

Add contract tests before implementation that fail until:

- the reference-derived palette replaces the bright existing tokens;
- raster tape and mark assets exist and are used;
- the five exact handwritten messages remain in semantic content;
- the desktop hero uses a two-line headline contract;
- the LP and member website share the same visual asset naming and palette;
- mobile breakpoints keep the normal website navigation.

After tests pass:

- run the complete existing test suites and production builds;
- capture fresh screenshots at 1440 × 1000, 768 × 1024, and 390 × 844;
- compare the hero, member preview, gathering, pricing, login, and member home against the first approved reference;
- reject any result with orphaned Japanese characters, synthetic-looking tape, overly saturated blue, or insufficient collage density.

## Delivery boundary

Update the existing Draft PRs. Do not merge or deploy until the visual screenshots are reviewed and the production configuration gate is separately satisfied.
