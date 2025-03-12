import { cn } from '@/lib/utils';
import { Product } from '@/sanity.types';
import { Minus, Plus } from 'lucide-react'
import React from 'react'

interface Props{
    product: Product;
    className?: string;
}

const QuantityButton = ({product, className}:Props) => {
    const itemCount = 4;
    return (
        <div className='flex items-center gap-2 pb-2'>
            <button className={cn('p-1 border rounded-full hover:bg-red-400 hoverEffect', className)}><Minus className='w-4 h-4'/></button>
            <span className='font-bold text-sm'>{itemCount}</span>
            <button className={cn('p-1 border rounded-full hover:bg-green-400 hoverEffect', className)}><Plus className='w-4 h-4'/></button>
        </div>
    )
}

export default QuantityButton