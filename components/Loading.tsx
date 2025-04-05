'use client';
import {motion} from 'motion/react'
import { LoaderIcon } from 'lucide-react'

const Loading = () => {
    return (
        <div className='w-full min-h-[90vh] flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-2xl font-[1600] tracking-wide uppercase'>Evolve</h1>
                <motion.div className='flex space-x-2 text-pink-600'>
                    <LoaderIcon className='animate-spin'/>
                    <span>Loading...Please wait.</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Loading