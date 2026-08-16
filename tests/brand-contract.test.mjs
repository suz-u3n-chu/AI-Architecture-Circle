import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readJsonOrEmpty(relativePath) {
  const file = path.join(root, relativePath);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
}

const contract = readJsonOrEmpty('content/circle-brand-contract.json');
const content = readJsonOrEmpty('content/circle-content.json');

test('public Circle offer presents learning and peers before supporting benefits', () => {
  assert.equal(contract.corePromise, '建築AIを、ひとりで学ばない。');
  assert.equal(contract.essence, '建築AIを学び続けるための、知識と仲間がいる場所。');

  const hierarchy = new Map(contract.valueHierarchy.map((item, index) => [item.id, index]));
  assert.ok(hierarchy.get('literacy') < hierarchy.get('interviews'));
  assert.ok(hierarchy.get('community') < hierarchy.get('interviews'));

  assert.equal(content.hero.primaryValue, '知識が増える。仲間が見つかる。');
  assert.doesNotMatch(`${content.hero.primaryValue}\n${content.hero.description}`, /面談|月3回/u);
  assert.deepEqual(content.flow.map(item => item.id), ['learn', 'try', 'connect']);
  assert.match(content.flow[0].copy, /セミナー.*News.*Tips/u);
  assert.match(content.flow[2].copy, /仲間/u);

  assert.match(content.pricing.description, /セミナー.*News.*Tips/u);
  assert.ok(
    content.pricing.description.indexOf('セミナー') < content.pricing.description.indexOf('面談'),
    '料金欄でも継続的な学びを面談より先に伝える',
  );

  const benefits = content.planFeatures.join('\n');
  assert.match(content.planFeatures[0], /セミナー.*News.*Tips/u);
  assert.ok(benefits.indexOf('会員コミュニティ') < benefits.indexOf('オンライン面談'));
});
