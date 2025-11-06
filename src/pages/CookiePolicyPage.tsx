import Header from '../components/Header';
import Footer from '../components/Footer';
import './Page.css';

const CookiePolicyPage = () => {
  return (
    <div className="page">
      <Header />
      
      <section className="page-hero">
        <div className="container">
          <h1>Polityka cookies</h1>
          <p>Informacje o używaniu plików cookie na naszej stronie</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>Czym są pliki cookie?</h2>
            <p>
              Pliki cookie to małe pliki tekstowe przechowywane na Twoim urządzeniu podczas odwiedzania stron internetowych. 
              Służą one do zapamiętywania preferencji użytkownika i poprawy jakości korzystania ze strony.
            </p>

            <h2>Jak używamy plików cookie?</h2>
            <p>
              Na naszej stronie używamy następujących rodzajów plików cookie:
            </p>

            <h3>Pliki cookie niezbędne</h3>
            <p>
              Te pliki cookie są konieczne do prawidłowego działania strony internetowej. Umożliwiają podstawowe funkcje, 
              takie jak nawigacja po stronie i dostęp do bezpiecznych obszarów. Strona nie może funkcjonować poprawnie bez tych plików.
            </p>

            <h3>Pliki cookie analityczne</h3>
            <p>
              Pomagają nam zrozumieć, w jaki sposób odwiedzający korzystają z naszej strony, zbierając i raportując informacje anonimowo. 
              Pozwalają nam ulepszać funkcjonalność strony.
            </p>

            <h3>Pliki cookie marketingowe</h3>
            <p>
              Używane do śledzenia odwiedzających na stronach internetowych. Celem jest wyświetlanie reklam, które są istotne 
              i angażujące dla poszczególnych użytkowników.
            </p>

            <h2>Zarządzanie plikami cookie</h2>
            <p>
              Możesz kontrolować i/lub usuwać pliki cookie według własnego uznania. Możesz usunąć wszystkie pliki cookie znajdujące się 
              już na Twoim komputerze oraz ustawić większość przeglądarek tak, aby uniemożliwić ich umieszczanie. 
              Jeśli to zrobisz, może być konieczne ręczne dostosowanie niektórych preferencji przy każdej wizycie na stronie, 
              a niektóre usługi i funkcje mogą nie działać.
            </p>

            <h2>Zgoda na używanie plików cookie</h2>
            <p>
              Korzystając z naszej strony internetowej, zgadzasz się na używanie plików cookie zgodnie z niniejszą polityką. 
              Przy pierwszej wizycie na stronie wyświetlany jest banner informacyjny z możliwością zarządzania preferencjami.
            </p>

            <h2>Zmiany w polityce cookies</h2>
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce cookies. 
              O wszelkich zmianach poinformujemy, umieszczając zaktualizowaną wersję na tej stronie.
            </p>

            <p style={{ marginTop: 'var(--spacing-2xl)' }}>
              <strong>Data ostatniej aktualizacji:</strong> 15 stycznia 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
