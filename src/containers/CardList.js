import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card/Card';
import './CardList.css'

const CardList = ({data}) => {
  return (
   <div className='flex-container'>
     {data.map(food => (
       <div key={food.id} className='flex-container-element'>
         <Card food={food} />
       </div>
     ))}
   </div>
 );
}

CardList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default CardList;
