import React from 'react';
import PropTypes from 'prop-types';

import Food from '../components/Food';

import './FoodList.css'

function FoodList({data, foodName}) {
  return (
    <div>
      {data.map(food => {if (food.name===foodName) {
          return (
          <div>
            <Card food={food} />
          </div>)}}
       )}
   </div >
 )
}

FoodList.propTypes = {
    data: PropTypes.array.isRequired,
    foodName: PropTypes.array.isRequired,
};


export default FoodList;
