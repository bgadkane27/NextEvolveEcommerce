import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'

const Header = () => {
  return (
    <header className='border-b border-b-gray-400 py-3'>
      <Container className='flex items-center justify-between gap-7 font-medium'>
        <div className='w-auto flex items-center gap-2'>
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className='flex items-center justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <div>
            <button className='text-sm font-semibold hover:text-black hoverEffect'>Login</button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header