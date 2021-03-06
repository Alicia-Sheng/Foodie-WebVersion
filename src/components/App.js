import React from 'react'
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import data from '../../assets/data.js'

import Header from './Header/Header'
import MainContent from './MainContent'
import Sherman from './Menu/Sherman'
import Stein from './Menu/Stein'
import Dunkin from './Menu/Dunkin'
import Einstein from './Menu/Einstein'
import Starbucks from './Menu/Starbucks'

import order from './Order/Order'
import Account from './Account/Account'
import Login from './Account/Login'
import Register from './Account/Register'
// import Toast from './Toast/Toast';

{/*
import BeefSpringRolls from './Food/BeefSpringRolls'
import CaesarSalad from './Food/CaesarSalad'
import CheeseQuesadilla from './Food/CheeseQuesadilla'
import GeneralChicken from './Food/GeneralChicken'
import SausageCroissant from './Food/SausageCroissant'
*/}

import {
  OrderContext
} from "./Context/OrderContext";

const history = createBrowserHistory();

class App extends React.Component {

  state = {
    products: data,
    items:[],
  }

  /*onAddToOrder = this.onAddToOrder.bind(this);
  onAddToOrder(p) {
    this.setState({
      items: [...this.state.items, p]
    });
  }*/

  onAddToOrder = this.onAddToOrder.bind(this);
  onAddToOrder(p) {
    let newArray = [...this.state.products];
    let add = newArray.find(item => item.id === p.id);
    if (!add.inCart) {
      add.num = 1;
      add.inCart = true;
      this.setState({
        items: [...this.state.items, add]
      })
    } else {
      let list = this.state.items;
      list[list.indexOf(p)].num++;
      this.setState({ items: list })
    }
  }

  onRemoveFromOrder = this.onRemoveFromOrder.bind(this);
  onRemoveFromOrder(p) {
    let newArray = [...this.state.products];
    let remove = newArray.find(item => item.id === p.id);
    remove.inCart = false;
    remove.num = 0;
    let list = this.state.items.filter(item => item.id !== p.id);
    this.setState({
      items: [...list],
      products: [...newArray]
    });
  }

  getTotal = this.getTotal.bind(this);
  getTotal() {
      let list = this.state.items;
      let total = 0;
      list.forEach((v) => {
          total += (v.num * v.price);
          /*if (!v.checked) {
              total += (v.num * v.price);
          }*/
      });
      return parseFloat(total.toFixed(2))
  }

  getTax = this.getTax.bind(this);
  getTax(n){
     let tax = n * 0.15;
     return parseFloat(tax.toFixed(2))
  }

  sum = this.sum.bind(this);
  sum(x, y){
    return parseFloat((x + y).toFixed(2))
  }

  incrementQty = this.incrementQty.bind(this);
  incrementQty(n) {
      let list = this.state.items;
      list[n].num++;
      this.setState({ items: list })
  }

  decrementQty = this.decrementQty.bind(this);
  decrementQty(n) {
      let list = this.state.items;
      list[n].num--;
      this.setState({ items: list })
      if (list[n].num <= 0) {
          /*list[n].checked = false;*/
          this.onRemoveFromOrder(list[n]);
      }
  }

  itemSum = this.itemSum.bind(this);
  itemSum() {
    let list = this.state.items;
    let total = 0;
    list.forEach((v) => {
            total += v.num;
    });
    return total
  }

  render() {
    return(
      <Router history={history}>
        <OrderContext.Provider
          value={{
            items: this.state.items,
            onAddToOrder: this.onAddToOrder,
            onRemoveFromOrder: this.onRemoveFromOrder,
            itemSum: this.itemSum,
            incrementQty: this.incrementQty,
            decrementQty: this.decrementQty,
            getTotal: this.getTotal,
            getTax: this.getTax,
            sum: this.sum,
          }}>
          <Header />
          <Switch>
            <Route exact path="/" component={MainContent} />
            <Route exact path="/sherman" component={Sherman} />
            <Route exact path="/stein" component={Stein} />
            <Route exact path="/dunkin" component={Dunkin} />
            <Route exact path="/starbucks" component={Starbucks} />
            <Route exact path="/einstein-bagels" component={Einstein} />
            <Route exact path="/order" component={order} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
{/*
            <Route exact path="/beefSpringRolls" component={BeefSpringRolls} />
            <Route exact path="/caesarSalad" component={CaesarSalad} />
            <Route exact path="/cheeseQuesadilla" component={CheeseQuesadilla} />
            <Route exact path="/generalChicken" component={GeneralChicken} />
            <Route exact path="/sausageCroissant" component={SausageCroissant} />
*/}
          </Switch>
          </OrderContext.Provider>
      </Router>
    )
  }
}

export default App
