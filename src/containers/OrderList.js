import React from 'react';
import PropTypes from 'prop-types';

import Order from '../components/Order/Order';

const OrderList = ({ data }) => {
  return (
    <>
      <section>
        <div className="block">
            <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="title1-wrapper text-center">
                    <div className="title1-inner">
                      <h2 itemProp="headline">Orders & Cafes</h2>
                    </div>
                  </div>
                  <div className="top-Orders-wrapper">
                    <ul className="Orders-wrapper style2">
                      {data.map(order => (
                        <li key={Order.id} className="wow bounceIn" data-wow-delay="0.2s">
                          <Order order={order}/>
                        </li>
                      ))}
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

OrderList.propTypes = {
  data: PropTypes.array.isRequired,
};


export default OrderList;
