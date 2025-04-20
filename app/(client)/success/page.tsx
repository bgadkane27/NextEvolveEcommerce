'use client';

import Container from '@/components/Container';
import useCartStore from '@/store';
import { Check, Home, ShoppingBag, Package } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('orderNumber');
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    if (!orderNumber && !sessionId) {
      router.push('/');
    } else {
      clearCart();
    }
  }, [orderNumber, sessionId, clearCart])

  return (
    <Container className='py-12'>
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full text-center'
        >
          <motion.div className='w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
            <Check className='w-12 h-12 text-white' />
          </motion.div>
          <h1 className='text-3xl text-gray-900 mb-2'>Your Order is Confirmed !</h1>
          <div className='text-start space-y-2 mb-4'>
            <p className='text-gray-600'>Order ID : <span className='font-semibold'>{orderNumber?.substring(0, 8).toUpperCase()}</span></p>
            <p className='text-gray-700'>Thank you for your purchase.
            </p>
          </div>
          <div className='border rounded-lg p-2 mb-4'>
            <h2 className='text-xl mb-2'>Order Updates</h2>
            <p>You will receive order and shipping updates via email shortly.</p>
            <p>Track your order status anytime.</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 items-center'>
            <Link href="/" className='flex item-center justify-center px-4 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md'>
              <Home className='w-5 h-5 mr-2' /> Home
            </Link>
            <Link href="/orders" className='flex item-center justify-center px-4 py-3 bg-white text-black border border-black rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md'>
              <Package className='w-5 h-5 mr-2' /> Orders
            </Link>
            <Link href="/" className='flex item-center justify-center px-4 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md'>
              <ShoppingBag className='w-5 h-5 mr-2' /> Shop
            </Link>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

export default SuccessPage;