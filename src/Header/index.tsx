import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="container-header">
        <div className="container-header logo">
          <label className="container-header logo logo-item">Xaxa</label>
        </div>
        <div className="container-header rigth">
          <div className="container-header rigth buttons">
            <button>Criar Conta</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
