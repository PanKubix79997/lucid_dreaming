'use client';

import Link from 'next/link';

export default function WildPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600">🌌 WILD – Wake Induced Lucid Dream</h1>

      {/* OPIS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">🧠 Czym jest technika WILD?</h2>
        <p>
          WILD (Wake Induced Lucid Dreaming) to technika świadomego snu polegająca na zachowaniu pełnej świadomości podczas przechodzenia z jawy do snu. 
          W przeciwieństwie do większości technik (np. MILD), które opierają się na pamięci i intencji, WILD pozwala wejść prosto w świadomy sen z otwartymi oczami umysłu.
        </p>
        <p>
          To dosłownie świadome "wejście" do snu. Ciało zasypia, ale umysł pozostaje świadomy. Dzięki temu możesz bezpośrednio wejść do świata marzeń sennych 
          i zacząć działać świadomie – np. latać, eksplorować, zadawać pytania, trenować, tworzyć. 
        </p>
        <p>
          Technika ta jest często wybierana przez zaawansowanych praktyków, ponieważ daje bardzo realistyczne, stabilne i długie sny świadome. Ale wymaga dyscypliny i praktyki – szczególnie w opanowaniu momentu "przejścia".
        </p>
      </section>

      {/* KROK PO KROKU */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">🛏️ Jak wykonać technikę WILD – krok po kroku</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Obudź się po 4–6 godzinach snu (WBTB):</strong> to najlepszy moment, gdy ciało jest gotowe na wejście w fazę REM. Wstań na chwilę, przejdź się lub poczytaj o LD, po czym wróć do łóżka.
          </li>
          <li>
            <strong>Połóż się i zrelaksuj:</strong> ułóż się wygodnie (najlepiej na plecach) i zamknij oczy. Rozluźnij ciało i skup się na oddechu. Możesz użyć afirmacji: „Wejdę świadomie w sen”.
          </li>
          <li>
            <strong>Skup umysł na jednym punkcie:</strong> np. licz oddechy („1, jestem świadomy… 2, jestem świadomy…”) lub wizualizuj jakieś miejsce. Umysł nie może odpłynąć, ale też nie może się spinać.
          </li>
          <li>
            <strong>Pojawią się efekty hipnagogiczne:</strong> mrowienie, dźwięki, obrazy, wibracje – to oznaki, że ciało zasypia. Nie poruszaj się, ignoruj je.
          </li>
          <li>
            <strong>Moment przejścia:</strong> poczujesz się „przenoszony” lub zobaczysz obrazy. Jeśli pojawi się senna scena – wejdź w nią. Jeśli „obudzisz się” we śnie – zrób test rzeczywistości.
          </li>
        </ol>
      </section>

      {/* OPŁACALNOŚĆ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-500">📊 Czy warto używać WILD?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Trudność:</strong> ★★★★☆ – technika trudna dla początkujących. Wymaga spokoju, cierpliwości i dobrej znajomości własnego ciała oraz umysłu.
          </li>
          <li>
            <strong>Efektywność:</strong> ★★★★★ – jeśli działa, daje najbardziej realistyczne i stabilne LD, jakie można osiągnąć.
          </li>
          <li>
            <strong>Opłacalność:</strong> bardzo wysoka – warto opanować, szczególnie jeśli chcesz badać sny, mieć wpływ na ich treść i długość.
          </li>
          <li>
            <strong>Dla kogo?</strong> Średnio zaawansowani i zaawansowani praktycy. Początkujący mogą próbować w połączeniu z MILD lub po dzienniku snów.
          </li>
          <li>
            <strong>Najlepsze połączenia:</strong> WBTB + WILD, WILD + afirmacje, WILD + słuchawki audio do relaksu.
          </li>
        </ul>
      </section>

      {/* POWRÓT */}
      <div className="text-center pt-6">
        <Link href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow transition">
          ← Wróć do strony głównej
        </Link>
      </div>
    </main>
  );
}
