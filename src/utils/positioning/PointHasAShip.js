export const checkIfPointIsInShip = (columnToCheck, rowToCheck, ship) => {
  const { size, orientation } = ship;
  const { column, row } = ship.position;
  let offset = 0;
  let isInShip = false;
  while (offset <= size - 1 && !isInShip) {
    if (orientation === 'vertical') {
      isInShip = columnToCheck === column - offset && rowToCheck === row;
    } else {
      isInShip = columnToCheck === column && rowToCheck === row + offset;
    }
    offset += 1;
  }
  return isInShip;
};

export default (column, row, ships) => ships.some(ship => checkIfPointIsInShip(column, row, ship));
