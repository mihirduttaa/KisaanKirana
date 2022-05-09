import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem
                    src="C:\Users\ASUS\kisaankirana\public\images\img-9.jpg"
                    path='/services'
                    label="Adventure"
                    text="Explore the hidden waterfall deep inside the Amazon"
                    />

                    <CardItem
                    src="C:\Users\ASUS\kisaankirana\public\images\img-9.jpg"
                    path='/services'
                    label="Adventure"
                    text="Explore the hidden waterfall deep inside the Amazon"
                    />
                </ul>

            </div>
        </div>
      
    </div>
  )
}

export default Cards
