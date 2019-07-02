import React, { useState } from 'react'
import StyledInput, * as InputConfig from '../../StyledHtmlElements/Input'
import StyledButton from '../../StyledHtmlElements/Button'
import * as StyleSheet from './StyleSheet'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import '../../StyledHtmlElements/DatePickerCss.css'
import { DateWithMoreYears } from '../../../Utils/DateUtils'

interface IUserSchema {
  name: string
  email: string
  password: string
  confirmPassword: string
  birth?: Date
}

const InitialState: IUserSchema = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  birth: undefined
}

const CriarConta: React.FC = () => {
  const [userschema, setUserschema] = useState<IUserSchema>(InitialState)

  return (
    <StyleSheet.content>
        <StyledInput placeholder="Name" onChange={(e) => setUserschema({...userschema, name: e.target.value})} status={InputConfig.Status.Default}/>
        <StyledInput placeholder="Email" onChange={(e) => setUserschema({...userschema, email: e.target.value})} status={InputConfig.Status.Default}/>
        <StyledInput placeholder="Password" onChange={(e) => setUserschema({...userschema, password: e.target.value})} type="password" status={InputConfig.Status.Default}/>
        <StyledInput placeholder="Confirm Password" onChange={(e) => setUserschema({...userschema, confirmPassword: e.target.value})} type="password" status={InputConfig.Status.Default}/>
        <DatePicker
            selected={userschema.birth != null ? userschema.birth : null } 
            onChange={(e: any) => setUserschema({...userschema, birth: e})}
            placeholderText="Birthday"
            minDate={DateWithMoreYears(-100)}
            maxDate={DateWithMoreYears(-10)}
            showMonthDropdown
            showYearDropdown
            className="DatePicker"
            dateFormat="dd/MM/yyyy"
            dropdownMode="select">
          </DatePicker>
        <StyledButton onClick={() => console.log(userschema)}>Sign in</StyledButton>
    </StyleSheet.content>
  )
}

export default CriarConta