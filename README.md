# Project Setup

## React + Vite

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Battleship Game Design and Implementation

Design and implement a (partial) Battleship game as a web app.

### Game Overview

In the Battleship game:

- The computer positions five ships of various sizes on a 10x10 board.
- Each ship must be placed horizontally or vertically, without overlapping another ship.
- The player cannot see the ship locations.
- Each round, the player "fires" at a board position of their choosing.
- The computer responds with whether it was a "hit" or a "miss".
- When all tiles of a particular ship have been hit, the computer will indicate that the entire ship has been sunk.
- The game ends when all of the ships have been sunk.

### Game Features

- **Player's Turn**: Select a position to fire.
- **Computer's Response**: Indicate "hit" or "miss".
- **Ship Sinking**: Notify the player when a ship has been sunk.
- **Game Over**: End the game when all ships have been sunk.

### Steps to Set Up:

1. **Clone the Repository**:
   First, clone the project repository to your local machine:
   ```bash
   git clone https://github.com/oreshkin-ay/battleship-game
   cd battleship-game
   npm install
   npm run dev
