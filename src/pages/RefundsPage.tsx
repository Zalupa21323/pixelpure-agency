import Header from '../components/Header';
import Footer from '../components/Footer';
import './Page.css';

const RefundsPage = () => {
  return (
    <div className="page">
      <Header />
      
      <section className="page-hero">
        <div className="container">
          <h1>Polityka zwrotów</h1>
          <p>Zasady dotyczące zwrotów i reklamacji</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>Prawo odstąpienia od umowy</h2>
            <p>
              Zgodnie z przepisami ustawy o prawach konsumenta, Klient będący konsumentem ma prawo odstąpić od umowy 
              w terminie 14 dni od dnia jej zawarcia, bez podania przyczyny.
            </p>

            <h3>Wyjątki od prawa odstąpienia</h3>
            <p>
              Prawo odstąpienia od umowy nie przysługuje w przypadku:
            </p>
            <ul>
              <li>Usług, których wykonanie rozpoczęło się za zgodą Klienta przed upływem terminu do odstąpienia</li>
              <li>Dostarczenia treści cyfrowych (projektów), które nie są zapisane na nośniku materialnym, 
                  jeżeli spełnianie świadczenia rozpoczęło się za zgodą Klienta</li>
              <li>Świadczeń o właściwościach określonych przez Klienta w zamówieniu (projektów indywidualnych)</li>
            </ul>

            <h2>Sposób odstąpienia od umowy</h2>
            <p>
              Aby odstąpić od umowy, Klient musi poinformować nas o swojej decyzji w drodze jednoznacznego oświadczenia 
              (na przykład poprzez formularz kontaktowy, e-mail lub list).
            </p>

            <h2>Zwrot płatności</h2>
            <p>
              W przypadku skutecznego odstąpienia od umowy, zwracamy wszystkie otrzymane od Klienta płatności 
              niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania oświadczenia o odstąpieniu.
            </p>
            <p>
              Zwrot płatności następuje przy użyciu takich samych sposobów płatności, jakie zostały użyte przez Klienta 
              w pierwotnej transakcji, chyba że Klient wyraźnie zgodził się na inne rozwiązanie.
            </p>

            <h2>Reklamacje</h2>
            <p>
              Klient ma prawo zgłosić reklamację w przypadku stwierdzenia wad w wykonanej usłudze.
            </p>

            <h3>Sposób zgłaszania reklamacji</h3>
            <p>
              Reklamacje można zgłaszać:
            </p>
            <ul>
              <li>Poprzez formularz kontaktowy na stronie</li>
              <li>Wysyłając wiadomość e-mail</li>
              <li>Listownie na adres naszej siedziby</li>
            </ul>

            <h3>Rozpatrywanie reklamacji</h3>
            <p>
              Reklamacje są rozpatrywane w terminie do 14 dni roboczych od dnia jej otrzymania. 
              W przypadku konieczności dodatkowych wyjaśnień, termin ten może ulec wydłużeniu, o czym Klient zostanie poinformowany.
            </p>

            <h2>Zwroty w przypadku reklamacji</h2>
            <p>
              W przypadku uznania reklamacji, możliwe są następujące rozwiązania:
            </p>
            <ul>
              <li>Bezpłatna naprawa (korekta projektu)</li>
              <li>Wymiana na nowy projekt</li>
              <li>Obniżenie ceny</li>
              <li>Zwrot płatności (w przypadku istotnych wad uniemożliwiających korzystanie z usługi)</li>
            </ul>

            <h2>Gwarancja</h2>
            <p>
              Na nasze usługi udzielamy gwarancji jakości. W przypadku stwierdzenia błędów lub niedociągnięć 
              w okresie gwarancyjnym (ustalonym indywidualnie), zobowiązujemy się do ich bezpłatnej poprawy.
            </p>

            <h2>Rozstrzyganie sporów</h2>
            <p>
              Klient ma możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń, 
              w tym przez zwrócenie się do wojewódzkiego inspektora Inspekcji Handlowej lub mediację prowadzoną 
              przez stały polubowny sąd konsumencki.
            </p>

            <h2>Kontakt</h2>
            <p>
              W sprawach dotyczących zwrotów i reklamacji prosimy o kontakt poprzez formularz kontaktowy 
              lub dostępne dane kontaktowe.
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

export default RefundsPage;
