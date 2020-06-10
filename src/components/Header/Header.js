import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
    <header className="stick">
        <div className="topbar hidden">
            <div className="container">
                <div className="topbar-register">
                    <Link to="/account/login" className="log-popup-btn" title="Login" itemProp="url">LOGIN </Link> / <Link to="/account/register" className="sign-popup-btn" title="Register" itemProp="url"> REGISTER</Link>
                </div>
                <div className="social-media-login">
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
                            <Link to="/restaurants" exact className="nav-link">BEVERAGE</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="searchbar">
                <input className="search_input" type="text" name="" placeholder="Search..." />
                <a href="#" className="search_icon"><FontAwesomeIcon icon={faSearch} /></a>
            </div>
            <div>
                <Link to="/order" className = 'shoppingbag' >
                <FontAwesomeIcon icon={faShoppingBag} />
                <span> 2   </span>
                </Link>
            </div>
        </div>
    </nav>
</header>

);
export default Header;
