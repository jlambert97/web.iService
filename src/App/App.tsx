import React from 'react';
import { BrowserRouter as ApplicationRouter, Switch } from 'react-router-dom'
import * as StyleSheet from './AppStyleSheet'
import Router from './Router'
import Header from '../Components/Header' 
import Menu from '../Components/Menu'
import Modais from '../Components/Modais'

class App extends React.Component {
  render () {
    return (
      <StyleSheet.container>
        <ApplicationRouter>
          {/* Header */}
          <StyleSheet.header>
            <Header />
          </StyleSheet.header>
          
          {/* Box da aplicação (Espaço util excluindo o header)*/}
          <StyleSheet.application>
            {/* Menu */}
            <StyleSheet.menu>
              <Menu />
            </StyleSheet.menu>
            {/* Conteudo (Todos os componentes que vão rodar no espaço livre, e serão gerenciados pelo switch) */}
            <StyleSheet.content>
              <Switch>
                <Router />
              </Switch>
            </StyleSheet.content>

          </StyleSheet.application>

          {/* Modais */}
          <Modais />
        </ApplicationRouter>
      </StyleSheet.container>      
    );
  }
}

export default App;
