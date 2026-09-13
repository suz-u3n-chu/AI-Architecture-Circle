import fs from 'node:fs';
import './render-products.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(root, 'index.html');
const contentPath = path.join(root, 'content', 'circle-content.json');
const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const canonical = 'https://ai-archi-circle.archi-prisma.co.jp/';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function jsonForHtml(value) {
  return JSON.stringify(value, null, 2)
    .replaceAll('<', '\\u003c')
    .replaceAll('>', '\\u003e')
    .replaceAll('&', '\\u0026');
}

function replaceGenerated(source, marker, generated) {
  const start = `<!-- ${marker}_START -->`;
  const end = `<!-- ${marker}_END -->`;
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end);
  if (startIndex < 0 || endIndex < startIndex) {
    throw new Error(`Missing ${marker} markers`);
  }
  return [
    source.slice(0, startIndex + start.length),
    '\n',
    generated.trim(),
    '\n    ',
    source.slice(endIndex),
  ].join('');
}

const descriptionParts = [
  content.hero.primaryValue,
  content.hero.supportingLine,
  `会員ページと${content.services.available.length}つの建築AIサービスを含む実務サークル。`,
].map(part => part.replace(/。+$/u, ''));
const description = `${descriptionParts.join('。')}。`;
const title = `${content.hero.headline} | ${content.site.name}`;

const meta = `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ja_JP">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${canonical}ogp-main.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${canonical}ogp-main.png">
`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${canonical}#organization`,
      name: content.site.name,
      url: canonical,
      founder: {
        '@type': 'Person',
        name: '櫻本聖成',
      },
    },
    {
      '@type': 'Service',
      '@id': `${canonical}#circle`,
      name: content.site.name,
      description,
      provider: { '@id': `${canonical}#organization` },
      offers: content.plans.map(plan => ({
        '@type': 'Offer',
        name: plan.name,
        price: String(plan.price),
        priceCurrency: 'JPY',
        url: content.checkout[plan.id],
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: content.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

const jsonLdMarkup = `
    <script type="application/ld+json">
${jsonForHtml(jsonLd)}
    </script>
`;

const serviceItems = content.services.available
  .map(service => `<li>${escapeHtml(service.name)} — ${escapeHtml(service.category)}</li>`)
  .join('\n          ');
const planItems = content.plans
  .map(plan => `<li>${escapeHtml(plan.name)}：¥${plan.price.toLocaleString('ja-JP')} / ${escapeHtml(plan.period)}</li>`)
  .join('\n          ');
const noscript = `
    <noscript>
      <main style="max-width:760px;margin:0 auto;padding:48px 20px;font-family:system-ui,sans-serif;line-height:1.8">
        <p>${escapeHtml(content.site.issue)}</p>
        <h1>${escapeHtml(content.hero.headline)}</h1>
        <p><strong>${escapeHtml(content.hero.primaryValue)}</strong></p>
        <p>${escapeHtml(content.hero.supportingLine)}</p>
        <p>${escapeHtml(content.hero.description)}</p>
        <h2>5つの建築AIサービス</h2>
        <ul>
          ${serviceItems}
        </ul>
        <h2>参加プラン</h2>
        <ul>
          ${planItems}
        </ul>
        <p>学生プランは学校発行メールの受信確認が必要です。</p>
      </main>
    </noscript>
`;

let html = fs.readFileSync(htmlPath, 'utf8');
html = replaceGenerated(html, 'CIRCLE_META', meta);
html = replaceGenerated(html, 'CIRCLE_JSONLD', jsonLdMarkup);
html = replaceGenerated(html, 'CIRCLE_NOSCRIPT', noscript);
fs.writeFileSync(htmlPath, html, 'utf8');
