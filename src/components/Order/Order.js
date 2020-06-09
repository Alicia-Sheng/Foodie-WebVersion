import React, { Component } from 'react'

import './Order.css'

class Order extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     orderList: []
        // };

        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event) {
    //     this.setState({
    //         orderList: event.target.value
    //     });
    // }


    render() {
        return (
            <>
                <div className="shopping_cart_area mt-70">
                    <div className="container">
                        <form action="#">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table_desc">
                                        <div className="cart_page table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="product_remove">Delete</th>
                                                        <th className="product_thumb">Image</th>
                                                        <th className="product_name">Product</th>
                                                        <th className="product-price">Price</th>
                                                        <th className="product_quantity">Quantity</th>
                                                        <th className="product_total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                                        <td className="product_thumb"><a href="#"><img src="" alt=""/></a></td>
                                                        <td className="product_name"><a href="#">Caesar Salad</a></td>
                                                        <td className="product-price">$6.69</td>
                                                        <td className="product_quantity"><label>Quantity</label> <input min="1" max="100" value="1" type="number"/></td>
                                                        <td className="product_total">$6.69</td>
                                                    </tr>

                                                        <tr>
                                                        <td className="product_remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                                        <td className="product_thumb"><a href="#"><img src="" alt=""/></a></td>
                                                        <td className="product_name"><a href="#">Beef Spring Rolls</a></td>
                                                        <td className="product-price">$6.69</td>
                                                        <td className="product_quantity"><label>Quantity</label> <input min="1" max="100" value="1" type="number"/></td>
                                                        <td className="product_total">$6.69</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product_remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                                        <td className="product_thumb"><a href="#"><img src="" alt=""/></a></td>
                                                        <td className="product_name"><a href="#">{"General Tso's Chicken"}</a></td>
                                                        <td className="product-price">$13.69</td>
                                                        <td className="product_quantity"><label>Quantity</label> <input min="1" max="100" value="1" type="number"/></td>
                                                        <td className="product_total">$13.69</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="cart_submit">
                                            <button type="submit">update cart</button>
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
                                    <input placeholder="Coupon code" type="text"/>
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
                <div className="col-md-4 col-sm-12 col-lg-4">
                    <div className="order-wrapper">
                        <div className="order-inner gradient-brd">
                            <h4 itemProp="headline">Your Order</h4>
                            <div className="order-list-wrapper">
                                <ul className="order-list-inner">
                                    <li>
                                        <div className="dish-name">
                                            <i>.1</i> <h6 itemProp="headline">Chicken Tandoori Special</h6> <span className="price">$85.00</span>
                                        </div>
                                        <div className="dish-ingredients">
                                            <span className="check-box"><input type="checkbox" id="checkbox1-1" /><label htmlFor="checkbox1-1"><span>Drink</span> <i>$12</i></label></span>
                                            <span className="check-box"><input type="checkbox" id="checkbox1-2" /><label htmlFor="checkbox1-2"><span>Butter</span><i>$12</i></label></span>
                                        </div>
                                        <div className="mor-ingredients">
                                            <a className="red-clr" href="#" title="" itemProp="url">Edit</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dish-name">
                                            <i>.2</i> <h6 itemProp="headline">Chicken Tandoori Special</h6> <span className="price">$90.00</span>
                                        </div>
                                        <div className="dish-ingredients">
                                            <span className="check-box"><input type="checkbox" id="checkbox2-1" /><label htmlFor="checkbox2-1"><span>Drink</span> <i>$10</i></label></span>
                                            <span className="check-box"><input type="checkbox" id="checkbox2-2" /><label htmlFor="checkbox2-2"><span>Butter</span> <i>$20</i></label></span>
                                        </div>
                                        <div className="mor-ingredients">
                                            <a className="red-clr" href="#" title="" itemProp="url">Edit</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dish-name">
                                            <i>.3</i> <h6 itemProp="headline">Chicken Tandoori Special</h6> <span className="price">$100.00</span>
                                        </div>
                                        <div className="dish-ingredients">
                                            <span className="check-box"><input type="checkbox" id="checkbox3-1" /><label htmlFor="checkbox3-1"><span>Drink</span> <i>$30</i></label></span>
                                        </div>
                                        <div className="mor-ingredients">
                                            <a className="red-clr" href="#" title="" itemProp="url">Edit</a>
                                            <div className="ingradient-list yellow-bg">
                                                <span className="check-box"><input type="checkbox" id="checkbox4-1" /><label htmlFor="checkbox4-1"><span>Extra Drink</span></label></span>
                                                <span className="check-box"><input type="checkbox" id="checkbox4-2" /><label htmlFor="checkbox4-2"><span>Extra Drink</span></label></span>
                                                <span className="check-box"><input type="checkbox" id="checkbox4-3" /><label htmlFor="checkbox4-3"><span>Extra Drink</span></label></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="order-total">
                                    <li><span>SubTotal</span> <i>$158</i></li>
                                    <li><span>Delivery fee</span> <i>$70</i></li>
                                    <li><span>Tax</span> <i>$12</i></li>
                                </ul>
                                <ul className="order-method brd-rd2 red-bg">
                                    <li><span>Total</span> <span className="price">$340</span></li>
                                    <li><span className="radio-box"><input type="radio" name="method" id="pay1-1" /><label htmlFor="pay1-1"><i className="fa fa-money"></i> Cash</label></span> <span className="radio-box"><input type="radio" name="method" id="pay1-2" /><label htmlFor="pay1-2"><i className="fa fa-credit-card-alt"></i> Card</label></span></li>
                                    <li><a className="brd-rd2" href="#" title="" itemProp="url">CONFIRM ORDER</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </>
        )
    }
}

export default Order