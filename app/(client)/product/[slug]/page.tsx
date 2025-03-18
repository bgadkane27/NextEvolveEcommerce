import AddToCartButton from '@/components/AddToCartButton';
import Container from '@/components/Container'
import ImageView from '@/components/ImageView';
import PriceView from '@/components/PriceView';
import { getProductBySlug } from '@/sanity/helpers/Queries';
import { Button, Divider } from '@heroui/react';
import { Heart } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react'

const SingleProductPage = async ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params;
    const product = await getProductBySlug(slug);
    console.log(product);
    if(!product){
        return notFound();
    }
    return (
        <Container className='py-10 flex flex-col md:flex-row gap-10'>
                {product?.images && <ImageView images={product?.images}/>}            
            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                <div>
                    <h2 className='text-2xl md:text-3xl font-medium'>{product?.name}</h2>
                    <Divider className='my-2' />
                    <PriceView price={product?.price} discount={product?.discount}
                    className='text-sm md:text-2xl font-semibold mb-2' />
                </div>
                {
                    product?.stock && (
                      <p className="w-24 bg-green-100 text-green-600 text-center text-sm py-2 font-semibold rounded-md">In Stock</p>  
                    )
                }
                <p className='text-sm text-gray-600 tracking-wider'>{product?.description}</p>
                <div>
                    <AddToCartButton product={product} />
                    <Button>
                        <Heart className='w-5 h-5' />
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default SingleProductPage