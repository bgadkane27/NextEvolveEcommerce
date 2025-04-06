'use client';

import Container from '@/components/Container'
import EmptyCart from '@/components/EmptyCart';
import Loading from '@/components/Loading';
import NoAccessToCart from '@/components/NoAccessToCart';
import useCartStore from '@/store';
import { useAuth, useUser } from '@clerk/nextjs';
import { ShoppingBag } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const CartPage = () => {
  const [isClient, setIsClient] = useState(true);
  const { getGroupedItems, getItemCount, getTotalPrice, getSubTotalPrice, deleteCartItem, clearCart } = useCartStore();
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  useEffect(() => {
    setIsClient(true);
  }, [])

  if (!isClient) {
    return <Loading />
  }

  const handleClick = () => {
    console.log('Card clicked!');
  };

  const cartProducts = getGroupedItems();
  // console.log(cartProducts);

  return (
    <div>
      {
        isSignedIn
          ? <Container>
           {/* <div className='p-4'>
            <h1 className='text-2xl flex items-center gap-2 mb-2'><ShoppingBag />Shopping Cart</h1>
            <hr />
           </div> */}
           {
            cartProducts?.length > 0 
            ? '' 
            : 
            <EmptyCart />
           }
          </Container>
          : <NoAccessToCart />
      }
    </div>
  )
}

export default CartPage