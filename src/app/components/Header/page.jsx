
import './page.css'

import Image from 'next/image'
function Header() {
  return (
    <header className='header-bg-con'>
      <div className='logo'>
       <Image src="/images/image.png" alt="logo" className='logo'  loading='lazy' layout='fill' objectFit='cover' />
      </div>
    </header>
  )
}

export default Header