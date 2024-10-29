#!/usr/bin/env node
import makeRandomNum from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const correctSolution = (number1, number2) => {
  let result = null;
  const maxNum = Math.max(number1, number2);

  for (let i = 0; i <= maxNum; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const generateRound = () => {
  const number1 = makeRandomNum();
  const number2 = makeRandomNum();
  const question = `${number1} ${number2}`;
  const answer = String(correctSolution(number1, number2));
  return [question, answer];
};

const runNod = () => {
  runGame(gameDescription, generateRound);
};
export default runNod;
