import React from 'react'
import Title from './Title'

const HomeBanner = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
            <Title className='w-auto uppercase font-semibold text-center tracking-wide bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text'>Best Clothing Collection</Title>
            <p className='max-w-[480px] text-sm text-center text-muted-foreground font-medium px-2'>Discover the finest clothing collection crafted for style and comfort. From trendy casuals to elegant formals, our curated selection ensures you stay fashionable for every occasion.</p>
        </div>
    )
}

export default HomeBanner