import React from 'react';
import { ThunkDispatch } from 'redux-thunk'
import * as StyleSheet from './StyleSheet'
import { connect } from 'react-redux';
import { IApplicationState } from '../../Redux/CombineReducers'
import * as modaisActions from '../../Redux/modais/actions'
import * as modaisTypes from '../../Redux/modais/types'

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

class Header extends React.Component<Props, State> {
  render() {
    return (
      <StyleSheet.container>
        <StyleSheet.title>
          iService
        </StyleSheet.title>
        <StyleSheet.middle>

        </StyleSheet.middle>
        <StyleSheet.buttons>
          <button onClick={() => this.props.showModalCriarConta(true)}>Criar Conta</button>
          <button onClick={() => this.props.showModalLogin(true)}>Login</button>
        </StyleSheet.buttons>
      </StyleSheet.container>



      //   <div className="container-header rigth">
      //     <div className="container-header rigth buttons">
      //     </div>
      //   </div>

    )
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

export default connect<StateProps, DispatchProps, any, IApplicationState>(mapStateToProps, mapDispatchToProps)(Header)

