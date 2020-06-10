import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../components/Menu/Menu';

import './MenuList.css'

function MenuList({data}) {
  return (
    <div>
      {data.map(food => (
          <div key={food.id}>
            <Menu food={food} />
          </div>
       ))}
   </div >
 )
}

MenuList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default MenuList;
