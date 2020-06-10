import React from 'react'

import MenuList from './containers/MenuList'

import foodData from '../assets/data' /*should have data from multiple restaurants*/

import './style.css'

function Restaurants() {
  return (
    <div>

      <div className="title-wrapper text-center">
        <div className="title-inner">
          <h2 itemProp="headline">The Stein</h2>
        </div>
      </div>
      <MenuList data={foodData} dinHall="Dunckin Donuts" />

    </div>
  )
}

export default Restaurants
