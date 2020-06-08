import React from 'react'

import MenuFoodList from './containers/MenuFoodList'

import steinFood from '../assets/stein' /*should have data from multiple restaurants*/

import './style.css'

function Restaurants() {
  return (
    <div>

      <div className="title-wrapper text-center">
        <div className="title-inner">
          <h2 itemProp="headline">The Stein</h2>
        </div>
      </div>
      <MenuFoodList data={steinFood} />

    </div>
  )
}

export default Restaurants
