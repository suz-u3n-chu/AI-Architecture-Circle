import content from '../../content/circle-content.json';

export default function ProofSection() {
  return (
    <section className="proof-section section-frame" aria-labelledby="proof-title">
      <div className="section-heading">
        <p className="section-index">TAKE BACK / WORK LOG</p>
        <h2 id="proof-title">{content.proof.title}</h2>
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
