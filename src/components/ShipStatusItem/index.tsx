import React from 'react';
import styles from './ShipStatusItem.module.css';

interface ShipStatusItemProps {
  shipIcon: React.ReactNode;
  hits: number;
  total: number;
}

export const ShipStatusItem: React.FC<ShipStatusItemProps> = ({ shipIcon, hits, total }) => {
  const circles = Array.from({ length: total }, (_, idx) => (
    <div key={idx} className={`${styles.circle} ${idx < hits ? styles.hit : ''}`} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.shipIcon}>{shipIcon}</div>
      <div className={styles.circles}>{circles}</div>
    </div>
  );
};
