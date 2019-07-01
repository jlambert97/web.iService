import React, { useState } from 'react'
import StyledInput, * as InputConfig from '../../StyledHtmlElements/Input'
import StyledButton from '../../StyledHtmlElements/Button'
import * as StyleSheet from './StyleSheet'

interface ICredentials {
  email: string,
  password: string
}
const InitialState: ICredentials = {
  email: "",
  password: ""
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<ICredentials>(InitialState)

  return (
    <StyleSheet.content>
        <StyledInput placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})} status={InputConfig.Status.Default}/>
        <StyledInput placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})} type="password" status={InputConfig.Status.Default}/>
        <StyledButton onClick={() => console.log(credentials)}>Log in</StyledButton>
    </StyleSheet.content>
  )
}

export default Login