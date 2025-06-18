"use client";

import Link from "next/link";

export default function Cat() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Technika CAT –  Cycle Adjustment Technique</h1>
      <section className="max-w-4xl text-lg leading-relaxed mb-12">
        <p className="mb-6">
          CAT (Cycle Adjustment Technique) to technika zarządzania cyklami snu – dopasowujesz czas zasypiania
          i przebudzeń tak, by ulepszyć przejścia do świadomych snów w fazach REM.
        </p>
        <h2 className="text-2xl font-bold mb-4">Dlaczego działa?</h2>
        <ul className="list-disc list-inside space-y-3 mb-10">
          <li>Pozwala wejść w REM w optymalnych momentach.</li>
          <li>Minimalizuje „przejściowe bóle” związane ze śnieniem.</li>
          <li>Wspiera inne techniki LD (WBTB, WILD itp.).</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Kroki:</h2>
        <ol className="list-decimal list-inside space-y-3 mb-12">
          <li>Obserwuj swoje cykle snu (ok. 90-min).</li>
          <li>Ustaw budzik na koniec cyklu lub skorzystaj z kalkulatora przekazania.</li>
          <li>Obudź się, użyj techniki (WILD/MILD/FILD/PILD).</li>
        </ol>
        <p className="italic text-center">„CAT to precyzyjne wejście w fazę, w której LD jest najłatwiejsze.”</p>
      </section>
      <nav className="w-full flex justify-center">
        <Link href="/" className="bg-indigo-500 hover:bg-indigo-600 transition rounded px-8 py-3 font-semibold text-white text-center">
          Strona Główna
        </Link>
      </nav>
    </main>
  );
}
