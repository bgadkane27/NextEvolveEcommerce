import Container from '@/components/Container';
import { Instagram, MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react'

const ContactPage = () => {
  return (
    <div className='mt-10'>
      <Container>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl tracking-wider p-2'>Contact Us</h1>
          <p className='text-sm text-gray-600 mb-2'>Any questions or remarks? just write us a message!</p>
          <form className='w-1/2 bg-gray-400 flex'>
            <div className='w-1/3 max-w-1/2 bg-pink-300 p-4'>
              <h1 className='text-2xl font-medium mb-6'>Reach Us</h1>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <MailIcon className='w-4 h-4' />
                  <a href="mailto:adkaneb@gmail.com" className="text-sm hover:underline">adkaneb@gmail.com</a>
                </div>
                <div className='flex items-center gap-2'>
                  <PhoneIcon className='w-4 h-4' />
                  <a href="tel:9673929867" className="text-sm hover:underline">9673929867</a>
                </div>
                <div className='flex items-center gap-2'>
                  <Instagram className='w-4 h-4' />
                  <span>adkaneb</span>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <h1>Form Center</h1>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default ContactPage;