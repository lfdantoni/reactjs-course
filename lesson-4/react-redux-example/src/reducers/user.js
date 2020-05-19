import { USER_TYPES } from "../actions";

const USER_INIT = { name: '', email: '' };

export const user = (state = USER_INIT, action) => {
  switch(action.type) {
    case USER_TYPES.SET_USER_NAME:
      return {
        ...state,
        name: action.payload.userName
      }
    case USER_TYPES.SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload.userEmail
      }
    default:
      return state;
  }
}