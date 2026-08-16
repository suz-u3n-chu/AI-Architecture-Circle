import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const content = JSON.parse(
  fs.readFileSync(path.join(projectRoot, 'content', 'circle-content.json'), 'utf8'),
);

test('service statuses and supporting benefits stay truthful', () => {
  assert.equal(content.hero.headline, '建築AIを、ひとりで学ばない。');
  assert.equal(
    content.hero.supportingLine,
    '建築AIを学ぶ。実務で試す。仲間と進む。',
  );
  assert.equal(content.hero.interviewsPerMonth, 3);
  assert.equal(content.hero.primaryValue, '知識が増える。仲間が見つかる。');
  assert.match(content.flow[0].copy, /セミナー、News、Tips/u);
  assert.match(content.flow[2].copy, /仲間/u);
  assert.match(content.planFeatures.join('\n'), /主宰のSenaとオンライン面談/u);
  assert.match(
    content.faqs.map(faq => faq.answer).join('\n'),
    /主宰のSenaと直接話しながら/u,
  );
  assert.doesNotMatch(
    [
      content.hero.primaryValue,
      content.hero.description,
      ...content.flow.map(item => item.copy),
    ].join('\n'),
    /面談|月3回/u,
  );
  assert.deepEqual(
    content.services.available.map(item => item.id),
    ['compass', 'kakome', 'spotpdf', 'mojioko', 'archi-prisma-ar'],
  );
  assert.deepEqual(
    content.services.inPreparation.map(item => item.id),
    ['ai-commander', 'energy-calc', 'kozo', 'sin'],
  );
  assert.equal(
    content.services.inPreparation.some(item => item.cta || item.href),
    false,
  );
});

test('checkout contract retains the three existing Stripe destinations', () => {
  assert.deepEqual(
    content.plans.map(plan => [plan.id, plan.price]),
    [
      ['yearly', 50000],
      ['monthly', 5000],
      ['student', 2000],
    ],
  );
  for (const plan of content.plans) {
    assert.equal(content.checkout[plan.id].endsWith(`?plan=${plan.id}`), true);
  }
  assert.match(content.plans[2].note, /学校.*メール.*確認/);
});

test('all people and product proof use reviewed local assets', () => {
  const assets = [
    content.hero.portrait,
    content.hero.artifact,
    ...content.gathering.images,
    ...content.services.available.map(service => service.image),
    ...content.services.inPreparation.map(service => service.image),
  ];
  for (const asset of new Set(assets)) {
    assert.equal(typeof asset, 'string', 'every reviewed asset must have a local path');
    assert.match(asset, /^\//u, `${asset} must use a public-root path`);
    const file = path.join(projectRoot, 'public', asset.replace(/^\//u, ''));
    assert.ok(fs.statSync(file).size > 0, `${asset} must exist and be non-empty`);
  }
});

test('gathering photos publish only consent-reviewed assets', () => {
  assert.deepEqual(content.gathering.images, [
    '/images/circle/gathering-table-consent.webp',
    '/images/circle/gathering-group-consent.webp',
  ]);

  for (const excludedAsset of [
    'public/images/circle/gathering-table.webp',
    'public/images/circle/gathering-group.webp',
    'public/images/circle/gathering-table-private.webp',
    'public/images/circle/gathering-group-private.webp',
  ]) {
    assert.equal(
      fs.existsSync(path.join(projectRoot, excludedAsset)),
      false,
      `${excludedAsset} must not be included in the public build`,
    );
  }
});
