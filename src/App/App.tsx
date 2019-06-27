import React from 'react';
import './App.css'
import Header from '../Header' 
import Menu from '../Menu'
import Router from './Router'
import Modais from '../Modais/Modais'

class App extends React.Component {
  render () {
    return (
      <div>       

        <Modais/>        

        <div className="container">

          <div className="header">
            <Header />
          </div>

          <div className="application">
            <div className="menu">
              <Menu />
            </div>
            <div className="content">
              <Router/>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
