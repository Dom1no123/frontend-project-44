#!/usr/bin/env node
/* eslint-disable eqeqeq */
// eslint-disable-next-line import/extensions
import runGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

// eslint-disable-next-line consistent-return
const correctSolution = (firstNum, secondNum, operator) => {
  if (operator === '+') {
    return firstNum + secondNum;
  } if (operator === '-') {
    return firstNum - secondNum;
  } if (operator === '*') {
    return firstNum * secondNum;
  }
};

export const generateGameData = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(correctSolution(firstNumber, secondNumber, operator));
  return [question, correctAnswer];
};

const runCalc = () => {
  runGame(gameDescription, generateGameData);
};

export default runCalc;
