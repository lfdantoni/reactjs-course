export const MEMES_TYPES = {
  LIST_MEMES: 'LIST_MEMES',
  SET_SELECTED_MEME: 'SET_SELECTED_MEME'
}

export const listMemes = (memes) => {
  return {
    type: MEMES_TYPES.LIST_MEMES,
    payload: {
      memes
    }
  }
}

export const setSelectedMeme = (meme) => {
  return {
    type: MEMES_TYPES.SET_SELECTED_MEME,
    payload: {
      meme
    }
  }
}