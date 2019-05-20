import whichShipBelongToPoint from './positioning/WhichShipBelongToPoint';

export const shootExists = ({ column, row }, shoots) =>
  shoots.some(shoot => shoot.column === column && shoot.row === row);

// Main core logic to shoot, either as a player or as the CPU
export const shoot = (
  { column, row },
  attackerShoots,
  attackedShips,
  attackerType,
  attackedType,
  addShoot,
  substractLifePointToShip
) => {
  if (!shootExists({ column, row }, attackerShoots)) {
    const ship = whichShipBelongToPoint(column, row, attackedShips);
    if (ship) {
      substractLifePointToShip(ship.id, attackedType);
    }
    addShoot({ column, row }, attackerType);
    return ship || 'BLANK';
  }
  return false;
};

// Obtain possible shoots for the CPU to aim given a known hit spot.
export const obtainProximityShoots = ({ column, row }) => {
  const possibleShoots = [];
  if (column + 1 <= 9) {
    possibleShoots.push({
      column: column + 1,
      row
    });
  }
  if (row + 1 <= 9) {
    possibleShoots.push({
      column,
      row: row + 1
    });
  }
  if (row - 1 >= 0) {
    possibleShoots.push({
      column,
      row: row - 1
    });
  }
  if (column - 1 >= 0) {
    possibleShoots.push({
      column: column - 1,
      row
    });
  }
  return possibleShoots;
};
