import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils';
import { LoaderIcon } from 'lucide-react';

const NoProduct = ({ selectedTab, className }: { selectedTab: string; className?: string }) => {
    return (
        <div className={cn('flex flex-col items-center justify-center p-6 min-h-60 space-y-4 w-full text-center rounded-md mt-5 bg-gray-100')}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className='text-2xl font-semibold'>Oops! No Product Available</h2>
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-gray-600'>
                We&apos;re sorry, there are no products matching on {" "}
                <span className='text-base text-pink-500 font-semibold'>{selectedTab}</span>
                {" "}criteria at this moment.
            </motion.p>
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
                className='flex items-center space-x-2 text-blue-600'>
                <LoaderIcon className='w-4 h-4 animate-spin' /> <span>We&apos;re restocking soon.</span>
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='text-sm text-gray-600'>
                <span>Please check back later or checkout our other products.</span>
            </motion.p>
        </div>
    )
}

export default NoProduct