export const GAME_ACTION_TYPES = {
  SET_GAME_STATE: 'SET GAME STATE'
};

export const setGameState = gameState => ({
  type: GAME_ACTION_TYPES.SET_GAME_STATE,
  payload: gameState
});
