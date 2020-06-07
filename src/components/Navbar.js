import React from 'react'

import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md sticky-top">
      <a href="#" className="navbar-brand">FOODIE</a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navLinks">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="" className="nav-link">HOME</a>
          </li>
          <li className="nav-item">
            <a href="/sherman.html" className="nav-link">RESTAURANTS</a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">ABOUT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
