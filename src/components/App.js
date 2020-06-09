import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header/Header'
import MainContent from './MainContent'
import restaurants from '../restaurants'
import order from './Order/Order'
import Account from '../Account'
import Login from './Account/Login'
import Register from './Account/Register'


function App() {
  return(
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/restaurants" component={restaurants} />
          <Route exact path="/order" component={order} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/account/login" component={Login} />
          <Route exact path="/account/register" component={Register} />
        </Switch>
    </Router>
    )
}

export default App
