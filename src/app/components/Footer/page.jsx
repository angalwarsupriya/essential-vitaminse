
import { GrLocation } from "react-icons/gr";
import './page.css'

import React from 'react'

function Footer() {
  return (
    <div className='footer-bg-con'>
        <div className='footer-con1'>  
              <div className='icon-information-row'>                
                <img src='/images/Component-2.svg.png' alt='Phone Number' loading="lazy"  className='hero-img'/>                
                <div className='icon-information-con'>
                  <p className='row-title'>Phone Number</p>
                  <p className='row-dis'>+97431181843</p>
                </div>
              </div>
        
              <div className='icon-information-row'>
                  <img src='/images/Component-2-1.svg.png' alt='Email Address' loading="lazy"  className='hero-img'/>
                  <div className='icon-information-con'>
                    <p className='row-title'>Email Address</p>
                    <p className='row-dis'>Elbrithqhr@gmail.com</p>
                </div>
              </div>
     

    
              <div className='icon-information-row'>                
                <img src='/images/Component-2-2.svg.png' alt='Office Location' loading="lazy"  className='hero-img'/>
                <div className='icon-information-con'>
                  <p className='row-title'>Office Location</p>
                  <p className='row-dis'>Ambassadoe Stret, Zoon 61</p>
                </div>
              </div>

        </div>

        <div className='footer-con2'>   
              <img src="/images/image.png" alt="Description" className='logo' loading='lazy' />  
              <div className='footer-para-con'>                
                <p className='footer-para'>your health, physical and emotionam well being is important to us. we are allways by your side and have made it even easier for you to find the necessary vitamins.</p>
              </div>
        </div>
        <div className='footer-con3'>
            <GrLocation className='location-icon'/>
            <p className='location-p'>Elbrit Life Scinces Privite Limited, C20 , BKC G Block Mumbai 400051.</p>
        </div>
    </div>
  )
}

export default Footer