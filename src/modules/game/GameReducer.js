import GAME_STATES from './GameStates';
import { GAME_ACTION_TYPES } from './GameActions';

const defaultState = {
  state: GAME_STATES.PLAYER_STARTING,
  winner: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GAME_ACTION_TYPES.SET_GAME_STATE:
      return { ...state, state: action.payload };
    case GAME_ACTION_TYPES.SET_WINNER:
      return { ...state, winner: action.payload };
    default:
      return state;
  }
};
