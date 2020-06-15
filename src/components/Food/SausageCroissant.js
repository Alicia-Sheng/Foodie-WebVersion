import React from 'react'

import '../../style.css'

import foodData from '../../../assets/data'

function SausageCroissant() {
  return (
    <section>
      <div className="block">
        <div className="title-wrapper text-center">
          <div className="title-inner">
            <h2 itemProp="headline">Sausage Croissant</h2>
          </div>
        </div>
        <FoodList data={foodData} foodName="Sausage Croissant" />
      </div>
    </section>
  )
}

export default SausageCroissant
