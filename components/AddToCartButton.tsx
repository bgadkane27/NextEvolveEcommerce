"use client";
import { Product } from '@/sanity.types'
import React from 'react'
// import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import PriceFormatter from './PriceFormatter';
import QuantityButton from './QuantityButton';
import { Button } from '@heroui/react';
import useCartStore from '@/store';
import toast from 'react-hot-toast';

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const { getItemCount, addItem } = useCartStore();
  const isOutofStock = product?.stock === 0;
  const itemCount = getItemCount(product?._id);

  return (
    <div className='w-full border-t border-gray-300 pt-2'>
      {
        itemCount ? (
          <div className='w-full text-sm flex items-center justify-between'>
            <QuantityButton product={product} />
            <PriceFormatter amount={product?.price ? product?.price * itemCount : 0}
                className={cn('text-lg font-semibold', className)} />
            {/* <div className='flex items-center justify-between'>
              <span className='text-sm font-semibold'>Quantity</span>
              <QuantityButton product={product} />
            </div> */}
            {/* <hr /> */}
            {/* <div className='flex items-center justify-between pt-1'>
              <span className='text-sm font-semibold'>SubTotal</span>
              <PriceFormatter amount={product?.price ? product?.price * itemCount : 0}
                className={cn('text-sm font-bold', className)} />
            </div> */}
          </div>
        ) : (
          <div className='w-full py-1'>
            <Button color='primary'
              onPress={() => {
                addItem(product);
                toast.success(`${product?.name} added to cart successfully!`)
              }}
              disabled={isOutofStock}
              className='w-full rounded-sm hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'><ShoppingCart className='w-5 h-5' />Add to Cart</Button>
          </div>
        )
      }
    </div>
  )
}

export default AddToCartButton