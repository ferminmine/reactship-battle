import expect from 'expect';
import playerShipsReducer from '../../modules/ship/PlayerShipsReducer';
import { AVAILABLE_SHIPS } from '../../modules/ship/ShipPlacement/PlaceableShips';
import { SHIPS_ACTION_TYPES } from '../../modules/ship/ShipsActions';

describe('player ships reducer', () => {
  it('should return the initial state', () => {
    expect(playerShipsReducer(undefined, {})).toEqual([]);
  });

  it('should add ship to cpu', () => {
    const shipToAdd = AVAILABLE_SHIPS[0];
    const expectedResult = [shipToAdd];
    expect(
      playerShipsReducer(undefined, {
        type: SHIPS_ACTION_TYPES.ADD_SHIP_TO_PLAYER,
        payload: shipToAdd
      })
    ).toEqual(expectedResult);
  });

  it('should substract life point to cpu ship', () => {
    const shipToAdd = {
      ...AVAILABLE_SHIPS.submarine,
      currentLife: AVAILABLE_SHIPS.submarine.size,
      id: 1
    };
    expect(
      playerShipsReducer([shipToAdd], {
        type: SHIPS_ACTION_TYPES.SUBSTRACT_LIFE_POINT_TO_PLAYER_SHIP,
        payload: 1
      })[0].currentLife
    ).toBe(AVAILABLE_SHIPS.submarine.size - 1);
  });
});