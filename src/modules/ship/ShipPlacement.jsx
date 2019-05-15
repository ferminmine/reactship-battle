import React from 'react';
import Board from '../board/Board';

const placeShip = ({ column, row }) => console.log(`${column} ${row}`);

const ShipPlacement = () => <Board actionToPerform={placeShip} />;

export default ShipPlacement;