import { PLAYER_ACTION_TYPES } from './PlayerActions';

const defaultState = '';

const playerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLAYER_ACTION_TYPES.SET_PLAYER_NAME:
      return action.payload;
    default:
      return state;
  }
};

export default playerReducer;
