import React from 'react'
import './page.css'
function Blog() {
  return (
    <div className='blog-bg-con'>
        <h6 className='our-blog-hea'>OUR BLOG</h6>
        <h5 className='latest-news-hea'>Latest News</h5>
        <div className='blog-con'> 
            <div className='blog-row'>  
              <img src='/images/div.item-post-inner.png' alt='jelly bee' loading="lazy"  className='long-con'/>
              <img src='/images/div.item-post-inner (1).png' alt='captuals' loading="lazy"  className='short-con'/>
            </div>
        
            <div className='blog-row'>        
              <img src='/images/div.item-post-inner.png' alt='jelly bee' loading="lazy"  className='short-con'/>       
              <img src='/images/div.item-post-inner (1).png' alt='captuals' loading="lazy"  className='long-con'/>
            </div>           
            
            <div className='blog-row'>    
              <img src='/images/div.item-post-inner.png' alt='jelly bee' loading="lazy"  className='long-con'/>        
              <img src='/images/div.item-post-inner (1).png' alt='captuals' loading="lazy"  className='short-con'/>
            </div>
      

            <div className='blog-row'>        
              <img src='/images/div.item-post-inner.png' alt='jelly bee' loading="lazy" className='short-con'/>
              <img src='/images/div.item-post-inner (1).png' alt='captuals' loading="lazy" className='long-con'/>
            </div>


        </div>
    </div>
  )
}

export default Blog