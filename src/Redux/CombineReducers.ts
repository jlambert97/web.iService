import { combineReducers } from 'redux'
import { userReducer } from '../Redux/user/reducer'
import { userState } from '../Redux/user/types'

export interface IApplicationState {
    user: userState
}

export const ApplicationState = combineReducers({
    user: userReducer
})