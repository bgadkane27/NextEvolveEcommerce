'use client';

import { createCheckoutSession, Metadata } from '@/actions/createCheckoutSession';
import Container from '@/components/Container'
import EmptyCart from '@/components/EmptyCart';
import Loading from '@/components/Loading';
import NoAccessToCart from '@/components/NoAccessToCart';
import PriceFormatter from '@/components/PriceFormatter';
import PriceView from '@/components/PriceView';
import QuantityButton from '@/components/QuantityButton';
import { urlFor } from '@/sanity/lib/image';
import useCartStore from '@/store';
import { useAuth, useUser } from '@clerk/nextjs';
import { Button, Divider } from '@heroui/react';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const CartPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isSignedIn } = useAuth();
  const { user } = useUser();
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

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const metadata:Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? 'Unknown',
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? 'Unknown',
        clerkUserId: user!.id
      }

      const checkoutUrl = await createCheckoutSession(cartItems, metadata);
      if(checkoutUrl){
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error('Error occured while handle checkout: ', error)
    } finally {
      setLoading(false);
    }
  }

  // console.log(cartItems);

  return (
    <Container className="py-6">
      <div className='flex flex-col items-center mb-4'>
        <h2 className='text-2xl uppercase pb-1'>Shopping Cart</h2>
        <Divider />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="md:col-span-2">
          <div className="lg:flex-1 border rounded-sm">
            {cartItems.map(({ product }) => (
              <div
                key={product._id}
                className="flex flex-col md:flex-row items-start justify-between rounded-sm pt-6 relative max-w-3xl border-b last:border-b-0 bg-white"
              >
                {/* Product Image and Info */}
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
                    <p className="text-xs bg-pink-200 px-2 py-0.5 inline-block rounded text-gray-800">Verified by Evolve</p>
                    <p className="line-clamp-1">{product?.intro}</p>
                    <p>{product?.variant}</p>
                    <PriceView price={product?.price} discount={product?.discount} />
                    <QuantityButton className="p-1" product={product} />
                  </div>
                </div>

                {/* Price */}
                <div className="md:mt-0 md:text-start pr-6 pl-2">
                  <PriceFormatter
                    amount={
                      product?.price
                        ? product?.price * getItemCount(product._id)
                        : 0
                    }
                    className="text-xl font-semibold"
                  />
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => deleteCartItem(product._id)}
                  className="absolute top-1 right-1 p-1 rounded-full hover:text-red-500 bg-red-200 text-red-400 hoverEffect"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Order Summary Layout */}
        <div className="lg:col-span-1 border rounded-sm p-4 shadow-md space-y-4 max-h-80 bg-white">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span><PriceFormatter amount={getSubTotalPrice()} /></span>
          </div>
          <div className="flex justify-between">
            <span>Saved</span>
            <span className="text-green-600"><PriceFormatter amount={getSubTotalPrice() - getTotalPrice()} /></span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className='text-lg font-semibold'>Total</span>
            <span><PriceFormatter amount={getTotalPrice()} /></span>
          </div>
          <Button onPress={handleCheckout}
            className='w-full rounded-full hover:cursor-pointer'
            color='primary'>Proceed to checkout</Button>
          <button className="border w-full py-2 rounded-lg">PayPal</button>
        </div>
      </div>

    </Container>
  );
}

export default CartPage