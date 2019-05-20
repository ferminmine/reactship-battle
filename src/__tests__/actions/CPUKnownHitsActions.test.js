import expect from 'expect';
import {
  CPU_KNOWN_HITS_ACTION_TYPES,
  addKnownHit,
  removeKnownHit
} from '../../modules/shoots/CPUKnownHitsActions';

describe('cpu known hits actions', () => {
  it('should add a known hit', () => {
    const shootToAdd = { column: 1, row: 1 };
    expect(addKnownHit(shootToAdd)).toEqual({
      type: CPU_KNOWN_HITS_ACTION_TYPES.ADD_KNOWN_HIT,
      payload: shootToAdd
    });
  });

  it('should remove a known hit', () => {
    const shootToRemove = { column: 1, row: 1 };
    expect(removeKnownHit(shootToRemove)).toEqual({
      type: CPU_KNOWN_HITS_ACTION_TYPES.REMOVE_KNOWN_HIT,
      payload: shootToRemove
    });
  });
});
