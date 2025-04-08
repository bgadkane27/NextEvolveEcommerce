'use client';

import Container from '@/components/Container'
import EmptyCart from '@/components/EmptyCart';
import Loading from '@/components/Loading';
import NoAccessToCart from '@/components/NoAccessToCart';
import PriceFormatter from '@/components/PriceFormatter';
import QuantityButton from '@/components/QuantityButton';
import { cn } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import useCartStore from '@/store';
import { useAuth } from '@clerk/nextjs';
import { Divider } from '@heroui/react';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { isSignedIn } = useAuth();
  const {
    getGroupedItems,
    getItemCount,
    getTotalPrice,
    getSubTotalPrice,
    deleteCartItem,
    decreaseItemQuantity,
    clearCart
  } = useCartStore();

  useEffect(() => {
    // simulate loading delay if needed
    const timeout = setTimeout(() => {
      setIsClient(true);
    }, 300); // optional: 300ms delay

    return () => clearTimeout(timeout);
  }, []);

  if (!isClient) return <Loading />;

  const cartItems = getGroupedItems();
  if (!isSignedIn) return <NoAccessToCart />;
  if (!cartItems.length) return <EmptyCart />;

  console.log(cartItems);

  return (
    <Container className="py-10">
      <div className='flex flex-col px-4'>
        <h2 className='text-2xl uppercase'>Shopping Cart</h2>
        <Divider />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-4 text-sm font-semibold text-gray-500 px-4 pt-2">
            <span className="col-span-2 px-2">Product Details</span>
            <span className="text-center hidden md:block">Price</span>
            <span className="text-right">Total</span>
          </div>

          {cartItems.map(({ product }) => (
            <div
              key={product._id}
              className="flex items-center justify-between bg-white rounded-xl shadow px-4 py-4 relative m-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-6 col-span-2 w-1/2">
                {
                  product?.images && (
                    <Image
                      src={urlFor(product?.images[0]).url()}
                      alt='product?.name'
                      width={500}
                      height={500}
                      loading="lazy"
                      className="w-30 h-30 object-cover rounded-md"
                    />
                  )
                }
                <div className=''>
                  <h3 className="font-semibold line-clamp-1">{product?.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-1">{product?.intro}</p>
                  <p className="text-sm text-gray-500 line-clamp-1">{product?.variant}</p>
                  <p className="text-sm text-gray-500 line-clamp-1">{product?.status}</p>
                  <QuantityButton
                    className="p-0.5"
                    product={product} />
                </div>
              </div>
              {/* Price */}
              <div className="text-center w-1/4 hidden md:block">
                <p className="font-medium">₹{product.price}</p>
              </div>

              {/* Total + Remove */}
              <div className="flex items-center justify-center gap-4 w-1/4">
                {/* <p className="font-semibold text-right">${} Total</p> */}
                <PriceFormatter amount={product?.price ? product?.price * getItemCount(product?._id) : 0}
                  className='text-lg font-semibold' />
                <button onClick={() => deleteCartItem(product._id)} className="absolute top-1 right-1 p-1 rounded-full hover:text-red-500 bg-red-100 text-red-400 hoverEffect">
                  <X size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-sm">
            <span>Subtotal</span>
            <span>${ }Total</span>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="text-sm text-green-600 cursor-pointer hover:underline mb-4">
            Add coupon code →
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>${ }Total</span>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition">
            Checkout
          </button>
        </div>
      </div>
    </Container>
  );
}

export default CartPage