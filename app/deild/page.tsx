export default function DEILDPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-center">Technika DEILD (Dream Exit Initiated Lucid Dream)</h1>

        <section className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Czym jest DEILD?</h2>
          <p className="text-lg leading-relaxed">
            DEILD to technika świadomego śnienia, która polega na zachowaniu świadomości po wyjściu z normalnego snu. Gdy się budzisz,
            zamiast się ruszać, starasz się natychmiast wrócić do snu z zamiarem pozostania świadomym. DEILD jest techniką przejściową,
            podobną do WILD, ale bardziej zależną od dokładnego momentu wybudzenia.
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Krok po kroku</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Zasypiaj z intencją, że chcesz uświadomić się po wybudzeniu z jakiegokolwiek snu.</li>
            <li>Gdy się obudzisz – <strong>nie ruszaj się, nie otwieraj oczu</strong>.</li>
            <li>Utrzymaj świadomość i wracaj spokojnie do snu.</li>
            <li>Wyobraź sobie poprzedni sen, lub zanurz się w wyobrażonym świecie.</li>
            <li>Pozostań spokojny – sen wróci, tym razem jako świadomy.</li>
          </ol>
        </section>

        <section className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Skuteczność</h2>
          <p className="text-lg">⭐⭐⭐✰✰ – technika średnio skuteczna, ale bardzo efektywna przy dobrym timingu.</p>
        </section>

        <section className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Trudność</h2>
          <p className="text-lg">⭐⭐⭐⭐✰ – trudna, wymaga dobrej samokontroli przy wybudzeniu i unikania poruszania się.</p>
        </section>

        <div className="text-center pt-8">
          <a href="/" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition">
            Powrót do strony głównej
          </a>
        </div>
      </div>
    </main>
  );
}
