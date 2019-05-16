import { SHIPS_ACTION_TYPES } from './ShipsActions';

const defaultState = [];

const cpuShipsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHIPS_ACTION_TYPES.ADD_SHIP_TO_CPU:
      return [...state, action.payload];
    case SHIPS_ACTION_TYPES.SUBSTRACT_LIFE_POINT_TO_CPU_SHIP:
      let newState = [...state];
      let ship = newState.find(ship => ship.id === action.payload);
      ship.currentLife -= 1;
      return newState;
    default:
      return state;
  }
};

export default cpuShipsReducer;
