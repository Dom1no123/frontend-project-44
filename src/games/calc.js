#!/usr/bin/env node
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
      break;
  }
};

export const generateRound = () => {
  const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
  };
  const number1 = makeRandomNum();
  const secondNumber = makeRandomNum();
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${secondNumber}`;
  const answer = String(calculate(number1, secondNumber, operator));
  return [question, answer];
};

const runCalc = () => {
  runGame(gameDescription, generateRound);
};

export default runCalc;
