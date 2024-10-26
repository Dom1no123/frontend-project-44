#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0;

export const generateGameData = () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const question = randomNum;
  const correctAnswer = isEvenNum(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => {
  runGame(gameDescription, generateGameData);
};
export default runEven;
