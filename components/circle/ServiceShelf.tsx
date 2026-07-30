import content from '../../content/circle-content.json';
import EditorialHeading from './EditorialHeading';

export default function ServiceShelf() {
  const services = content.services;

  return (
    <section id="services" className="services-section section-frame" aria-labelledby="services-title">
      <div className="section-heading services-heading">
        <p className="section-index">TOOLS REEL / INCLUDED</p>
        <EditorialHeading
          id="services-title"
          label={services.title}
          desktopLines={['同じサブスクで、', '使える道具が増えていく。']}
          mobileLines={['同じサブスクで、', '使える道具が', '増えていく。']}
        />
        <p>{services.description}</p>
      </div>
      <div className="service-count" aria-label="利用可能5サービス、準備中4サービス">
        <strong>{services.available.length}</strong><span>AVAILABLE</span>
        <i>/</i>
        <strong>{services.inPreparation.length}</strong><span>IN PREPARATION</span>
      </div>
      <div className="service-grid service-grid-available">
        {services.available.map((service, index) => (
          <article className="service-card" key={service.id}>
            <div className="service-image">
              <img src={service.image} alt={`${service.name}の実際のサービス画面`} loading="lazy" />
            </div>
            <div className="service-meta">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p>{service.category}</p>
                <h3>{service.name}</h3>
              </div>
            </div>
            <p>{service.copy}</p>
            <small>AVAILABLE</small>
          </article>
        ))}
      </div>
      <div className="service-grid service-grid-preparation">
        {services.inPreparation.map((service, index) => (
          <article className="service-card preparation-card" key={service.id}>
            <div className="service-image preparation-image">
              <img src={service.image} alt={`${service.name}のイメージ`} loading="lazy" />
              <span>{service.status}</span>
            </div>
            <div className="service-meta">
              <span>{String(index + 6).padStart(2, '0')}</span>
              <div>
                <p>{service.category}</p>
                <h3>{service.name}</h3>
              </div>
            </div>
            <small>{service.status}</small>
          </article>
        ))}
      </div>
      <div className="handwritten-image services-note">
        <span className="sr-only">同じサブスクで、使える道具が増えていく。</span>
        <img
          className="studio-texture"
          src="/images/circle/studio/hand-note-tools.webp"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
