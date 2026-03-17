import { useState, useCallback, useRef } from 'react'
import { createInitialState, getCurrentQuestion, submitAnswer, computeLevel } from '../logic/engine'

export function useQuiz() {
  const [screen, setScreen] = useState('welcome') // 'welcome' | 'quiz' | 'result'
  const [state, setState] = useState(null)
  const [result, setResult] = useState(null)
  const nameRef = useRef('')

  const startQuiz = useCallback((name) => {
    nameRef.current = name || ''
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
          name: nameRef.current,
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
    nameRef.current = ''
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
