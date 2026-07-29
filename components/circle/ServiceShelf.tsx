import content from '../../content/circle-content.json';

export default function ServiceShelf() {
  const services = content.services;

  return (
    <section id="services" className="services-section section-frame" aria-labelledby="services-title">
      <div className="section-heading services-heading">
        <p className="section-index">TOOLS REEL / INCLUDED</p>
        <h2 id="services-title">{services.title}</h2>
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
            <div className="blueprint-placeholder" aria-hidden="true">
              <span>{String(index + 6).padStart(2, '0')}</span>
              <i /><i /><i />
            </div>
            <p>{service.category}</p>
            <h3>{service.name}</h3>
            <small>{service.status}</small>
          </article>
        ))}
      </div>
      <p className="hand-note services-note">同じサブスクで、使える道具が増えていく。→</p>
    </section>
  );
}
