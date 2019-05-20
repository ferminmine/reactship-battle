import expect from 'expect';
import whichShipBelongToPoint from '../../utils/positioning/WhichShipBelongToPoint';
import { AVAILABLE_SHIPS } from '../../modules/ship/ShipPlacement/PlaceableShips';

describe('which ship belong to point', () => {
  it('should return which ship belong to the given point', () => {
    const ships = [
      {
        ...AVAILABLE_SHIPS.battleShip,
        position: { column: 1, row: 3 },
        orientation: 'horizontal',
        id: 5
      },
      {
        ...AVAILABLE_SHIPS.submarine,
        position: { column: 3, row: 3 },
        orientation: 'horizontal',
        id: 7
      }
    ];
    expect(whichShipBelongToPoint(1, 5, ships)).toEqual(ships[0]);
  });
});
