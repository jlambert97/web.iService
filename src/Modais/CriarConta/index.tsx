import React, { Component } from 'react'
import DatePicker from 'react-datepicker'


class CriarConta extends Component {
    
    render() {
        return (
        <div className="modal" id="modal">
            <div>
              Name: <input></input>
            </div>
            <div>
              Birthday: <DatePicker onChange={() => ({})}dateFormat="dd/MM/yyyy"/>
            </div>
            <div>
              Email: <input></input>
            </div>
            <div>
              Password: <input type="password"></input>
            </div>
            <div>
              Confirm Password: <input type="password"></input>
            </div>
            <div>
              <button>Close</button>
              <button>Criar Conta</button>
            </div>
        </div>
        )
    }
}

export default CriarConta