import shipCollapseValidator from './positioning/ShipCollapseValidator';
import positionValidator from './positioning/PositionValidator';

const ORIENTATIONS = ['horizontal', 'vertical'];

const getRandomArbitrary = (min, max) => parseInt(Math.random() * (max - min) + min);

export const placeCPUShips = (shipsToPlace, addShip) => {
  // addShip(shipsToPlace[0], 'CPU');
  let shipsAdded = [];
  while (shipsToPlace.length > 0) {
    let orientation = ORIENTATIONS[getRandomArbitrary(0, 2)];
    let position = {
      column: getRandomArbitrary(0, 10),
      row: getRandomArbitrary(0, 10)
    };
    let shipToCreate = {
      ...shipsToPlace[0],
      position,
      orientation,
      currentLife: shipsToPlace[0].size,
      id: shipsToPlace.length
    };
    if (
      !shipCollapseValidator(shipToCreate, shipsAdded) &&
      positionValidator(
        orientation,
        shipToCreate.size,
        shipToCreate.position.column,
        shipToCreate.position.row
      )
    ) {
      addShip(shipToCreate, 'CPU');
      shipsAdded.push(shipToCreate);
      shipsToPlace.shift();
    }
  }
};
