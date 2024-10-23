#!/usr/bin/env node

import runGame from "../src/index.js";
import isEven from "../src/games/even.js";


isEvenGame = () => runGame(isEven);
isEvenGame();
