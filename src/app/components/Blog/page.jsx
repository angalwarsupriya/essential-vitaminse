import React from 'react'
import Image from 'next/image'
import './page.css'
function Blog() {
  return (
    <div className='blog-bg-con'>
        <h6 className='our-blog-hea'>OUR BLOG</h6>
        <h5 className='latest-news-hea'>Latest News</h5>
        <div className='blog-con'> 
           <div className='blog-row'>
           <div className='long-con'>
              <Image src='/images/div.item-post-inner.png' alt='jelly bee' loading="lazy" layout="fill" objectFit="cover" className='hero-img'/>
            </div>
            <div className='short-con'>
              <Image src='/images/div.item-post-inner (1).png' alt='captuals' loading="lazy" layout="fill" objectFit="cover" className='hero-img'/>
            </div>
        
           </div>

           <div className='blog-row'>
           <div className='short-con'>
              <Image src='/images/div.item-post-inner.png' alt='jelly bee' loading="lazy" layout="fill" objectFit="cover" className='hero-img'/>
            </div>
            <div className='long-con'>
              <Image src='/images/div.item-post-inner (1).png' alt='captuals' loading="lazy" layout="fill" objectFit="cover" className='hero-img'/>
            </div>
          
           </div>


           <div className='blog-row'>
           <div className='long-con'>
              <Image src='/images/div.item-post-inner.png' alt='jelly bee' loading="lazy" layout="fill" objectFit="cover" className='hero-img'/>
            </div>
            <div className='short-con'>
              <Image src='/images/div.item-post-inner (1).png' alt='captuals' loading="lazy" layout="fill" objectFit="cover" className='hero-img'/>
            </div>
            
           </div>


           <div className='blog-row'>
           <div className='short-con'>
              <Image src='/images/div.item-post-inner.png' alt='jelly bee' loading="lazy" layout="fill"  className='hero-img'/>
            </div>
            <div className='long-con'>
              <Image src='/images/div.item-post-inner (1).png' alt='captuals' loading="lazy" layout="fill"  className='hero-img'/>
            </div>
           
           </div>


        </div>
    </div>
  )
}

export default Blog