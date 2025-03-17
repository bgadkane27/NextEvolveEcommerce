import Container from '@/components/Container'
import ImageView from '@/components/ImageView';
import { getProductBySlug } from '@/sanity/helpers/Queries';
import { notFound } from 'next/navigation';
import React from 'react'

const SingleProductPage = async ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params;
    const product = await getProductBySlug(slug);
    if(!product){
        return notFound();
    }
    return (
        <Container className='py-10 flex flex-col md:flex-row gap-10'>
                {product?.images && <ImageView images={product?.images}/>}            
            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                <div>{product?.name}</div>
            </div>
        </Container>
    )
}

export default SingleProductPage