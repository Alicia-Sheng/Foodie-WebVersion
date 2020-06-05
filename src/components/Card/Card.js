import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import './Card.css'

const Img = styled.img`
  width: 100%;
  height: 320px;
`

const Card = ({ food }) => {
  return (
    <div className='card'>
        <Img src={food.img.src} className='card-img-top' alt={food.img.alt}/>
      <div className='card-body'>
        <h2 itemProp='headline' className='card-title'>{`${food.name}`}</h2>
        <p itemProp='description' className='card-desc'>{`${food.desc}`}</p>
        <span className='card-price'>{`$${food.price}`}</span>
        <a className='card-order' href="#" title="Order Now">Order Now</a>
        <div className='restaurant-info'>
          <h6 itemProp='headline'>{`${food.location}`}</h6>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  food: PropTypes.object.isRequired
}
/*
Card.propTypes = {
  food: PropTypes.shape({
  name: PropTypes.string,
  location: PropTypes.string,
  img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
  }),
  desc: PropType.string,
  price: PropType.number,
  ranking: PropTypes.number,
  }).isRequired,
};
*/
export default Card;
