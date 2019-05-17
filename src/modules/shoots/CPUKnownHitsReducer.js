import { CPU_KNOWN_HITS_ACTION_TYPES } from './CPUKnownHitsActions';

export const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case CPU_KNOWN_HITS_ACTION_TYPES.ADD_KNOWN_HIT:
      return [...state, action.payload];
    case CPU_KNOWN_HITS_ACTION_TYPES.REMOVE_KNOWN_HIT:
      return [...state].filter(
        ({ column, row }) => column !== action.payload.column && row !== action.payload.row
      );
    default:
      return state;
  }
};
