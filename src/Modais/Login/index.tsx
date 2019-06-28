import React, { Component } from 'react'

class Login extends Component {
    
    render() {
        return (
          <div>
            <div>
              <input placeholder="email" />
            </div>  
            <div>
              <input type="password" placeholder="password" />
            </div>
          </div>
        )
    }
}

export default Login