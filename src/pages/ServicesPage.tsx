import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import serviceIdentity from '../assets/service-identity.jpg';
import serviceLogo from '../assets/service-logo.jpg';
import servicePackaging from '../assets/service-packaging.jpg';
import serviceBrandbook from '../assets/service-brandbook.jpg';
import serviceDesignsystem from '../assets/service-designsystem.jpg';
import serviceRebranding from '../assets/service-rebranding.jpg';
import './Page.css';

const serviceImages: { [key: string]: string } = {
  'service-identity': serviceIdentity,
  'service-logo': serviceLogo,
  'service-packaging': servicePackaging,
  'service-brandbook': serviceBrandbook,
  'service-designsystem': serviceDesignsystem,
  'service-rebranding': serviceRebranding,
};

const ServicesPage = () => {
  return (
    <div className="page">
      <Header />
      
      <section className="page-hero">
        <div className="container">
          <h1>Nasze usługi</h1>
          <p>Kompleksowe rozwiązania brandingowe dla Twojej firmy</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.slug} className="service-card glass-card">
                <div className="service-image">
                  <img src={serviceImages[service.image]} alt={service.title} loading="lazy" />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  
                  <ul className="features-list">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <div className="service-price">{service.price}</div>
                  <Link to={`/uslugi/${service.slug}`} className="btn-primary">
                    Szczegóły usługi
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
