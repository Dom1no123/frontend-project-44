import runGame from '../index.js';
import makeRandomNum from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown state!');
  }
};

export const generateRound = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = makeRandomNum(operators.length);
  const operator = operators[randomIndex];

  const number1 = makeRandomNum(100, 1);
  const number2 = makeRandomNum(100, 1);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, number2, operator));
  return [question, answer];
};

const runCalc = () => {
  runGame(gameDescription, generateRound);
};

export default runCalc;
