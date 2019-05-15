import { SHIPS_ACTION_TYPES } from './ShipsActions';

const defaultState = [];

const cpuShipsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SHIPS_ACTION_TYPES.ADD_SHIP_TO_CPU:
			return [ ...state, action.payload ];
		default:
			return state;
	}
}

export default cpuShipsReducer;