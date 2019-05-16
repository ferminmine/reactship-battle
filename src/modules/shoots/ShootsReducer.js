import { combineReducers } from 'redux';
import playerShootsReducer from './PlayerShootsReducer';
import cpuShootsReducer from './CPUShootsReducer';

export default combineReducers({
  cpuShoots: cpuShootsReducer,
  playerShoots: playerShootsReducer
});
