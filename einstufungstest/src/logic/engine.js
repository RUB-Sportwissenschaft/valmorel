import { fixedQuestions, adaptivePools, commonQuestions } from '../data/questions'

const TOTAL_QUESTIONS = 10
const FIXED_COUNT = 5
const ADAPTIVE_COUNT = 2
const COMMON_COUNT = 3

// Pool thresholds based on fixed questions score (max 20)
const LOW_THRESHOLD = 8
const HIGH_THRESHOLD = 14

export function createInitialState() {
  return {
    phase: 'fixed', // 'fixed' | 'adaptive' | 'common' | 'done'
    answers: [],
    fixedScore: 0,
    totalScore: 0,
    questionIndex: 0,
    selectedPool: null,
    questionSequence: [...fixedQuestions],
  }
}

export function getCurrentQuestion(state) {
  if (state.questionIndex >= TOTAL_QUESTIONS) return null
  return state.questionSequence[state.questionIndex]
}

export function submitAnswer(state, points) {
  const currentQuestion = state.questionSequence[state.questionIndex]
  const newAnswers = [
    ...state.answers,
    {
      questionId: currentQuestion.id,
      questionText: currentQuestion.text,
      selectedOption: currentQuestion.options[points]?.text ?? '',
      points,
    },
  ]

  const newIndex = state.questionIndex + 1
  const newTotalScore = state.totalScore + points

  // After fixed questions: select adaptive pool and build remaining sequence
  if (newIndex === FIXED_COUNT) {
    const fixedScore = newTotalScore
    let poolKey
    if (fixedScore < LOW_THRESHOLD) {
      poolKey = 'low'
    } else if (fixedScore >= HIGH_THRESHOLD) {
      poolKey = 'high'
    } else {
      poolKey = 'mid'
    }

    const adaptiveQs = adaptivePools[poolKey].slice(0, ADAPTIVE_COUNT)
    const commonQs = commonQuestions.slice(0, COMMON_COUNT)
    const fullSequence = [...state.questionSequence, ...adaptiveQs, ...commonQs]

    return {
      ...state,
      answers: newAnswers,
      fixedScore,
      totalScore: newTotalScore,
      questionIndex: newIndex,
      selectedPool: poolKey,
      phase: 'adaptive',
      questionSequence: fullSequence,
    }
  }

  // Determine phase
  let phase = state.phase
  if (newIndex >= FIXED_COUNT + ADAPTIVE_COUNT) {
    phase = 'common'
  }
  if (newIndex >= TOTAL_QUESTIONS) {
    phase = 'done'
  }

  return {
    ...state,
    answers: newAnswers,
    totalScore: newTotalScore,
    questionIndex: newIndex,
    phase,
  }
}

export function computeLevel(totalScore) {
  // Max 40 points, map to levels 1-8
  // 0-5 → 1, 6-10 → 2, 11-15 → 3, 16-20 → 4, 21-25 → 5, 26-30 → 6, 31-35 → 7, 36-40 → 8
  if (totalScore <= 5) return 1
  if (totalScore <= 10) return 2
  if (totalScore <= 15) return 3
  if (totalScore <= 20) return 4
  if (totalScore <= 25) return 5
  if (totalScore <= 30) return 6
  if (totalScore <= 35) return 7
  return 8
}
