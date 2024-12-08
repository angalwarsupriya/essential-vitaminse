import React from 'react'
import './page.css'

import Image from 'next/image'
function Header() {
  return (
    <header className='header-bg-con'>
      <div className='logo'>
       <Image src="/images/image.png" alt="Description" className='logo'  loading='lazy' layout='fill' objectFit='cover' />
      </div>
    </header>
  )
}

export default Header