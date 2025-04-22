import React from 'react';
import styles from './Cell.module.css';

import hitIcon from '../../assets/Hit.png';
import missIcon from '../../assets/Miss.png';

interface CellProps {
  status: 'hit' | 'miss' | 'unknown';
  onClick: () => void;
}

export default function Cell({ status, onClick }: CellProps) {
  return (
    <div className={`${styles.cell}`} onClick={onClick}>
      {status === 'hit' && <img src={hitIcon} className={styles.icon} />}
      {status === 'miss' && <img src={missIcon} className={styles.icon} />}
    </div>
  );
}
