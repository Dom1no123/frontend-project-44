#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const userName = greeting();
const isEvenNum = (num) => num % 2 === 0;
const isEven = () => {
  let correctAnswers = 0;
  console.log('Answer \'yes\' if number even otherwise answer \'no\'.');
  while (correctAnswers < 3) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNum}`);

    const correctAnswer = isEvenNum(randomNum) ? 'yes' : 'no';
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

export default isEven;
