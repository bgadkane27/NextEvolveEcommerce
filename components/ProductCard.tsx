import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='group text-sm rounded-lg overflow-hidden'>
      <div className='overflow-hidden border border-gray-300 border-b-0  rounded-lg rounded-b-none relative'>
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image src={urlFor(product?.images[0]).url()} alt='product?.name'
              width={1000} height={1000} priority
              className='w-full h-64 object-contain overflow-hidden hover:scale-105 hoverEffect'
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center'>
            <p className='text-sm font-medium tracking-wide text-white bg-pink-600 p-1 px-2 rounded-xl'>Out of Stock</p>
          </div>
        )}
      </div>
      <div
        className='flex flex-col gap-1.5 py-3 px-3 border-gray-300 bg-zinc-100 border border-t-0 
      rounded-xl rounded-tr-none rounded-tl-none bg-gradient-to-t from-blue-400 to-emerald-300'>
        <h2 className='text-lg font-semibold line-clamp-1 font-serif'>{product?.name}</h2>
        <p className='line-clamp-1'>{product?.intro}</p>
        <PriceView price={product?.price} discount={product?.discount} />
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}

export default ProductCard