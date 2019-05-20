import expect from 'expect';
import { SHOOTS_ACTION_TYPES, addShoot } from '../../modules/shoots/ShootsActions';

describe('shoots actions', () => {
  it('should add shoot to a player', () => {
    const shootToAdd = { column: 1, row: 1 };
    expect(addShoot(shootToAdd, 'HUMAN')).toEqual({
      type: SHOOTS_ACTION_TYPES.ADD_PLAYER_SHOOT,
      payload: shootToAdd
    });
  });

  it('should add shoot to a player', () => {
    const shootToAdd = { column: 1, row: 1 };
    expect(addShoot(shootToAdd, 'CPU')).toEqual({
      type: SHOOTS_ACTION_TYPES.ADD_CPU_SHOOT,
      payload: shootToAdd
    });
  });
});
