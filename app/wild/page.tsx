// app/wild/page.tsx
"use client";

import Link from "next/link";

export default function WildPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-800 to-purple-900 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Technika WILD (Wake Initiated Lucid Dream)</h1>

        <p className="text-lg mb-6">
          WILD to jedna z najbardziej zaawansowanych technik świadomego śnienia. Polega na
          zachowaniu świadomości podczas zasypiania – przechodzisz bezpośrednio z jawy do świadomego snu,
          bez utraty przytomności umysłu.
        </p>

        <section className="bg-white/10 rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Jak działa WILD?</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Kładziesz się do łóżka i relaksujesz ciało maksymalnie.</li>
            <li>Utrzymujesz świadomość – obserwujesz myśli, obrazy, dźwięki (hipnagogi).</li>
            <li>Ciało zasypia, umysł pozostaje czujny – to klucz.</li>
            <li>Pojawiają się wibracje, paraliż senny – nie bój się, to znak że zbliża się LD.</li>
            <li>Wchodzisz prosto do snu – np. pojawia się obraz pokoju, sen się materializuje.</li>
          </ul>
        </section>

        <section className="bg-white/10 rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Wskazówki dla początkujących</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Najlepiej działa w połączeniu z techniką WBTB (obudzenie się po 5-6h snu).</li>
            <li>Nie ruszaj się, gdy poczujesz paraliż – obserwuj spokojnie.</li>
            <li>Nie analizuj za dużo – pozwól ciału zasnąć, a umysłowi dryfować przytomnie.</li>
            <li>Wyobrażaj sobie spokojne sceny – np. schody, tunel, obracanie się.</li>
          </ul>
        </section>

        <section className="bg-white/10 rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Zalety i wady WILD</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li><strong>+ Bezpośrednie wejście do snu:</strong> pełna kontrola nad przejściem.</li>
            <li><strong>+ Realistyczne sny:</strong> często bardzo wyraźne, długie i głębokie LD.</li>
            <li><strong>− Trudność techniczna:</strong> wymaga praktyki, cierpliwości i relaksu.</li>
            <li><strong>− Paraliż senny:</strong> może wywołać lęk, ale jest całkowicie bezpieczny.</li>
          </ul>
        </section>

        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg shadow text-lg flex items-center gap-2"
          >
            ← Powrót do strony głównej
          </Link>
        </div>
      </div>
    </main>
  );
}
