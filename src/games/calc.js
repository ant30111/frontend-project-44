const rule = 'What is the result of the expression?'

// eslint-disable-next-line @stylistic/quotes
const arithmeticSigns = ["+", '-', '*']

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 100)
  const num2 = Math.floor(Math.random() * 100)

  const calcOperation = arithmeticSigns[Math.floor(Math.random() * 3)]

  let result

  switch (calcOperation) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    default:
      throw new Error(`Unknown operation: ${calcOperation}`)
  }

  return {
    question: `${num1} ${calcOperation} ${num2}`,
    correctAnswer: String(result),
  }
}

export { rule, getRoundData }
