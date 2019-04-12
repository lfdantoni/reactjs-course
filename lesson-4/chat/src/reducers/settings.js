import { settingTypes } from "../actions";

const defaultSettings = {
    nickname: '',
    id: '',
    email:'lfdantoni@gmail.com'
}

const settings = (state = defaultSettings, action) => {
    switch(action.type) {
        case settingTypes.SET_NICKNAME:
            return {
                ...state,
                nickname: action.payload.nickname
            }
        case settingTypes.SET_ID:
            return {
                ...state,
                id: action.payload.id
            }
        default:
            return state;
    }
}

export {settings};