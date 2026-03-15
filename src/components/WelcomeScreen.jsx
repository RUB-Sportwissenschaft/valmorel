export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="mb-8">
        <div className="text-6xl mb-4">&#9968;</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          RUB Skiausbildung
        </h1>
        <h2 className="text-xl text-gray-600">Einstufungstest</h2>
      </div>

      <div className="max-w-sm mb-10 text-gray-600 text-base leading-relaxed">
        <p className="mb-3">
          10 Fragen zu deinem Skikoennen. Beantworte ehrlich &mdash; es gibt
          keine falschen Antworten.
        </p>
        <p>
          Am Ende erhaeltst du deine Gruppeneinteilung (Level 1&ndash;8).
        </p>
      </div>

      <button
        onClick={onStart}
        className="w-full max-w-xs bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-2xl active:scale-95 transition-transform shadow-lg hover:bg-blue-700"
      >
        Test starten
      </button>

      <p className="mt-6 text-sm text-gray-400">
        Dauer: ca. 2&ndash;3 Minuten
      </p>
    </div>
  )
}
