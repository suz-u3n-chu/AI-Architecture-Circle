import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import '../scripts/render-products.mjs';
const root=new URL('../',import.meta.url);
const html=fs.readFileSync(new URL('public/products/index.html',root),'utf8');
const content=JSON.parse(fs.readFileSync(new URL('content/circle-content.json',root),'utf8'));
test('catalog and machine-readable list use only currently available services',()=>{
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
 const list=schema['@graph'].find(s=>s['@type']==='ItemList');
 assert.deepEqual(list.itemListElement.map(s=>s.name),content.services.available.map(s=>s.name));
 assert.equal(list.numberOfItems,content.services.available.length);
 for(const service of content.services.available){assert(html.includes('id="'+service.id+'"'));assert(fs.existsSync(new URL('public'+service.image,root)));}
 const preparation=html.match(/<section class="preparation">([\s\S]*?)<\/section>/)[1];
 for(const service of content.services.inPreparation)assert(preparation.includes(service.name));
 assert(!preparation.includes('<a '),'Preparation must not have a use/purchase CTA');
});
test('old unsupported claims and checkout bypasses are absent',()=>{
 for(const phrase of ['KOKOME','完全対応','そのまま提出可能','実務の混乱をゼロ','第6108号','Product Catalog 2025','run.app'])assert(!html.includes(phrase),phrase);
 assert(html.includes('href="https://ai-archi-circle.archi-prisma.co.jp/products/"'));
 assert(html.includes('href="/">サークルの内容・参加方法を見る'));
});
