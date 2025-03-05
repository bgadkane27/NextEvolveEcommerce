import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
      <Link href="/" className='flex items-center'>
        <img src='/logo.png' alt='Logo' className='w-10' />
        <span className='text-2xl font-[1600] tracking-wide uppercase'>Evolve</span>
      </Link>
  )
}

export default Logo