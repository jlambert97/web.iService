import React from 'react';
import './App.css'
import Header from '../Header' 
import Menu from '../Menu'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="navigation-menu">
          <Menu />
        </div>
        <div className="content">
          Content
        </div>
      </div>
    );
  }
}

export default App;
