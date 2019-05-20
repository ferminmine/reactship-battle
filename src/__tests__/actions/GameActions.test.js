import expect from 'expect';
import { GAME_ACTION_TYPES, setGameState, setWinner } from '../../modules/game/GameActions';
import GAME_STATES from '../../modules/game/GameStates';

describe('game actions tests', () => {
  it('should set game state', () => {
    expect(setGameState(GAME_STATES.PLAYER_STARTING)).toEqual({
      type: GAME_ACTION_TYPES.SET_GAME_STATE,
      payload: GAME_STATES.PLAYER_STARTING
    });
  });

  it('should set winner', () => {
    expect(setWinner('player')).toEqual({
      type: GAME_ACTION_TYPES.SET_WINNER,
      payload: 'player'
    });
  });
});
