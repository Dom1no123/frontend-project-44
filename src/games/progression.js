import runGame from '../index.js';
import makeRandomNum from '../utils.js'

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (lenght, step, start) => {
  const progression = [];
  for (let i = 0; i < lenght; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = makeRandomNum(6, 5);
  const start = makeRandomNum(10);
  const step = makeRandomNum(5, 1);
  const progression = generateProgression(length, start, step);
  const hiddenIndex = makeRandomNum(length);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runProgression = () => {
  runGame(gameDescription, generateRound);
};
export default runProgression;
