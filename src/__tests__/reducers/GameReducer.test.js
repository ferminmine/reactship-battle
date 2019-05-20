import gameReducer from '../../modules/game/GameReducer';
import { GAME_ACTION_TYPES } from '../../modules/game/GameActions';
import GAME_STATES from '../../modules/game/GameStates';
import expect from 'expect';

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual({
      state: GAME_STATES.PLAYER_STARTING,
      winner: ''
    });
  });

  it('should handle SET_GAME_STATE', () => {
    expect(
      gameReducer(undefined, {
        type: GAME_ACTION_TYPES.SET_GAME_STATE,
        payload: GAME_STATES.PLAYER_SURRENDERED
      })
    ).toEqual({
      state: GAME_STATES.PLAYER_SURRENDERED,
      winner: ''
    });
  });

  it('should handle SET_WINNER', () => {
    expect(
      gameReducer(undefined, { type: GAME_ACTION_TYPES.SET_WINNER, payload: 'player' })
    ).toEqual({
      state: GAME_STATES.PLAYER_STARTING,
      winner: 'player'
    });
  });
});
