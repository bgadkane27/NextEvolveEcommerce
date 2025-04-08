'use client';

import Container from '@/components/Container'
import EmptyCart from '@/components/EmptyCart';
import Loading from '@/components/Loading';
import NoAccessToCart from '@/components/NoAccessToCart';
import QuantityButton from '@/components/QuantityButton';
import useCartStore from '@/store';
import { useAuth} from '@clerk/nextjs';
import { Divider } from '@heroui/react';
import { Minus, Plus, X } from 'lucide-react';
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-4 text-sm font-semibold text-gray-500 px-4">
            <span className="col-span-2">Product</span>
            <span className="text-center">Price</span>
            <span className="text-right">Total</span>
          </div>

          {cartItems.map(({ product }) => (
            <div
              key={product._id}
              className="flex items-center justify-between bg-white rounded-xl shadow px-4 py-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 col-span-2 w-1/2">
                {/* <img
                  src={product?.images}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md"
                /> */}
                <div>
                  <h3 className="font-semibold line-clamp-1">{product?.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-1">{product?.intro}</p>
                  <p className="text-sm text-gray-500 line-clamp-1">{product?.variant}</p>
                  <p className="text-sm text-gray-500 line-clamp-1">{product?.status}</p>
                  {/* Quantity Control */}
                  {/* <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => decreaseItemQuantity(product._id)}
                      className="p-1 rounded-full border text-gray-600 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="min-w-[24px] text-center">{product?.price}</span>
                    <button
                      onClick={() => decreaseItemQuantity(product._id)}
                      className="p-1 rounded-full border text-gray-600 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div> */}
                  <QuantityButton product={product}/>
                </div>
              </div>

              {/* Price */}
              <div className="text-center w-1/4">
                <p className="font-medium">${product.price}</p>
              </div>

              {/* Total + Remove */}
              <div className="flex items-center justify-end gap-4 w-1/4">
                <p className="font-semibold text-right">${} Total</p>
                <button onClick={() => deleteCartItem(product._id)} className="text-gray-400 hover:text-red-500">
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
            <span>${}Total</span>
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
            <span>${}Total</span>
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