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

      <div className='container'>
        <div className='row'>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <div className="title-wrapper text-center">
              <div className="title-inner">
                <h2 itemProp="headline">Food you might like</h2>
              </div>
            </div>

            <InfiniteCarousel

              breakpoints={[
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 868,
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
          </div>
        </div>
        <div className='row'>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <div className="title-wrapper text-center">
              <div className="title-inner">
                <h2 itemProp="headline">Drinks you might like</h2>
              </div>
            </div>

            <InfiniteCarousel

              breakpoints={[
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                }, {
                  breakpoint: 868,
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
              {data.filter(data => data.category === "drink").map(food => (
                <div
                  key={food.id}>
                  <Card food={food} />
                </div>
              ))}

            </InfiniteCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

CardList.propTypes = {
  data: PropTypes.array.isRequired,
};


export default CardList;
