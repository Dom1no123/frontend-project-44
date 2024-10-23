#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();
const isEven = (num) => num % 2 === 0;
const isEvenGame = () => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNum}`);

    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
isEvenGame();
export default isEvenGame;
