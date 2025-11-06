import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Page.css';

const ThankYouPage = () => {
  return (
    <div className="page">
      <Header />
      
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="content-wrapper" style={{ textAlign: 'center' }}>
            <div className="glass-card" style={{ padding: 'var(--spacing-3xl)', maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-lg)' }}>✓</div>
              <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Dziękujemy!</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)' }}>
                Twoje dane zostały pomyślnie wysłane. Skontaktujemy się z Tobą w ciągu 24 godzin roboczych.
              </p>
              
              <div className="hero-actions">
                <Link to="/" className="btn-primary">
                  Powrót do strony głównej
                </Link>
                <Link to="/uslugi" className="btn-outline">
                  Zobacz nasze usługi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
