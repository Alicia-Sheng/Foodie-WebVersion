import React, { Component } from 'react'

import './Order.css'

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderList: [
                { id: 1, name: "Caesar Salad", num: 1, price: 6.99, checked: false }
            ]
        };

        // this.handleChange = this.handleChange.bind(this);
    }


    // handleChange(event) {
    //     this.setState({
    //         orderList: event.target.value
    //     });
    // }

    getTotal() {
        let list = this.state.orderList;
        let total = 0;
        list.forEach((v) => {
            if (v.checked) {
                total += (v.num * v.price);
            }
        });
        return total
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
    }

    render() {
        return (
            <>
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
                                                                    this.state.orderList.map((v, i) => {
                                                                        return <li
                                                                        key={i}>
                                                                            {/*<span className={(v.checked?"active":"")+" d1"} onClick={this.tg.bind(this,i)}></span>*/}
                                                                            <div className="dish-name">
                                                                                <h6 itemProp="headline">{v.name}</h6> <span className="price">${v.price}</span>
                                                                            </div>
                                                                            <div className="dish-ingredients">
                                                                                <span>The Stein</span>
                                                                            </div>
                                                                            <div className="mor-ingredients">
                                                                                <div className="qty-wrap input-group">
                                                                                    <input className="input-group-btn" type="button" value="-" onClick={this.decrementQty.bind(this, i)} />
                                                                                    <input className="form-control" type="text" value={v.num} style={{ width: "20px" }} />
                                                                                    <input className="input-group-btn" type="button" value="+" onClick={this.incrementQty.bind(this, i)} />
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    })
                                                                }
                                                                <li>
                                                                    <div className="dish-name">
                                                                        <h6 itemProp="headline">Chicken Tandoori Special</h6> <span className="price">$85.00</span>
                                                                    </div>
                                                                    <div className="dish-ingredients">
                                                                        <span>The Stein</span>
                                                                    </div>
                                                                    <div className="mor-ingredients">
                                                                        <div className="qty-wrap">
                                                                            <input className="qty" type="text" value="1" />
                                                                            <button>-</button> 1 <button>+</button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <ul className="order-total">
                                                                <li><span>SubTotal</span> <i>${this.getTotal()}</i></li>
                                                                <li><span>Tax</span> <i>$12</i></li>
                                                            </ul>
                                                            <ul className="order-method brd-rd2 red-bg">
                                                                <li><span>Total</span> <span className="price">$340</span></li>
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
                                                        <h3>Cart Totals</h3>
                                                        <div className="coupon_inner">
                                                            <div className="cart_subtotal">
                                                                <p>Subtotal</p>
                                                                <p className="cart_amount">$27.07</p>
                                                            </div>
                                                            <div className="cart_subtotal ">
                                                                <p>Tax</p>
                                                                <p className="cart_amount"> $2.70</p>
                                                            </div>
                                                            <a href="#">Calculate Tax</a>

                                                            <div className="cart_subtotal">
                                                                <p>Total</p>
                                                                <p className="cart_amount">$29.77</p>
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
            </>
        )
    }
}

export default Order
