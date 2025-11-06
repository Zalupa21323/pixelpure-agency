import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import heroImage from '../assets/hero-abstract.jpg';
import serviceIdentity from '../assets/service-identity.jpg';
import serviceLogo from '../assets/service-logo.jpg';
import servicePackaging from '../assets/service-packaging.jpg';
import serviceBrandbook from '../assets/service-brandbook.jpg';
import serviceDesignsystem from '../assets/service-designsystem.jpg';
import serviceRebranding from '../assets/service-rebranding.jpg';
import './HomePage.css';

const serviceImages: { [key: string]: string } = {
  'service-identity': serviceIdentity,
  'service-logo': serviceLogo,
  'service-packaging': servicePackaging,
  'service-brandbook': serviceBrandbook,
  'service-designsystem': serviceDesignsystem,
  'service-rebranding': serviceRebranding,
};

const HomePage = () => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('orderFormAnchor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page">
      <Header />
      
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content fade-up">
            <h1>Tworzymy marki, w które wierzą</h1>
            <p className="hero-subtitle">
              Profesjonalny branding, identyfikacja wizualna i systemy projektowe dla startupów i firm D2C. 
              Wyróżnij swoją markę z naszym doświadczeniem.
            </p>
            <div className="hero-actions">
              <a href="#orderFormAnchor" className="btn-primary" onClick={scrollToForm}>
                Obsudzić redesign
              </a>
              <Link to="/uslugi" className="btn-outline">
                Zobacz usługi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="kpi-section">
        <div className="container">
          <div className="kpi-grid">
            <div className="kpi-card glass-card">
              <div className="kpi-number">250+</div>
              <div className="kpi-label">Zadowolonych klientów</div>
            </div>
            <div className="kpi-card glass-card">
              <div className="kpi-number">98%</div>
              <div className="kpi-label">Poziom satysfakcji</div>
            </div>
            <div className="kpi-card glass-card">
              <div className="kpi-number">7+ lat</div>
              <div className="kpi-label">Doświadczenia</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>Nasze usługi</h2>
            <p>Kompleksowe rozwiązania brandingowe dostosowane do Twoich potrzeb</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.slug} className="service-card glass-card">
                <div className="service-image">
                  <img src={serviceImages[service.image]} alt={service.title} loading="lazy" />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <div className="service-price">{service.price}</div>
                  <Link to={`/uslugi/${service.slug}`} className="btn-outline">
                    Dowiedz się więcej
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link to="/uslugi" className="btn-primary">
              Zobacz wszystkie usługi
            </Link>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Co mówią nasi klienci</h2>
            <p>Opinie firm, które nam zaufały</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card glass-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Notorgart stworzył dla nas całkowicie nową identyfikację wizualną. Profesjonalizm i kreatywność na najwyższym poziomie. Gorąco polecam!"
              </p>
              <div className="testimonial-author">
                <strong>Anna Kowalska</strong>
                <span>CEO, TechStart</span>
              </div>
            </div>

            <div className="testimonial-card glass-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Współpraca z zespołem Notorgart była bezproblemowa. Nasze nowe logo idealnie oddaje charakter marki i wyróżnia nas na tle konkurencji."
              </p>
              <div className="testimonial-author">
                <strong>Piotr Nowak</strong>
                <span>Właściciel, GreenLife</span>
              </div>
            </div>

            <div className="testimonial-card glass-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Rebranding przeprowadzony przez Notorgart przekroczył nasze oczekiwania. Zwiększyliśmy rozpoznawalność marki o 40% w ciągu pierwszych 3 miesięcy."
              </p>
              <div className="testimonial-author">
                <strong>Maria Wiśniewska</strong>
                <span>Marketing Director, FashionHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="orderFormAnchor">
        <div className="container">
          <div className="cta-content">
            <h2>Gotowy na redesign?</h2>
            <p>Skontaktuj się z nami i omów swój projekt. Odpowiemy w ciągu 24 godzin.</p>
          </div>

          <form className="contact-form glass-card" id="leadForm">
            <input type="text" name="__hp" style={{ display: 'none' }} />
            
            <div className="form-row">
              <input 
                type="text" 
                name="first_name" 
                placeholder="Imię *" 
                required 
              />
              <input 
                type="text" 
                name="last_name" 
                placeholder="Nazwisko *" 
                required 
              />
            </div>

            <input 
              type="email" 
              name="email" 
              placeholder="Email *" 
              required 
            />

            <input 
              type="tel" 
              name="phone" 
              placeholder="Telefon *" 
              required 
            />

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

export default HomePage;
