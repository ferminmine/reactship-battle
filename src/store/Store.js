import { createStore, combineReducers, compose } from 'redux';
import playerReducer from '../modules/player/PlayerReducer';
import shipReducer from '../modules/ship/ShipReducer';
import gameReducer from '../modules/game/GameReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  ships: shipReducer,
  game: gameReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancer());
