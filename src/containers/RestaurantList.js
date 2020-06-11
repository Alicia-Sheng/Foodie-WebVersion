import React from 'react';
import PropTypes from 'prop-types';

import Restaurant from '../components/Restaurant/Restaurant';
import './RestaurantList.css'

import { Link } from 'react-router-dom';

const RestaurantList = ({ data }) => {
  return (
    <>
      <section>
        <div className="block">
            <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="title1-wrapper text-center">
                    <div className="title1-inner">
                      <h2 itemProp="headline">Restaurants & Cafes</h2>
                    </div>
                  </div>
                  <div className="top-restaurants-wrapper">
                    <ul className="restaurants-wrapper style2">
                      {data.map(restaurant => (
                        <li key={restaurant.id} className="wow bounceIn" data-wow-delay="0.2s">
                          <Restaurant restaurant={restaurant}/>
                        </li>
                      ))}
                      <li className="wow bounceIn" data-wow-delay="0.2s">
                      <div className="top-restaurant">
                        <a className="brd-rd50" href="#" title="restaurants" itemProp="url">
                          <Link to="/restaurants">
                            <img src={"media/logo/all-restaurants.jpg"} alt="restaurants" itemProp="image" />
                          </Link>
                        </a>
                      </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

RestaurantList.propTypes = {
  data: PropTypes.array.isRequired,
};


export default RestaurantList;
