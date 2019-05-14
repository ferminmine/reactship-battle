import { createStore, combineReducers, compose } from 'redux';
import playerReducer from '../modules/player/PlayerReducer';

const rootReducer = combineReducers({
  player: playerReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancer());
