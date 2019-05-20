import expect from 'expect';
import { orientationToPlaceReducer } from '../../modules/ship/ShipReducer';
import { SHIPS_ACTION_TYPES } from '../../modules/ship/ShipsActions';

describe('orientation to place reducer', () => {
  it('should return the initial state', () => {
    expect(orientationToPlaceReducer(undefined, {})).toEqual('vertical');
  });

  it('should set ship orientation', () => {
    expect(
      orientationToPlaceReducer(undefined, {
        type: SHIPS_ACTION_TYPES.SET_SHIP_ORIENTATION,
        payload: 'horizontal'
      })
    ).toEqual('horizontal');
  });
});
