export const USER_TYPES = {
  SET_USER_NAME: 'SET_USER_NAME',
  ADD_MEME: 'ADD_MEME'
}

export const setUserName = (userName) => {
  return {
    type: USER_TYPES.SET_USER_NAME,
    payload: {
      userName
    }
  }
}

export const addMeme = (memeUrl) => {
  return {
    type: USER_TYPES.ADD_MEME,
    payload: {
      id: new Date().getTime(),
      memeUrl,
      createdAt: new Date()
    }
  }
}