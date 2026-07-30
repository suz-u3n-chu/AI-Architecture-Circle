# AI Architecture Circle LP Editorial Responsive Polish Design

## Goal

PCでもスマートフォンでも日本語の見出しが意味の途中で折れず、HPと同じサービス画像を使い、交流会と料金の魅力が自然な密度で伝わるLPにする。

## Approved direction

- 既存HPの正式なサービス画像を再利用する。
- AI Commanderは画像のみ再利用し、LP上の状態は「準備中」のままにする。
- 見出しはブラウザ任せにせず、PC用とスマートフォン用の意味単位の行を明示する。
- 交流会は「AIを本気でやる。だから、リアルを大切にする。」を中核メッセージにする。
- 料金は見出し、全プラン共通特典、3つの料金カードを縦方向に整理し、カードの過剰な余白をなくす。

## Editorial line system

見出し専用コンポーネントを用意し、アクセシビリティ上は一続きの見出しとして読み上げる。表示上のみPC用とスマートフォン用の行セットを切り替える。

- Circle method
  - 話して、試して、
  - 会社に持ち帰る。
- Member preview (desktop)
  - 学びも、記録も、使えるものも。
  - 会員ページに、全部ある。
- Member preview (mobile)
  - 学びも、記録も。
  - 使えるものも。
  - 会員ページに、
  - 全部ある。
- Services (desktop)
  - 同じサブスクで、
  - 使える道具が増えていく。
- Services (mobile)
  - 同じサブスクで、
  - 使える道具が
  - 増えていく。
- Gathering
  - AIを本気でやる。
  - だから、リアルを
  - 大切にする。
- Proof
  - 情報を集めるだけで
  - 終わらせない。
- Pricing
  - ひとりで迷う時間を、
  - 実務が進む時間へ。

## Service imagery

HPリポジトリから次の審査済み資産をLPへ複製する。

- AI Commander: `public/assets/products/screens/ai-commander.png`
- 楽々省エネ計算: `public/assets/products/concepts/rakuraku-energy.webp`
- KOZO: `public/assets/products/concepts/kozo.webp`
- SIN: `public/assets/products/concepts/sin.webp`

準備中カードにも利用可能カードと同じ16:10の画像枠を使い、画像上に「準備中」を重ねる。準備中カードから外部遷移はさせない。

## Layout

- 会員ページは見出しを全幅に置き、その下にバインダーを十分な幅で表示する。
- サービスは見出しと件数を上段に置き、利用可能サービスと準備中サービスをそれぞれ全幅グリッドにする。
- 大画面の利用可能サービスは5列、小さいPCは3列、スマートフォンは1列または2列にする。
- 交流会は実写真2枚を維持し、コピー欄を狭くしすぎない。
- 料金は見出し、共通特典、3カードの順に積み、デスクトップで3カードを同じ行にする。

## Responsive and visual quality

- 見出しは行ごとに `white-space: nowrap` を適用し、文字単位の不自然な折返しを防ぐ。
- 本文は `text-wrap: pretty`、見出しは `text-wrap: balance` を基本にする。
- 画像には薄い黒のアウトラインを入れ、紙面上で輪郭を揃える。
- ボタンのヒット領域は40px以上を維持する。
- 360px前後のスマートフォン幅と1440px前後のPC幅を実画面で確認する。

