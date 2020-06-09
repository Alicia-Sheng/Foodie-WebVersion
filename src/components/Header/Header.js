import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag,faUser} from '@fortawesome/free-solid-svg-icons';

const Header = () => (
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
                            <Link to="/restaurants" exact className="nav-link">RESTAURANTS</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="searchbar">
                <input className="search_input" type="text" name="" placeholder="Search..." />
                <a href="#" className="search_icon"><FontAwesomeIcon icon={faSearch} /></a>
            </div>
            <div>
                <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                          <Link to="/order" className = 'shoppingbag' >
                            <FontAwesomeIcon icon={faShoppingBag} />
                            <span> 2   </span>
                          </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className = 'login' >
                          <FontAwesomeIcon icon={faUser} />
                        </Link>
                      </li>
                </ul>
            </div>

        </div>
    </nav>

);
export default Header;
