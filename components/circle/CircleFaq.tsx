import { Plus } from 'lucide-react';
import content from '../../content/circle-content.json';

export default function CircleFaq() {
  return (
    <section className="faq-section section-frame" aria-labelledby="faq-title">
      <div className="section-heading">
        <p className="section-index">FIELD QUESTIONS</p>
        <h2 id="faq-title">よくある質問</h2>
      </div>
      <div className="faq-list">
        {content.faqs.map((faq, index) => (
          <details key={faq.question}>
            <summary>
              <span>Q{String(index + 1).padStart(2, '0')}</span>
              <strong>{faq.question}</strong>
              <Plus aria-hidden="true" />
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
