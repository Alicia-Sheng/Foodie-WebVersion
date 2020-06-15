import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

const Food = ({food}) => {
    const link = "/"+food.link
    return (

    <div className="food">
        <a className="brd-rd50" href="#" title={food.name} itemProp="url">
            <Link to={link}>
              <img src={food.img.src} alt={food.img.alt} itemProp="image"/>
            </Link>
        </a>
    </div>

    );
};

Restaurant.propTypes = {
    restaurant: PropTypes.object.isRequired
}

export default Food;
