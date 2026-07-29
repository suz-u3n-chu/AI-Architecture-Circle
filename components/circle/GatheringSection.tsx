import content from '../../content/circle-content.json';

export default function GatheringSection() {
  const gathering = content.gathering;

  return (
    <section id="gathering" className="gathering-section section-frame" aria-labelledby="gathering-title">
      <div className="gathering-copy">
        <p className="section-index">{gathering.eyebrow}</p>
        <h2 id="gathering-title">{gathering.title}</h2>
        <p>{gathering.description}</p>
        <ul aria-label="参加は自由・不定期開催">
          {gathering.qualifiers.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className="hand-note">希望者で、たまにご飯とお酒。☺</p>
      </div>
      <div className="gathering-photos">
        <figure className="photo-print photo-primary">
          <span className="tape tape-top" aria-hidden="true" />
          <img src={gathering.images[0]} alt="希望者で食事と会話を楽しむ交流会の様子" loading="lazy" />
          <figcaption>DINNER SESSION / OPTIONAL</figcaption>
        </figure>
        <figure className="photo-print photo-secondary">
          <img src={gathering.images[1]} alt="交流会の参加者による集合写真" loading="lazy" />
          <figcaption>AFTER TALK / GROUP PHOTO</figcaption>
        </figure>
      </div>
    </section>
  );
}
