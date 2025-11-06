import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Page.css';

const ContactPage = () => {
  return (
    <div className="page">
      <Header />
      
      <section className="page-hero">
        <div className="container">
          <h1>Kontakt</h1>
          <p>Masz pytania? Skontaktuj się z nami</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <p style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
              Wypełnij formularz poniżej, a skontaktujemy się z Tobą w ciągu 24 godzin roboczych.
            </p>

            <form className="contact-form glass-card" id="leadForm">
              <input type="text" name="__hp" style={{ display: 'none' }} />
              
              <div className="form-row">
                <input type="text" name="first_name" placeholder="Imię *" required />
                <input type="text" name="last_name" placeholder="Nazwisko *" required />
              </div>

              <input type="email" name="email" placeholder="Email *" required />
              <input type="tel" name="phone" placeholder="Telefon *" required />

              <textarea 
                name="message" 
                placeholder="Wiadomość (opcjonalnie)" 
                rows={6}
              ></textarea>

              <label className="consent-label">
                <input type="checkbox" name="consent" required />
                <span>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <Link to="/polityka-prywatnosci">polityką prywatności</Link> *
                </span>
              </label>

              <button type="submit" className="btn-primary">
                Wyślij wiadomość
              </button>

              <p className="form-note">* Pola wymagane</p>
            </form>

            <div style={{ marginTop: 'var(--spacing-3xl)', textAlign: 'center' }}>
              <h3>Godziny pracy</h3>
              <p style={{ fontSize: '1.1rem' }}>
                Poniedziałek - Piątek: 9:00 - 17:00<br />
                Sobota - Niedziela: Zamknięte
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
