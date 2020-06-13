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
                    <>
                        <section>
                            <div className='container'>
                                <div className="block remove-bottom">
                                    <div className="page-cart">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <form className="cart-form table_responsive" action="#" method="post">
                                                        <div className="order-wrapper">
                                                            <div className="order-inner gradient-brd">
                                                                <h4 itemProp="headline">Your Order</h4>
                                                                <div className="order-list-wrapper">
                                                                    <ul className="order-list-inner">
                                                                        {
                                                                            order.items.map((v, i) => {
                                                                                return <li
                                                                                    key={i}>
                                                                                    <div className="dish-name">
                                                                                        <img src={v.img.src} />
                                                                                    </div>
                                                                                    <div className="dish-name">
                                                                                        <h6 itemProp="headline">{v.name}</h6> {/*<span className="price">${v.price}</span>*/}
                                                                                        <span className="price">${parseFloat((v.price * v.num).toFixed(2))}</span>
                                                                                    </div>
                                                                                    <div className="dish-ingredients">
                                                                                        <span>{v.location}</span>
                                                                                    </div>
                                                                                    <div className="mor-ingredients">
                                                                                        <div className="qty-wrap input-group">
                                                                                            <input className="input-group-btn" type="button" value="-" onClick={order.decrementQty.bind(v, i)} />
                                                                                            <input className="form-control" type="text" value={v.num} />
                                                                                            <input className="input-group-btn" type="button" value="+" onClick={order.incrementQty.bind(v, i)} />
                                                                                        </div>
                                                                                        {/*<span className="price">${parseFloat((v.price * v.num).toFixed(2))}</span>*/}
                                                                                        <div className="remove-btn">
                                                                                            <input type="button" value="Remove" onClick={order.onRemoveFromOrder.bind(i, v)} />
                                                                                        </div>
                                                                                    </div>
                                                                                </li>

                                                                            })
                                                                        }
                                                                    </ul>

                                                                    {/* <ul className="order-total">
                                                                        <li><span>SubTotal</span> <i>${order.getTotal()}</i></li>
                                                                        <li><span>Tax</span> <i>${order.getTax(order.getTotal())}</i></li>
                                                                    </ul>
                                                                    <ul className="order-method brd-rd2 red-bg">
                                                                        <li><span>Total</span> <span className="price">${order.sum(order.getTotal(), order.getTax(order.getTotal()))} </span></li>
                                                                    </ul> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="grand-totall">
                                                        <div className="title-wrap">
                                                            <h4 className="cart-bottom-title section-bg-gary-cart">Order Total</h4>
                                                        </div>
                                                        <h5>SubTotal: <span>${order.getTotal()}</span></h5>
                                                        <h5>Tax: <span>${order.getTax(order.getTotal())}</span></h5>
                                                        <h4 className="grand-totall-title">Total:  <span>${order.sum(order.getTotal(), order.getTax(order.getTotal()))}</span></h4>
                                                        <a href="checkout.html" className="btn btn-primary checkout-button">Proceed to Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </OrderContext.Consumer>
        )
    }
}

export default Order
