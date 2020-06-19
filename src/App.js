import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import login from './pages/Login'
import home from './pages/Home'
import register from './pages/Register'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={register} />
          <Route path='/login' exact component={login} />
          <Route path='/home' exact component={home} />
        </Switch>
      </Router>
    )
  }
}