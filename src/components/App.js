import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header/Header'
import MainContent from './MainContent'
import restaurants from '../restaurants'
import order from './Order/Order'

function App() {
  return(
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/restaurants" component={restaurants} />
          <Route exact path="/order" component={order} />
        </Switch>
    </Router>
    )
}

export default App
