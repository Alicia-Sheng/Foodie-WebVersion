import React from 'react'

import RestaurantList from '../containers/RestaurantList';
import restaurantData from '../../assets/restaurant.js'

import CardList from '../containers/CardList';
import foodData from '../../assets/data.js'

import '../style.css'

class MainContent extends React.Component {
  render() {
    return (
      <>
        <div div className='container-fluid'>
          <RestaurantList data={restaurantData} />
          <CardList data={foodData}/>
        </div>
      </>
    )
  }
}

export default MainContent
