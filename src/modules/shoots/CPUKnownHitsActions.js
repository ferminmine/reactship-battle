export const CPU_KNOWN_HITS_ACTION_TYPES = {
  ADD_KNOWN_HIT: 'ADD_KNOWN_HIT',
  REMOVE_KNOWN_HIT: 'REMOVE_KNOWN_HIT'
};

export const addKnownHit = position => ({
  type: CPU_KNOWN_HITS_ACTION_TYPES.ADD_KNOWN_HIT,
  payload: position
});

export const removeKnownHit = position => ({
  type: CPU_KNOWN_HITS_ACTION_TYPES.REMOVE_KNOWN_HIT,
  payload: position
});
