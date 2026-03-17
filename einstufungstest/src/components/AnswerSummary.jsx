import { useState } from 'react'

export default function AnswerSummary({ answers }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center py-3 px-4 bg-gray-100 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
      >
        <span>Antworten anzeigen ({answers.length})</span>
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          &#9660;
        </span>
      </button>

      {open && (
        <div className="mt-2 space-y-3">
          {answers.map((a, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">
                Frage {i + 1}
              </p>
              <p className="text-sm font-medium text-gray-800 mb-1">
                {a.questionText}
              </p>
              <p className="text-sm text-blue-700">
                &rarr; {a.selectedOption}
                <span className="ml-2 text-gray-400">({a.points} Pkt)</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
