import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=new URL('../',import.meta.url);
const content=JSON.parse(fs.readFileSync(new URL('content/circle-content.json',root),'utf8'));
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const base='https://ai-archi-circle.archi-prisma.co.jp/';
const title='建築の実務で試せるサービス一覧 | AI ARCHITECTURE CIRCLE';
const description='工程・現場写真・図面差分・議事録・AR。AI ARCHITECTURE CIRCLEの利用可能なサービスと準備中のサービスを紹介します。';
const visualExamples={mojioko:{image:'/products/mojioko-workflow.webp',alt:'建築の打合せを録音して議事録にするMOJIOKOの利用イメージ'},'archi-prisma-ar':{image:'/products/ar-field.webp',alt:'タブレット越しに建築モデルを現地へ重ねるArchi-Prisma ARの利用イメージ'}};
const services=content.services.available.map(s=>({...s,...visualExamples[s.id]}));
const schema={'@context':'https://schema.org','@graph':[
 {'@type':'CollectionPage','@id':base+'products/#page',url:base+'products/',name:title,description,mainEntity:{'@id':base+'products/#services'}},
 {'@type':'ItemList','@id':base+'products/#services',numberOfItems:services.length,itemListElement:services.map((s,i)=>({'@type':'ListItem',position:i+1,url:base+'products/#'+s.id,name:s.name}))},
 {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:content.site.name,item:base},{'@type':'ListItem',position:2,name:'サービス一覧',item:base+'products/'}]}
]};
const cards=services.map((s,i)=>`<article class="service" id="${escape(s.id)}"><div class="image"><img src="${escape(s.image)}" alt="${escape(s.alt||s.name+'の画面')}" width="640" height="400" loading="${i===0?'eager':'lazy'}"></div><div class="copy"><p class="category"><span>${String(i+1).padStart(2,'0')}</span> ${escape(s.category)}</p><h2>${escape(s.name)}</h2><p>${escape(s.copy)}</p></div></article>`).join('\n');
const html=`<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><link rel="canonical" href="${base}products/"><meta property="og:type" content="website"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${base}products/"><meta property="og:image" content="${base}ogp-main.png"><meta name="twitter:card" content="summary_large_image"><link rel="stylesheet" href="/products/catalog.css"><script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script></head>
<body><a class="skip" href="#main">本文へ進む</a><header><a class="brand" href="/">AI ARCHITECTURE<br>CIRCLE<span>建築AIを、ひとりで学ばない。</span></a><a class="back" href="/">サークルTOP <span aria-hidden="true">↗</span></a></header>
<main id="main"><section class="intro"><p class="eyebrow">LEARN → TRY → SHARE</p><h1>学んだことを、<br>自分の仕事で試す。</h1><p class="lead">図面を比べる。写真で伝える。工程を共有する。<br class="desktop">建築の実務で試せる、${services.length}つのサービス。</p><p class="context">セミナーやTipsで学び、道具を使って試し、仲間と経験を共有する。<br class="desktop">対象サービスは、サークルでの学びを支える会員向けの道具です。</p><a class="text-link" href="#available">使えるサービスを見る <span aria-hidden="true">↓</span></a></section>
<section id="available" aria-labelledby="available-title"><div class="section-heading"><h2 id="available-title">今、使えるサービス</h2><span class="pill">${services.length} SERVICES</span></div><div class="services">${cards}</div><p class="note">各サービスの利用は会員ページから。成果物は、元資料や現場条件と照合してお使いください。設計・法適合の判断は担当者が行います。</p></section>
<section class="preparation"><details><summary><span>これから加わるサービス</span><span class="pill">準備中 ${content.services.inPreparation.length}件</span></summary><p>利用できる状態になったものから、会員ページで案内します。</p><ul>${content.services.inPreparation.map(s=>`<li><strong>${escape(s.name)}</strong><span>${escape(s.category)} / ${escape(s.status)}</span></li>`).join('')}</ul></details></section>
<section class="join"><div><p class="eyebrow">KNOWLEDGE & COMMUNITY</p><h2>知識が増える。<br>仲間が見つかる。</h2><p>使い方を学ぶところから、実務で試すところまで。<br class="desktop">サークルの内容と参加プランをご覧ください。</p></div><a class="button" href="/">サークルの内容・参加方法を見る <span aria-hidden="true">↗</span></a></section>
<aside class="reading"><h2>実務での使いどころを読む</h2><a href="https://archi-prisma.co.jp/ai/guides/construction-schedule-ai/">工程表をAIで作る <span aria-hidden="true">↗</span></a><a href="https://archi-prisma.co.jp/ai/guides/architecture-drawing-check-ai/">図面チェックにAIを使う <span aria-hidden="true">↗</span></a><a href="https://archi-prisma.co.jp/ai/guides/architecture-meeting-minutes-ai/">建築の議事録にAIを使う <span aria-hidden="true">↗</span></a></aside></main>
<footer><p>AI ARCHITECTURE CIRCLE</p><nav aria-label="フッター"><a href="https://archi-prisma.co.jp/ai/">建築AI・法人支援</a><a href="/tokushoho.html">特定商取引法に基づく表記</a><a href="/privacy.html">プライバシーポリシー</a></nav></footer></body></html>`;
const analytics=`<script async src="https://www.googletagmanager.com/gtag/js?id=G-ENCGXC9ZFV"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ENCGXC9ZFV');</script><script defer src="/products/catalog.js"></script>`;
fs.writeFileSync(new URL('public/products/index.html',root),html.replace('</head>',analytics+'</head>')+'\n');
console.log('Rendered product catalog from '+fileURLToPath(new URL('content/circle-content.json',root)));
