import { cn } from '@/lib/utils';
import { Product } from '@/sanity.types';
import useCartStore from '@/store';
import { Minus, Plus } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast';

interface Props {
    product: Product;
    className?: string;
}
const QuantityButton = ({ product, className }: Props) => {
    const { getItemCount, addItem, decreaseItemQuantity } = useCartStore();
    const isOutofStock = product?.stock === 0;
    const itemCount = getItemCount(product?._id);
    const handleRemoveProduct = () => {
        decreaseItemQuantity(product?._id);
        if(itemCount > 1){
            toast.success(`Quantity decreased successfully!`)
        } else {
            toast.success(`${product?.name} removed from cart successfully!`)
        }
    }
    return (
        <div className='flex items-center gap-2 pb-2'>
            <button
            onClick={handleRemoveProduct}
            disabled = { itemCount === 0 || isOutofStock}
            className={cn('p-2 border rounded-full hover:bg-red-500 hoverEffect', className)}><Minus className='w-5 h-5 hover:text-white' /></button>
            <span className='font-bold text-2xl p-1'>{itemCount}</span>
            <button 
            onClick={() => {
                addItem(product);
                if(itemCount >= 1){
                    toast.success(`Quantity increased successfully!`)
                }
              }}
            className={cn('p-2 border rounded-full hover:bg-green-600 hoverEffect', className)}><Plus className='w-5 h-5 hover:text-white' /></button>
        </div>
    )
}

export default QuantityButton