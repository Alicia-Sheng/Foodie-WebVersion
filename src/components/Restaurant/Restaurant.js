import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

const Restaurant = ({restaurant}) => {
    const link = "/"+restaurant.link
    return (

    <div className="top-restaurant">
        <a className="brd-rd50" href="#" title={restaurant.name} itemProp="url">
            <Link to={link}>
              <img src={restaurant.img.src} alt={restaurant.img.alt} itemProp="image"/>
            </Link>
        </a>
    </div>

    );
};

Restaurant.propTypes = {
    restaurant: PropTypes.object.isRequired,
}

export default Restaurant;
