'use client';

import React from 'react';
import Link from 'next/link';

export default function CatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Technika CAT (Cycle Adjustment Technique)</h1>

        {/* Opis */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">🧠 Opis techniki</h2>
          <p className="text-lg leading-relaxed">
            Technika CAT (Cycle Adjustment Technique) to metoda osiągania świadomych snów poprzez manipulację cyklem snu i czuwania. 
            Opiera się na idei regularnego budzenia się wcześniej niż zwykle w celu wytrenowania umysłu do przeprowadzania testów rzeczywistości w odpowiednim czasie – 
            wtedy, gdy najbardziej prawdopodobne jest, że śnisz.
          </p>
        </section>

        {/* Krok po kroku */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">🪜 Krok po kroku</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Przez około 7–10 dni budź się codziennie o tej samej porze – np. o 6:30. Budź się wcześnie!</li>
            <li>Po przebudzeniu wykonuj testy rzeczywistości (np. zatykanie nosa i próba oddychania).</li>
            <li>W kolejnym tygodniu – w niektóre dni wróć do spania (np. w poniedziałek, środę i piątek), 
            a w pozostałe dni wstań jak wcześniej.</li>
            <li>Twój umysł zacznie kojarzyć tę godzinę (np. 6:30) z testem rzeczywistości, więc gdy się obudzisz we śnie, 
            istnieje duża szansa, że wykonasz test automatycznie.</li>
          </ol>
        </section>

        {/* Opłacalność i trudność */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">📊 Opłacalność i trudność</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li><strong>Opłacalność:</strong> Wysoka – technika działa bardzo dobrze dla osób z regularnym trybem życia.</li>
            <li><strong>Trudność:</strong> Średnia – wymaga dyscypliny i porannego wstawania.</li>
            <li><strong>Idealna dla:</strong> Osób mających stały harmonogram i chcących zbudować nawyk testów rzeczywistości.</li>
          </ul>
        </section>

        {/* Powrót */}
        <div className="text-center">
          <Link href="/">
            <button className="mt-6 inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
              ← Powrót na stronę główną
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
