import { SHIPS_ACTION_TYPES } from './ShipsActions';

const defaultState = [];

const playerShipsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHIPS_ACTION_TYPES.ADD_SHIP_TO_PLAYER:
      return [...state, action.payload];
    case SHIPS_ACTION_TYPES.SUBSTRACT_LIFE_POINT_TO_PLAYER_SHIP:
      let newState = [...state];
      let ship = newState.find(ship => ship.id === action.payload);
      ship.currentLife -= 1;
      return newState;
    default:
      return state;
  }
};

export default playerShipsReducer;
