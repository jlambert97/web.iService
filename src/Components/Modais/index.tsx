import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import * as modaisTypes from '../../Redux/modais/types'
import * as modaisActions from '../../Redux/modais/actions'
import { IApplicationState } from '../../Redux/CombineReducers'
import * as StyleSheet from './Stylesheet'
import CriarConta from './CriarConta'
import Login from './Login'

interface State {
    showModalLogin: typeof modaisActions.loginShow
    showModalCriarConta: typeof modaisActions.criarContaShow
  
    modaisState: modaisTypes.modaisState
}
interface StateProps {
    state: IApplicationState
}
interface DispatchProps {
    showModalLogin: (newValue: boolean) => void;
    showModalCriarConta: (newValue: boolean) => void;
}

type Props = StateProps & DispatchProps
  
class Modais extends Component<Props, State> {
    render() {
        return (
            <section>
                {/* CriarConta */}
                {this.props.state.modais.criarConta && getModal(CriarConta, this.props.showModalCriarConta, 'Criar Conta')}
                {/* Login */}
                {this.props.state.modais.login && getModal(Login, this.props.showModalLogin, 'Login')}
            </section>
        )
        
        function getModal(Component: any, closeAction: any, titulo: string) {
            return (
                <StyleSheet.backgroundModal>
                    <StyleSheet.modal>
                        <StyleSheet.modalHeader>
                            <StyleSheet.tituloModal>
                                <StyleSheet.labelTitulo>{titulo}</StyleSheet.labelTitulo>
                            </StyleSheet.tituloModal>
                            <StyleSheet.closeButton onClick={() => closeAction(false)}>X</StyleSheet.closeButton>
                        </StyleSheet.modalHeader>
                        <StyleSheet.content>
                            <Component />      
                        </StyleSheet.content>
                    </StyleSheet.modal>
                </StyleSheet.backgroundModal>
            )
        }
    }
}

const mapStateToProps = (states: IApplicationState): StateProps => {
    return {
        state: states 
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
    return {
        showModalLogin: (e: boolean) => {dispatch(modaisActions.loginShow(e))},
        showModalCriarConta: (e: boolean) => {dispatch(modaisActions.criarContaShow(e))}
    }
}
  
export default connect<StateProps, DispatchProps, any, IApplicationState>(mapStateToProps, mapDispatchToProps)(Modais)
 