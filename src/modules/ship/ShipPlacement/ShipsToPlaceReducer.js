import placeableShips from './PlaceableShips';
import { SHIPS_TO_PLACE_ACTION_TYPES } from './ShipsToPlaceActions';

const defaultState = [...placeableShips];

const shipsToPlaceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHIPS_TO_PLACE_ACTION_TYPES.REMOVE_SHIP_TO_PLACE:
      let newState = [...state]; // Avoid doing state.shift() directly to preserve defaultState to next games
      newState.shift();
      return [...newState];
    default:
      return state;
  }
};

export default shipsToPlaceReducer;
