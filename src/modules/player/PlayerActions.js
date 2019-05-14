export const PLAYER_ACTION_TYPES = {
    PLAYER_SET_NAME: 'PLAYER_SET_NAME'
}

export const playerSetName = name => ({
    type: PLAYER_ACTION_TYPES.PLAYER_SET_NAME,
    payload: name
})