"use client";
import Container from '@/components/Container';
import FAQs from '@/components/FAQs';
import React from 'react'

const FaqPage = () => {
  return (
    <div className='my-10'>
      <Container>
        <div className='flex flex-col gap-2 w-full max-w-[800px] mx-auto p-4 border border-gray-200 rounded-lg'>
          <h1 className='text-xl font-semibold text-center'>Frequently Asked Questions</h1>
          <FAQs />
        </div>
      </Container>
    </div>
  )
}

export default FaqPage;