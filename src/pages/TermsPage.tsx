import Header from '../components/Header';
import Footer from '../components/Footer';
import './Page.css';

const TermsPage = () => {
  return (
    <div className="page">
      <Header />
      
      <section className="page-hero">
        <div className="container">
          <h1>Regulamin</h1>
          <p>Zasady korzystania z naszych usług</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>§ 1 Postanowienia ogólne</h2>
            <p>
              Niniejszy Regulamin określa zasady korzystania ze strony internetowej oraz usług świadczonych przez Notorgart.
            </p>

            <h2>§ 2 Definicje</h2>
            <p>
              Użyte w Regulaminie pojęcia oznaczają:
            </p>
            <ul>
              <li><strong>Usługodawca</strong> – Notorgart świadczący usługi brandingowe</li>
              <li><strong>Klient</strong> – osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług Usługodawcy</li>
              <li><strong>Usługa</strong> – usługi brandingowe oferowane przez Usługodawcę</li>
              <li><strong>Strona</strong> – strona internetowa dostępna pod adresem notorgart.pl</li>
            </ul>

            <h2>§ 3 Zakres usług</h2>
            <p>
              Usługodawca świadczy następujące usługi:
            </p>
            <ul>
              <li>Projektowanie identyfikacji wizualnej</li>
              <li>Projektowanie logo</li>
              <li>Tworzenie brand booków</li>
              <li>Projektowanie systemów projektowych</li>
              <li>Projektowanie opakowań</li>
              <li>Rebranding</li>
            </ul>

            <h2>§ 4 Zawarcie umowy</h2>
            <p>
              Umowa o świadczenie usług jest zawierana poprzez:
            </p>
            <ul>
              <li>Wypełnienie i przesłanie formularza kontaktowego</li>
              <li>Kontakt e-mailowy lub telefoniczny</li>
              <li>Podpisanie pisemnej umowy (w przypadku projektów o większym zakresie)</li>
            </ul>

            <h2>§ 5 Ceny i płatności</h2>
            <p>
              Ceny usług podane na stronie są cenami orientacyjnymi. Dokładna wycena jest ustalana indywidualnie 
              w zależności od zakresu projektu.
            </p>
            <p>
              Płatności dokonywane są przelewem bankowym na podstawie wystawionej faktury VAT.
            </p>

            <h2>§ 6 Realizacja usług</h2>
            <p>
              Termin realizacji usługi jest ustalany indywidualnie dla każdego projektu i określany w umowie.
            </p>
            <p>
              Klient zobowiązuje się do współpracy z Usługodawcą, w tym do:
            </p>
            <ul>
              <li>Przekazania niezbędnych materiałów i informacji</li>
              <li>Terminowego udzielania odpowiedzi na pytania</li>
              <li>Akceptowania lub zgłaszania uwag do przedstawionych projektów</li>
            </ul>

            <h2>§ 7 Prawa autorskie</h2>
            <p>
              Majątkowe prawa autorskie do wykonanych projektów przechodzą na Klienta po pełnej realizacji umowy 
              i uregulowaniu należności, chyba że umowa stanowi inaczej.
            </p>

            <h2>§ 8 Odpowiedzialność</h2>
            <p>
              Usługodawca nie ponosi odpowiedzialności za:
            </p>
            <ul>
              <li>Opóźnienia wynikające z braku współpracy ze strony Klienta</li>
              <li>Szkody wynikłe z nieprawidłowego wykorzystania dostarczonych projektów</li>
              <li>Naruszenie praw osób trzecich w przypadku użycia materiałów dostarczonych przez Klienta</li>
            </ul>

            <h2>§ 9 Odstąpienie od umowy</h2>
            <p>
              Klient ma prawo odstąpić od umowy w terminie 14 dni od dnia jej zawarcia, pod warunkiem że usługa nie została rozpoczęta.
            </p>

            <h2>§ 10 Reklamacje</h2>
            <p>
              Reklamacje dotyczące świadczonych usług można zgłaszać poprzez formularz kontaktowy lub e-mail. 
              Reklamacje są rozpatrywane w terminie 14 dni roboczych.
            </p>

            <h2>§ 11 Postanowienia końcowe</h2>
            <p>
              W sprawach nieuregulowanych w niniejszym Regulaminie zastosowanie mają przepisy prawa polskiego, 
              w szczególności Kodeksu Cywilnego.
            </p>
            <p>
              Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O wszelkich zmianach Klient zostanie poinformowany 
              z odpowiednim wyprzedzeniem.
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

export default TermsPage;
