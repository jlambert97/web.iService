export const USER_EMAIL = 'USER_EMAIL'
export const USER_NAME = 'USER_NAME'
export const USER_TOKEN = 'USER_TOKEN'

export interface UserEmailChangeAction {
    type: typeof USER_EMAIL
    newEmailValue: string
}
export interface UserNameChangeAction {
    type: typeof USER_NAME
    newNameValue: string
}
export interface UserTokenChangeAction {
    type: typeof USER_TOKEN
    newTokenValue: string
}

export interface userState {
    email: string
    name: string
    token: string
}

export type userActionTypes = UserEmailChangeAction | UserNameChangeAction | UserTokenChangeAction
