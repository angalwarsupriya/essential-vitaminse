import React from 'react'
import './page.css'

import Image from 'next/image'
function Header() {
  return (
    <header className='header-bg-con'>
       <img src="/images/image.png" alt="Description" className='logo' />
    </header>
  )
}

export default Header