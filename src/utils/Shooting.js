import whichShipBelongToPoint from './positioning/WhichShipBelongToPoint';

export const shootExists = ({ column, row }, shoots) =>
  shoots.some(shoot => shoot.column === column && shoot.row === row);

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
  }
};
