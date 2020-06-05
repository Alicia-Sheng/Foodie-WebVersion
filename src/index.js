import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';

import foodData from '../assets/data.js'


const App = () => {
  return (
   <>
    <div className="jumbotron">
    <h1>Top Yummy Food</h1>
    <p>TStill has some problems</p>
    </div>

    <h1>Foodie Temper</h1>
    <ul>
    {foodData.map(
        food => (<li key={food.id}>{food.amount} -- {food.name}</li>))}
    </ul>

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>MovieList</h1>
      </nav>

      <CardList data={foodData} />


    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
