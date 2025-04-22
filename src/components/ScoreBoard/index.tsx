import React from 'react';
import styles from './ScoreBoard.module.css';

interface ScoreBoardProps {
  player1Score: number;
  player2Score: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ player1Score, player2Score }) => {
  return (
    <div className={styles.container}>
      <div className={styles.playerBox}>
        <div className={styles.score}>{player1Score.toString().padStart(2, '0')}</div>
        <div className={styles.label}>player 1</div>
      </div>
      <div className={styles.playerBox}>
        <div className={styles.score}>{player2Score.toString().padStart(2, '0')}</div>
        <div className={styles.label}>player 2</div>
      </div>
    </div>
  );
};
