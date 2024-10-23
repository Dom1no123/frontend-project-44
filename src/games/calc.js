#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const userName = greeting();
const correctAnswers = 0;
console.log('What is the result of the expression?');
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const correctSolution = (firstNum, secondNum, operator) => {
  if (operator == '+') {
    return firstNum + secondNum;
  } if (operator == '-') {
    return firstNum - secondNum;
  } if (operator == '*') {
    return firstNum * secondNum;
  }
};

const calculator = () => {
  while (correctAnswers < 3) {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    const operator = getRandomOperator();
    const correctAnswer = correctSolution(firstNumber, secondNumber, operator);

    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer == userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${userName}!`);
};
export default calculator;
