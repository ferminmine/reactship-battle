import expect from 'expect';
import {
  SHIPS_TO_PLACE_ACTION_TYPES,
  removeShipToPlace
} from '../../modules/ship/ShipPlacement/ShipsToPlaceActions';

describe('ships to place actions', () => {
  it('should remove ship to place', () => {
    expect(removeShipToPlace()).toEqual({
      type: SHIPS_TO_PLACE_ACTION_TYPES.REMOVE_SHIP_TO_PLACE
    });
  });
});
