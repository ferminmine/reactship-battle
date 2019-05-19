const AVAILABLE_SHIPS = {
  submarine: {
    name: 'Submarine',
    size: 2,
    image: '/imgs/submarine.png'
  },
  battleShip: {
    name: 'Battleship',
    size: 3,
    image: '/imgs/battleship.png'
  },
  cruiser: {
    name: 'Cruiser',
    size: 4,
    image: '/imgs/cruiser.png'
  }
};

const placeableShips = [
  AVAILABLE_SHIPS.cruiser,
  AVAILABLE_SHIPS.battleShip,
  AVAILABLE_SHIPS.battleShip,
  AVAILABLE_SHIPS.battleShip,
  AVAILABLE_SHIPS.submarine
];

export default placeableShips;
