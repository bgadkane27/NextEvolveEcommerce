"use client";

import { LoaderIcon, SearchIcon, X } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from './ui/input';
import { client } from '@/sanity/lib/client';
import { Product } from '@/sanity.types';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProduct([]);
      return;
    }
    setLoading(true);
    try {
      const query = `*[_type == 'product' && name match $search ] | order(name asc)`;
      const params = { search: `${search}*` }
      const response = await client.fetch(query, params);
      console.log("response", response);
      setProduct(response);
    } catch (error) {
      console.log("Error: Unable to fetch the products.", error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [search, fetchProducts])

  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
        <SearchIcon
          className='w-5 h-5 hover:text-black hoverEffect' />
      </DialogTrigger>
      <DialogContent className='h-[90vh] overflow-hidden flex flex-col w-full max-w-5xl'>
        <DialogHeader>
          <DialogTitle className='text-blue-800'>Search Product</DialogTitle>
          <hr className='mb-2' />
          <form className='relative'>
            <Input
              type='text'
              placeholder='Type here to search...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='flex-1 rounded-md'
            />
            {
              search && <X className='w-5 h-5 absolute top-2 right-1.5 text-red-600 rounded-full hover:bg-pink-200 hoverEffect'
                onClick={() => setSearch('')}
              />
            }
          </form>
        </DialogHeader>
        <div className='w-full min-h-[100px] h-auto overflow-y-scroll border rounded'>
          <div>
            {
              loading ? (
                <p className='flex items-center justify-center py-10 gap-2 text-sm font-semibold text-blue-700'>
                  <LoaderIcon className='w-5 h-5 animate-spin' />Searching...</p>
              ) : product?.length ? (
                (
                  product.map((product: Product) => (
                    <div key={product?._id} className='overflow-hidden border-b last:border-0'>
                      <div className='flex gap-4 p-1 '>
                        <Link href={`/product/${product?.slug?.current}
                        `} onClick={() => {
                            setShowSearch(false);
                            setSearch("");
                          }}                    >
                          {product?.images && (<Image
                            width={200}
                            height={200}
                            src={urlFor(product?.images[0]).url()}
                            alt={product?.name || 'Product image'}
                            className='object-cover max-w-[100px] max-h-[100px]'
                          />
                          )}
                        </Link>
                        <div className='mt-2'>
                          <Link href={`/product/${product?.slug?.current}`}
                            onClick={() => {
                              setShowSearch(false);
                              setSearch(""); // Reset input value
                            }}
                          >
                            <h2 className='line-clamp-1 font-semibold mb-1 hover:text-pink-500 hoverEffect'>{product?.name}</h2>
                          </Link>
                          <p className='text-sm text-gray-600'>{product?.intro}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )
              ) : <div className='text-center py-10 font-semibold tracking-wide'>
                {search && product.length == 0 ? <p>No matching products found with the keyword <span className='text-pink-500 italic'>{search}</span>. Please try something else.</p> : (
                  <p className='text-green-600 flex item-center justify-center gap-1'>
                    Search and explore the products.
                  </p>
                )}</div>
            }
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SearchBar