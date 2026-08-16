import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

test('OPEN STUDIO uses the measured reference palette and physical assets', () => {
  const css = read('styles/circle.css');
  for (const value of [
    '#faf9f2',
    '#fffef9',
    '#181818',
    '#696861',
    '#d84018',
    '#5572ad',
    '#d8c9a0',
  ]) {
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
    'hand-note-talk.webp',
    'hand-note-trial.webp',
    'hand-note-takeback.webp',
  ]) {
    assert.ok(
      fs.existsSync(path.join(root, 'public/images/circle/studio', file)),
      `${file} must exist`,
    );
  }
});

test('hero keeps the approved two-line headline and exact semantic handwriting', () => {
  const hero = read('components/circle/CircleHero.tsx');

  assert.match(hero, /<span className="hero-title-line">建築AIを、<\/span>/);
  assert.match(hero, /<span className="hero-title-line">ひとりで学ばない。<\/span>/);
  assert.match(
    hero,
    /className="hero-supporting-line"[\s\S]*\{line\}/u,
  );
  assert.match(hero, /現場から学ぶ。現場で使う。/);
  assert.match(hero, /過去の記録も、検索していつでも見返せる。/);
  assert.match(hero, /hand-note-field\.webp/);
  assert.match(hero, /hand-note-history\.webp/);
  assert.match(
    hero,
    /<span className="value-count">\{valueLead\}<\/span>/u,
  );
  assert.match(
    hero,
    /<strong>\{valuePromise\}<\/strong>/u,
  );

  const css = read('styles/circle.css');
  assert.match(
    css,
    /\.hero-value \.value-count,[\s\S]*\.hero-value strong[\s\S]*white-space: nowrap;/u,
  );
  assert.match(
    css,
    /@media \(min-width: 680px\)[\s\S]*\.hero-value[\s\S]*flex-direction: row;/u,
  );
  assert.match(
    css,
    /\.hero-supporting-line[\s\S]*display: block;[\s\S]*white-space: nowrap;/u,
  );
  assert.match(
    css,
    /@media \(max-width: 679px\)[\s\S]*\.hero-note[\s\S]*width: calc\(100% - 32px\);/u,
    'スマホでは手書き注釈を安全な余白内に収める',
  );
  assert.match(
    css,
    /\.hero-description\s*\{[^}]*text-wrap: pretty;/u,
    'スマホでも本文末尾の一文字だけを次行へ送らない',
  );
  assert.match(
    css,
    /\.hero-description\s*\{[^}]*word-break: auto-phrase;/u,
    '日本語の意味のまとまりを優先して改行する',
  );
});

test('member preview, service shelf, and gathering use exact note assets', () => {
  const preview = read('components/circle/MemberPreview.tsx');
  const services = read('components/circle/ServiceShelf.tsx');
  const gathering = read('components/circle/GatheringSection.tsx');

  assert.match(preview, /過去の記録も、検索していつでも見返せる。/);
  assert.match(preview, /hand-note-history\.webp/);
  assert.match(services, /同じサブスクで、使える道具が増えていく。/);
  assert.match(services, /hand-note-tools\.webp/);
  assert.match(gathering, /希望者で、たまにご飯とお酒。/);
  assert.match(gathering, /hand-note-gathering\.webp/);
});

test('method annotations are baked as handwriting images', () => {
  const flow = read('components/circle/CircleFlow.tsx');

  assert.match(flow, /hand-note-history\.webp/);
  assert.match(flow, /hand-note-trial\.webp/);
  assert.match(flow, /hand-note-gathering\.webp/);
  assert.match(flow, /item\.annotation/);
});

test('physical decoration is non-interactive and mobile remains a normal website', () => {
  const css = read('styles/circle.css');
  const header = read('components/circle/CircleHeader.tsx');

  assert.match(css, /\.studio-texture[\s\S]*pointer-events:\s*none/);
  assert.match(css, /@media\s*\(min-width:\s*900px\)/);
  assert.match(header, /aria-expanded/);
  assert.doesNotMatch(css, /\.bottom-nav|position:\s*fixed[^}]*bottom:\s*0/iu);
});
