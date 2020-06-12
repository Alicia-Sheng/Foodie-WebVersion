import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import data from '../../assets/data.js'

import Header from './Header/Header'
import MainContent from './MainContent'
import Sherman from './Menu/Sherman'
import Stein from './Menu/Stein'
import Dunkin from './Menu/Dunkin'
import Einstein from './Menu/Einstein'
import Starbucks from './Menu/Starbucks'

import order from './Order/Order'
import Account from '../Account'
import Login from './Account/Login'
import Register from './Account/Register'

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
    if (!p.inCart) {
      this.setState({
        items: [...this.state.items, p]
      })
    } else {
      let list = this.state.items;
      list[list.indexOf(p)].num++;
      this.setState({ items: list })
    }
    p.inCart = true;
  }

  onRemoveFromOrder = this.onRemoveFromOrder.bind(this);
  onRemoveFromOrder(i) {
    const newArray = [...this.state.items];
    newArray.splice(i, 1);

    this.setState({
      items: newArray
    });
  }

  getTotal = this.getTotal.bind(this);
  getTotal() {
      let list = this.state.items;
      let total = 0;
      list.forEach((v) => {
          if (!v.checked) {
              total += (v.num * v.price);
          }
      });
      return total
  }

  getTax = this.getTax.bind(this);
  getTax(n){
     let tax = n * 0.15;
     return tax
  }

  sum = this.sum.bind(this);
  sum(x, y){
    return x + y
  }

  /*incrementQty = this.incrementQty(this);
  incrementQty(id) {
      let list = [...this.state.items];
      const selected = list.find(item => item.id === id);
      const index = list.indexOf(selected);
      const product = list[index];
      product.num = product.num + 1;
      product.total = product.num * product.num;
      this.setState(()=>{
          return {items: [...list]}
      }, () => {
          this.makeTotal();
      })
    }

  decrementQty = this.decrementQty(this);
  decrementQty(id) {
    let list = [...this.state.items];
    const selected = list.find(item => item.id === id);
    const index = list.indexOf(selected);
    const product = list[index];
    product.num = product.num - 1;
    product.total = product.num * product.num;
    this.setState(()=>{
        return {items: [...list]}
    }, () => {
        this.makeTotal();
    })
  }*/

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
      <Router>
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
