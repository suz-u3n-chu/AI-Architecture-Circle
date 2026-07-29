import { ArrowDownRight, ArrowRight } from 'lucide-react';
import content from '../../content/circle-content.json';

function track(location: string) {
  window.gtag?.('event', 'cta_click', { location });
}

export default function CircleHero() {
  const hero = content.hero;

  return (
    <section className="circle-hero section-frame" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="issue-label">{content.site.issue}</p>
        <p className="hand-note hero-note">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.headline}</h1>
        <p className="hero-supporting">{hero.supportingLine}</p>
        <p className="hero-description">{hero.description}</p>
        <div className="hero-value">
          <span className="value-count">月{hero.interviewsPerMonth}回</span>
          <strong>{hero.primaryValue.replace(`月${hero.interviewsPerMonth}回、`, '')}</strong>
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

      <div className="hero-artifacts" aria-label="オンライン面談と実務ツールのイメージ">
        <figure className="artifact artifact-portrait">
          <span className="tape tape-top" aria-hidden="true" />
          <img
            src={hero.portrait}
            alt="AI Architecture Circle主宰の櫻本聖成"
            width="720"
            height="720"
          />
          <figcaption>
            <strong>SAKURAMOTO, KIYONARI</strong>
            <span>建築AIパートナー</span>
          </figcaption>
        </figure>
        <figure className="artifact artifact-screen">
          <span className="tape tape-corner" aria-hidden="true" />
          <img
            src={hero.artifact}
            alt="工程管理サービスCOMPASSの実画面"
            width="1200"
            height="760"
          />
          <figcaption>実務の画面を、そのまま話題に。</figcaption>
        </figure>
        <div className="artifact memo-card">
          <p>NEXT MEETING NOTE</p>
          <strong>AIで検討の幅を広げて、<br />判断の精度を上げる。</strong>
          <span className="hand-note">一緒に、その場で試す。✓</span>
        </div>
      </div>
    </section>
  );
}
