import { socketTypes } from "../actions";

const socket = (state = {}, action) => {
    switch(action.type) {
        case socketTypes.SET_SOCKET:
            console.log(action)
            const {socket} = action.payload;
            return {
                ...state,
                socket,
                sendMessage: (message, nickname, time) => {
                    socket.send(JSON.stringify({message, nickname, time}))
                }
            }
        case socketTypes.SOCKET_CLOSED:
            return {
                ...state,
                socket: null,
                sendMessage: null 
            }
        default:
            return state;
    }
}

export {socket};