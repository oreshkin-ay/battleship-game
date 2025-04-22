import React from 'react';
import styles from './ShipStatusList.module.css';
import { ShipStatusItem } from '../ShipStatusItem';
import { SHIP_LAYOUT } from '../../App';

interface ShipStatusListProps {
  sunkShips: Map<string, number>;
}

export const ShipStatusList: React.FC<ShipStatusListProps> = ({ sunkShips }) => {
  return (
    <div className={styles.container}>
      {SHIP_LAYOUT.map((ship, index) => (
        <ShipStatusItem
          key={index}
          shipIcon={<img src={ship.src} alt={`Ship ${index}`} />}
          total={ship.positions.length}
          hits={sunkShips.get(ship.ship) || 0} // Use the ship name to get the hits from the map
        />
      ))}
    </div>
  );
};
