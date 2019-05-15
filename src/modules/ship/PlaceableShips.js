const AVAILABLE_SHIPS = {
  submarine: {
    name: 'Submarine',
    size: 2,
    image: ''
  },
  battleShip: {
    name: 'Battleship',
    size: 3,
    image: ''
  },
  cruiser: {
    name: 'Cruiser',
    size: 4,
    image: ''
  }
};

const placeableShips = [
  AVAILABLE_SHIPS.cruiser,
  AVAILABLE_SHIPS.battleShip,
  AVAILABLE_SHIPS.battleShip,
  AVAILABLE_SHIPS.submarine
];

export default placeableShips;
