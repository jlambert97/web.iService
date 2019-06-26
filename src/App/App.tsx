import React from 'react';
import './App.css'
import Header from '../Header' 
import Menu from '../Menu'
import Router from './Router'

class App extends React.Component {
  render () {
    return (
      <div className="container">

        <div className="header">
          <Header />
        </div>

        <div className="menu">
          <Menu />
        </div>

        <div className="content">
          <Router/>
        </div>

      </div>
    );
  }
}

export default App;
