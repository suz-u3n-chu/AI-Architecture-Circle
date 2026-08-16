import { ArrowDownRight, ArrowRight } from 'lucide-react';
import content from '../../content/circle-content.json';

function track(location: string) {
  window.gtag?.('event', 'cta_click', { location });
}

export default function CircleHero() {
  const hero = content.hero;
  const [valueLead, valuePromise] = hero.primaryValue
    .split('。')
    .filter(Boolean)
    .map(part => `${part}。`);
  const supportingLines = hero.supportingLine.split(/(?=実務で|仲間と)/u);

  return (
    <section className="circle-hero section-frame" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="issue-label">{content.site.issue}</p>
        <div className="handwritten-image hero-note">
          <span className="sr-only">現場から学ぶ。現場で使う。</span>
          <img
            className="studio-texture"
            src="/images/circle/studio/hand-note-field.webp"
            alt=""
            aria-hidden="true"
          />
        </div>
        <h1 id="hero-title">
          <span className="hero-title-line">建築AIを、</span>
          <span className="hero-title-line">ひとりで学ばない。</span>
        </h1>
        <p className="hero-supporting">
          {supportingLines.map(line => (
            <span className="hero-supporting-line" key={line}>{line}</span>
          ))}
        </p>
        <p className="hero-description">{hero.description}</p>
        <div className="hero-value">
          <span className="value-count">{valueLead}</span>
          <strong>{valuePromise}</strong>
        </div>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="#pricing"
            aria-label="サークルに参加する"
            onClick={() => track('hero_primary')}
          >
            {hero.primaryCta}<ArrowRight aria-hidden="true" />
          </a>
          <a
            className="button button-ghost"
            href="#member-preview"
            aria-label="サークルをチラ見する"
            onClick={() => track('hero_preview')}
          >
            {hero.secondaryCta}<ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-artifacts" aria-label="建築AIの学びとコミュニティのイメージ">
        <figure className="artifact artifact-portrait">
          <img
            className="studio-texture tape tape-top"
            src="/images/circle/studio/studio-tape-short.webp"
            alt=""
            aria-hidden="true"
          />
          <img
            src={hero.portrait}
            alt="AI Architecture Circle主宰の櫻本聖成"
            width="720"
            height="720"
          />
          <figcaption>
            <strong>SAKURAMOTO, KIYONARI</strong>
            <span>AI ARCHITECTURE CIRCLE 主宰</span>
          </figcaption>
        </figure>
        <figure className="artifact artifact-screen">
          <img
            className="studio-texture tape tape-corner"
            src="/images/circle/studio/studio-tape-wide.webp"
            alt=""
            aria-hidden="true"
          />
          <img
            src={hero.artifact}
            alt="同じ建築とAIを学ぶメンバーの交流会"
            width="1200"
            height="760"
          />
          <figcaption>同じテーマを学ぶ仲間がいる。</figcaption>
        </figure>
        <div className="artifact memo-card">
          <p>NEXT LEARNING NOTE</p>
          <strong>セミナー・News・Tipsから、<br />今追うべきAIを知る。</strong>
          <div className="handwritten-image memo-handwritten">
            <span className="sr-only">過去の記録も、検索していつでも見返せる。</span>
            <img
              className="studio-texture"
              src="/images/circle/studio/hand-note-history.webp"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
        <img
          className="studio-texture hero-red-mark"
          src="/images/circle/studio/studio-red-marks.webp"
          alt=""
          aria-hidden="true"
        />
        <img
          className="studio-texture hero-blue-mark"
          src="/images/circle/studio/studio-blue-marks.webp"
          alt=""
          aria-hidden="true"
        />
      </div>
      <img
        className="studio-texture hero-paper-edge"
        src="/images/circle/studio/studio-paper-edge.webp"
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}
