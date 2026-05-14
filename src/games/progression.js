import getProgression from '../utils/progression-calc.js'

const rule = 'What number is missing in the progression?'

const getRoundData = () => {
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 100)
  const step = getRandomNumber(1, 10)

  const progression = getProgression(start, step, length)
  const randomIndex = Math.floor(Math.random() * progression.length)

  const correctAnswer = String(progression[randomIndex])
  progression[randomIndex] = '..'

  return {
    question: String(progression.join(' ')),
    correctAnswer,
  }
}

export { rule, getRoundData }
