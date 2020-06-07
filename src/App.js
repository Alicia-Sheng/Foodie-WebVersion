import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Restaurants from './Restaurants'

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/restaurants" component={Restaurants} />
        </Switch>
      </div>
    </Router>
    )
}

export default App
