import expect from 'expect';
import cpuShootsReducer from '../../modules/shoots/CPUShootsReducer';
import { SHOOTS_ACTION_TYPES } from '../../modules/shoots/ShootsActions';

describe('player shoots reducer', () => {
  it('should return the initial state', () => {
    expect(cpuShootsReducer(undefined, {})).toEqual([]);
  });

  it('should add a cpu shoot', () => {
    expect(
      cpuShootsReducer(undefined, {
        type: SHOOTS_ACTION_TYPES.ADD_CPU_SHOOT,
        payload: { column: 1, row: 3 }
      })
    ).toEqual([{ column: 1, row: 3 }]);
  });
});
