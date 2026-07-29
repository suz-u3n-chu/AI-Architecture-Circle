import { ArrowRight, Check } from 'lucide-react';
import content from '../../content/circle-content.json';

const yen = new Intl.NumberFormat('ja-JP');

export default function CirclePricing() {
  return (
    <section id="pricing" className="pricing-section section-frame" aria-labelledby="pricing-title">
      <div className="section-heading pricing-heading">
        <p className="section-index">JOIN THE CIRCLE</p>
        <h2 id="pricing-title">ひとりで迷う時間を、<br />実務が進む時間へ。</h2>
        <p>どのプランでも、面談・会員ページ・対象サービスの内容は同じです。</p>
      </div>
      <div className="included-sheet">
        <p>ALL PLANS INCLUDE</p>
        <ul>
          {content.planFeatures.map(feature => (
            <li key={feature}><Check aria-hidden="true" />{feature}</li>
          ))}
        </ul>
      </div>
      <div className="pricing-grid">
        {content.plans.map(plan => (
          <article className={`price-card price-${plan.id}`} key={plan.id}>
            <div className="price-card-top">
              <span>{plan.badge}</span>
              <h3>{plan.name}</h3>
            </div>
            <p>{plan.description}</p>
            <div className="price">
              <small>¥</small><strong>{yen.format(plan.price)}</strong><span>/ {plan.period}</span>
            </div>
            <p className="price-note">{plan.note}</p>
            <a
              className="button button-price"
              href={content.checkout[plan.id as keyof typeof content.checkout]}
              onClick={() => window.gtag?.('event', 'checkout_click', { plan: plan.id })}
            >
              {plan.cta}<ArrowRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
      <p className="pricing-footnote">税込価格 / Stripe決済 / 月額プランはいつでも解約可能</p>
    </section>
  );
}
