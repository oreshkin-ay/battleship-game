import React from 'react';
import styles from './GameStatus.module.css';

export function GameStatus({ reloadGame }: { reloadGame: () => void }) {
  return (
    <div className={styles.status}>
      <div className={styles.win}>All ships sunk!</div>
      <button className={styles.reloadButton} onClick={reloadGame}>
        Play Again
      </button>
    </div>
  );
}
