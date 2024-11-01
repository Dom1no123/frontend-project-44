import runGame from '../index.js';
import makeRandomNum from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export const generateRound = () => {
  const randomNum = makeRandomNum(100, 1);
  const question = randomNum;
  const answer = isEven(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const runEven = () => {
  runGame(gameDescription, generateRound);
};
export default runEven;
