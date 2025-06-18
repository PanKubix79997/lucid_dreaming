// app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 to-purple-800 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Świadome Śnienie (Lucid Dreaming)
        </h1>

        <p className="text-lg mb-6 text-center">
          Świadome śnienie to stan, w którym wiesz, że śnisz – i możesz ten sen kontrolować. To
          fascynujące doświadczenie, które otwiera drzwi do nieograniczonych możliwości. Możesz
          latać, eksplorować światy, uczyć się, trenować umiejętności, a nawet rozmawiać z podświadomością.
          Ten projekt to kompendium najlepszych technik osiągania LD – czyli świadomych snów.
        </p>

        <section className="bg-white/10 rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Dlaczego warto praktykować LD?</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Pełna kontrola nad snem – tworzysz swoją rzeczywistość.</li>
            <li>Trening kreatywności i rozwiązywania problemów.</li>
            <li>Poprawa pamięci i koncentracji w życiu codziennym.</li>
            <li>Możliwość przeżywania niemożliwych doznań: latania, teleportacji, supermocy.</li>
            <li>Lepsze zrozumienie siebie i swoich emocji.</li>
            <li>Redukcja koszmarów – świadomy sen daje Ci kontrolę.</li>
          </ul>
        </section>

        <section className="bg-white/10 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Techniki LD:</h2>
          <p className="mb-4 text-white">Kliknij na wybraną technikę, aby poznać szczegóły i sposób jej stosowania:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link href="/wild" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg shadow">
              WILD
            </Link>
            <Link href="/wbtb" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg shadow">
              WBTB
            </Link>
            <Link href="/pild" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg shadow">
              PILD
            </Link>
            <Link href="/fild" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg shadow">
              FILD
            </Link>
            <Link href="/cat" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg shadow">
              CAT
            </Link>
            <Link href="/mild" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg shadow">
              MILD
            </Link>
            <Link
              href="/dreamcalculator"
              className="bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg shadow col-span-full sm:col-span-3"
            >
              Kalkulator snu
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
