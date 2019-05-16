export const SHOOTS_ACTION_TYPES = {
  ADD_PLAYER_SHOOT: 'ADD_PLAYER_SHOOT',
  ADD_CPU_SHOOT: 'ADD_CPU_SHOOT'
};

export const addShoot = (shoot, typeOfPlayer) => {
  let typeOfAction =
    typeOfPlayer === 'HUMAN'
      ? SHOOTS_ACTION_TYPES.ADD_PLAYER_SHOOT
      : SHOOTS_ACTION_TYPES.ADD_CPU_SHOOT;
  return {
    type: typeOfAction,
    payload: shoot
  };
};
