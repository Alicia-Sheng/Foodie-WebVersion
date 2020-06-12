import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

import {
    OrderContext
} from "../Context/OrderContext";

class Header extends React.Component {
    render() {
        return (
            <OrderContext.Consumer>
                {order => (
                    <header className="stick">
                        <div className="topbar hidden">
                            <div className="container">
                                <div className="topbar-register">
                                    <Link to="/login" className="log-popup-btn" title="Login" itemProp="url">LOGIN </Link> / <Link to="/register" className="sign-popup-btn" title="Register" itemProp="url"> REGISTER</Link>
                                </div>
                                <div div className="social1">
                                    <a href="#" title="Facebook" itemProp="url" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                                    <a href="#" title="Twitter" itemProp="url" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#" title="Google Plus" itemProp="url" target="_blank"><FontAwesomeIcon icon={faGoogle} /></a>
                                </div>
                            </div>
                        </div>
                        <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md sticky-top">
                            <div className="container">
                                <Link className="navbar-brand js-scroll-trigger hidden" to="/">FOODIE</Link>
                                <div>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarCollapse">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#">FOOD<span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/account" exact className="nav-link">ACCOUNT</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="searchbar">
                                    <input className="search_input" type="text" name="" placeholder="Search..." />
                                    <a href="#" className="search_icon"><FontAwesomeIcon icon={faSearch} /></a>
                                </div>
                                <div className='shoppingbag'>
                                    <Link to="/order" >
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                        <span> {order.itemSum() || ''}   
                                            {/* {order.items.map((p) => (

                                                <span key={p.id} className="order-item">
                                                    {p.name}{" "}
                                                </span>
                                            ))} */}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </header>
                )}
            </OrderContext.Consumer>
        )
    }
}


export default Header;
