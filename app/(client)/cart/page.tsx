'use client';

import Container from '@/components/Container'
import EmptyCart from '@/components/EmptyCart';
import Loading from '@/components/Loading';
import NoAccessToCart from '@/components/NoAccessToCart';
import useCartStore from '@/store';
import { useAuth, useUser } from '@clerk/nextjs';
import { Divider } from '@heroui/react';
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
          ? (
            <Container className='py-6'>
              {
                cartProducts?.length
                  ? (
                    <>
                      <div className='flex items-center justify-between gap-2 px-4 mb-1 max-w-3xl'>
                        <h1 className='text-2xl tracking-wide uppercase'>Shopping Cart</h1>
                        <p><span className='text-xl text-green-600'>{cartProducts?.length}</span> Items</p>
                      </div>
                      <Divider />
                      <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:gap-4 gap-4 p-4'>
                        <div className='lg:col-span-2 bg-amber-100'>
                          <h1>Product Details</h1>
                          {
                            cartProducts.map(({product})=>{
                              return(
                                <>
                                <div key={product?._id}>{product?.name}</div>
                                </>
                              )
                            })
                          }
                        </div>
                        <div className='lg:col-span-1 bg-pink-200'>Right</div>
                      </div>
                    </>
                  )
                  : (
                    <EmptyCart />
                  )
              }
            </Container>
          )
          : (
            <Container>
              <NoAccessToCart />
            </Container>
          )
      }
    </div>
  )
}

export default CartPage