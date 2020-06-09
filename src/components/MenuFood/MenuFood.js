import React from 'react'
import PropTypes from 'prop-types'

import './MenuFood.css'

function MenuFood({ food }) {
    return (
      <div className='food'>
        <div className='food-img-section'>
          <img src={food.img.src} className='food-img' alt={food.img.alt}/>
        </div>
        <div className='food-body'>
          <h4 itemProp='name' className='food-name'>{`${food.name}`}</h4>
          <p itemProp='ingredients' className='food-ingredients'>{`${food.desc}`}</p>
        </div>
        <div className='food-price-section'>
          <h4 itemProp='price' className='food-price'>{`$${food.price}`}</h4>
        </div>
      </div>
    )
};

MenuFood.propTypes = {
  food: PropTypes.object.isRequired
}

export default MenuFood
