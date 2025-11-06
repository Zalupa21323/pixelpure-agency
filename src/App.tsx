import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import RefundsPage from './pages/RefundsPage';
import ThankYouPage from './pages/ThankYouPage';
import CookieBanner from './components/CookieBanner';

function App() {
  useEffect(() => {
    // Capture UTM parameters and store in sessionStorage
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
    
    utmParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        sessionStorage.setItem(param, value);
      }
    });
    
    if (document.referrer) {
      sessionStorage.setItem('referrer', document.referrer);
    }
  }, []);

  return (
    <HashRouter>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-nas" element={<AboutPage />} />
        <Route path="/uslugi" element={<ServicesPage />} />
        <Route path="/uslugi/:slug" element={<ServiceDetailPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/polityka-cookies" element={<CookiePolicyPage />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
        <Route path="/regulamin" element={<TermsPage />} />
        <Route path="/polityka-zwrotow" element={<RefundsPage />} />
        <Route path="/dziekujemy" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
