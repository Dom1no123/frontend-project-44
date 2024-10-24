#!/usr/bin/env node
import readlineSync from 'readline-sync';


const runGame = (gameDescription, generateGameData) => {
  const roundsCount = 3; // Количество раундов игры
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription); 

  for (let round = 1; round <= roundsCount; round += 1) {
    const [question, correctAnswer] = generateGameData(); 
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;