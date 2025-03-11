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
  const isOutofStock = product?.stock === 0;  
  return (
    <div className='flex items-center'>
        <Button variant={'outline'} 
        disabled={isOutofStock}
        className={cn('hover:cursor-pointer rounded',className)}><ShoppingCart className='w-5 h-5'/></Button>
    </div>
  )
}

export default AddToCartButton