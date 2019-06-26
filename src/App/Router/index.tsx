import React from 'react';
import './Router.css'
import { BrowserRouter as ApplicationRouter, Switch, Route } from 'react-router-dom'
import Home from '../../Home'
import Dashboard from '../../Dashboard'


class Router extends React.Component {
  render () {
    return (
      <ApplicationRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </ApplicationRouter>
    );
  }
}

export default Router;
