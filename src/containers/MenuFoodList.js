import React from 'react';
import PropTypes from 'prop-types';

import MenuFood from '../components/MenuFood/MenuFood';

import './MenuFoodList.css'

function MenuFoodList({data}) {
  return (
    <div>
     {data.map(food => (
       <div key={food.id}>
         <MenuFood food={food} />
       </div>
     ))}
   </div >
 )
}

MenuFoodList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default MenuFoodList;
