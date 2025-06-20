export default function RCPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-800 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Techniki Reality Check (Testy Rzeczywistości)</h1>
        
        <p className="mb-6 text-lg leading-relaxed">
          Reality Checks (RC), czyli testy rzeczywistości, to podstawowa i jedna z najważniejszych technik w świadomym śnieniu. 
          Ich celem jest trenowanie nawyku sprawdzania, czy jesteśmy w rzeczywistości czy we śnie. Regularne wykonywanie testów pozwala w końcu wywołać świadomy sen, gdy podczas snu wykonasz jeden z testów i stwierdzisz, że „coś jest nie tak” – to znak, że jesteś w świecie snu.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Popularne techniki Reality Check</h2>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">1. Test z nosem 👃</h3>
          <p className="mb-2 leading-relaxed">
            Najpopularniejszy i najbardziej skuteczny test. Polega na zatkaniu nosa palcami i próbie oddychania przez zatkany nos. 
            Jeśli możesz oddychać, to znaczy, że jesteś we śnie, bo w rzeczywistości oddychanie przez zatkany nos jest niemożliwe.
          </p>
          <p className="mb-2 font-semibold">Ocena skuteczności: <span className="text-yellow-400">⭐⭐⭐⭐⭐ (5/5)</span></p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">2. Test z rękami ✋</h3>
          <p className="mb-2 leading-relaxed">
            Sprawdzasz, czy możesz przejrzeć przez własne dłonie lub czy masz prawidłową liczbę palców. We śnie palce mogą być zniekształcone, mogą się łączyć albo być mniej lub więcej niż zwykle.
          </p>
          <p className="mb-2 font-semibold">Ocena skuteczności: <span className="text-yellow-400">⭐⭐⭐⭐ (4/5)</span></p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">3. Test „Czytania tekstu” 📖</h3>
          <p className="mb-2 leading-relaxed">
            Próbujesz przeczytać jakiś napis, patrzysz na niego, odwracasz wzrok i czytasz ponownie. We śnie tekst często zmienia się lub jest nieczytelny.
          </p>
          <p className="mb-2 font-semibold">Ocena skuteczności: <span className="text-yellow-400">⭐⭐⭐⭐ (4/5)</span></p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">4. Test „Przełączania światła” 💡</h3>
          <p className="mb-2 leading-relaxed">
            Próbujesz włączyć lub wyłączyć światło. We śnie często przyciski światła nie działają, światło może się zmieniać lub nie reagować normalnie.
          </p>
          <p className="mb-2 font-semibold">Ocena skuteczności: <span className="text-yellow-400">⭐⭐⭐ (3/5)</span></p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">5. Test „Skakania” 🦘</h3>
          <p className="mb-2 leading-relaxed">
            W rzeczywistości skaczesz i lądujesz normalnie, ale we śnie możesz latać lub unosić się znacznie dłużej niż w realu.
          </p>
          <p className="mb-2 font-semibold">Ocena skuteczności: <span className="text-yellow-400">⭐⭐⭐ (3/5)</span></p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">6. Test „Zegara cyfrowego” ⏰</h3>
          <p className="mb-2 leading-relaxed">
            Sprawdzasz czas na zegarze cyfrowym, odwracasz wzrok i patrzysz ponownie. We śnie cyfry często się zmieniają lub są niestabilne.
          </p>
          <p className="mb-2 font-semibold">Ocena skuteczności: <span className="text-yellow-400">⭐⭐⭐ (3/5)</span></p>
        </section>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Jak często wykonywać Reality Checks?</h2>
        <p className="mb-6 leading-relaxed">
          Aby technika była skuteczna, testy rzeczywistości muszą stać się nawykiem. Warto wykonywać je kilka razy dziennie – np. co godzinę lub zawsze, gdy masz chwilę przerwy. 
          Najważniejsze, by wykonać test z pełną świadomością i pytaniem „Czy to sen?”.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Wskazówki dla efektywności Reality Checks</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Nie rób testów mechanicznie – zawsze angażuj umysł i pytaj świadomie „Czy to sen?”.</li>
          <li>Stosuj różne testy, by zwiększyć szanse wykrycia snu.</li>
          <li>Łącz reality checks z prowadzeniem dziennika snów i techniką MILD.</li>
          <li>Staraj się robić testy w momentach, gdy coś wydaje Ci się nietypowe w otoczeniu.</li>
        </ul>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-100 transition"
          >
            Powrót do strony głównej
          </a>
        </div>
      </div>
    </main>
  );
}
