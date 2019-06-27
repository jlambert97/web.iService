import * as userTypes from './types'

export function userEmailChange(newValue: string): userTypes.userActionTypes {
    return {
        type: userTypes.USER_EMAIL,
        newEmailValue: newValue
    }
}
export function userNameChange(newValue: string): userTypes.userActionTypes {
    return {
        type: userTypes.USER_NAME,
        newNameValue: newValue
    }
}
export function userTokenChange(newValue: string): userTypes.userActionTypes {
    return {
        type: userTypes.USER_TOKEN,
        newTokenValue: newValue
    }
}