import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, SignInButton, UserButton} from '@clerk/nextjs'
import Link from 'next/link'
import { ListOrdered} from 'lucide-react'

const Header = async () => {
  const user = await currentUser();
  return (
    <header className='border-b border-b-gray-400 py-3'>
      <Container className='flex items-center justify-between gap-7 font-medium'>
        <div className='w-auto flex items-center'>
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className='flex items-center justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={'/orders'} className='group relative'>
                <ListOrdered className='w-5 h-5 group-hover:text-black hoverEffect' />
                <span className='absolute -top-1.5 -right-1.5 bg-blue-800 text-white font-medium h-4 w-4 rounded-full flex items-center justify-center'>0</span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (<SignInButton mode='modal'>
              <button className='text-sm font-semibold hover:text-black hoverEffect'>Sign in</button>
            </SignInButton>)}
             {/* <SignedOut> */}
              {/* <SignInButton mode = 'modal'/>s */}
              {/* <SignUpButton /> */}
            {/* </SignedOut> */}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header