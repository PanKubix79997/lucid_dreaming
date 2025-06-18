"use client";

import Link from "next/link";

export default function Mild() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Technika MILD – Mnemonic Induction of Lucid Dreams</h1>
      <section className="max-w-4xl text-lg leading-relaxed mb-12">
        <p className="mb-6">
          MILD (Mnemonic Induction to Lucid Dream) to technika oparta na pamięci i intencji. Polega na
          powtarzaniu przed snem frazy „następnym razem będę świadomy, że śnię” i przywoływaniu snu
          z poprzednich nocy, aż pojawi się świadomość.
        </p>
        <h2 className="text-2xl font-bold mb-4">Dlaczego działa?</h2>
        <ul className="list-disc list-inside space-y-3 mb-10">
          <li>Stawia intencję doświadczania świadomego snu.</li>
          <li>Wzmacnia pamięć snów i wzorce świadomych snów.</li>
          <li>Łączy się z technikami typu WBTB i WILD.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Kroki:</h2>
        <ol className="list-decimal list-inside space-y-3 mb-12">
          <li>Prowadź dziennik snów – zapisuj każdego ranka.</li>
          <li>Wieczorem przypomnij sobie sen i powtórz intencję.</li>
          <li>W chwili zasypiania powtarzaj frazę mentalnie.</li>
          <li>Jeśli się obudzisz, ponów MILD przez chwilę i zaśnij ponownie.</li>
        </ol>
        <p className="italic text-center">„MILD to trening umysłu – chodzi o utrzymanie świadomości.”</p>
      </section>
      <nav className="w-full flex justify-center">
        <Link href="/" className="bg-indigo-500 hover:bg-indigo-600 transition rounded px-8 py-3 font-semibold text-white text-center">
          Strona Główna
        </Link>
      </nav>
    </main>
  );
}
