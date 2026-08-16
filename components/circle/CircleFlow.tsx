import content from '../../content/circle-content.json';
import EditorialHeading from './EditorialHeading';

const annotationImages = [
  '/images/circle/studio/hand-note-history.webp',
  '/images/circle/studio/hand-note-trial.webp',
  '/images/circle/studio/hand-note-gathering.webp',
] as const;

export default function CircleFlow() {
  return (
    <section id="flow" className="flow-section section-frame" aria-labelledby="flow-title">
      <div className="section-heading">
        <p className="section-index">CIRCLE METHOD / 01–03</p>
        <EditorialHeading
          id="flow-title"
          label="学んで、試して、仲間と進む。"
          desktopLines={['学んで、試して、', '仲間と進む。']}
        />
        <p>AIリテラシーを高め、自分の仕事と会社へ持ち帰る。</p>
      </div>
      <svg
        className="flow-line"
        viewBox="0 0 1000 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M30 30 C180 10, 250 150, 430 96 S720 26, 970 142" />
      </svg>
      <div className="flow-grid">
        {content.flow.map((item, index) => (
          <article className="flow-card" key={item.id}>
            <div className="flow-card-label">
              <span>{item.label}</span>
              <strong>{item.number}</strong>
            </div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <div className="handwritten-image flow-handwritten">
              <span className="sr-only">{item.annotation}</span>
              <img
                className="studio-texture"
                src={annotationImages[index]}
                alt=""
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
