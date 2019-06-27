import * as modalTypes from './types'

const initialState: modalTypes.modaisState = {
    criarConta: false,
    login: false
}

export function modaisReducer(state = initialState, action: modalTypes.modaisActionTypes): modalTypes.modaisState {
    switch (action.type) {
        case modalTypes.CRIAR_CONTA: {
            return {
                ...state,
                criarConta: action.value
            }
        }
        case modalTypes.LOGIN: {
            return {
                ...state,
                login: action.value
            }
        }
        default:
            return state
    }
}