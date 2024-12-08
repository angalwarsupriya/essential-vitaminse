import React from 'react'
import './page.css'



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
                  <div className='img-con'></div>
                  <img src='/images/2023, 15_42_43 GMT+3.png' className='captuals-bottle-img' alt='captuals-bottle'/>
                </div>
            </div>
            <div className='main-right-con'>
              <div className='all-items-con'>
                <div className='item-con'>
                  <img src='/images/Frame-8365.png.png' alt='vitamins captual' className='item-img' />
                  <div className='item-content-con'>
                      <h4 className='item-title'>Vitamins</h4>
                      <p className='item-dis'>Increased Vitamins and Minarals in your diet</p>
                  </div> 
                </div>

                <div className='item-con'>
                  <img src='/images/Frame-8365.png.png' alt='weight loss' className='item-img' />
                  <div className='item-content-con'>
                      <h4 className='item-title'>Vitamins</h4>
                      <p className='item-dis'>Increased Vitamins and Minarals in your diet</p>
                  </div> 
                </div>


                <div className='item-con'>
                  <img src='/images/Frame-8365.png.png' alt='functional foods' className='item-img' />
                  <div className='item-content-con'>
                      <h4 className='item-title'>Vitamins</h4>
                      <p className='item-dis'>Increased Vitamins and Minarals in your diet</p>
                  </div> 
                </div>

              </div>
            </div>

          </div>
          <div className='pagination-con'>

          </div>
       </div>      
    </main>
  )
}

export default Main