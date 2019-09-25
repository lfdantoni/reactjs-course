export const USER_TYPES = {
    SET_USER_NAME: 'SET_USER_NAME',
    SET_USER_EMAIL: 'SET_USER_EMAIL'
}

export function setUserEmail(email) {
    return {
        type: USER_TYPES.SET_USER_EMAIL,
        payload: {
            email
        }
    }
}

export function setUserName(name) {
    return {
        type: USER_TYPES.SET_USER_NAME,
        payload: {
            name
        }
    }
}