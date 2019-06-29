import React, { Component } from 'react'
import StyledInput, * as InputConfig from '../../StyledHtmlElements/Input'

class Login extends Component {
    
    render() {
        return (
          <div>
            <div>
              <StyledInput status={InputConfig.Status.Default}/>
            </div>  
            <div>
              <input type="password" />
            </div>
          </div>
        )
    }
}

export default Login