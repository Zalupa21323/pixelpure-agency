import Header from '../components/Header';
import Footer from '../components/Footer';
import './Page.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="page">
      <Header />
      
      <section className="page-hero">
        <div className="container">
          <h1>Polityka prywatności</h1>
          <p>Informacje o przetwarzaniu danych osobowych</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="policy-content">
            <h2>Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest Notorgart.
            </p>

            <h2>Jakie dane zbieramy?</h2>
            <p>
              W ramach korzystania z naszych usług możemy zbierać następujące kategorie danych osobowych:
            </p>
            <ul>
              <li>Dane identyfikacyjne (imię, nazwisko)</li>
              <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
              <li>Dane dotyczące korzystania ze strony (pliki cookie, logi serwera)</li>
            </ul>

            <h2>Cel przetwarzania danych</h2>
            <p>
              Twoje dane osobowe przetwarzamy w następujących celach:
            </p>
            <ul>
              <li>Obsługa zapytań i kontaktu z klientami</li>
              <li>Realizacja umów o świadczenie usług</li>
              <li>Marketing i promocja naszych usług (za zgodą)</li>
              <li>Analiza ruchu na stronie i optymalizacja doświadczeń użytkownika</li>
              <li>Wypełnienie obowiązków prawnych</li>
            </ul>

            <h2>Podstawa prawna przetwarzania</h2>
            <p>
              Twoje dane osobowe przetwarzamy na podstawie:
            </p>
            <ul>
              <li>Twojej zgody (Art. 6 ust. 1 lit. a RODO)</li>
              <li>Realizacji umowy lub działań przed jej zawarciem (Art. 6 ust. 1 lit. b RODO)</li>
              <li>Wypełnienia obowiązków prawnych (Art. 6 ust. 1 lit. c RODO)</li>
              <li>Prawnie uzasadnionego interesu administratora (Art. 6 ust. 1 lit. f RODO)</li>
            </ul>

            <h2>Okres przechowywania danych</h2>
            <p>
              Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane:
            </p>
            <ul>
              <li>Dane kontaktowe – przez czas trwania korespondencji lub do momentu wycofania zgody</li>
              <li>Dane dotyczące umów – przez okres wymagany przepisami prawa (co najmniej 5 lat)</li>
              <li>Dane marketingowe – do momentu wycofania zgody lub wniesienia sprzeciwu</li>
            </ul>

            <h2>Twoje prawa</h2>
            <p>
              Zgodnie z RODO przysługują Ci następujące prawa:
            </p>
            <ul>
              <li>Prawo dostępu do swoich danych osobowych</li>
              <li>Prawo do sprostowania danych</li>
              <li>Prawo do usunięcia danych („prawo do bycia zapomnianym")</li>
              <li>Prawo do ograniczenia przetwarzania</li>
              <li>Prawo do przenoszenia danych</li>
              <li>Prawo do sprzeciwu wobec przetwarzania</li>
              <li>Prawo do cofnięcia zgody</li>
              <li>Prawo do wniesienia skargi do organu nadzorczego (UODO)</li>
            </ul>

            <h2>Udostępnianie danych</h2>
            <p>
              Twoje dane osobowe możemy udostępniać następującym kategoriom odbiorców:
            </p>
            <ul>
              <li>Dostawcom usług IT i hostingu</li>
              <li>Firmom świadczącym usługi marketingowe i analityczne</li>
              <li>Organom państwowym w zakresie wymaganym przepisami prawa</li>
            </ul>

            <h2>Bezpieczeństwo danych</h2>
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych 
              przed nieuprawnionym dostępem, utratą, zniszczeniem lub zmianą.
            </p>

            <h2>Zmiany w polityce prywatności</h2>
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. 
              O wszelkich zmianach poinformujemy, umieszczając zaktualizowaną wersję na tej stronie.
            </p>

            <h2>Kontakt</h2>
            <p>
              W sprawach dotyczących przetwarzania danych osobowych oraz realizacji przysługujących Ci praw 
              możesz skontaktować się z nami poprzez formularz kontaktowy dostępny na stronie.
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

export default PrivacyPolicyPage;
