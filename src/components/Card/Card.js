import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ food }) => {
  return (
    <div className='card'>
      <img src={food.img.src} className='card-img-top' alt={food.img.alt} />
      <div className='card-body'>
        <h2 className='card-title'>{`#${food.price} - ${food.location} (${food.desc})`}</h2>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Location: ${food.location}`}</li>
        <li className='list-group-item'>{`Amount: ${food.amount}`}</li>
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
