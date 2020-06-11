import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import './Card.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons';

import {
    OrderContext
} from "../Context/OrderContext";

const Img = styled.img`
  width: 100%;
  height: 260px;
`

const Card = ({ food }) => {

    return (
        <OrderContext.Consumer>
            {order => (
        <div className='card'>
            <div className='card-header'>
                <a href="#" title="" itemProp="url">
                    <Img src={food.img.src} className='card-img-top' alt={food.img.alt} />
                </a>
                <span className="post-rate"><FontAwesomeIcon icon={faStar} /> {`${food.rating}`}</span>
            </div>
            <div className='card-body'>
                <h2 itemProp='headline' className='card-title'>{`${food.name}`}</h2>
                <p itemProp='description' className='card-desc'>{`${food.desc}`}</p>
                <span className='card-price'>{`$${food.price}`}</span>
                    <a className='card-order' href="javascript:void(0);" title="Order Now" onClick={() => order.onAddToOrder(food)}>Add to Order</a>
                        {/* {order.items.filter(p => p.id === food.id).length || 'none'} */}
                <div className='restaurant-info'>
                    <h6 itemProp='headline'>{`${food.location}`}</h6>
                </div>
            </div>
        </div>
        )}
        </OrderContext.Consumer>

    );
};

Card.propTypes = {
    food: PropTypes.object.isRequired
}

Card.propTypes = {
    food: PropTypes.shape({
        name: PropTypes.string,
        location: PropTypes.string,
        img: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
        }),
        desc: PropTypes.string,
        price: PropTypes.number,
        rating: PropTypes.number
    }).isRequired,
};

export default Card;
