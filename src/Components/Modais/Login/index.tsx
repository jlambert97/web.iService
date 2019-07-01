import React, { Component } from 'react'
import StyledInput, * as InputConfig from '../../StyledHtmlElements/Input'
import StyledButton from '../../StyledHtmlElements/Button'

class Login extends Component {
    
    render() {
        return (
          <div>
            <div>
              <StyledInput placeholder="Email" status={InputConfig.Status.Default}/>
            </div>  
            <div>
              <StyledInput placeholder="Password" type="password" status={InputConfig.Status.Default}/>
            </div>
            <div>
              <StyledButton>Log in</StyledButton>
            </div>
          </div>
        )
    }
}

export default Login