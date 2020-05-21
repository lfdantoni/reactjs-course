import { USER_TYPES } from "../actions/user"

const USER_INIT = {
  userName: '',
  memes: []
}

export const user = (state = USER_INIT, action) => {
  switch(action.type) {
    case USER_TYPES.SET_USER_NAME:
      return {
        ...state,
        userName: action.payload.userName
      }
    case USER_TYPES.ADD_MEME:
      return {
        ...state,
        memes: state.memes.concat([
          {
            id: action.payload.id,
            memeUrl: action.payload.memeUrl,
            createdAt: action.payload.createdAt
          }
        ])
      }
    default:
      return state;
  }
}