'use client';

import Link from 'next/link';

export default function FildPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center text-purple-700">🖐️ FILD – Finger Induced Lucid Dream</h1>

      {/* OPIS TECHNIKI */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-600">📖 Czym jest technika FILD?</h2>
        <p>
          FILD to prosta i skuteczna technika świadomego snienia polegająca na delikatnym poruszaniu palcami podczas zasypiania. Technika ta pomaga utrzymać umysł w stanie czuwania
          podczas zasypiania, co zwiększa szanse na świadomy sen.
        </p>
        <p>
          Polega na bardzo subtelnym i powolnym ruchu palcami (np. wskazującym i środkowym), który jest na tyle lekki, że nie budzi całkowicie, ale pozwala zachować świadomość.
          FILD jest polecana dla osób, które mają problem z utrzymaniem świadomości podczas zasypiania.
        </p>
      </section>

      {/* KROK PO KROKU */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-600">🛠️ Jak wykonać technikę FILD – krok po kroku</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Po 4-6 godzinach snu obudź się na około 20-30 minut (możesz połączyć z WBTB).
          </li>
          <li>
            Połóż się z powrotem do łóżka i zacznij delikatnie poruszać palcami wskazującym i środkowym na ręce (np. stukaj nimi lekko o siebie lub o materac).
          </li>
          <li>
            Staraj się utrzymać lekki ruch palców, jednocześnie relaksując ciało i umysł, pozwalając sobie na ponowne zasypianie.
          </li>
          <li>
            Kontynuuj ruch przez kilka minut, aż wpadniesz w stan świadomego snu.
          </li>
          <li>
            Gdy poczujesz, że zaczynasz śnić, użyj technik stabilizujących świadomy sen (np. pocieranie dłoni, obracanie się w śnie).
          </li>
        </ol>
      </section>

      {/* OPŁACALNOŚĆ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-600">📊 Ocena techniki FILD</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Trudność: ★★☆☆☆ – łatwa do nauczenia, wymaga praktyki subtelnego poruszania palcami.</li>
          <li>Efektywność: ★★★☆☆ – dobra dla osób, które mają problem z utrzymaniem świadomości podczas zasypiania.</li>
          <li>Opłacalność: umiarkowana – warto próbować w połączeniu z innymi technikami (np. WBTB).</li>
          <li>Najczęstsze błędy: zbyt intensywny ruch palców, co prowadzi do przebudzenia; brak relaksu.</li>
          <li>Dla kogo? Dla początkujących i średniozaawansowanych, którzy chcą łatwą technikę do wdrożenia przed snem.</li>
        </ul>
      </section>

      {/* POWRÓT */}
      <div className="text-center pt-6">
        <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded shadow transition">
          ← Wróć do strony głównej
        </Link>
      </div>
    </main>
  );
}
