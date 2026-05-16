# Brain Games

[![Actions Status](https://github.com/ant30111/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ant30111/frontend-project-44/actions)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ant30111_frontend-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ant30111_frontend-project-44)

`Brain Games` is a set of console-based math games built with Node.js. The project includes a shared game engine, interactive command-line input, and separate executable commands for each game.

The player is greeted, enters a name, reads the rules, and then answers 3 questions in a row. A wrong answer ends the session, and 3 correct answers lead to a win.

## Project Description

The project demonstrates how to build a small CLI application with a modular structure:

- a common game runner in `src/index.js`
- a greeting and user input module in `src/cli.js`
- separate game scenarios in `src/games`
- utility functions for calculations in `src/utils`
- executable commands in `bin/`

## Functionality

The project includes 5 games:

- `brain-even` - determine whether a number is even
- `brain-calc` - calculate the result of a random expression
- `brain-gcd` - find the greatest common divisor of two numbers
- `brain-progression` - find the missing number in an arithmetic progression
- `brain-prime` - determine whether a number is prime

Additional command:

- `brain-games` - starts the greeting without launching a game

## Installation and Launch

```bash
npm ci
npm link
```

Run commands:

```bash
brain-games
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```

You can also run the project through Node.js:

```bash
node bin/brain-even.js
```

## Development

```bash
make install
make lint
make lint-fix
```

## Demos

- [Brain Even demo](https://asciinema.org/a/sOULO0s95ntidwWH)
- [Brain Calc demo](https://asciinema.org/a/pV17B7w5BDAFoD4t)
- [Brain Gcd demo](https://asciinema.org/a/5b6qmZLBgFZPuDsf)
- [Brain Progression demo](https://asciinema.org/a/NrO6BZDQpnj1Tfox)
- [Brain Prime demo](https://asciinema.org/a/pkHP8cNPFYfJPOUI)
