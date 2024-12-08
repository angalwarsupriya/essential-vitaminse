import React from 'react'
import './page.css'
import Image from 'next/image'


function Main() {
  return (
    <main className='main-bg-con'>
       <div className="essential-vitaminse-main-con">
          <h1 className='essential-vitaminse-main-hea'>Essential Vitamins</h1>
          <div className='main-container'>
            <div className='main-left-con'>
                <div className='con'>
                   <p className='online-medical-p'>Online Mediacl Suplies</p>
                   <h3 className='main-left-h'>Get Your Vitamins & Minarals</h3>
                   <button className='explore-more-btn'>Explor More</button>
                </div>
            </div>
            <div className='main-image-con'>
                <div className='img-top-con'>
                  <div className='img-design-con'></div>
                  <div className='captuals-bottle-img'>
                  <Image src='/images/2023, 15_42_43 GMT+3.png' layout='fill' loading='lazy' objectFit='cover'  alt='captuals-bottle'/>
                </div>
              </div>

            </div>


            <div className='main-right-con'>
              <div className='all-items-con'>
                <div className='item-con'>
                <div className='item-icon-con'>
                  <Image src='/images/Frame-8365.png.png' alt='vitamins captual' className='item-img'   layout='fill' loading='lazy' objectFit='cover'/>
                  </div>
                  <div className='item-content-con'>
                      <h4 className='item-title'>Vitamins</h4>
                      <p className='item-dis'>Increased Vitamins and Minarals in your diet.</p>
                  </div> 
                </div>

                <div className='item-con'>
                <div className='item-icon-con'>
                  <Image src='/images/Frame-8365.png.png' alt='weight loss' className='item-img'  layout='fill' loading='lazy' objectFit='cover' />
                </div>
                  <div className='item-content-con'>
                      <h4 className='item-title'>Weight Lose</h4>
                      <p className='item-dis'>Weight Lose Find sceintifically proven.</p>
                  </div> 
                </div>


                <div className='item-con'>
                  <div className='item-icon-con'>
                  <Image src='/images/Frame-8365.png.png' alt='functional foods' className='item-img'  layout='fill' loading='lazy' objectFit='cover' />
                  </div>
                  <div className='item-content-con'>
                      <h4 className='item-title'>Functional Food</h4>
                      <p className='item-dis'>Functional Food from protien power to baby formula.</p>
                  </div> 
                </div>

              </div>
            </div>

          </div>
          <div className='pagination-con'>
            <div className='dot-con'></div>
            <div className='dot-con'></div>
          </div>
       </div>      
    </main>
  )
}

export default Main