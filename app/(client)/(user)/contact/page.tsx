"use client"
import Container from '@/components/Container';
import SocialMedia from '@/components/SocialMedia';
import { Button } from '@heroui/react';
import { LocateIcon, MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react'

const ContactPage = () => {
  return (
    <div className='mt-10'>
      <Container>
        <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
        <p className="text-sm text-gray-600 text-center mb-6">Any question or remarks? Just write us a message!</p>        
        <div className="flex flex-col md:flex-row items-center justify-center h-auto mb-6 bg-gray-100 p-2 rounded-lg overflow-hidden">
          {/* Left Side - Contact Information */}
          <div className="bg-blue-800 text-white p-8 rounded-lg md:w-1/3 h-[420px] shadow-lg">
            <h2 className="text-2xl font-semibold tracking-wider mb-4">Contact Information</h2>
            <p className="text-sm mb-4">Fill up the form and our Team will get back to you within 24 hours.</p>

            <div className="space-y-6 text-sm">
              <p className="flex items-center gap-2"><span><PhoneIcon className='w-4 h-4'/></span> +91 9988776655</p>
              <p className="flex items-center gap-2"><span><MailIcon className='w-4 h-4'/></span> example@mail.com</p>
              <p className="flex items-center gap-2"><span><LocateIcon className='w-4 h-4'/></span> 102 Street 2714 Pune</p>
            </div>
            <SocialMedia className='mt-10' />
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/2 ml-0 md:ml-6 w-full">
            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-700">First Name</label>
                  <input type="text" placeholder="John" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="text-gray-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-700">Mail</label>
                  <input type="email" placeholder="example@mail.com" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="text-gray-700">Phone</label>
                  <input type="tel" placeholder="+91 9988776655" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              {/* Message */}
              <div>
                <label className="text-gray-700">Message</label>
                <textarea placeholder="Write your message.." className="w-full p-2 border border-gray-300 rounded-md h-24"></textarea>
              </div>

              {/* Submit Button */}
              <Button color='primary'>Send Message</Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactPage;