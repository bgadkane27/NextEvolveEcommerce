'use client';

import useCartStore from '@/store'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  const {items} = useCartStore();
  return (
    <Link href={'/cart'} className='group relative'>
        <ShoppingCart className='w-5 h-5 group-hover:text-black hoverEffect'/>
        <span 
        className='absolute -top-1.5 -right-1.5 bg-blue-600 text-white font-medium h-4 w-4 rounded-full flex items-center justify-center'>
        {items.length ? items.length : 0}
        </span>
    </Link>
  )
}

export default CartIcon