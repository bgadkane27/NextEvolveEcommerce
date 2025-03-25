"use client";

import Container from '@/components/Container';
import { Image } from '@heroui/react';
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <Container>
        <div className='flex flex-col sm:flex-row gap-4 mt-4 mb-2 bg-gray-50'>
          <div className='w-2/3 p-4'>
            <h1 className='text-6xl font-semibold'>About Tulos</h1>
            <p className='mt-4 text-gray-600 text-justify w-full max-w-2xl'>Tulos is your ultimate online shopping 
              destination, offering a seamless and enjoyable experience with a wide range of high-quality products
              at competitive prices. Our platform is designed to provide customers with a smooth and secure shopping
              journey, from browsing to checkout. At Tulos, we believe in quality, affordability, and convenience, 
              bringing you the latest trends in fashion, electronics, home essentials, and more. With a user-friendly 
              interface, fast shipping, and dedicated customer support, we ensure that every purchase meets your 
              expectations. Whether you're looking for everyday essentials or special gifts, Tulos has something 
              for everyone.</p>
            <p className='mt-4 text-gray-600 text-justify w-full max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione nobis quae illum aspernatur ipsam expedita 
              iure nostrum voluptatem officiis minus eum dicta tempora, possimus, reprehenderit nulla est esse harum.</p>
          </div>
          <div className='mt-4 py-4'>
            <Image 
            src='/about.png' 
            alt='About Tulos'
            width={400} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutPage;