import pointHasAShip from './PointHasAShip';

export default (ship, shipsToCheck) => {
  const { size, orientation } = ship;
  const { column, row } = ship.position;
  let offset = 0;
  let isInShip = false;
  while (offset <= size - 1 && !isInShip) {
    if (orientation === 'vertical') {
      isInShip = pointHasAShip(column - offset, row, shipsToCheck);
    } else {
      isInShip = pointHasAShip(column, row + offset, shipsToCheck);
    }
    offset += 1;
  }
  return isInShip;
};
