import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import PriceView from './PriceView';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }: { product: Product }) => {

  console.log("Product", product);
  return (
    <div className='group text-sm rounded-lg overflow-hidden'>
      <div className='bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden'>
        {product?.images && (
          <Link href={"/product"}>
            <Image src={urlFor(product?.images[0]).url()} alt='product?.name'
              width={500} height={500} priority
              className='w-full h-64 object-contain overflow-hidden group-hover:scale-105 hoverEffect'
            />
          </Link>
        )}
      </div>
      <div className='flex flex-col gap-1.5 py-3 px-3 bg-zinc-50 border border-t-0 rounded-xl rounded-tr-none rounded-tl-none'>
        <h2 className='text-xl font-semibold line-clamp-1 font-serif'>{product?.name}</h2>
        <p>{product?.intro}</p>
        <PriceView price={product?.price} discount={product?.discount} />
        <AddToCartButton product={product}/>
      </div>
      <div>
      </div>
    </div>
  )
}

export default ProductCard