import expect from 'expect';
import cpuKnownHitsReducer from '../../modules/shoots/CPUKnownHitsReducer';
import { CPU_KNOWN_HITS_ACTION_TYPES } from '../../modules/shoots/CPUKnownHitsActions';

describe('cpu known hits reducer', () => {
  it('should receive the initial state', () => {
    expect(cpuKnownHitsReducer(undefined, {})).toEqual([]);
  });

  it('should handle add known hit', () => {
    expect(
      cpuKnownHitsReducer(undefined, {
        type: CPU_KNOWN_HITS_ACTION_TYPES.ADD_KNOWN_HIT,
        payload: { column: 1, row: 1 }
      })
    ).toEqual([{ column: 1, row: 1 }]);
  });

  it('should handle remove known hit', () => {
    const previousShoot = { column: 1, row: 1 };
    const previousState = [previousShoot];
    expect(
      cpuKnownHitsReducer(previousState, {
        type: CPU_KNOWN_HITS_ACTION_TYPES.REMOVE_KNOWN_HIT,
        payload: previousShoot
      })
    ).toEqual([]);
  });
});
