import { SHOOTS_ACTION_TYPES } from './ShootsActions';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOOTS_ACTION_TYPES.ADD_PLAYER_SHOOT:
      return [...state, action.payload];
    default:
      return state;
  }
};
