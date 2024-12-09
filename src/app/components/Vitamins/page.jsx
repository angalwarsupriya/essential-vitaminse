import React from 'react'
import './page.css'
function Vitamins() {
  return (
    <div className='vitamins-bg-con'>

      <div className='vitamins-details-container'>
        <div className='indrediants-bg-con'>
            <h5 className='ingrediants-hea'>INGREDIENTS</h5>
            <h3 className='better-hea'>Better Ingredients</h3>
            <p className='para'>Only the when you choose, products offered on our platform hight quality ingredient s for high quality products!</p>
        </div>
   
          <img src='/images/div.elbzotech-banner-info-wrap (2).png' alt='vitamin C' loading='lazy' className="vitamin-card-con"/>
 

          <img src='/images/div.elbzotech-banner-info-wrap (4).png' alt='vitamin B3' loading='lazy'className="vitamin-card-con" />
       
          <img src='/images/div.elbzotech-banner-info-wrap (1).png' alt='megnecium' loading='lazy' className="vitamin-card-con"/>

  
          <img src='/images/div.elbzotech-banner-info-wrap (3).png' alt='hyaluronic' loading='lazy' className="vitamin-card-con"/>


       
          <img src='/images/div.elbzotech-banner-info-wrap (5).png' alt='lactobasillus' loading='lazy' className="vitamin-card-con"/>
   

      
          <img src='/images/div.elbzotech-banner-info-wrap.png' alt='design'  loading='lazy' className="design-card-con" />
      
      </div>
    </div>
  )
}

export default Vitamins