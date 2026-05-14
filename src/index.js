import readlineSync from 'readline-sync'
import { greetings } from './cli.js'

const roundsCount = 3

const runGame = (rule, getRoundData) => {
  console.log('Welcome to the Brain Games!')
  const name = greetings()
  console.log(rule)

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getRoundData()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGame
