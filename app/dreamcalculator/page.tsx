"use client";

import { useState } from "react";
import Link from "next/link";

export default function DreamCalculator() {
  const [time, setTime] = useState("");
  const [calcs, setCalcs] = useState<string[]>([]);

  const calculate = () => {
    const [h, m] = time.split(":").map(Number);
    if (
      isNaN(h) ||
      isNaN(m) ||
      h < 0 ||
      h > 23 ||
      m < 0 ||
      m > 59
    ) {
      setCalcs(["Wpisz poprawną godzinę w formacie HH:MM"]);
      return;
    }
    const ok = [];
    let totalMinutes = h * 60 + m;
    for (let i = 1; i <= 6; i++) {
      totalMinutes += 90;
      const hh = Math.floor(totalMinutes / 60) % 24;
      const mm = totalMinutes % 60;
      ok.push(`Faza REM #${i}: ${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}`);
    }
    setCalcs(ok);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-center"> Dream Calculator (co 90 minut)</h1>
      <p className="max-w-2xl text-center mb-8">
        Wprowadź godzinę, o której pójdziesz spać, a kalkulator wyliczy przybliżone fazy REM co 90 minut.
      </p>
      <div className="flex mb-8 gap-2">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="bg-white text-black rounded px-4 py-2"
        />
        <button
          onClick={calculate}
          className="bg-indigo-500 hover:bg-indigo-600 transition rounded px-6 py-2 font-semibold"
        >
          Kalkuluj
        </button>
      </div>
      {calcs.length > 0 && (
        <ul className="space-y-2 mb-8 text-center">
          {calcs.map((c, idx) => (
            <li key={idx} className="bg-white/20 rounded p-2 w-64 mx-auto">{c}</li>
          ))}
        </ul>
      )}
      <nav className="w-full flex justify-center">
        <Link href="/" className="bg-indigo-500 hover:bg-indigo-600 transition rounded px-8 py-3 font-semibold text-white text-center">
          Strona Główna
        </Link>
      </nav>
    </main>
  );
}
