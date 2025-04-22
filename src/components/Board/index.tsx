import React from 'react';
import Cell from '../Cell';
import styles from './Board.module.css';

interface BoardProps {
  onCellClick: (row: number, col: number) => void;
  checkCellStatus: (row: number, col: number) => 'hit' | 'miss' | 'unknown';
}

export default function Board({ onCellClick, checkCellStatus }: BoardProps) {
  return (
    <div className={styles.board}>
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <Cell
            key={`${row}-${col}`}
            status={checkCellStatus(row, col)}
            onClick={() => onCellClick(row, col)}
          />
        )),
      )}
    </div>
  );
}
