export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: 'identyfikacja-wizualna',
    title: 'Identyfikacja wizualna marki',
    short: 'Kompleksowa identyfikacja wizualna, która wyróżni Twoją markę',
    price: 'od 8 000 zł',
    image: 'service-identity',
    features: [
      'Analiza konkurencji i rynku',
      'Strategia wizualna marki',
      'Palette kolorów i typografia',
      'System identyfikacji wizualnej',
      'Materiały brandingowe',
      'Wytyczne użycia'
    ],
    contentHtml: `
      <p>Identyfikacja wizualna to fundament każdej silnej marki. To ona sprawia, że Twoja firma jest rozpoznawalna, spójna i profesjonalna w oczach klientów.</p>
      
      <h2>Co obejmuje nasza usługa?</h2>
      <p>Tworzymy kompletny system identyfikacji wizualnej, który jest nie tylko estetyczny, ale przede wszystkim funkcjonalny. Nasz proces rozpoczyna się od dogłębnej analizy Twojej branży, konkurencji oraz grupy docelowej.</p>
      
      <h3>Proces tworzenia</h3>
      <p>Każdy projekt rozpoczynamy od strategii. Wspólnie definiujemy wartości marki, jej osobowość oraz sposób komunikacji. Na tej podstawie tworzymy paletę kolorów, dobieramy typografię i projektujemy elementy wizualne, które najlepiej oddają charakter Twojej firmy.</p>
      
      <h3>Dlaczego to ważne?</h3>
      <p>Spójna identyfikacja wizualna buduje zaufanie i rozpoznawalność. Klienci łatwiej zapamiętują marki, które prezentują się profesjonalnie i konsekwentnie we wszystkich punktach styku. Dobra identyfikacja wizualna to inwestycja, która zwraca się wielokrotnie poprzez zwiększoną lojalność klientów i wyższą wartość marki.</p>
      
      <h3>Co otrzymasz?</h3>
      <p>Kompleksowy pakiet zawierający wszystkie elementy identyfikacji wizualnej: logo w różnych wersjach, paletę kolorów z kodami, zestaw typografii, wzory materiałów firmowych oraz szczegółowe wytyczne dotyczące stosowania wszystkich elementów.</p>
    `
  },
  {
    slug: 'projektowanie-logo',
    title: 'Projektowanie logo',
    short: 'Unikalne logo, które zapadnie w pamięć i wyróżni Twoją markę',
    price: 'od 3 500 zł',
    image: 'service-logo',
    features: [
      'Badanie rynku i konkurencji',
      '3-5 propozycji koncepcyjnych',
      'Nielimitowane poprawki',
      'Wersje kolorowe i monochromatyczne',
      'Pliki źródłowe (AI, SVG, PNG)',
      'Wytyczne użycia logo'
    ],
    contentHtml: `
      <p>Logo to twarz Twojej marki – pierwszy element, który zauważają klienci. Dobre logo musi być proste, zapamiętywalne i uniwersalne, działając równie dobrze na wizytówce, jak i na billboardzie.</p>
      
      <h2>Nasz proces projektowy</h2>
      <p>Zaczynamy od dogłębnego researchu – analizujemy Twoją branżę, konkurencję oraz grupę docelową. Następnie przechodzimy do etapu koncepcyjnego, w którym prezentujemy kilka unikalnych propozycji.</p>
      
      <h3>Czym wyróżnia się nasze podejście?</h3>
      <p>Nie tworzymy logo na podstawie szablonów. Każdy projekt jest unikalny i dostosowany do specyfiki Twojej marki. Stawiamy na prostotę, elegancję i ponadczasowość – logo powinno służyć Twojej firmie przez lata.</p>
      
      <h3>Uniwersalność i skalowalność</h3>
      <p>Projektujemy logo tak, aby działało na każdym medium – od małych ikonek w social mediach, przez wizytówki, aż po duże formaty outdoorowe. Testuję każdy projekt w różnych rozmiarach i kontekstach, zapewniając pełną czytelność.</p>
      
      <h3>Pakiet końcowy</h3>
      <p>Otrzymasz kompletny pakiet plików w różnych formatach (AI, SVG, PNG, PDF) oraz wariantach (kolorowe, monochromatyczne, negatywowe). Dodatkowo dostarczamy dokument z zasadami użycia logo, który pomoże zachować spójność marki.</p>
      
      <h3>Gwarancja satysfakcji</h3>
      <p>Oferujemy nielimitowane poprawki na etapie projektu wybranej koncepcji, aż do pełnej satysfakcji. Twoje logo musi być idealne – nie idziemy na kompromisy.</p>
    `
  },
  {
    slug: 'brand-book',
    title: 'Brand book',
    short: 'Szczegółowy przewodnik po Twojej marce dla zespołu i partnerów',
    price: 'od 6 000 zł',
    image: 'service-brandbook',
    features: [
      'Strategia marki',
      'Identyfikacja wizualna',
      'Zasady komunikacji',
      'Przykłady zastosowań',
      'Wytyczne dla mediów',
      'Format PDF i drukowany'
    ],
    contentHtml: `
      <p>Brand book to kompletny przewodnik po Twojej marce – dokument, który zapewnia spójność wizualną i komunikacyjną we wszystkich działaniach. To niezbędne narzędzie dla każdej profesjonalnej firmy.</p>
      
      <h2>Co zawiera brand book?</h2>
      <p>Dobrze przygotowany brand book to znacznie więcej niż zestaw wytycznych graficznych. To kompleksowy dokument definiujący istotę marki, jej wartości, sposób komunikacji oraz wszystkie elementy identyfikacji wizualnej.</p>
      
      <h3>Strategia i wartości marki</h3>
      <p>Pierwsza część brand booka definiuje fundamenty: misję, wizję, wartości oraz osobowość marki. To punkt odniesienia dla wszystkich działań komunikacyjnych i marketingowych.</p>
      
      <h3>Identyfikacja wizualna</h3>
      <p>Szczegółowe zasady użycia logo, palety kolorów, typografii, ikonografii oraz wszystkich pozostałych elementów wizualnych. Każdy aspekt jest precyzyjnie opisany z przykładami prawidłowego i nieprawidłowego użycia.</p>
      
      <h3>Komunikacja i tone of voice</h3>
      <p>Określamy, jak marka powinna się komunikować – jaki język używać, jakiego stylu, jak budować przekazy marketingowe. To zapewnia spójność we wszystkich kanałach komunikacji.</p>
      
      <h3>Przykłady zastosowań</h3>
      <p>Brand book zawiera liczne przykłady praktycznego zastosowania elementów marki: wizytówki, papier firmowy, prezentacje, social media, materiały reklamowe. Dzięki temu każdy użytkownik wie, jak prawidłowo stosować wytyczne.</p>
      
      <h3>Format i dostępność</h3>
      <p>Dostarczamy brand book w formie elegancko zaprojektowanego dokumentu PDF (wersja interaktywna z linkami) oraz opcjonalnie w wersji drukowanej w wysokiej jakości oprawie.</p>
    `
  },
  {
    slug: 'system-projektowy',
    title: 'System projektowy',
    short: 'Spójny system design dla produktów cyfrowych i aplikacji',
    price: 'od 12 000 zł',
    image: 'service-designsystem',
    features: [
      'Komponenty UI',
      'Paleta kolorów i typografia',
      'Ikony i ilustracje',
      'Wzorce projektowe',
      'Dokumentacja techniczna',
      'Figma / Adobe XD'
    ],
    contentHtml: `
      <p>System projektowy to uporządkowany zestaw komponentów, wzorców i zasad, które zapewniają spójność wizualną i funkcjonalną w produktach cyfrowych. To fundament skalowalnego designu.</p>
      
      <h2>Dlaczego warto mieć design system?</h2>
      <p>W dobie wielokanałowej komunikacji, produkty cyfrowe muszą być spójne na różnych platformach i urządzeniach. Design system pozwala utrzymać jednolitość oraz znacząco przyspiesza proces projektowania i development.</p>
      
      <h3>Co tworzymy?</h3>
      <p>Kompletny design system zawiera bibliotekę komponentów (przyciski, formularze, karty, nawigacja), zdefiniowaną paletę kolorów i typografii, zestaw ikon, ilustracji oraz szczegółowe wzorce projektowe dla typowych przypadków użycia.</p>
      
      <h3>Komponent library</h3>
      <p>Każdy komponent jest zaprojektowany z myślą o reużywalności i dostępności. Tworzymy warianty stanów (default, hover, active, disabled), responsive behavior oraz dokumentujemy zasady użycia.</p>
      
      <h3>Dokumentacja i wytyczne</h3>
      <p>System projektowy to nie tylko komponenty, ale przede wszystkim dokumentacja. Opisujemy zasady użycia, best practices, accessibility guidelines oraz przykłady implementacji. To umożliwia zespołowi samodzielną pracę z systemem.</p>
      
      <h3>Narzędzia i formaty</h3>
      <p>Dostarczamy design system w formie biblioteki Figma lub Adobe XD (według preferencji klienta) wraz z eksportowalnym kodem CSS/SCSS dla developerów. System jest żywy – może być rozwijany i aktualizowany w miarę ewolucji produktu.</p>
      
      <h3>Współpraca z zespołem</h3>
      <p>Oferujemy sesje wdrożeniowe dla zespołów projektowych i developerskich, aby zapewnić prawidłowe wykorzystanie systemu. Dodatkowo zapewniamy wsparcie w pierwszych miesiącach użytkowania.</p>
    `
  },
  {
    slug: 'projekt-opakowania',
    title: 'Projekt opakowania',
    short: 'Opakowanie, które przyciąga wzrok i sprzedaje Twój produkt',
    price: 'od 5 000 zł',
    image: 'service-packaging',
    features: [
      'Analiza rynku i konkurencji',
      'Koncepcje kreatywne',
      'Projekt graficzny',
      'Dieline i mockupy',
      'Przygotowanie do druku',
      'Konsultacje z drukarnią'
    ],
    contentHtml: `
      <p>Opakowanie produktu to pierwszy fizyczny kontakt klienta z marką. Musi być nie tylko estetyczne, ale przede wszystkim funkcjonalne i zgodne z normami branżowymi.</p>
      
      <h2>Projektowanie z myślą o sprzedaży</h2>
      <p>Dobre opakowanie to narzędzie sprzedażowe – przyciąga uwagę, komunikuje wartości produktu i buduje rozpoznawalność marki. Projektujemy opakowania, które wyróżniają się na półce i przekonują do zakupu.</p>
      
      <h3>Proces projektowy</h3>
      <p>Zaczynamy od analizy rynku – badamy konkurencję, trendy oraz preferencje grupy docelowej. Następnie przechodzimy do etapu koncepcyjnego, gdzie prezentujemy kilka kreatywnych propozycji.</p>
      
      <h3>Funkcjonalność i estetyka</h3>
      <p>Opakowanie musi być nie tylko ładne, ale też praktyczne. Uwzględniamy aspekty logistyczne (składowanie, transport), użytkowe (wygoda otwarcia, przechowywania) oraz ekologiczne (materiały, recyclability).</p>
      
      <h3>Dieline i mockupy</h3>
      <p>Tworzymy precyzyjny dieline (wykrój techniczny) oraz realistyczne mockupy 3D, które pozwalają zobaczyć, jak opakowanie będzie wyglądać w rzeczywistości. To kluczowy etap przed produkcją.</p>
      
      <h3>Przygotowanie do druku</h3>
      <p>Dostarczamy pliki w pełni przygotowane do druku, zgodne z wymaganiami drukarni (CMYK, pantone, krzywe, odpowiedni padding). Współpracujemy z drukarniami, aby zapewnić najwyższą jakość wykonania.</p>
      
      <h3>Rodzaje opakowań</h3>
      <p>Projektujemy różne typy opakowań: kartony, pudełka, etykiety, opakowania elastyczne, butelki, puszki i wiele innych. Każdy projekt dostosowany do specyfiki produktu i branży.</p>
    `
  },
  {
    slug: 'rebranding',
    title: 'Rebranding',
    short: 'Odśwież swoją markę i zyskaj przewagę konkurencyjną',
    price: 'od 15 000 zł',
    image: 'service-rebranding',
    features: [
      'Audyt obecnej marki',
      'Strategia rebrandingu',
      'Nowa identyfikacja wizualna',
      'Plan wdrożenia',
      'Materiały komunikacyjne',
      'Wsparcie przy wdrożeniu'
    ],
    contentHtml: `
      <p>Rebranding to strategiczna zmiana wizerunku marki, która może być kluczowa dla dalszego rozwoju firmy. To proces wymagający głębokiej analizy, odwagi i precyzyjnego planu.</p>
      
      <h2>Kiedy warto zrobić rebranding?</h2>
      <p>Rebranding jest wskazany, gdy firma zmienia kierunek działania, wchodzi na nowe rynki, chce odmłodzić wizerunek lub gdy obecna identyfikacja jest przestarzała i nie oddaje wartości marki.</p>
      
      <h3>Audyt i analiza</h3>
      <p>Każdy rebranding zaczynamy od kompleksowego audytu obecnej marki – analizujemy jej mocne i słabe strony, pozycję na rynku, postrzeganie przez klientów oraz spójność we wszystkich punktach styku.</p>
      
      <h3>Strategia rebrandingu</h3>
      <p>Na podstawie audytu opracowujemy strategię: czy to ewolucja (subtelne odświeżenie) czy rewolucja (całkowita zmiana). Definiujemy zakres zmian, timeline oraz kluczowe milestones.</p>
      
      <h3>Nowa identyfikacja wizualna</h3>
      <p>Projektujemy nowy system identyfikacji wizualnej – od logo, przez paletę kolorów i typografię, aż po wszystkie materiały brandingowe. Dbamy o to, aby nowa identyfikacja była świeża, ale jednocześnie zachowywała elementy rozpoznawalności (jeśli to wskazane).</p>
      
      <h3>Plan wdrożenia</h3>
      <p>Rebranding to nie tylko nowy design, ale przede wszystkim zarządzanie zmianą. Przygotowujemy szczegółowy plan wdrożenia: harmonogram, punkty styku, materiały komunikacyjne, wewnętrzne i zewnętrzne kampanie informacyjne.</p>
      
      <h3>Wsparcie i konsulting</h3>
      <p>Towarzyszymy klientowi na każdym etapie wdrożenia – od komunikacji z zespołem, przez aktualizację materiałów, aż po kampanię launch. Zapewniamy wsparcie merytoryczne i koordynujemy prace z różnymi dostawcami.</p>
      
      <h3>Zarządzanie ryzykiem</h3>
      <p>Rebranding niesie ze sobą ryzyko utraty rozpoznawalności. Dlatego każdy projekt realizujemy z najwyższą starannością, testując rozwiązania i zbierając feedback na bieżąco, aby minimalizować ryzyko i maksymalizować efekt.</p>
    `
  }
];
