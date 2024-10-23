#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();
let correctAnswers = 0;
const operators = ['+', '-', '*',] 
function getRandomOperator() {
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];

}
const calculator  = () => {
const firstNumber = Math.floor(Math.random() * 100) + 1;
const secondNumber= Math.floor(Math.random() * 100) + 1;
console.log(`Question: ${firstNumber} ${operators[randomIndex]} ${secondNumber}`)
while(correctAnswers < 3){

}

}