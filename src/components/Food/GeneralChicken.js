import React from 'react'

import '../../style.css'

import foodData from '../../../assets/data'

function GeneralChicken() {
  return (
    <section>
      <div className="block">
        <div className="title-wrapper text-center">
          <div className="title-inner">
            <h2 itemProp="headline">General Tso’s Chicken</h2>
          </div>
        </div>
        <FoodList data={foodData} foodName="General Tso's Chicken" />
      </div>
    </section>
  )
}

export default GeneralChicken
