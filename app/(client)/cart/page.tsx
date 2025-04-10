'use client';

import Container from '@/components/Container'
import EmptyCart from '@/components/EmptyCart';
import Loading from '@/components/Loading';
import NoAccessToCart from '@/components/NoAccessToCart';
import PriceFormatter from '@/components/PriceFormatter';
import QuantityButton from '@/components/QuantityButton';
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
    <Container className="py-6">
      <div className='flex flex-col px-4 mb-4'>
        <h2 className='text-2xl uppercase'>Shopping Cart</h2>
        <Divider />
      </div>
      <div className="flex flex-col md:flex-row gap-4 px-4">
        {/* Cart Items */}
        <div className="space-y-6 md:order-1 w-full md:w-2/3">
          {cartItems.map(({ product }) => (
            <div key={product._id} className="flex flex-col md:flex-row items-start justify-between border rounded-lg p-4 shadow-sm relative bg-white max-w-3xl">
              <div className="flex items-start gap-6 w-full md:w-2/3 pl-6">
                {product?.images && (
                  <Image
                    src={urlFor(product?.images[0]).url()}
                    alt=""
                    width={160}
                    height={160}
                    className="w-32 h-32 min-w-32 object-cover rounded-md"
                  />
                )}
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg line-clamp-1">{product?.name}</h3>
                  <p className="text-sm text-red-600">Only {product?.stock} left in stock</p>
                  <p className="text-sm text-gray-600">Eligible for FREE Shipping</p>
                  <p className="text-xs bg-gray-200 px-2 py-0.5 inline-block rounded text-gray-800">Verified by Evolve</p>
                  <p className="line-clamp-1">{product?.intro}</p>
                  <p>{product?.variant}</p>
                  <QuantityButton className="p-1" product={product} />
                </div>
              </div>
              <div className="md:mt-0 md:text-start pr-4">
                <PriceFormatter
                  amount={
                    product?.price
                      ? product?.price * getItemCount(product._id)
                      : 0
                  }
                  className="text-xl font-semibold"
                />
              </div>
              <button
                onClick={() => deleteCartItem(product._id)}
                className="absolute top-1 right-1 p-1 rounded-full hover:text-red-500 bg-red-200 text-red-400 hoverEffect"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-xl p-6 shadow flex flex-col md:order-2 w-full md:w-1/2 max-h-72">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-sm">
            <span>Subtotal</span>
            <span>₹ { }</span>
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
            <span>₹ { }</span>
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