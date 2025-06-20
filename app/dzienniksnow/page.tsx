// app/dzienniksnow/page.tsx

"use client";

import { useState } from "react";

export default function DziennikSnow() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  return (
    <main className="min-h-screen bg-blue-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-300">📝 Dziennik Snów</h1>

        <p className="mb-6 text-lg leading-relaxed">
          Witaj w Twoim osobistym dzienniku snów! Zapisuj tutaj swoje sny zaraz po przebudzeniu.
          Nie zapomnij zrobić screenshota, aby zachować sen, ponieważ dane nie są zapisywane trwale (brak backendu).
        </p>

        <div className="mb-4">
          <label className="block text-sm mb-1">Tytuł snu:</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-blue-800 text-white"
            placeholder="Np. Latanie nad miastem"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Data snu:</label>
          <input
            type="date"
            className="w-full p-2 rounded bg-blue-800 text-white"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Treść snu:</label>
          <textarea
            rows={12}
            className="w-full p-2 rounded bg-blue-800 text-white"
            placeholder="Zacznij pisać swój sen tutaj..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="bg-blue-900 border border-blue-600 rounded p-4 text-sm">
          <p className="mb-2">💡 Porada: Aby zapisać swój sen, zrób screenshota (np. Shift+Win+S na Windows lub Cmd+Shift+4 na Mac).</p>
          <p>W przyszłości możliwe będzie zapisywanie danych trwale.</p>
        </div>
      </div>
    </main>
  );
}
