#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import runGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const correctSolution = (firstNum, secondNum) => {
  let result = null;
  const maxNum = Math.max(firstNum, secondNum);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= maxNum; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      result = i;
    }
  }
  return result;
};

const generateGameData = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(correctSolution(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const runNod = () => {
  runGame(gameDescription, generateGameData);
};
export default runNod;
