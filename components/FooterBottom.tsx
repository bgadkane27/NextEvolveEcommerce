import React from 'react'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { Button, Input } from '@heroui/react'
import Link from 'next/link'
import { categoriesData, quickLinksData } from '@/constants'

const FooterBottom = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 py-10'>
            <div className='space-y-4'>
                <Logo />
                <p className='text-sm text-gray-600 text-justify max-w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
                    ipsa! Iste est maxime eaque id explicabo, soluta fugiat, aspernatur distinctio
                    blanditiis illo dignissimos.</p>
                <SocialMedia className='text-black/60'
                    iconClassName='border-blue-600'
                    tooltipClassName='bg-blue-600'
                />
            </div>
            <div className='px-0 lg:px-10 '>
                <h3 className='text-lg font-semibold pt-1 mb-2'>Quick Links</h3>
                <div className='flex flex-col gap-4'>
                    {
                        quickLinksData.map((item, index) => (
                            <Link href={item?.href} key={index}
                                className='max-w-max text-gray-800 hover:text-pink-600 hoverEffect'
                            >
                                {item?.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='px-0 lg:px-10'>
                <h3 className='text-lg font-semibold pt-1 mb-2'>Categories</h3>
                <div className='flex flex-col gap-4'>
                    {
                        categoriesData.map((item, index) => (
                            <Link href={item?.href} key={index}
                                className='max-w-max text-gray-800 hover:text-pink-600 hoverEffect'>
                                {item?.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='space-y-2'>
                <h3 className='text-lg font-semibold pt-1'>Newsletter</h3>
                <p className='text-sm text-gray-600 text-justify max-w-80'>Subscribe to our newsletter to get the latest updates on our products and services.</p>
                <form className='flex flex-col gap-4'>
                    <div>
                        <input
                            required
                            type="email"
                            placeholder="email@example.com"
                            className='w-full max-w-80 p-2 px-4 border border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div>
                        <Button
                            color="primary"
                            className="w-full max-w-80"
                            type="submit"
                        >Subscribe</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FooterBottom