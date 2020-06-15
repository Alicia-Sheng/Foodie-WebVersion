import React from 'react'

import '../../style.css'

import foodData from '../../../assets/data'

function CheeseQuesadilla() {
  return (
    <section>
      <div className="block">
        <div className="title-wrapper text-center">
          <div className="title-inner">
            <h2 itemProp="headline">Cheese Quesadilla</h2>
          </div>
        </div>
        <FoodList data={foodData} foodName="Cheese Quesadilla" />
      </div>
    </section>
  )
}

export default CheeseQuesadilla
