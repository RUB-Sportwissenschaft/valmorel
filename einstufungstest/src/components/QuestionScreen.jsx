import ProgressBar from './ProgressBar'
import AnswerButton from './AnswerButton'

export default function QuestionScreen({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) {
  return (
    <div className="min-h-screen p-4 flex flex-col">
      <ProgressBar current={questionNumber} total={totalQuestions} />

      <div className="flex-1 flex flex-col justify-center">
        <p className="text-lg font-medium text-gray-900 mb-6 leading-relaxed">
          {question.text}
        </p>

        <div className="flex flex-col gap-3">
          {question.options.map((option, i) => (
            <AnswerButton
              key={i}
              text={option.text}
              onSelect={() => onAnswer(option.points)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
