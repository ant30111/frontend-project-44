import isPrime from "../utils/prime-calc.js";

const rule = "Answer \"yes\" if given number is prime. Otherwise answer \"no\".";

const getRoundData = () => {
  const num = Math.floor(Math.random() * 100);
  const correctAnswer = isPrime(num) ? "yes" : "no";

  return {
    question: String(num),
    correctAnswer,
  };
};

export { rule, getRoundData };