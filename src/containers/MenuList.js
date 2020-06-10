import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../components/Menu/Menu';

import './MenuList.css'

function MenuList({data, dinHall}) {
  return (
    <div>
      {data.map(food => {if (food.location===dinHall) {
          return (
          <div key={food.id}>
            <Menu food={food} />
          </div>)}}
       )}
   </div >
 )
}

MenuList.propTypes = {
    data: PropTypes.array.isRequired,
    dinHall: PropTypes.array.isRequired,
};


export default MenuList;
