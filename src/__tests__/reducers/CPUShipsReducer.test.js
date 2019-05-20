import expect from 'expect';
import cpuShipsReducer from '../../modules/ship/CPUShipsReducer';
import { AVAILABLE_SHIPS } from '../../modules/ship/ShipPlacement/PlaceableShips';
import { SHIPS_ACTION_TYPES } from '../../modules/ship/ShipsActions';

describe('CPUships reducer', () => {
  it('should return the initial state', () => {
    expect(cpuShipsReducer(undefined, {})).toEqual([]);
  });

  it('should add ship to cpu', () => {
    const shipToAdd = AVAILABLE_SHIPS[0];
    const expectedResult = [shipToAdd];
    expect(
      cpuShipsReducer(undefined, {
        type: SHIPS_ACTION_TYPES.ADD_SHIP_TO_CPU,
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
      cpuShipsReducer([shipToAdd], {
        type: SHIPS_ACTION_TYPES.SUBSTRACT_LIFE_POINT_TO_CPU_SHIP,
        payload: 1
      })[0].currentLife
    ).toBe(AVAILABLE_SHIPS.submarine.size - 1);
  });
});
