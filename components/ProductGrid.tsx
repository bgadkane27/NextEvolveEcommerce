"use client";

import React, { useEffect, useState } from 'react'
import HomeTabbar from './HomeTabbar'
import { productData } from '@/constants';
import { client } from '@/sanity/lib/client';
import { Product } from '@/sanity.types';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productData[0]?.title || '');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const query = `*[_type == "product" && variant == $variant] | order(name asc)`;
  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(await response);
      } catch (e) {
        console.log("Error while fetching data", e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [selectedTab])

  return (
    <>
      <div className='mt-10 flex flex-col items-center'>
        <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
        {loading ? (<div><span>Product is loading...</span></div>) : (
          products?.map((product: Product) => (
            <div key={product?._id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default ProductGrid;