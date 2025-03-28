"use client";

import { headerData } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <div className='hidden md:inline-flex w-1/3 items-center gap-5 text-sm font-semibold capitalize'>
      {
        headerData?.map((item) => (
          <Link key={item?.title} href={item?.href === '/' ? item.href : `/category${item.href}`}
            className={`hover:text-muted-foreground hoverEffect relative group ${pathname === item?.href && 'text-blue-800'}`}
          >
            {item?.title}
            <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-600 hoverEffect group-hover:w-1/2 group-hover:left-0
              ${pathname === item?.href && 'w-1/2'}`} />
            <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-blue-600 hoverEffect group-hover:w-1/2 group-hover:right-0
              ${pathname === item?.href && 'w-1/2'}`} />
          </Link>
        ))
      }
    </div>
  )
}

export default HeaderMenu