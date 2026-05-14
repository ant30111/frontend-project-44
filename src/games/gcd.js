import findGcd from "../utils/find-gcd.js";

const rule = "Find the greatest common divisor of given numbers.";

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  return {
    question: `${num1} ${num2}`,
    correctAnswer: String(findGcd(num1, num2)),
  };
};

export { rule, getRoundData };