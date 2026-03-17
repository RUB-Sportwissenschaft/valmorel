import { useQuiz } from './hooks/useQuiz'
import WelcomeScreen from './components/WelcomeScreen'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'

export default function App() {
  const {
    screen,
    currentQuestion,
    questionNumber,
    result,
    startQuiz,
    answerQuestion,
    resetQuiz,
  } = useQuiz()

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {screen === 'welcome' && <WelcomeScreen onStart={startQuiz} />}

      {screen === 'quiz' && currentQuestion && (
        <QuestionScreen
          question={currentQuestion}
          questionNumber={questionNumber}
          totalQuestions={10}
          onAnswer={answerQuestion}
        />
      )}

      {screen === 'result' && result && (
        <ResultScreen result={result} onReset={resetQuiz} />
      )}
    </div>
  )
}
