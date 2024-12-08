import React from 'react'
import './page.css'

import Header from './components/Header/page'
import  Main from './components/Main/page'
import  Features  from './components/Features/page'
import Vitamins from './components/Vitamins/page'
import Blog from './components/Blog/page'
import Footer from './components/Footer/page'
function page() {
  return (
    <div className='pro-bg-container'>
       <Header/>
       <Main/>
       <Features/>
       <Vitamins/>
       <Blog/>
       <Footer/>
    </div>
  )
}

export default page
