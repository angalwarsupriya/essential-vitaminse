import React from 'react'
import Image from 'next/image'
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
   
        <div className="vitamin-card-con">
          <Image src='/images/div.elbzotech-banner-info-wrap (2).png' alt='vitamin C' loading='lazy' layout='fill' objectFit='cover'/>
        </div>
        <div className="vitamin-card-con">
          <Image src='/images/div.elbzotech-banner-info-wrap (4).png' alt='vitamin C' loading='lazy' layout='fill' objectFit='cover'/>
        </div>
        <div className="vitamin-card-con">
          <Image src='/images/div.elbzotech-banner-info-wrap (1).png' alt='vitamin C' loading='lazy' layout='fill' objectFit='cover'/>
        </div>
        <div className="vitamin-card-con">
          <Image src='/images/div.elbzotech-banner-info-wrap (3).png' alt='vitamin C' loading='lazy' layout='fill' objectFit='cover'/>
        </div>

        <div className="vitamin-card-con">
          <Image src='/images/div.elbzotech-banner-info-wrap (5).png' alt='vitamin C' loading='lazy' layout='fill' objectFit='cover'/>
        </div>

        <div className="design-card-con">
          <Image src='/images/div.elbzotech-banner-info-wrap.png' alt='vitamin C'  loading='lazy' layout='fill' objectFit='cover' />
        </div>

      </div>
    </div>
  )
}

export default Vitamins