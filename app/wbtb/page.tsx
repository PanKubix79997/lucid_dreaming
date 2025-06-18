'use client';

import Link from 'next/link';

export default function WbtbPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center text-purple-700">⏰ WBTB – Wake Back To Bed</h1>

      {/* OPIS TECHNIKI */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-600">🧠 Czym jest technika WBTB?</h2>
        <p>
          WBTB (Wake Back To Bed) to jedna z najpotężniejszych i najskuteczniejszych technik świadomego snu. Jej idea jest prosta: budzisz się w środku nocy,
          pozostajesz chwilę świadomy, a potem wracasz do snu z dużo większą szansą na uzyskanie LD.
        </p>
        <p>
          Dlaczego to działa? Po kilku godzinach snu ciało przechodzi w dłuższe fazy REM – to właśnie wtedy śnimy intensywnie. Budząc się w tym czasie, 
          a następnie wracając do snu ze świadomym zamiarem, „wstrzeliwujesz się” w idealny moment na LD.
        </p>
        <p>
          Co ważne – WBTB nie jest techniką samą w sobie, lecz potężnym *wzmacniaczem* innych technik: WILD, MILD, FILD, SSILD, a nawet DILD. 
          To jak turbo doładowanie każdej z nich.
        </p>
      </section>

      {/* KROK PO KROKU */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-600">🛏️ Jak wykonać technikę WBTB – krok po kroku</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Połóż się spać normalnie:</strong> zaplanuj pobudkę po około 4,5 – 6 godzinach snu (czyli po 3–4 pełnych cyklach). Możesz użyć budzika.
          </li>
          <li>
            <strong>Obudź się:</strong> gdy budzik zadzwoni, wstań. Nie leż w łóżku, tylko się rusz – idź do łazienki, napij się wody, przeczytaj coś o LD (np. swój dziennik snów).
          </li>
          <li>
            <strong>Trzymaj świadomość aktywną przez 10–40 minut:</strong> to kluczowe. Nie możesz się rozbudzić za bardzo (bo nie zaśniesz), ani za mało (bo zadziała jak drzemka). Złoty środek to 15–30 minut aktywności.
          </li>
          <li>
            <strong>Zdecyduj, którą technikę chcesz połączyć z WBTB:</strong> możesz wrócić do łóżka i użyć WILD, MILD, FILD lub SSILD. Sama intencja LD też działa.
          </li>
          <li>
            <strong>Wróć do łóżka i zaśnij z intencją LD:</strong> skup się na afirmacjach, wizualizacji lub relaksie. Teraz Twoje ciało wejdzie w fazę REM, a umysł ma dużo większą szansę na świadomy sen.
          </li>
        </ol>
      </section>

      {/* OPŁACALNOŚĆ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-600">📊 Ocena techniki WBTB</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Trudność:</strong> ★★★☆☆ – łatwa do wykonania technika, ale wymaga dobrej organizacji snu i silnej woli, by wstać w środku nocy.
          </li>
          <li>
            <strong>Efektywność:</strong> ★★★★★ – WBTB jest jedną z najbardziej skutecznych metod osiągania świadomego snu, zwłaszcza w połączeniu z innymi technikami.
          </li>
          <li>
            <strong>Opłacalność:</strong> ekstremalnie wysoka – warto ją wprowadzić do każdej praktyki LD.
          </li>
          <li>
            <strong>Idealne połączenia:</strong> WBTB + WILD, WBTB + MILD, WBTB + FILD, WBTB + SSILD – działa świetnie ze wszystkimi.
          </li>
          <li>
            <strong>Najczęstsze błędy:</strong> Zbyt krótkie wstanie z łóżka, brak intencji LD, zbyt długie rozbudzenie lub zbyt szybki powrót do snu.
          </li>
          <li>
            <strong>Dla kogo?</strong> Dla każdego – początkujących, średnio zaawansowanych i zaawansowanych.
          </li>
        </ul>
      </section>

      {/* POWRÓT */}
      <div className="text-center pt-6">
        <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded shadow transition">
          ← Wróć do strony głównej
        </Link>
      </div>
    </main>
  );
}
