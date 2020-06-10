import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css'

const Restaurant = ({restaurant}) => {
    return (

    <div className="top-restaurant">
        <a className="brd-rd50" href="#" title={restaurant.name} itemProp="url">
            <img src={restaurant.img.src} alt={restaurant.img.alt} itemProp="image"/>
        </a>
    </div>

    );
};

Restaurant.propTypes = {
    restaurant: PropTypes.object.isRequired
}

export default Restaurant;