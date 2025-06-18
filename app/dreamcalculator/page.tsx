"use client";

import React, { useState } from "react";

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function DreamCalculator() {
  const [sleepTime, setSleepTime] = useState<string>("23:00");
  const [wakeTimes, setWakeTimes] = useState<Date[]>([]);

  const calculateWakeTimes = (time: string) => {
    // konwersja czasu HH:MM na Date dzisiejszy dzień
    const [hour, minute] = time.split(":").map(Number);
    const sleepDate = new Date();
    sleepDate.setHours(hour, minute, 0, 0);

    // średni czas zasypiania ~15 min
    const timeToFallAsleep = 15;

    // 90-minutowe cykle snu
    const cycle = 90;

    // liczba cykli do rozważenia (4 do 6 cykli)
    const cycles = [4, 5, 6];

    // wyliczanie czasów wybudzenia
    const wakeUpTimes = cycles.map((c) => {
      const wake = new Date(sleepDate.getTime());
      wake.setMinutes(wake.getMinutes() + timeToFallAsleep + c * cycle);
      return wake;
    });

    setWakeTimes(wakeUpTimes);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSleepTime(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateWakeTimes(sleepTime);
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Kalkulator świadomego snu</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <label htmlFor="sleepTime" className="block mb-2 font-medium">
          Wybierz godzinę zaśnięcia:
        </label>
        <input
          type="time"
          id="sleepTime"
          value={sleepTime}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Oblicz najlepsze czasy wybudzenia
        </button>
      </form>

      {wakeTimes.length > 0 && (
        <section className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Proponowane czasy wybudzenia</h2>
          <ul className="list-disc list-inside space-y-2">
            {wakeTimes.map((time, idx) => (
              <li key={idx} className="text-lg">
                {formatTime(time)} — po {4 + idx} cyklach snu (ok. {90 * (4 + idx)} minut)
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-700">
            <strong>Dlaczego?</strong> Budzenie się na koniec cyklu snu, zwłaszcza fazy REM,
            pozwala poczuć się bardziej wypoczętym i zwiększa szansę na świadomy sen.
          </p>
        </section>
      )}
    </main>
  );
}
