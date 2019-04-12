import { messageTypes } from "../actions";

const messages = (state = [], action) => {
    switch(action.type) {
        case messageTypes.RECEIVE_MESSAGE:
            console.log(action)
            return state.concat([action.payload]);
        default:
            return state;
    }
}

export {messages}
