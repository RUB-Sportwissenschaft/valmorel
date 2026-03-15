import { useState, useCallback } from 'react'
import { createInitialState, getCurrentQuestion, submitAnswer, computeLevel } from '../logic/engine'

export function useQuiz() {
  const [screen, setScreen] = useState('welcome') // 'welcome' | 'quiz' | 'result'
  const [state, setState] = useState(null)
  const [result, setResult] = useState(null)

  const startQuiz = useCallback(() => {
    setState(createInitialState())
    setResult(null)
    setScreen('quiz')
  }, [])

  const answerQuestion = useCallback((points) => {
    setState((prev) => {
      const next = submitAnswer(prev, points)

      if (next.phase === 'done') {
        const level = computeLevel(next.totalScore)
        setResult({
          level,
          totalScore: next.totalScore,
          maxScore: 40,
          answers: next.answers,
          selectedPool: next.selectedPool,
          timestamp: new Date().toISOString(),
        })
        setScreen('result')
      }

      return next
    })
  }, [])

  const resetQuiz = useCallback(() => {
    setState(null)
    setResult(null)
    setScreen('welcome')
  }, [])

  const currentQuestion = state ? getCurrentQuestion(state) : null
  const questionNumber = state ? state.questionIndex + 1 : 0

  return {
    screen,
    currentQuestion,
    questionNumber,
    result,
    startQuiz,
    answerQuestion,
    resetQuiz,
  }
}
