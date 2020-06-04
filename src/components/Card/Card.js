import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ food }) => {
  return (
    <div className='card'>
      <img src={food.img.src} className='card-img-top' alt={food.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`${food.name}`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`$${food.price}`}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  food: PropTypes.object.isRequired
}
/*
Card.propTypes = {
  food: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ranking: PropTypes.number,
  }).isRequired,
};
*/
export default Card;
