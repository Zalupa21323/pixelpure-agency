import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Notorgart</h4>
            <p>Studio brandingowe specjalizujące się w tworzeniu silnych marek, które wyróżniają się na rynku.</p>
          </div>

          <div className="footer-col">
            <h4>Nawigacja</h4>
            <ul>
              <li><Link to="/">Strona główna</Link></li>
              <li><Link to="/o-nas">O nas</Link></li>
              <li><Link to="/uslugi">Usługi</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Usługi</h4>
            <ul>
              <li><Link to="/uslugi/identyfikacja-wizualna">Identyfikacja wizualna</Link></li>
              <li><Link to="/uslugi/projektowanie-logo">Projektowanie logo</Link></li>
              <li><Link to="/uslugi/brand-book">Brand book</Link></li>
              <li><Link to="/uslugi/rebranding">Rebranding</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Godziny pracy</h4>
            <p>Poniedziałek - Piątek<br />9:00 - 17:00</p>
            <p style={{ marginTop: '1rem' }}>Sobota - Niedziela<br />Zamknięte</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Notorgart. Wszystkie prawa zastrzeżone.</p>
          <div className="footer-links">
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
            <Link to="/polityka-cookies">Polityka cookies</Link>
            <Link to="/regulamin">Regulamin</Link>
            <Link to="/polityka-zwrotow">Polityka zwrotów</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
