import React, { Component } from 'react'
import {
    OrderContext
} from "../Context/OrderContext";

import './Order.css'

class Order extends Component {
    constructor(props) {
        super(props);

        /*this.state = {
            orderList: [
                { id: 1, name: "Caesar Salad", num: 1, price: 6.99, checked: true },
                { id: 2, name: "Chicken Tender", num: 2, price: 8.99, checked: true}
            ]
        };*/

        // this.handleChange = this.handleChange.bind(this);
    }


    // handleChange(event) {
    //     this.setState({
    //         orderList: event.target.value
    //     });
    // }

    /*getTotal() {
        let list = this.state.orderList;
        let total = 0;
        list.forEach((v) => {
            if (v.checked) {
                total += (v.num * v.price);
            }
        });
        return total
    }
    getTax(n){
       let tax = n * 0.15;
       return tax
    }

    sum(x, y){
      return x + y
    }

    incrementQty(n) {
        let list = this.state.orderList;
        list[n].num++;
        this.setState({ orderList: list })
    }

    decrementQty(n) {
        let list = this.state.orderList;
        list[n].num--;
        if (list[n].num <= 0) {
            alert("Item removed");
            list[n].checked = false;
        }
        this.setState({ orderList: list })
    }*/

    render() {
        return (
          <OrderContext.Consumer>
            {order => (
                <section>
                    <div className='container'>
                        <div className="block remove-bottom">
                            <div className="shopping_cart_area mt-70">
                                <div className="container">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-12">
                                                <div className="order-wrapper">
                                                    <div className="order-inner gradient-brd">
                                                        <h4 itemProp="headline">Your Order</h4>
                                                        <div className="order-list-wrapper">
                                                            <ul className="order-list-inner">
                                                                {
                                                                    order.items.map((v, i) => {
                                                                        return <li
                                                                        key={i}>
                                                                            {/*<span className={(v.checked?"active":"")+" d1"} onClick={this.tg.bind(this,i)}></span>*/}
                                                                            <div className="dish-name">
                                                                                <h6 itemProp="headline">{v.name}</h6> <span className="price">${v.price}</span>
                                                                            </div>
                                                                            <div className="dish-ingredients">
                                                                                <span>{v.location}</span>
                                                                            </div>
                                                                            <div className="mor-ingredients">
                                                                                <div className="qty-wrap input-group">
                                                                                    <input className="input-group-btn" type="button" value="-" onClick={order.decrementQty.bind(v, i)} />
                                                                                    <input className="form-control" type="text" value={v.num} style={{ width: "20px" }} />
                                                                                    <input className="input-group-btn" type="button" value="+" onClick={order.incrementQty.bind(v, i)} />
                                                                                </div>
                                                                                <span className="price">${parseFloat((v.price * v.num).toFixed(2))}</span>
                                                                            </div>
                                                                        </li>

                                                                    })
                                                                }
                                                            </ul>

                                                            <ul className="order-total">
                                                                <li><span>SubTotal</span> <i>${order.getTotal()}</i></li>
                                                                <li><span>Tax</span> <i>${order.getTax(order.getTotal())}</i></li>
                                                            </ul>
                                                            <ul className="order-method brd-rd2 red-bg">
                                                                <li><span>Total</span> <span className="price">${order.sum(order.getTotal(), order.getTax(order.getTotal()))} </span></li>
                                                                <li><a className="brd-rd2" href="#" title="" itemProp="url">CONFIRM ORDER</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="coupon_area">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="coupon_code left">
                                                        <h3>Coupon</h3>
                                                        <div className="coupon_inner">
                                                            <p>Enter your coupon code if you have one.</p>
                                                            <input placeholder="Coupon code" type="text" />
                                                            <button type="submit">Apply coupon</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="coupon_code right">
                                                        <h3>Order Totals</h3>
                                                        <div className="coupon_inner">
                                                            <div className="cart_subtotal">
                                                                <p>Subtotal</p>
                                                                <p className="cart_amount">${order.getTotal()}</p>
                                                            </div>
                                                            <div className="cart_subtotal ">
                                                                <p>Tax</p>
                                                                <p className="cart_amount">${order.getTax(order.getTotal())}</p>
                                                            </div>
                                                            <a href="#">Calculate Tax</a>

                                                            <div className="cart_subtotal">
                                                                <p>Total</p>
                                                                <p className="cart_amount">${order.sum(order.getTotal(), order.getTax(order.getTotal()))}</p>
                                                            </div>
                                                            <div className="checkout_btn">
                                                                <a href="#">Proceed to Checkout</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            </OrderContext.Consumer>
        )
    }
}

export default Order
