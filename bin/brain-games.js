#!/usr/bin/env node
import greeting from '../src/cli.js';
import runGame from '../src/index.js';

greetingGame = () => runGame(greeting);

greetingGame();
