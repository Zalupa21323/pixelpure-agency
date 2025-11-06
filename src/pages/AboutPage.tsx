import Header from '../components/Header';
import Footer from '../components/Footer';
import './Page.css';

const AboutPage = () => {
  return (
    <div className="page">
      <Header />
      
      <section className="page-hero">
        <div className="container">
          <h1>O nas</h1>
          <p>Poznaj zespół ekspertów brandingowych Notorgart</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <h2>Kim jesteśmy?</h2>
            <p>
              Notorgart to studio brandingowe, które specjalizuje się w tworzeniu silnych i rozpoznawalnych marek. 
              Łączymy strategiczne myślenie z kreatywnym designem, aby dostarczać rozwiązania, które naprawdę działają.
            </p>

            <p>
              Nasza misja to pomoc firmom w budowaniu autentycznych i wyróżniających się marek, które rezonują z ich 
              grupą docelową i budują długotrwałe relacje z klientami.
            </p>

            <h2 style={{ marginTop: 'var(--spacing-2xl)' }}>Nasze wartości</h2>
            
            <div className="values-grid">
              <div className="value-card glass-card">
                <h3>Profesjonalizm</h3>
                <p>
                  Każdy projekt traktujemy z najwyższą starannością, dbając o najmniejsze detale.
                </p>
              </div>

              <div className="value-card glass-card">
                <h3>Kreatywność</h3>
                <p>
                  Tworzymy unikalne rozwiązania, które wyróżniają nasze projekty na tle konkurencji.
                </p>
              </div>

              <div className="value-card glass-card">
                <h3>Współpraca</h3>
                <p>
                  Pracujemy ręka w rękę z klientami, tworząc partnerskie relacje oparte na zaufaniu.
                </p>
              </div>

              <div className="value-card glass-card">
                <h3>Innowacyjność</h3>
                <p>
                  Śledzimy najnowsze trendy i technologie, aby dostarczać nowoczesne rozwiązania.
                </p>
              </div>
            </div>

            <h2 style={{ marginTop: 'var(--spacing-3xl)' }}>FAQ</h2>
            
            <div className="faq-section">
              <details className="faq-item glass-card">
                <summary>Jak długo trwa projekt brandingowy?</summary>
                <p>
                  Czas realizacji zależy od zakresu projektu. Podstawowy projekt logo może zająć 2-3 tygodnie, 
                  podczas gdy kompleksowy rebranding może trwać 2-3 miesiące. Zawsze ustalamy harmonogram 
                  indywidualnie z klientem.
                </p>
              </details>

              <details className="faq-item glass-card">
                <summary>Czy oferujecie poprawki do projektów?</summary>
                <p>
                  Tak, w ramach każdego pakietu oferujemy określoną liczbę rund poprawek. 
                  Na etapie wybranej koncepcji wprowadzamy zmiany aż do pełnej satysfakcji klienta.
                </p>
              </details>

              <details className="faq-item glass-card">
                <summary>Czy pracujecie z klientami z całej Polski?</summary>
                <p>
                  Tak, współpracujemy z klientami z całego kraju. Większość projektów realizujemy zdalnie, 
                  co nie wpływa na jakość współpracy. W razie potrzeby organizujemy spotkania stacjonarne.
                </p>
              </details>

              <details className="faq-item glass-card">
                <summary>Jakie formaty plików dostarczacie?</summary>
                <p>
                  Dostarczamy kompletny pakiet plików źródłowych (AI, PSD, Figma) oraz eksportowe 
                  (SVG, PNG, PDF, JPG) w różnych rozmiarach i wariantach kolorystycznych.
                </p>
              </details>

              <details className="faq-item glass-card">
                <summary>Czy pomagacie we wdrożeniu nowej identyfikacji?</summary>
                <p>
                  Tak, oferujemy wsparcie przy wdrożeniu nowej identyfikacji wizualnej. Pomagamy w przygotowaniu 
                  materiałów, konsultujemy z dostawcami oraz zapewniamy nadzór nad jakością wykonania.
                </p>
              </details>

              <details className="faq-item glass-card">
                <summary>Czy mogę zobaczyć Wasze wcześniejsze projekty?</summary>
                <p>
                  Ze względu na umowy poufności z niektórymi klientami, nie wszystkie projekty możemy publicznie 
                  prezentować. Chętnie pokażemy wybrane case studies podczas pierwszego spotkania.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
