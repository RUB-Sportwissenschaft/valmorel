import { LEVEL_LABELS } from '../data/questions'
import AnswerSummary from './AnswerSummary'
import { exportAsJson } from '../utils/exportJson'
import { exportAsPdf } from '../utils/exportPdf'

const exportBtnCls = 'w-full py-3 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-medium text-sm hover:border-blue-400 hover:bg-blue-50 active:scale-[0.98] transition-all'

export default function ResultScreen({ result, onReset }) {
  const label = LEVEL_LABELS[result.level] || `Level ${result.level}`

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        {result.name && (
          <p className="text-lg font-medium text-gray-700 mb-1">{result.name}</p>
        )}
        <p className="text-sm text-gray-500 mb-2">Deine Einstufung</p>
        <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-5xl font-bold text-white">{result.level}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{label}</h2>
        <p className="text-sm text-gray-500 mt-2">
          {result.totalScore} von {result.maxScore} Punkten
        </p>
      </div>

      <div className="w-full max-w-sm space-y-3 mb-8">
        <button onClick={() => exportAsJson(result)} className={exportBtnCls}>
          Ergebnis als JSON herunterladen
        </button>
        <button onClick={() => exportAsPdf(result)} className={exportBtnCls}>
          Ergebnis als PDF herunterladen
        </button>
      </div>

      <div className="w-full max-w-sm mb-8">
        <AnswerSummary answers={result.answers} />
      </div>

      <button
        onClick={onReset}
        className="text-blue-600 font-medium text-sm hover:underline"
      >
        Nochmal machen
      </button>
    </div>
  )
}
