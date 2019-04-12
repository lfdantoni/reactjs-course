export const types = {
    SET_NICKNAME: 'SET_NICKNAME',
    SET_ID: 'SET_ID'
}

export const setNickname = (nickname) => {
    return {
        type: types.SET_NICKNAME,
        payload: {
            nickname
        }
    }
}

export const setSettingId = (id) => {
    return {
        type: types.SET_ID,
        payload: {
            id
        }
    }
}