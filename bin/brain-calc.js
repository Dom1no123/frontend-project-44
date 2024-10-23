#!/usr/bin/env node
import calculator from '../src/games/calc.js';
import runGame from '../src/index.js';

const calculatorGame = () => runGame(calculator);
calculatorGame();
