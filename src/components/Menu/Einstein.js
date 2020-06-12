import React from 'react'

import MenuList from '../../containers/MenuList'

import foodData from '../../../assets/data'

import '../../style.css'

function Einstein() {
  return (
    <section>
      <div className="block">
        <div className="title-wrapper text-center">
          <div className="title-inner">
            <h2 itemProp="headline">Einstein</h2>
          </div>
        </div>
        <MenuList data={foodData} dinHall="Einstein Bros. Bagels" />
      </div>
    </section>
  )
}

export default Einstein
