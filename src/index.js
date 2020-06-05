import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';

import foodData from '../assets/data.js'


const App = () => {
  return (
   <>
    <div className="jumbotron">
    <h1>Foodie</h1>
    <p>Quick and easy food ordering</p>
    </div>

    <div className='container-fluid'>
        <nav className='navbar sticky-top navbar-light bg-white'>
        <h1 className='navbar-brand text-black'>Featured Food</h1>
      </nav>

      <CardList data={foodData} />


    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
