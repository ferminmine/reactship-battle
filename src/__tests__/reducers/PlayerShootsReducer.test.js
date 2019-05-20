import expect from 'expect';
import playerShootsReducer from '../../modules/shoots/PlayerShootsReducer';
import { SHOOTS_ACTION_TYPES } from '../../modules/shoots/ShootsActions';

describe('player shoots reducer', () => {
  it('should return the initial state', () => {
    expect(playerShootsReducer(undefined, {})).toEqual([]);
  });

  it('should add a player shoot', () => {
    expect(
      playerShootsReducer(undefined, {
        type: SHOOTS_ACTION_TYPES.ADD_PLAYER_SHOOT,
        payload: { column: 1, row: 3 }
      })
    ).toEqual([{ column: 1, row: 3 }]);
  });
});
