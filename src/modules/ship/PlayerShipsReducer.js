import { SHIPS_ACTION_TYPES } from './ShipsActions';

const defaultState = [];

const playerShipsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHIPS_ACTION_TYPES.ADD_SHIP_TO_PLAYER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default playerShipsReducer;
