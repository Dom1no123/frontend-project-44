#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const correctSolution = (num) => {
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    return false;
  }
  return true;
};

const generateGameData = () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const question = randomNum;
  const correctAnswer = correctSolution(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => {
  runGame(gameDescription, generateGameData);
};
export default runPrime;
