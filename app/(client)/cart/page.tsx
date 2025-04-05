'use client';

import Container from '@/components/Container'
import Loading from '@/components/Loading';
import NoAccessToCart from '@/components/NoAccessToCart';
import useCartStore from '@/store';
import { useAuth, useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'

const CartPage = () => {
  const [isClient, setIsClient] = useState(true);
  const { getGroupedItems, getItemCount, getTotalPrice, getSubTotalPrice, deleteCartItem, clearCart } = useCartStore();
  const {isSignedIn} = useAuth();
  const {user} = useUser();
  useEffect(() => {
    setIsClient(true);
  }, [])

  if (!isClient) {
    return <Loading />
  }

  return (
    <div>
      {
        isSignedIn ? '' : <NoAccessToCart />
      }
    </div>
  )
}

export default CartPage