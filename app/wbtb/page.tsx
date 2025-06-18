"use client";

import Link from "next/link";

export default function Wbtb() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Technika WBTB – Wake Back To Bed</h1>
      <section className="max-w-4xl text-lg leading-relaxed mb-12">
        <p className="mb-6">
          WBTB (Wake Back To Bed) to technika polegająca na krótkiej przerwie w śnie – budzisz się po 4–6 godzinach snu,
          zostajesz pobudzony na 20–60 minut, a potem wracasz do łóżka z intencją świadomego śnienia. Pozwala to wejść w LD ze
          świadomością, bo przywraca aktywność mózgu.
        </p>
        <h2 className="text-2xl font-bold mb-4">Dlaczego działa?</h2>
        <ul className="list-disc list-inside space-y-3 mb-10">
          <li>Mózg po przerwie działa bardziej aktywnie, co ułatwia świadomość we śnie.</li>
          <li>Śpisz już w głębszej fazie REM, co zwiększa szanse na świadome sny.</li>
          <li>Łączy się świetnie z WILD, MILD, FILD itp.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Jak stosować?</h2>
        <ol className="list-decimal list-inside space-y-3 mb-12">
          <li>Zaśnij około godz. 22–23.</li>
          <li>Obudź się po 4–6 godzinach.</li>
          <li>Pozostań cicho, czytaj o LD lub medytuj przez 20–60 minut.</li>
          <li>Połóż się z intencją świadomego snu i stosuj technikę WILD/MILD.</li>
        </ol>
        <p className="italic text-center">„WBTB daje mózgowi stan gotowości – to idealna baza pod każdą technikę LD.”</p>
      </section>
      <nav className="w-full flex justify-center">
        <Link href="/" className="bg-indigo-500 hover:bg-indigo-600 transition rounded px-8 py-3 font-semibold text-white text-center">
          Strona Główna
        </Link>
      </nav>
    </main>
  );
}
