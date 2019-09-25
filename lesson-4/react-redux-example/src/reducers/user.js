import { USER_TYPES } from "../actions";

const USER_INIT = { name: '', email: '' };

export default function (state = USER_INIT, action) {
    switch (action.type) {
        case USER_TYPES.SET_USER_NAME:
            return {
                ...state,
                name: action.payload.name
            }

        case USER_TYPES.SET_USER_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }

        default:
            return state;
    }
}
