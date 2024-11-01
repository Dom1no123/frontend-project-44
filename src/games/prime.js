import makeRandomNum from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNum = makeRandomNum(100, 1);
  const answer = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, answer];
};

const runPrime = () => {
  runGame(gameDescription, generateRound);
};

export default runPrime;
