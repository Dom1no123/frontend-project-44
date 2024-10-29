#!/usr/bin/env node

import runGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (lenght, step, start) => {
  const progression = [];
  for (let i = 0; i < lenght; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 5) + 1;
  const progression = generateProgression(length, start, step);
  const hiddenIndex = Math.floor(Math.random() * length);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runProgression = () => {
  runGame(gameDescription, generateRound);
};
export default runProgression;
