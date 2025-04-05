import Container from '@/components/Container';
import ProductCategory from '@/components/ProductCategory';
import { getProductCategories } from '@/sanity/helpers/Queries';
import React from 'react'
const CategoryPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const categories = await getProductCategories();
    return (
        <Container className='p-4'>
            <h1 className='text-xl mb-2'>Products by Category <span className='text-green-600 capitalize font-semibold tracking-wide'>{slug && slug}</span></h1>
        <ProductCategory categories={categories} slug={slug}/>
        </Container>
    )
}

export default CategoryPage;