import React from 'react'
import './page.css'

import FeatureItem from './FeatureItem/page'




const featuresItemsList = [
  {itemId:1, itemTitle:'Clinically Studied', itemDis:'my name is suriya may father name is satyanarayana', itemUrl:'/images/Group-8111.svg.png'}, 
  {itemId:2, itemTitle:'Vegetarian Friendly', itemDis:'my name is suriya may father name is satyanarayana', itemUrl:'/images/Group-8110.svg.png'},
  {itemId:3, itemTitle:'Made in India', itemDis:'my name is suriya may father name is satyanarayana', itemUrl:'/images/Group-8117.svg.png'},
  {itemId:4, itemTitle:'Free Shpping', itemDis:'my name is suriya may father name is satyanarayana', itemUrl:'/images/Group-8114.svg.png'},
  {itemId:5, itemTitle:'No Risk', itemDis:'my name is suriya may father name is satyanarayana', itemUrl:'/images/Group-8115.svg.png'},
  {itemId:5, itemTitle:'GMO Free', itemDis:'my name is suriya may father name is satyanarayana', itemUrl:'/images/Group-8116.svg.png'},
]
function Features() {
  return (
    <div className='features-card-con'>
      <div className='features-card'>
        <div className='features-card-items-con'>
        {featuresItemsList.map(card => ( 
          <FeatureItem key={card.itemId} itemTitle={card.itemTitle} itemDis={card.itemDis}  itemUrl={card.itemUrl} /> 
         ))
        }
        </div>
      </div>
    </div>
  )
}

export default Features