import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header/Header'
import MainContent from './MainContent'
import Restaurants from '../restaurants'

function App() {
  return(
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/restaurants" component={Restaurants} />
        </Switch>
    </Router>
    )
}

export default App
