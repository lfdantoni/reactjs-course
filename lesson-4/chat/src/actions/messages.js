export const types = {
    RECEIVE_MESSAGE: 'RECEIVE_MESSAGE'
}

export const receiveMessage = (message, nickname) => {
    return {
        type: types.RECEIVE_MESSAGE,
        payload: {
            message,
            nickname,
            time: Date.now()
        }
    }
}