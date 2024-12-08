import React from 'react'
import './page.css'

import Header from './components/Header/page'
import  Main from './components/Main/page'
import  Features  from './components/Features/page'
function page() {
  return (
    <div className='pro-bg-container'>
       <Header/>
       <Main/>
       <Features/>
    </div>
  )
}

export default page
