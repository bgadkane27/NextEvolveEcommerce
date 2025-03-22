import AddToCartButton from '@/components/AddToCartButton';
import Container from '@/components/Container'
import ImageView from '@/components/ImageView';
import PriceView from '@/components/PriceView';
import ProductProperties from '@/components/ProductProperties';
import { getProductBySlug } from '@/sanity/helpers/Queries';
import { Divider } from '@heroui/react';
import { CircleHelp, Heart, Share2Icon, SquareSplitHorizontal, Truck } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react'

const SingleProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    // console.log(product);
    if (!product) {
        return notFound();
    }
    return (
        <Container className='py-10 flex flex-col md:flex-row gap-10'>
            {product?.images && <ImageView images={product?.images} />}
            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                <div>
                    <h2 className='text-2xl md:text-3xl font-medium'>{product?.name}</h2>
                    <Divider className='my-2' />
                    <PriceView price={product?.price} discount={product?.discount}
                        className='text-sm md:text-2xl font-semibold mb-2' />
                    <p className='text-sm text-gray-900'>Inclusive of all taxes</p>
                </div>
                {product?.stock ? (
                    <p className="w-24 bg-green-100 text-green-600 text-center text-sm py-2 font-semibold rounded-md">
                        In Stock
                    </p>
                ) : product?.stock === 0 ? (
                    <p className="w-24 bg-red-100 text-red-600 text-center text-sm py-2 font-semibold rounded-md">
                        Out of Stock
                    </p>
                ) : (
                    <p className="w-24 bg-gray-100 text-gray-600 text-center text-sm py-2 font-semibold rounded-md">
                        Stock Unavailable
                    </p>
                )}
                <p className='text-sm text-gray-600 tracking-wider'>{product?.description}</p>
                <div className='w-full flex item-center gap-2 mt-2'>
                    <AddToCartButton product={product} />
                    <button className='border p-2 rounded hover:cursor-pointer hover:text-pink-600'>
                        <Heart className='w-4 h-4' />
                    </button>
                </div>
                <ProductProperties product={product} />
                <Divider />
                <div className='flex item-center justify-between gap-4 p-2 text-sm'>
                    <div className='flex items-center gap-1 hover:text-pink-600 hoverEffect'>
                        <SquareSplitHorizontal className='w-5 h-5' />
                        <p>Compare Color</p>
                    </div>
                    <div className='flex items-center gap-1 hover:text-pink-600 hoverEffect'>
                        <CircleHelp className='w-5 h-5' />
                        <p>Ask a Question</p>
                    </div>
                    <div className='flex items-center gap-1 hover:text-pink-600 hoverEffect'>
                        <Truck className='w-5 h-5' />
                        <p>Delivery & Return</p>
                    </div>
                    <div className='flex items-center gap-1 hover:text-pink-600 hoverEffect'>
                        <Share2Icon className='w-4 h-4' />
                        <p>Share</p>
                    </div>
                </div>
                <Divider />
                <div className='flex gap-4'>
                    <div className='bg-blue-100 flex flex-col px-2 py-1 border rounded'>
                        <h2 className='font-semibold text-gray-800'>Free Shipping</h2>
                        <p className='text-gray-600 text-sm'>Over order &#8377;200</p>
                    </div>
                    <div className='bg-blue-100 flex flex-col px-2 py-1 border rounded'>
                        <h2 className='font-semibold text-gray-800'>Flexible Payment</h2>
                        <p className='text-gray-600 text-sm'>Pay with multiple credit cards</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SingleProductPage