import React from 'react'

import MenuList from '../../containers/MenuList'

import foodData from '../../../assets/data'

import '../../style.css'

function Sherman() {
  return (
    <section>
      <div className="block">
        <div className="title-wrapper text-center">
          <div className="title-inner">
            <h2 itemProp="headline">Sherman Dining Hall</h2>
          </div>
        </div>
        <MenuList data={foodData} dinHall="Sherman Dining Hall" />
      </div>
    </section>
  )
}

export default Sherman
