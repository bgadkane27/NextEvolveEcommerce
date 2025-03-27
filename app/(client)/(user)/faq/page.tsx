"use client";
import Container from '@/components/Container';
import FAQs from '@/components/FAQs';
import React from 'react'

const FaqPage = () => {
  return (
    <div className='my-10'>
      <Container>
        <div className='flex flex-col items-center p-4'>
          <h1 className='text-2xl tracking-wide'>Frequently Asked Questions</h1>          
        </div>
        <div className='w-full max-w-[600px] mx-auto border border-gray-200 rounded-lg'>
          <FAQs />
        </div>
      </Container>
    </div>
  )
}

export default FaqPage;