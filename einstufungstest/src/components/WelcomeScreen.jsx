import { useState } from 'react'

export default function WelcomeScreen({ onStart }) {
  const [name, setName] = useState('')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="mb-8">
        <div className="text-6xl mb-4">&#9968;</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          RUB Skiausbildung
        </h1>
        <h2 className="text-xl text-gray-600">Einstufungstest</h2>
      </div>

      <div className="max-w-sm mb-8 text-gray-600 text-base leading-relaxed">
        <p className="mb-3">
          10 Fragen zu deinem Skikoennen. Beantworte ehrlich &mdash; es gibt
          keine falschen Antworten.
        </p>
        <p>
          Am Ende erhaeltst du deine Gruppeneinteilung (Level 1&ndash;8).
        </p>
      </div>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Vor- und Nachname"
        className="w-full max-w-xs mb-6 px-4 py-3 rounded-xl border-2 border-gray-200 text-center text-base text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
      />

      <button
        onClick={() => onStart(name.trim())}
        disabled={!name.trim()}
        className="w-full max-w-xs bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-2xl active:scale-95 transition-transform shadow-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:shadow-none disabled:active:scale-100"
      >
        Test starten
      </button>

      <p className="mt-6 text-sm text-gray-400">
        Dauer: ca. 2&ndash;3 Minuten
      </p>
    </div>
  )
}
