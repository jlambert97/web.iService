import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
        <div className="home-component">
          <div>
            Home!
          </div>
          <div>
            <Link to="/dashboard">
              <button>Ir para a dashboard!</button>
            </Link>
          </div>
        </div>
    )
  }
}

export default Home;
