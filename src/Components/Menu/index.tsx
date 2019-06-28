import React from 'react';
import * as StyleSheet from './StyleSheet'
import { Link } from 'react-router-dom'


class Menu extends React.Component {
  render() {
    return (
      <StyleSheet.container>
        <Link to="/">
          Home
        </Link>
        <Link to="/dashboard">
          Dashboardssssssssssssssssssss
        </Link>
      </StyleSheet.container>
    )
  }
}

export default Menu;
