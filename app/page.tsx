import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
        Świadome Śnienie – Twoja Droga do Własnych Snów
      </h1>

      <p className="mb-6 max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
        Czy zastanawiałeś się kiedyś, co by było, gdybyś mógł kontrolować swoje sny? Świadome śnienie (lucid dreaming) to zjawisko, w którym jesteś świadomy, że śnisz – a co więcej, możesz wpływać na przebieg snu. To potężne narzędzie do kreatywności, relaksu, eksploracji podświadomości, a także przezwyciężania koszmarów czy lęków.
      </p>

      <p className="mb-6 max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
        Na tej stronie znajdziesz przewodniki po najskuteczniejszych metodach osiągania świadomego snu. Niezależnie od tego, czy jesteś początkujący, czy masz już doświadczenie – każda z poniższych technik może być Twoim kluczem do świata snów.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-10">
        <Link href="/wild">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Technika WILD
          </button>
        </Link>
        <Link href="/cat">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Technika CAT
          </button>
        </Link>
        <Link href="/mild">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Technika MILD
          </button>
        </Link>
        <Link href="/fild">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Technika FILD
          </button>
        </Link>
        <Link href="/ssild">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Technika SSILD
          </button>
        </Link>
        <Link href="/pild">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Technika PILD
          </button>
        </Link>
        <Link href="/rc">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Reality Checks (RC)
          </button>
        </Link>
        <Link href="/ada">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Technika ADA
          </button>
        </Link>
        <Link href="/paralizsenny">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Paraliż Senny
          </button>
        </Link>
        <Link href="/deild">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Technika DEILD
          </button>
        </Link>
        <Link href="/dzienniksnow">
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 w-full">
            Dziennik Snów
          </button>
        </Link>
      </div>

      <p className="mt-12 text-center text-gray-600">
        Chcesz zapisać swój sen? Przejdź do: <Link href="/dzienniksnow" className="text-blue-700 underline">Dziennik Snów</Link>
      </p>
    </main>
  );
}
