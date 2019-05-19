import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import playerReducer from '../modules/player/PlayerReducer';
import shipReducer from '../modules/ship/ShipReducer';
import gameReducer from '../modules/game/GameReducer';
import shootsReducer from '../modules/shoots/ShootsReducer';

export const history = createBrowserHistory();

const allReducers = combineReducers({
  player: playerReducer,
  game: gameReducer,
  ships: shipReducer,
  shoots: shootsReducer,
  router: connectRouter(history)
});

export const ROOT_REDUCER_ACTION_TYPES = {
  RESET_APP: 'RESET_APP'
};
export const resetApp = () => ({ type: ROOT_REDUCER_ACTION_TYPES.RESET_APP });

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return allReducers(state, action);
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(routerMiddleware(history)))
);
