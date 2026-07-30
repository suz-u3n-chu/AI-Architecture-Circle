import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const content = JSON.parse(
  fs.readFileSync(path.join(projectRoot, 'content', 'circle-content.json'), 'utf8'),
);

test('service statuses and core offer stay truthful', () => {
  assert.equal(content.hero.headline, '建築AIを、ひとりで学ばない。');
  assert.equal(
    content.hero.supportingLine,
    '自分で試す。実務で使う。会社に持ち帰る。',
  );
  assert.equal(content.hero.interviewsPerMonth, 3);
  assert.equal(content.hero.primaryValue, '月3回、主宰のSenaと話す。');
  assert.match(content.flow[0].copy, /主宰のSenaと整理します。/u);
  assert.match(content.planFeatures.join('\n'), /主宰のSenaとオンライン面談/u);
  assert.match(
    content.faqs.map(faq => faq.answer).join('\n'),
    /主宰のSenaと直接話しながら/u,
  );
  assert.doesNotMatch(
    [
      content.hero.primaryValue,
      ...content.flow.map(item => item.copy),
      ...content.planFeatures,
      ...content.faqs.map(faq => faq.answer),
    ].join('\n'),
    /櫻本聖成と(?:話す|整理|直接)/u,
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
