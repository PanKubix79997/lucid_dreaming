"use client";

import Link from "next/link";

export default function Fild() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Technika FILD – Finger Induced Lucid Dream</h1>
      <section className="max-w-4xl text-lg leading-relaxed mb-12">
        <p className="mb-6">
          FILD (Finger Induced Lucid Dream) to technika wykorzystująca delikatne poruszanie palcami
          tuż przed zaśnięciem. Palce wykonują drobne, subtelne ruchy (np. dotykanie kciuka),
          co pomaga utrzymać ciało w stanie relaksu, a umysł w stanie czujności.
        </p>
        <h2 className="text-2xl font-bold mb-4">Dlaczego działa?</h2>
        <ul className="list-disc list-inside space-y-3 mb-10">
          <li>Palcowanie pomaga utrzymać świadomość, nie budząc ciała.</li>
          <li>Łączy się z WBTB – po przebudzeniu wykonujesz FILD.</li>
          <li>Reagujesz na hipnagogię i łatwo wchodzisz w LD.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Kroki:</h2>
        <ol className="list-decimal list-inside space-y-3 mb-12">
          <li>Zaśnij normalnie.</li>
          <li>Po 4–6 godzinach obudź się na krótko.</li>
          <li>Połóż się i zacznij bardzo delikatnie poruszać palcami.</li>
          <li>Obserwuj hipnagogiczne obrazy i odczuwaj paraliż – wejdź w LD.</li>
        </ol>
        <p className="italic text-center">„FILD to delikatne przypomnienie świadomości, bez przebudzenia.”</p>
      </section>
      <nav className="w-full flex justify-center">
        <Link href="/" className="bg-indigo-500 hover:bg-indigo-600 transition rounded px-8 py-3 font-semibold text-white text-center">
          Strona Główna
        </Link>
      </nav>
    </main>
  );
}
