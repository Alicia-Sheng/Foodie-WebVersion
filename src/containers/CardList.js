import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card/Card';
import './CardList.css'

import InfiniteCarousel from 'react-leaf-carousel';

const CardList = ({ data }) => {

  return (
    <>
      {/* <div className='row'>

        {data.map(food => (
          <div
            key={food.id} className='col-lg-4 col-md-6 col-xl-4'>
            <Card food={food} />
          </div>
        ))}
      </div> */}

      <InfiniteCarousel

        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={.5}
        sideSize={.1}
        slidesToScroll={3}
        slidesToShow={3}
        scrollOnDevice={true}
        className='row'>
        {data.filter(data => data.category === "food").map(food => (
          <div
            key={food.id}>
            <Card food={food} />
          </div>
        ))}
        
      </InfiniteCarousel>
    </>
  );
}

CardList.propTypes = {
  data: PropTypes.array.isRequired,
};


export default CardList;
