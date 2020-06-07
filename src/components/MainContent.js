import React from 'react'

import CardList from '../containers/CardList';

import foodData from '../../assets/data.js'

import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="title-wrapper text-center">
                <div className="title-inner">
                  <h2 itemProp="headline">Choose & Enjoy</h2>
                </div>
              </div>

              <CardList data={foodData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
