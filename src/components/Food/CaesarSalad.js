import React from 'react'

import '../../style.css'

import foodData from '../../../assets/data'

function BeefSpringRolls() {
  return (
    <section>
      <div className="block">
        <div className="title-wrapper text-center">
          <div className="title-inner">
            <h2 itemProp="headline">Caesar Salad</h2>
          </div>
        </div>
        <FoodList data={foodData} foodName="Caesar Salad" />
      </div>
    </section>
  )
}

export default CaesarSalad
