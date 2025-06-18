'use client';

import Link from 'next/link';

export default function MildPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-700">🧠 MILD – Mnemonic Induction of Lucid Dreams</h1>

      {/* OPIS TECHNIKI */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">📖 Czym jest technika MILD?</h2>
        <p>
          MILD to jedna z najpopularniejszych i najłatwiejszych do nauczenia się technik świadomego snienia. Została opracowana przez
          Stephena LaBerge’a, pioniera badań nad świadomym snem. Jej nazwa pochodzi od angielskiego „Mnemonic Induction of Lucid Dreams”, co oznacza
          „indukcję świadomego snu za pomocą pamięci”.
        </p>
        <p>
          Technika bazuje na świadomym przypominaniu sobie intencji, że chcesz mieć świadomy sen oraz na wizualizacji ostatniego snu z momentem,
          w którym zdajesz sobie sprawę, że śnisz. Celem jest wytrenowanie umysłu, by rozpoznawał moment snu i aktywował świadomość.
        </p>
        <p>
          MILD jest często stosowana razem z WBTB, ponieważ po przebudzeniu w środku nocy łatwiej utrzymać intencję LD i zwiększyć szansę na sukces.
        </p>
      </section>

      {/* KROK PO KROKU */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">🛠️ Jak wykonać technikę MILD – krok po kroku</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Przebudź się po kilku godzinach snu (np. WBTB):</strong> najlepiej po 4-6 godzinach, gdy fazy REM są dłuższe i bardziej intensywne.
          </li>
          <li>
            <strong>Przypomnij sobie ostatni sen:</strong> postaraj się zapamiętać jak najwięcej szczegółów i moment, w którym mogłeś zdać sobie sprawę, że śnisz.
          </li>
          <li>
            <strong>Powtarzaj intencję:</strong> świadomie powiedz sobie: „Następnym razem, gdy będę śnił, będę świadomy, że śnię.”
          </li>
          <li>
            <strong>Wizualizuj:</strong> wyobraź sobie, że ponownie śnisz ten sen i zauważasz, że śnisz – reagujesz na to z pełną świadomością.
          </li>
          <li>
            <strong>Powtarzaj te kroki, aż zaśniesz:</strong> utrzymuj intencję i wizualizację, aż wpadniesz w sen, który może być świadomy.
          </li>
          <li>
            <strong>Zapisuj sny i LD w dzienniku snów:</strong> systematyczna praca z pamięcią snów pomaga utrzymać i poprawić skuteczność MILD.
          </li>
        </ol>
      </section>

      {/* OPŁACALNOŚĆ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">📊 Ocena techniki MILD</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Trudność:</strong> ★★★☆☆ – wymaga samodyscypliny i koncentracji, zwłaszcza podczas wizualizacji i utrzymywania intencji.
          </li>
          <li>
            <strong>Efektywność:</strong> ★★★★☆ – bardzo skuteczna przy regularnym stosowaniu i w połączeniu z WBTB.
          </li>
          <li>
            <strong>Opłacalność:</strong> wysoka – łatwa do nauki i wdrożenia, dobrze działa dla początkujących i średnio zaawansowanych.
          </li>
          <li>
            <strong>Najczęstsze błędy:</strong> rozproszenie uwagi podczas wizualizacji, brak systematyczności, niewystarczające przypominanie intencji.
          </li>
          <li>
            <strong>Dla kogo?</strong> idealna dla osób, które chcą wytrenować świadomość podczas snu i lubią pracować z pamięcią i wyobraźnią.
          </li>
        </ul>
      </section>

      {/* POWRÓT */}
      <div className="text-center pt-6">
        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition">
          ← Wróć do strony głównej
        </Link>
      </div>
    </main>
  );
}
