export default function AnswerButton({ text, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-4 min-h-14 rounded-xl border-2 border-gray-200 bg-white text-gray-800 text-base leading-snug hover:border-blue-400 hover:bg-blue-50 active:scale-[0.98] active:bg-blue-100 transition-all"
    >
      {text}
    </button>
  )
}
