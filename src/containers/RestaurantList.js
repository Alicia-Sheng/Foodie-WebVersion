import React from 'react';
import PropTypes from 'prop-types';

import Restaurant from '../components/Restaurant/Restaurant';
import './RestaurantList.css'

const RestaurantList = ({data}) => {
  return (
    <section>
      <div className="block remove-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="top-restaurants-wrapper">
                <ul className="restaurants-wrapper style2">
                  {data.map(restaurant => (
                    <li key={restaurant.id} className="wow bounceIn" data-wow-delay="0.2s">
                      <Restaurant restaurant={restaurant} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 );
}

RestaurantList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default RestaurantList;
