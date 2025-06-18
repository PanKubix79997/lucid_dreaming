'use client';

import Link from 'next/link';

const techniques = [
  { name: 'WILD', href: '/wild' },
  { name: 'WBTB', href: '/wbtb' },
  { name: 'MILD', href: '/mild' },
  { name: 'FILD', href: '/fild' },
  { name: 'PILD', href: '/pild' },
  { name: 'CAT', href: '/cat' },
  { name: 'Dream Calculator', href: '/dreamcalculator' },
];

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-400">Świadome Śnienie (Lucid Dreaming)</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">🧠 Czym jest świadomy sen?</h2>
        <p>
          Świadome śnienie to zjawisko, w którym śniący jest świadomy, że znajduje się w śnie i często może ten sen kontrolować.
          Może latać, odwiedzać nierealne miejsca, spotykać swoje wyobrażenia czy ćwiczyć różne umiejętności.
          To forma "gry w pierwszej osobie" we własnym umyśle.
        </p>
        <p>
          Nie jest to fantazja – istnieją badania naukowe potwierdzające istnienie LD (Lucid Dreams) i aktywności mózgowej podczas takich snów.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">✨ Dlaczego warto?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Możliwość przeżywania niemożliwych doświadczeń (latanie, podróże w czasie, supermoce)</li>
          <li>Rozwój kreatywności i wyobraźni</li>
          <li>Rozwiązywanie problemów we śnie</li>
          <li>Trenowanie umiejętności (nawet sportowych lub wystąpień publicznych!)</li>
          <li>Przeżywanie koszmarów z kontrolą nad snem – leczenie lęków</li>
          <li>Zwiększenie świadomości i uważności w codziennym życiu</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">🛏️ Jak osiągnąć świadomy sen?</h2>
        <p>
          Istnieje wiele technik osiągania LD. Niektóre działają lepiej u początkujących, inne wymagają praktyki i cierpliwości.
          Najważniejsze to prowadzenie dziennika snów i budowanie świadomości w codziennym życiu.
        </p>
        <p>Oto najpopularniejsze techniki:</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techniques.map((tech) => (
            <Link
              key={tech.name}
              href={tech.href}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center transition"
            >
              {tech.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">📅 Dream Calculator – kalkulator faz snu</h2>
        <p>
          Wybierając godzinę pójścia spać, możesz obliczyć potencjalne momenty występowania fazy REM – w której najczęściej występują LD.
          Pomoże ci to zaplanować techniki takie jak WILD czy WBTB.
        </p>
        <Link
          href="/dreamcalculator"
          className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
        >
          Przejdź do Kalkulatora Snu
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-300">⚠️ Czy to jest bezpieczne?</h2>
        <p>
          Tak – świadome śnienie jest całkowicie bezpieczne dla większości osób. Jednak niektóre osoby mogą doświadczyć paraliżu sennego, jeśli nie zrozumieją zasad działania ciała podczas snu.
          Dobrze jest wcześniej poczytać o zjawiskach takich jak:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>paraliż senny (sleep paralysis)</li>
          <li>fałszywe przebudzenia</li>
          <li>świadomość w stanie półsnu</li>
        </ul>
        <p>
          Na tej stronie znajdziesz wszystkie potrzebne informacje, by bezpiecznie zacząć swoją przygodę.
        </p>
      </section>

      <footer className="text-center text-sm text-gray-400 pt-8 border-t border-gray-700 mt-10">
        © {new Date().getFullYear()} LucidDream • Świadome śnienie to przygoda, a nie wyścig. 🌙
      </footer>
    </main>
  );
}
