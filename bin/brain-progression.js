#!/usr/bin/env node
import runGame from '../src/index.js'
import { rule, getRoundData } from '../src/games/progression.js'

runGame(rule, getRoundData)
