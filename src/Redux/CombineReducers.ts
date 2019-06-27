import { combineReducers } from 'redux'
import { userReducer } from '../Redux/user/reducer'
import { userState } from '../Redux/user/types'
import { modaisReducer } from '../Redux/modais/reducer'
import { modaisState } from '../Redux/modais/types'

export interface IApplicationState {
    user: userState,
    modais: modaisState
}

export const ApplicationState = combineReducers({
    user: userReducer,
    modais: modaisReducer
})