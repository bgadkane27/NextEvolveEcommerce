'use client';
import { Product, PRODUCT_CATEGORYResult } from '@/sanity.types'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { client } from '@/sanity/lib/client';
import { LoaderIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductCard from './ProductCard';
import NoProduct from './NoProduct';

interface props {
    categories: PRODUCT_CATEGORYResult,
    slug: string
}

const ProductCategory = ({ categories, slug }: props) => {
    const [currentSlug, setCurrentSlug] = useState(slug);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async (categorySlug: string) => {
            setLoading(true);
            try {
                const query = `*[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)`;
                const response = await client.fetch(query, { categorySlug });
                setProducts(response);
            } catch (error) {
                console.error("Error while fetching products data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData(currentSlug);
    }, [currentSlug]);

    return (
        <div className='flex flex-col md:flex-row items-start gap-4'>
            <div className='flex flex-col md:min-w-40 border'>
                {
                    categories?.map((item) => (
                        <Button key={item?._id}
                            onClick={() => setCurrentSlug(item?.slug?.current || '')}
                            className={`bg-transparent border-0 text-black shadow-none rounded-none hover:bg-pink-600 hover:text-white hoverEffect text-left justify-start border-b last:border-b-0
                        ${currentSlug === item?.slug?.current && 'bg-blue-600 text-white'}`}>
                            {item?.title}
                        </Button>
                    ))
                }
            </div>
            <div className='w-full'>
                {loading ? (
                    <div className="flex flex-col items-center justify-center p-6 min-h-60 space-y-4 text-center w-full bg-blue-100/50">
                        <div className="flex items-center space-x-2 text-blue-800">
                            <LoaderIcon className="animate-spin" />
                            <span className="text-lg">Still Loading...</span>
                        </div>
                    </div>
                ) : products.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        {products.map((product: Product) => (
                            <AnimatePresence key={product._id}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            </AnimatePresence>
                        ))}
                    </div>
                ) : (
                    <NoProduct selectedTab={currentSlug} className='mt-0' />
                )}
            </div>
        </div>
    )
}

export default ProductCategory