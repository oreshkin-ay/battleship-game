import React from 'react';
import { useState } from 'react';
import Board from './components/Board';
import styles from './App.module.css';
import { ScoreBoard } from './components/ScoreBoard';
import { GameStatus } from './components/GameStatus';
import { ShipStatusList } from './components/ShipStatusList';
import Carrier from './assets/Carrier Shape.png';
import Battleship from './assets/Battleship Shape.png';
import Cruiser from './assets/Cruiser Shape.png';
import Submarine from './assets/Submarine Shape.png';
import Destroyer from './assets/Submarine Shape.png';

type Position = [number, number];

type ShipLayout = {
  ship: string;
  positions: Position[];
  src: string;
};

export const SHIP_LAYOUT: ShipLayout[] = [
  {
    ship: 'carrier',
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
    src: Carrier,
  },
  {
    ship: 'battleship',
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
    src: Battleship,
  },
  {
    ship: 'cruiser',
    positions: [
      [8, 1],
      [8, 2],
      [8, 3],
    ],
    src: Cruiser,
  },
  {
    ship: 'submarine',
    positions: [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
    src: Submarine,
  },
  {
    ship: 'destroyer',
    positions: [
      [0, 0],
      [1, 0],
    ],
    src: Destroyer,
  },
];

export default function App() {
  const [hits, setHits] = useState<Position[]>([]);
  const [misses, setMisses] = useState<Position[]>([]);
  const [sunkShipsCount, setSunkShipsCount] = useState(new Map());
  const [sunkShipsList, setSunkShipsList] = useState<string[]>([]);
  const [player1Score, setPlayer1Score] = useState(0);

  const handleCellClick = (row: number, col: number) => {
    const alreadyFired = hits.concat(misses).some(([r, c]) => r === row && c === col);
    if (alreadyFired) return;

    const shipHit = SHIP_LAYOUT.find(({ positions }) =>
      positions.some(([r, c]) => r === row && c === col),
    );

    if (shipHit) {
      setHits((prevHits) => [...prevHits, [row, col]]);

      setPlayer1Score((prev) => prev + 1);
      const shipPositions = shipHit.positions;
      const newHits = [...hits, [row, col]];
      const isSunk = shipPositions.every((pos) =>
        newHits.some((hit) => hit[0] === pos[0] && hit[1] === pos[1]),
      );

      if (isSunk && !sunkShipsList.includes(shipHit.ship)) {
        setSunkShipsList((prev) => [...prev, shipHit.ship]);
      }

      setSunkShipsCount((prev) => {
        const newSunkShips = new Map(prev);
        newSunkShips.set(
          shipHit.ship,
          newSunkShips.get(shipHit.ship) ? newSunkShips.get(shipHit.ship) + 1 : 1,
        );
        return newSunkShips;
      });
    } else {
      setMisses((prev) => [...prev, [row, col]]);
    }
  };

  const checkCellStatus = (row: number, col: number): 'hit' | 'miss' | 'unknown' => {
    if (hits.some(([r, c]) => r === row && c === col)) return 'hit';
    if (misses.some(([r, c]) => r === row && c === col)) return 'miss';
    return 'unknown';
  };

  if (sunkShipsCount.size === SHIP_LAYOUT.length) {
    return (
      <GameStatus
        reloadGame={() => {
          setHits([]);
          setMisses([]);
          setSunkShipsCount(new Map());
          setSunkShipsList([]);
          setPlayer1Score(0);
        }}
      />
    );
  }

  return (
    <div className={styles.app}>
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <ScoreBoard player1Score={player1Score} player2Score={0} />
          <ShipStatusList sunkShipsCount={sunkShipsCount} />
        </div>
        <div className={styles.boardWrapper}>
          <Board onCellClick={handleCellClick} checkCellStatus={checkCellStatus} />
        </div>
      </div>
    </div>
  );
}
