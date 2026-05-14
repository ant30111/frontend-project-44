#!/usr/bin/env node
import runGame from "../src/index.js";
import {rule, getRoundData} from "../src/games/prime.js";

runGame(rule, getRoundData);