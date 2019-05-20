import expect from 'expect';
import { setPlayerName, PLAYER_ACTION_TYPES } from '../../modules/player/PlayerActions';

describe('player actions', () => {
  it('should set player name', () => {
    expect(setPlayerName('fermin')).toEqual({
      type: PLAYER_ACTION_TYPES.SET_PLAYER_NAME,
      payload: 'fermin'
    });
  });
});
