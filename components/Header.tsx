
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
import { getProductCategories } from '@/sanity/helpers/Queries';

const Header = async () => {
  const user = await currentUser();
  const categories = await getProductCategories();
  return (
    <header className='border-b border-b-gray-400 py-3 sticky top-0 z-50 bg-white'>
      <Container className='flex items-center justify-between gap-7 font-medium bg-transparent'>
        <div className='w-auto flex items-center'>
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu categories={categories} />
        <div className='flex items-center justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={'/orders'} className='group relative'>
                <ListOrdered className='w-5 h-5 group-hover:text-black hoverEffect' />
                <span className='absolute -top-1.5 -right-1.5 bg-blue-600 text-white font-medium h-4 w-4 rounded-full flex items-center justify-center'>0</span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (<SignInButton mode='modal'>
              <button className='pr-4 text-sm font-semibold hover:text-black hoverEffect'>Sign in</button>
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