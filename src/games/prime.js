#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// eslint-disable-next-line consistent-return
const correctSolution = (num) => {
    if (num <= 1) return false; 
    if (num <= 3) return true; 
    if (num % 2 === 0 || num % 3 === 0) return false; 
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false; 
      }
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
