export const GAME_ACTION_TYPES = {
  SET_GAME_STATE: 'SET GAME STATE',
  SET_WINNER: 'SET_WINNER'
};

export const setGameState = gameState => ({
  type: GAME_ACTION_TYPES.SET_GAME_STATE,
  payload: gameState
});

export const setWinner = winner => ({
  type: GAME_ACTION_TYPES.SET_WINNER,
  payload: winner
});
