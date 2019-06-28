import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Componentes
import Home from '../Components/Content/Home'
import Dashboard from '../Components/Content/Dashboard'

export default class Router extends React.Component {
  render () {
    return (
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    );
  }
}
