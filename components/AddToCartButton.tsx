import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

interface Props{
    product: Product;
    className?:string;
}

const AddToCartButton = ({product, className}:Props) => {
  return (
    <div className='flex items-center'>
        <Button variant='outline' className={cn('w-full hover:cursor-pointer',className)}><ShoppingCart />Add to Cart</Button>
    </div>
  )
}

export default AddToCartButton