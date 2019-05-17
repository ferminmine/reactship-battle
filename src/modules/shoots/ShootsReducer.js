import { combineReducers } from 'redux';
import playerShootsReducer from './PlayerShootsReducer';
import cpuShootsReducer from './CPUShootsReducer';
import cpuKnownHitsReducer from './CPUKnownHitsReducer';

export default combineReducers({
  cpuShoots: cpuShootsReducer,
  playerShoots: playerShootsReducer,
  cpuKnownHits: cpuKnownHitsReducer
});
