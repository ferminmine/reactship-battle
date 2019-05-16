export const SHIPS_ACTION_TYPES = {
  ADD_SHIP_TO_PLAYER: 'ADD_SHIP_TO_PLAYER',
  ADD_SHIP_TO_CPU: 'ADD_SHIP_TO_CPU',
  SUBSTRACT_LIFE_POINT_TO_PLAYER_SHIP: 'SUBSTRACT LIFE POINT TO PLAYER SHIP',
  SUBSTRACT_LIFE_POINT_TO_CPU_SHIP: 'SUBSTRACT LIFE POINT TO CPU SHIP',
  SET_SHIP_ORIENTATION: 'SET_SHIP_ORIENTATION'
};

export const addShip = (ship, typeOfPlayer) => ({
  type:
    typeOfPlayer === 'HUMAN'
      ? SHIPS_ACTION_TYPES.ADD_SHIP_TO_PLAYER
      : SHIPS_ACTION_TYPES.ADD_SHIP_TO_CPU,
  payload: ship
});

export const substractLifePointToShip = (id, typeOfPlayer) => ({
  type:
    typeOfPlayer === 'HUMAN'
      ? SHIPS_ACTION_TYPES.SUBSTRACT_LIFE_POINT_TO_PLAYER_SHIP
      : SHIPS_ACTION_TYPES.SUBSTRACT_LIFE_POINT_TO_CPU_SHIP,
  payload: id
});

export const setOrientation = orientation => ({
  type: SHIPS_ACTION_TYPES.SET_SHIP_ORIENTATION,
  payload: orientation
});
