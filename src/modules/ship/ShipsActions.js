export const SHIPS_ACTION_TYPES = {
  ADD_SHIP_TO_PLAYER: 'ADD_SHIP_TO_PLAYER',
  ADD_SHIP_TO_CPU: 'ADD_SHIP_TO_CPU',
  SET_SHIP_ORIENTATION: 'SET_SHIP_ORIENTATION'
};

export const addShip = (ship, typeOfPlayer) => ({
  type:
    typeOfPlayer === 'HUMAN'
      ? SHIPS_ACTION_TYPES.ADD_SHIP_TO_PLAYER
      : SHIPS_ACTION_TYPES.ADD_SHIP_TO_CPU,
  payload: ship
});

export const setOrientation = orientation => ({
  type: SHIPS_ACTION_TYPES.SET_SHIP_ORIENTATION,
  payload: orientation
});
