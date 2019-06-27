import * as userTypes from './types'

const initialState: userTypes.userState = {
    email: '',
    name: '',
    token: ''
}

export function userReducer(state = initialState, action: userTypes.userActionTypes): userTypes.userState {
    switch (action.type) {
        case userTypes.USER_EMAIL: {
            return {
                ...state,
                email: action.newEmailValue
            }
        }
        case userTypes.USER_NAME: {
            return {
                ...state,
                name: action.newNameValue
            }
        }
        case userTypes.USER_TOKEN: {
            return {
                ...state,
                token: action.newTokenValue
            }
        }
        default:
            return state
    }
}