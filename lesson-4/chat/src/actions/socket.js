export const types = {
    SET_SOCKET: 'SET_SOCKET',
    SOCKET_CLOSED: 'SOCKET_CLOSED'
}

export const setSocket = (socket) => {
    return {
        type: types.SET_SOCKET,
        payload: {
            socket
        }
    }
}

export const socketClosed = () => {
    return {
        type: types.SOCKET_CLOSED
    }
}
