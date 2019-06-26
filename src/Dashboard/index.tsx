import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    return (
        <div className="Dashboard-component">
          <div>
            Dashboard!
          </div>
          <div>
            <Link to="/">
              <button>Ir para a home!</button>
            </Link>
          </div>
        </div>
    )
  }
}

export default Dashboard;
