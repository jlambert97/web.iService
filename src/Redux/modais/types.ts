export const CRIAR_CONTA = 'CRIAR_CONTA'
export const LOGIN = 'LOGIN'

export interface showCriarConta {
    type: typeof CRIAR_CONTA
    value: boolean
}
export interface showLogin {
    type: typeof LOGIN
    value: boolean
}

export interface modaisState {
    criarConta: boolean
    login: boolean
}

export type modaisActionTypes = showCriarConta | showLogin
