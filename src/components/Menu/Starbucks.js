import React from 'react'

import MenuList from '../../containers/MenuList'

import foodData from '../../../assets/data'

import '../../style.css'

function Starbucks() {
  return (
    <section>
      <div className="block">
        <div className="title-wrapper text-center">
          <div className="title-inner">
            <h2 itemProp="headline">Starbucks</h2>
          </div>
        </div>
        <MenuList data={foodData} dinHall="Starbucks Farber" />
      </div>
    </section>
  )
}

export default Starbucks
