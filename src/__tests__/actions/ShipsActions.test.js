import expect from 'expect';
import {
  SHIPS_ACTION_TYPES,
  addShip,
  setOrientation,
  substractLifePointToShip
} from '../../modules/ship/ShipsActions';
import placeableShips from '../../modules/ship/ShipPlacement/PlaceableShips';

describe('ships actions', () => {
  it('should add a ship to a player', () => {
    expect(addShip(placeableShips[0], 'HUMAN')).toEqual({
      type: SHIPS_ACTION_TYPES.ADD_SHIP_TO_PLAYER,
      payload: placeableShips[0]
    });
  });

  it('should add a ship to a CPU', () => {
    expect(addShip(placeableShips[0], 'CPU')).toEqual({
      type: SHIPS_ACTION_TYPES.ADD_SHIP_TO_CPU,
      payload: placeableShips[0]
    });
  });

  it('should set the orientation', () => {
    expect(setOrientation('vertical')).toEqual({
      type: SHIPS_ACTION_TYPES.SET_SHIP_ORIENTATION,
      payload: 'vertical'
    });
  });

  it('should substract a life point to a ship of a plyer', () => {
    expect(substractLifePointToShip(1, 'HUMAN')).toEqual({
      type: SHIPS_ACTION_TYPES.SUBSTRACT_LIFE_POINT_TO_PLAYER_SHIP,
      payload: 1
    });
  });

  it('should substract a life point to a ship of a plyer', () => {
    expect(substractLifePointToShip(1, 'CPI')).toEqual({
      type: SHIPS_ACTION_TYPES.SUBSTRACT_LIFE_POINT_TO_CPU_SHIP,
      payload: 1
    });
  });
});
