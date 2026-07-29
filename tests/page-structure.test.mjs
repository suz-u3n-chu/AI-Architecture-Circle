import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function read(relativePath) {
  const file = path.join(root, relativePath);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

test('app uses the approved focused Circle section tree', () => {
  const app = read('App.tsx');
  for (const component of [
    'CircleHeader',
    'CircleHero',
    'CircleFlow',
    'MemberPreview',
    'ServiceShelf',
    'GatheringSection',
    'ProofSection',
    'CirclePricing',
    'CircleFaq',
    'CircleFooter',
  ]) {
    assert.match(app, new RegExp(`<${component}`), `${component} must render`);
  }
  assert.doesNotMatch(app, /<Roadmap|<Problems|<ToolsMarquee/);
});

test('header is a normal responsive website menu with section anchors', () => {
  const header = read('components/circle/CircleHeader.tsx');
  for (const anchor of ['#flow', '#member-preview', '#services', '#gathering', '#pricing']) {
    assert.match(header, new RegExp(anchor));
  }
  assert.match(header, /aria-expanded/);
  assert.match(header, /aria-controls/);
  assert.doesNotMatch(header, /bottom-nav|notification|install|ホーム画面/iu);
});

test('hero and flow consume the truthful content contract with accessible proof', () => {
  const hero = read('components/circle/CircleHero.tsx');
  const flow = read('components/circle/CircleFlow.tsx');

  assert.match(hero, /content\.hero/);
  assert.match(hero, /alt=/);
  assert.match(hero, /cta_click/);
  assert.match(hero, /サークルに参加する/);
  assert.match(hero, /サークルをチラ見する/);
  assert.match(flow, /content\.flow/);
  assert.match(flow, /aria-hidden="true"/);
});

test('member preview, real gathering, and service statuses stay separate', () => {
  const preview = read('components/circle/MemberPreview.tsx');
  const services = read('components/circle/ServiceShelf.tsx');
  const gathering = read('components/circle/GatheringSection.tsx');

  assert.match(preview, /MEMBERS ONLY/);
  assert.match(preview, /lockedRows/);
  assert.match(services, /services\.available/);
  assert.match(services, /services\.inPreparation/);
  const preparationBlock = services.slice(services.indexOf('services.inPreparation.map'));
  assert.doesNotMatch(preparationBlock, /<a(?:\s|>)|href=/);
  assert.match(gathering, /gathering\.images/);
  assert.match(gathering, /参加は自由/);
  assert.match(gathering, /不定期/);
});

test('OPEN STUDIO CSS provides paper tokens and mobile-first breakpoints', () => {
  const css = read('styles/circle.css');
  for (const token of [
    '--paper',
    '--ink',
    '--cobalt',
    '--coral',
    '--rule',
    '--content-width',
  ]) {
    assert.match(css, new RegExp(token));
  }
  assert.match(css, /@media\s*\(min-width:\s*900px\)/);
  assert.match(css, /\.hand-note/);
  assert.doesNotMatch(css, /\.bottom-nav|position:\s*fixed[^}]*bottom:\s*0/iu);
});
