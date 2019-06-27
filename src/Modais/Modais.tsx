import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import CriarConta from './CriarConta'
import * as modaisTypes from '../Redux/modais/types'
import * as modaisActions from '../Redux/modais/actions'
import { IApplicationState } from '../Redux/CombineReducers'

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
            <div>
                {this.props.state.modais.criarConta && <CriarConta /> }
            </div>
        )
    }

    public showModal(modal: string, value: boolean): void {
        switch (modal) {
            case modaisTypes.CRIAR_CONTA: {
                this.props.showModalCriarConta(value)
                break
            }
            case modaisTypes.LOGIN: {
                this.props.showModalLogin(value)
                break
            }
            default:
                break
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
 