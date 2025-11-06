import { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  const rejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  const saveSettings = (analytics: boolean, marketing: boolean) => {
    const consentData = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  if (showSettings) {
    return (
      <div className="cookie-banner-overlay">
        <div className="cookie-settings-modal">
          <h3>Ustawienia prywatności</h3>
          <p>Używamy plików cookie, aby zapewnić najlepszą jakość korzystania z naszej strony.</p>
          
          <div className="cookie-category">
            <label>
              <input type="checkbox" checked disabled />
              <div>
                <strong>Niezbędne</strong>
                <p>Wymagane do podstawowego działania strony</p>
              </div>
            </label>
          </div>

          <div className="cookie-category">
            <label>
              <input type="checkbox" id="analytics" defaultChecked />
              <div>
                <strong>Analityczne</strong>
                <p>Pomagają nam zrozumieć, jak odwiedzający korzystają ze strony</p>
              </div>
            </label>
          </div>

          <div className="cookie-category">
            <label>
              <input type="checkbox" id="marketing" defaultChecked />
              <div>
                <strong>Marketingowe</strong>
                <p>Używane do wyświetlania spersonalizowanych reklam</p>
              </div>
            </label>
          </div>

          <div className="cookie-actions">
            <button 
              className="btn-outline" 
              onClick={() => setShowSettings(false)}
            >
              Wstecz
            </button>
            <button 
              className="btn-primary" 
              onClick={() => {
                const analytics = (document.getElementById('analytics') as HTMLInputElement).checked;
                const marketing = (document.getElementById('marketing') as HTMLInputElement).checked;
                saveSettings(analytics, marketing);
              }}
            >
              Zapisz ustawienia
            </button>
          </div>

          <p className="cookie-links">
            <a href="/#/polityka-prywatnosci">Polityka prywatności</a> • 
            <a href="/#/polityka-cookies">Polityka cookies</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <div className="cookie-text">
          <h4>🍪 Ta strona używa plików cookie</h4>
          <p>
            Używamy plików cookie, aby zapewnić najlepszą jakość korzystania z naszej strony. 
            Więcej informacji znajdziesz w naszej <a href="/#/polityka-prywatnosci">polityce prywatności</a> oraz <a href="/#/polityka-cookies">polityce cookies</a>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn-outline" onClick={rejectAll}>
            Odrzuć
          </button>
          <button className="btn-outline" onClick={() => setShowSettings(true)}>
            Ustawienia
          </button>
          <button className="btn-primary" onClick={acceptAll}>
            Akceptuj wszystko
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
