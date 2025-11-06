import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import serviceIdentity from '../assets/service-identity.jpg';
import serviceLogo from '../assets/service-logo.jpg';
import servicePackaging from '../assets/service-packaging.jpg';
import serviceBrandbook from '../assets/service-brandbook.jpg';
import serviceDesignsystem from '../assets/service-designsystem.jpg';
import serviceRebranding from '../assets/service-rebranding.jpg';
import './ServiceDetail.css';

const serviceImages: { [key: string]: string } = {
  'service-identity': serviceIdentity,
  'service-logo': serviceLogo,
  'service-packaging': servicePackaging,
  'service-brandbook': serviceBrandbook,
  'service-designsystem': serviceDesignsystem,
  'service-rebranding': serviceRebranding,
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('orderFormAnchor')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!service) {
    return <Navigate to="/uslugi" replace />;
  }

  return (
    <div className="page">
      <Header />
      
      <section className="service-detail-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Strona główna</Link> / <Link to="/uslugi">Usługi</Link> / <span>{service.title}</span>
          </div>
          <h1>{service.title}</h1>
          <p className="service-detail-subtitle">{service.short}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail-layout">
            <div className="service-detail-main">
              <img 
                src={serviceImages[service.image]} 
                alt={service.title} 
                className="service-detail-image"
                loading="lazy"
              />

              <div 
                className="service-detail-content"
                dangerouslySetInnerHTML={{ __html: service.contentHtml }}
              />
            </div>

            <aside className="service-detail-sidebar">
              <div className="service-info-card glass-card">
                <h3>Informacje o usłudze</h3>
                
                <div className="info-item">
                  <strong>Cena:</strong>
                  <span className="price-highlight">{service.price}</span>
                </div>

                <div className="info-item">
                  <strong>Co obejmuje:</strong>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <a href="#orderFormAnchor" className="btn-primary" onClick={scrollToForm}>
                  Zamów usługę
                </a>
              </div>

              <div className="other-services glass-card">
                <h4>Inne usługi</h4>
                <ul>
                  {services
                    .filter((s) => s.slug !== slug)
                    .slice(0, 4)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link to={`/uslugi/${s.slug}`}>{s.title}</Link>
                      </li>
                    ))}
                </ul>
                <Link to="/uslugi" className="btn-outline" style={{ marginTop: 'var(--spacing-md)' }}>
                  Zobacz wszystkie
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="orderFormAnchor">
        <div className="container">
          <div className="cta-content">
            <h2>Zainteresowany/a usługą {service.title}?</h2>
            <p>Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.</p>
          </div>

          <form className="contact-form glass-card" id="leadForm">
            <input type="hidden" name="service" value={service.title} />
            <input type="text" name="__hp" style={{ display: 'none' }} />
            
            <div className="form-row">
              <input type="text" name="first_name" placeholder="Imię *" required />
              <input type="text" name="last_name" placeholder="Nazwisko *" required />
            </div>

            <input type="email" name="email" placeholder="Email *" required />
            <input type="tel" name="phone" placeholder="Telefon *" required />

            <label className="consent-label">
              <input type="checkbox" name="consent" required />
              <span>
                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <Link to="/polityka-prywatnosci">polityką prywatności</Link> *
              </span>
            </label>

            <button type="submit" className="btn-primary">
              Wyślij zapytanie
            </button>

            <p className="form-note">* Pola wymagane</p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
