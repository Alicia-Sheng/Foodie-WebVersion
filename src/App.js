import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Sherman from './sherman'

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route exact path="/sherman" component={Sherman} />
        </Switch>
      </div>
    </Router>
    )
}

export default App
