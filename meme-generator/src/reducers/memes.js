import { MEMES_TYPES } from "../actions/memes"

const MEMES_INIT = {
  list: [],
  selectedMeme: null
}

export const memes = (state = MEMES_INIT, action) => {
  switch(action.type) {
    case MEMES_TYPES.LIST_MEMES:
      return {
        ...state,
        list: action.payload.memes
      }
    case MEMES_TYPES.SET_SELECTED_MEME:
      return {
        ...state,
        selectedMeme: action.payload.meme
      }
    default:
      return state;
  }
}
