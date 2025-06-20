// app/sennaankieta/page.tsx

"use client";

import { useState } from "react";

export default function SennaAnkieta() {
  const [form, setForm] = useState({
    experiencedParalysis: "",
    lucidDreams: "",
    sleepQuality: "",
    fearDuringParalysis: "",
    recordDreams: "",
    comment: "",
  });

  return (
    <main className="min-h-screen bg-blue-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-300">📊 Senna Ankieta</h1>

        <p className="mb-6 text-lg">
          Ta anonimowa ankieta dotyczy Twoich doświadczeń związanych ze snami, paraliżem sennym
          oraz jakością snu. Nie wysyłamy żadnych danych – możesz zrobić zrzut ekranu dla własnych potrzeb.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">
              Czy doświadczyłeś(aś) kiedyś paraliżu sennego?
            </label>
            <select
              className="w-full p-2 bg-blue-800 rounded"
              value={form.experiencedParalysis}
              onChange={(e) =>
                setForm({ ...form, experiencedParalysis: e.target.value })
              }
            >
              <option value="">Wybierz odpowiedź</option>
              <option value="tak">Tak</option>
              <option value="nie">Nie</option>
              <option value="niepewność">Nie jestem pewien/pewna</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Jak często masz świadome sny (lucid dreams)?
            </label>
            <select
              className="w-full p-2 bg-blue-800 rounded"
              value={form.lucidDreams}
              onChange={(e) =>
                setForm({ ...form, lucidDreams: e.target.value })
              }
            >
              <option value="">Wybierz odpowiedź</option>
              <option value="nigdy">Nigdy</option>
              <option value="rzadko">Rzadko</option>
              <option value="czasami">Czasami</option>
              <option value="często">Często</option>
              <option value="zawsze">Prawie każdej nocy</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Jak oceniasz swoją jakość snu?
            </label>
            <select
              className="w-full p-2 bg-blue-800 rounded"
              value={form.sleepQuality}
              onChange={(e) =>
                setForm({ ...form, sleepQuality: e.target.value })
              }
            >
              <option value="">Wybierz odpowiedź</option>
              <option value="bardzo zła">Bardzo zła</option>
              <option value="zła">Zła</option>
              <option value="średnia">Średnia</option>
              <option value="dobra">Dobra</option>
              <option value="świetna">Świetna</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Czy odczuwałeś(aś) strach podczas paraliżu sennego?
            </label>
            <select
              className="w-full p-2 bg-blue-800 rounded"
              value={form.fearDuringParalysis}
              onChange={(e) =>
                setForm({ ...form, fearDuringParalysis: e.target.value })
              }
            >
              <option value="">Wybierz odpowiedź</option>
              <option value="tak">Tak</option>
              <option value="nie">Nie</option>
              <option value="nie doświadczyłem">Nie doświadczyłem/am paraliżu</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Czy prowadzisz dziennik snów?
            </label>
            <select
              className="w-full p-2 bg-blue-800 rounded"
              value={form.recordDreams}
              onChange={(e) =>
                setForm({ ...form, recordDreams: e.target.value })
              }
            >
              <option value="">Wybierz odpowiedź</option>
              <option value="tak">Tak, regularnie</option>
              <option value="czasami">Czasami</option>
              <option value="nie">Nie</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Dodatkowe uwagi lub opis snu/paraliżu:
            </label>
            <textarea
              className="w-full p-2 bg-blue-800 rounded"
              rows={6}
              placeholder="Np. Zobaczyłem cień w rogu pokoju..."
              value={form.comment}
              onChange={(e) =>
                setForm({ ...form, comment: e.target.value })
              }
            />
          </div>
        </form>

        <div className="mt-8 bg-blue-900 border border-blue-700 rounded p-4 text-sm">
          <p>📸 Po wypełnieniu możesz zrobić screenshot, aby zapisać wyniki. Dane nie są przesyłane do serwera.</p>
        </div>
      </div>
    </main>
  );
}
