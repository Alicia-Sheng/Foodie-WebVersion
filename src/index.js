/*import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';

import foodData from '../assets/data.js'

import './style.css'

const App = () => {
  return (
   <>
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

    <div className='container-fluid'>
      <div className='container'>
      <div className='row'>
        <div className="col-md-12 col-sm-12 col-lg-12">
          <div className="title-wrapper text-center">
            <div className="title-inner">
              <h2 itemProp="headline">Choose & Enjoy</h2>
            </div>
          </div>

          <CardList data={foodData} />
        </div>
      </div>
      </div>
    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

ReactDOM.render( < App / > , document.getElementById('root'));