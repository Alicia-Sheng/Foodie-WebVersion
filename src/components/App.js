import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header/Header'
import MainContent from './MainContent'
import Sherman from './Menu/Sherman'
import Stein from './Menu/Stein'
import Dunkin from './Menu/Dunkin'
import order from './Order/Order'
import Account from '../Account'
import Login from './Account/Login'
import Register from './Account/Register'

import {
  OrderContext
} from "./Context/OrderContext";


class App extends React.Component {

  state = {
    items:[]
  }

  onAddToOrder = this.onAddToOrder.bind(this);
  onAddToOrder(p) {
    this.setState({
      items: [...this.state.items, p]
    });
  }

  onRemoveFromOrder = this.onRemoveFromOrder.bind(this);
  onRemoveFromOrder(i) {
    const newArray = [...this.state.items];
    newArray.splice(i, 1);

    this.setState({
      items: newArray
    });
  }

  render() {
    return(
      <Router>
        <OrderContext.Provider
          value={{
            items: this.state.items,
            onAddToOrder: this.onAddToOrder,
            onRemoveFromOrder: this.onRemoveFromOrder,
          }}>
          <Header />
          <Switch>
            <Route exact path="/" component={MainContent} />
            <Route exact path="/sherman" component={Sherman} />
            <Route exact path="/stein" component={Stein} />
            <Route exact path="/dunkin" component={Dunkin} />
            <Route exact path="/order" component={order} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
          </OrderContext.Provider>
      </Router>
    )
  }
}

export default App
