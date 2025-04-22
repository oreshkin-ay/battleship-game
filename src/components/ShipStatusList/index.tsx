import React from 'react';
import styles from './ShipStatusList.module.css';
import { ShipStatusItem } from '../ShipStatusItem';
import { SHIP_LAYOUT } from '../../App';

interface ShipStatusListProps {
  sunkShipsCount: Map<string, number>;
}

export const ShipStatusList: React.FC<ShipStatusListProps> = ({ sunkShipsCount }) => {
  return (
    <div className={styles.container}>
      {SHIP_LAYOUT.map((ship, index) => (
        <ShipStatusItem
          key={index}
          shipIcon={<img src={ship.src} alt={`Ship ${index}`} />}
          total={ship.positions.length}
          hits={sunkShipsCount.get(ship.ship) || 0}
        />
      ))}
    </div>
  );
};
