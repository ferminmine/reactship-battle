import { combineReducers } from 'redux';
import playerShipsReducer from './PlayerShipsReducer';
import cpuShipsReducer from './CPUShipsReducer';
import shipsToPlaceReducer from './ShipPlacement/ShipsToPlaceReducer';
import { SHIPS_ACTION_TYPES } from './ShipsActions';

const orientationToPlaceReducer = (state = 'vertical', action) => {
  switch (action.type) {
    case SHIPS_ACTION_TYPES.SET_SHIP_ORIENTATION:
      return action.payload;
    default:
      return state;
  }
};

const shipsReducer = combineReducers({
  playerShips: playerShipsReducer,
  cpuShips: cpuShipsReducer,
  shipsToPlace: shipsToPlaceReducer,
  orientationToPlace: orientationToPlaceReducer
});

export default shipsReducer;
