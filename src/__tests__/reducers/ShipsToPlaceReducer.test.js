import expect from 'expect';
import shipsToPlaceReducer from '../../modules/ship/ShipPlacement/ShipsToPlaceReducer';
import placeableShips from '../../modules/ship/ShipPlacement/PlaceableShips';
import { SHIPS_TO_PLACE_ACTION_TYPES } from '../../modules/ship/ShipPlacement/ShipsToPlaceActions';

describe('ships to place reducer', () => {
  it('should return the initial state', () => {
    expect(shipsToPlaceReducer(undefined, {})).toEqual([...placeableShips]);
  });

  it('should handle REMOVE SHIP TO PLACE', () => {
    const expectedResult = [...placeableShips];
    expectedResult.shift();
    expect(
      shipsToPlaceReducer(undefined, { type: SHIPS_TO_PLACE_ACTION_TYPES.REMOVE_SHIP_TO_PLACE })
    ).toEqual(expectedResult);
  });
});
