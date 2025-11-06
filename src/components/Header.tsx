import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <p>Godziny pracy: Pon-Pt 9:00-17:00</p>
        </div>
      </div>
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              Notorgart
            </Link>
            
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/" onClick={closeMenu}>Strona główna</Link>
              <Link to="/o-nas" onClick={closeMenu}>O nas</Link>
              <Link to="/uslugi" onClick={closeMenu}>Usługi</Link>
              <Link to="/kontakt" onClick={closeMenu}>Kontakt</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
