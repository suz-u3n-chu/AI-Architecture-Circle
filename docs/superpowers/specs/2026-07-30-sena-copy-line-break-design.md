# Sena Copy and Line-Break Design

## Goal

Make the Circle LP's strongest differentiator feel personal and immediately
understandable while preventing awkward Japanese line breaks at every supported
viewport.

## Approved Copy

The hero value proposition is:

`月3回、主宰のSenaと話す。`

On desktop it is presented as one visual line when space permits. On mobile it
breaks only at the approved semantic boundary:

1. `月3回、`
2. `主宰のSenaと話す。`

The browser must never split `主宰のSena` or leave a punctuation mark by itself.

## Copy Scope

- Replace customer-facing sales copy that currently says
  `櫻本聖成と話す` with `主宰のSenaと話す`.
- Use the same expression in the hero, the first learning-loop description,
  pricing benefits, FAQ answer, static fallback HTML, metadata, and structured
  data.
- Keep `櫻本聖成` where an official name is required: legal pages, organization
  data, author/profile identity, portrait alternative text, and formal profile
  labels.
- Keep the brand spelling `Sena`, with an uppercase `S`.

## Line-Break Behavior

- Render the frequency and personal promise as separate inline elements rather
  than depending on automatic text wrapping.
- Desktop keeps the two elements together where the available width allows.
- Mobile turns the semantic boundary into a deliberate line break.
- Both elements use Japanese-safe wrapping rules so words and punctuation are
  not split internally.
- The existing two-line hero headline remains fixed as
  `建築AIを、` / `ひとりで学ばない。`.

## Accessibility and SEO

- The full sentence remains readable in DOM order without duplicated audible
  text.
- Static fallback content, meta descriptions, Open Graph descriptions, Twitter
  descriptions, and relevant FAQ structured data use the updated promise.
- The visual line break must not change the sentence read by assistive
  technology.

## Verification

- Contract tests assert the exact approved hero value.
- Visual-fidelity tests assert the two semantic hero-value spans.
- Static-content tests assert the updated customer-facing expression.
- A production build regenerates and validates the static fallback.
- Browser checks cover 390 px mobile and 1440 px desktop widths, including no
  horizontal overflow and no mid-phrase wrapping.

## Out of Scope

- No change to pricing, interview frequency, authentication, member-site
  behavior, legal identity, or the wider paper-and-tape art direction.
