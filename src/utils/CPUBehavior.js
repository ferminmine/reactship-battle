import shipCollapseValidator from './positioning/ShipCollapseValidator';
import positionValidator from './positioning/PositionValidator';
import { obtainProximityShoots, shoot } from './Shooting';
import whichShipBelongToPoint from './positioning/WhichShipBelongToPoint';

const ORIENTATIONS = ['horizontal', 'vertical'];

const getRandomArbitrary = (min, max) => parseInt(Math.random() * (max - min) + min);

export const placeCPUShips = (shipsToPlace, addShip) => {
  // addShip(shipsToPlace[0], 'CPU');
  const shipsAdded = [];
  while (shipsToPlace.length > 0) {
    const orientation = ORIENTATIONS[getRandomArbitrary(0, 2)];
    const position = {
      column: getRandomArbitrary(0, 10),
      row: getRandomArbitrary(0, 10)
    };
    const shipToCreate = {
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

const removeDestroyedShipsFromKnownHits = (knownHits, removeKnownHit, playerShips) => {
  knownHits.forEach(knownHit => {
    const ship = whichShipBelongToPoint(knownHit.column, knownHit.row, playerShips);
    if (ship.currentLife === 0) {
      removeKnownHit({ ...knownHit });
    }
  });
};

export const shootPlayer = (
  knownHits,
  cpuShoots,
  playerShips,
  addShoot,
  substractLifePointToShip,
  addKnownHit,
  removeKnownHit
) => {
  if (knownHits.length === 0) {
    let shooted = false;
    while (!shooted) {
      const nextShoot = {
        column: getRandomArbitrary(0, 10),
        row: getRandomArbitrary(0, 10)
      };
      let shootStatus = shoot(
        nextShoot,
        cpuShoots,
        playerShips,
        'CPU',
        'HUMAN',
        addShoot,
        substractLifePointToShip
      );
      if (shootStatus !== 'BLANK' && shootStatus !== false) {
        shooted = true;
        addKnownHit({ ...nextShoot });
      }
      if (shootStatus !== false) {
        shooted = true;
      }
    }
  } else {
    let shooted = false;
    let knownHitsIndex = 0;
    while (!shooted && knownHitsIndex <= knownHits.length - 1) {
      const proximityShoots = obtainProximityShoots({
        column: knownHits[knownHitsIndex].column,
        row: knownHits[knownHitsIndex].row
      });
      let proximityShootsIndex = 0;
      while (!shooted && proximityShootsIndex <= proximityShoots.length - 1) {
        const shootStatus = shoot(
          { ...proximityShoots[proximityShootsIndex] },
          cpuShoots,
          playerShips,
          'CPU',
          'HUMAN',
          addShoot,
          substractLifePointToShip
        );
        if (shootStatus) {
          shooted = true;
          if (shootStatus !== 'BLANK') {
            addKnownHit({ ...proximityShoots[proximityShootsIndex] });
            if (shootStatus.currentLife === 0) {
              removeDestroyedShipsFromKnownHits(knownHits, removeKnownHit, playerShips);
            }
          }
        } else {
          proximityShootsIndex += 1;
        }
      }
      knownHitsIndex += 1;
    }
  }
};
