import { createStore, combineReducers, compose } from 'redux';
import playerReducer from '../modules/player/PlayerReducer';
import shipReducer from '../modules/ship/ShipReducer';
import gameReducer from '../modules/game/GameReducer';
import shootsReducer from '../modules/shoots/ShootsReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  game: gameReducer,
  ships: shipReducer,
  shoots: shootsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancer());
