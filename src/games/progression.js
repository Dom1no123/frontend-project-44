#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import runGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (lenght, step, start) => {
  const progression = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lenght; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateGameData = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 5) + 1;
  const progression = generateProgression(length, start, step);
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgression = () => {
  runGame(gameDescription, generateGameData);
};
export default runProgression;
