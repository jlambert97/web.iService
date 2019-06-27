import * as modalTypes from './types'

export function criarContaShow(newValue: boolean): modalTypes.modaisActionTypes {
    return {
        type: modalTypes.CRIAR_CONTA,
        value: newValue
    }
}
export function loginShow(newValue: boolean): modalTypes.modaisActionTypes {
    return {
        type: modalTypes.LOGIN,
        value: newValue
    }
}
