import expect from 'expect';
import { nextShipToPlaceSelector } from '../../modules/ship/ShipSelectors';
import { AVAILABLE_SHIPS } from '../../modules/ship/ShipPlacement/PlaceableShips';

describe('ship selectors', () => {
  it('should return the next ship to place', () => {
    const stateToTest = {
      ships: {
        shipsToPlace: [AVAILABLE_SHIPS.submarine, AVAILABLE_SHIPS.battleShip]
      }
    };

    expect(nextShipToPlaceSelector(stateToTest)).toEqual(AVAILABLE_SHIPS.submarine);
  });
});
