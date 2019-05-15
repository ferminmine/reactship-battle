export const PLAYER_ACTION_TYPES = {
  SET_PLAYER_NAME: 'SET_PLAYER_NAME'
};

export const setPlayerName = name => ({
  type: PLAYER_ACTION_TYPES.SET_PLAYER_NAME,
  payload: name
});
