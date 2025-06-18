"use client";

import Link from "next/link";

export default function Pild() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Technika PILD –  Post-Interrupted Lucid Dream</h1>
      <section className="max-w-4xl text-lg leading-relaxed mb-12">
        <p className="mb-6">
          PILD (Prospective Induction of Lucid Dream) to technika łącząca automatyczne myślenie i
          mentalne przygotowanie. Przed snem powtarzasz frazę „następny sen będzie świadomym snem”
          i wyobrażasz sobie siebie we śnie – co napędza intencję w nocy.
        </p>
        <h2 className="text-2xl font-bold mb-4">Dlaczego działa?</h2>
        <ul className="list-disc list-inside space-y-3 mb-10">
          <li>Łączy mentalną wizualizację i intencję.</li>
          <li>Działa bez przerw w śnie – stosujesz go tuż przed zaśnięciem.</li>
          <li>Wzmacnia pamięć snów i świadomość w fazie REM.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Kroki:</h2>
        <ol className="list-decimal list-inside space-y-3 mb-12">
          <li>Prowadź dziennik snów.</li>
          <li>Wieczorem powtarzaj frazę intencyjną i wyobraź sobie sen.</li>
          <li>Skup się na świadomym wejściu w sen podczas zaśnięcia.</li>
        </ol>
        <p className="italic text-center">„PILD wzmacnia mentalnie – to intencja + wizualizacja = LD.”</p>
      </section>
      <nav className="w-full flex justify-center">
        <Link href="/" className="bg-indigo-500 hover:bg-indigo-600 transition rounded px-8 py-3 font-semibold text-white text-center">
          Strona Główna
        </Link>
      </nav>
    </main>
  );
}
