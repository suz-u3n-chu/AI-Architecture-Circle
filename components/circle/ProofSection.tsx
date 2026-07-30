import content from '../../content/circle-content.json';
import EditorialHeading from './EditorialHeading';

export default function ProofSection() {
  return (
    <section className="proof-section section-frame" aria-labelledby="proof-title">
      <div className="section-heading">
        <p className="section-index">TAKE BACK / WORK LOG</p>
        <EditorialHeading
          id="proof-title"
          label={content.proof.title}
          desktopLines={['情報を集めるだけで', '終わらせない。']}
        />
      </div>
      <div className="proof-grid">
        {content.proof.items.map(item => (
          <article key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
