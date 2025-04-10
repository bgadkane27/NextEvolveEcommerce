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
    const stock = product?.stock ?? 0;


    const handleRemoveProduct = () => {
        decreaseItemQuantity(product?._id);
        if (itemCount > 1) {
            toast.success(`Quantity decreased successfully!`)
        } else {
            toast.success(`${product?.name} removed from cart successfully!`)
        }
    }
    return (
        <div className='flex items-center gap-2 pb-2'>
            <button
                onClick={handleRemoveProduct}
                disabled={itemCount === 0 || isOutofStock}
                className={cn('p-2 border border-blue-600 rounded-full hover:bg-red-500 hoverEffect', className)}><Minus className='w-5 h-5 hover:text-white' /></button>
            <span className='font-bold text-2xl p-1'>{itemCount}</span>
            <button
                onClick={() => {
                    if (itemCount < stock) {
                        addItem(product);
                        toast.success('Quantity increased successfully!');
                    } else {
                        toast.error(`The seller has only ${stock} of these available so checkout our other products.`);
                    }
                }}
                // disabled={itemCount >= stock}
                className={cn(
                    'p-2 border border-blue-600 rounded-full hover:bg-green-600 hoverEffect',
                    itemCount >= stock ? 'opacity-50 cursor-not-allowed' : '',
                    className
                )}
            >
                <Plus className='w-5 h-5 hover:text-white' />
            </button>
        </div>
    )
}

export default QuantityButton