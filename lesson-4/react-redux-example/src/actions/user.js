export const USER_TYPES = {
  SET_USER_NAME: 'SET_USER_NAME',
  SET_USER_EMAIL: 'SET_USER_EMAIL'
}

export const setUserName = (userName) => {
  return {
    type: USER_TYPES.SET_USER_NAME,
    payload: {
      userName
    }
  }
}

export const setUserEmail = (userEmail) => {
  return {
    type: USER_TYPES.SET_USER_EMAIL,
    payload: {
      userEmail
    }
  }
}
