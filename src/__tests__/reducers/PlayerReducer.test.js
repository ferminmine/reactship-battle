import expect from 'expect';
import { PLAYER_ACTION_TYPES } from '../../modules/player/PlayerActions';
import playerReducer from '../../modules/player/PlayerReducer';

describe('player reducer', () => {
  it('should return the initial state', () => {
    expect(playerReducer(undefined, {})).toEqual('');
  });

  it('should handle SET PLAYER NAME', () => {
    expect(
      playerReducer(undefined, { type: PLAYER_ACTION_TYPES.SET_PLAYER_NAME, payload: 'fermin' })
    ).toEqual('fermin');
  });
});
