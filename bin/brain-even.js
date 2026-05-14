#!/usr/bin/env node
import runGame from "../src/index.js";
import {rule, getRoundData} from "../src/games/even.js";

runGame(rule, getRoundData);