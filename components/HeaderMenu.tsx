"use client";

import { PRODUCT_CATEGORYResult } from '@/sanity.types';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderMenu = ({categories}: {categories: PRODUCT_CATEGORYResult}) => {
  const pathname = usePathname();
  // console.log(categories);
  return (    
    <div className='hidden md:inline-flex w-1/3 items-center gap-5 text-sm font-semibold capitalize'>
      <Link href={`/`}
            className={`hover:text-muted-foreground hoverEffect relative group ${pathname === '/' && 'text-blue-800'}`}
          >
            Home
            <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-600 hoverEffect group-hover:w-1/2 group-hover:left-0
              ${pathname === '/' && 'w-1/2'}`} />
            <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-blue-600 hoverEffect group-hover:w-1/2 group-hover:right-0
              ${pathname === '/' && 'w-1/2'}`} />
          </Link>
      {
        categories?.map((category) => (
          <Link key={category?._id} href={`/category/${category?.slug?.current}`}
            className={`hover:text-muted-foreground hoverEffect relative group ${pathname === `/category/${category?.slug?.current}` && 'text-blue-800'}`}
          >
            {category?.title}
            <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-600 hoverEffect group-hover:w-1/2 group-hover:left-0
              ${pathname === `/category/${category?.slug?.current}` && 'w-1/2'}`} />
            <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-blue-600 hoverEffect group-hover:w-1/2 group-hover:right-0
              ${pathname === `/category/${category?.slug?.current}` && 'w-1/2'}`} />
          </Link>
        ))
      }
    </div>
  )
}

export default HeaderMenu