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
        <div className="application">
          <div className="application navigation-menu">
            <Menu />
          </div>
          <div className="application content">
            Content
          </div>
        </div>
      </div>
    );
  }
}

export default App;
