'use client';

import Link from 'next/link';

export default function PildPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center text-indigo-700">🌙 PILD – Post-Interrupted Lucid Dream</h1>

      {/* OPIS TECHNIKI */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">📖 Czym jest technika PILD?</h2>
        <p>
          PILD to technika świadomego snienia, która polega na przerwaniu snu w określonym momencie, a następnie powrocie do snu z pełną świadomością, co pomaga przejść do świadomego snu.
          Technika ta jest podobna do WBTB, ale skupia się bardziej na krótkim przerwaniu snu i szybkim ponownym zaśnięciu z intencją świadomego snu.
        </p>
        <p>
          PILD wymaga dyscypliny i planowania, ponieważ ważne jest precyzyjne wybudzenie się po kilku godzinach snu i powrót do łóżka bez dłuższego rozbudzenia.
        </p>
      </section>

      {/* KROK PO KROKU */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">🛠️ Jak wykonać technikę PILD – krok po kroku</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Ustaw alarm na 4-6 godzin od momentu zaśnięcia.
          </li>
          <li>
            Po wybudzeniu się, pozostaj świadomy, unikając w pełni wstawania i jasnych ekranów (np. telefonu).
          </li>
          <li>
            Pozostań w łóżku i staraj się nie poruszać zbyt dużo, koncentrując się na intencji świadomego snu.
          </li>
          <li>
            Skup się na relaksacji ciała i umysłu, nie zasypiaj zbyt głęboko, by nie stracić świadomości.
          </li>
          <li>
            Po chwili zacznij techniki świadomego snu, np. wykonywanie testów rzeczywistości lub wizualizację snu.
          </li>
          <li>
            Pozwól sobie powoli zasnąć, utrzymując świadomość i intencję wejścia w świadomy sen.
          </li>
        </ol>
      </section>

      {/* OPŁACALNOŚĆ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">📊 Ocena techniki PILD</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Trudność: ★★★☆☆ – wymaga dyscypliny i dobrego planowania alarmu.</li>
          <li>Efektywność: ★★★★☆ – skuteczna dla osób, które potrafią szybko zasypiać ponownie z utrzymaną świadomością.</li>
          <li>Opłacalność: wysoka – warto połączyć z innymi technikami, np. MILD lub WILD.</li>
          <li>Najczęstsze błędy: zbyt długie rozbudzenie się, jasne światło lub korzystanie z telefonu.</li>
          <li>Dla kogo? Dla średniozaawansowanych i zaawansowanych świadomych śniących.</li>
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
