import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('metadata and noscript contain the current offer without stale claims', () => {
  assert.match(html, /CIRCLE_META_START/);
  assert.match(html, /CIRCLE_JSONLD_START/);
  assert.match(html, /CIRCLE_NOSCRIPT_START/);
  assert.match(html, /月3回、主宰のSenaと話す。/u);
  assert.match(html, /主宰のSenaと直接話しながら/u);
  assert.match(html, /5つの建築AIサービス/);
  assert.match(html, /建築AIを、ひとりで学ばない。/);
  assert.doesNotMatch(html, /会社に持ち帰る。。/u);
  assert.doesNotMatch(
    html,
    /28社|KOKOME|AI Commander.{0,30}利用可能|固定15分|固定20分/u,
  );
});

test('static content generation keeps the app shell and analytics intact', () => {
  assert.match(html, /<div id="root">/);
  assert.match(html, /G-ENCGXC9ZFV/);
  assert.match(html, /<script type="module" src="\/index\.tsx"><\/script>/);
});
