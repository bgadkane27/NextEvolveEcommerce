import React from 'react'
import Title from './Title'

const HomeBanner = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
            <Title className='text-3xl md:text-4xl uppercase font-bold text-center'>Best Clothing Collection</Title>
            <p className='max-w-[480px] text-sm text-center text-muted-foreground font-medium px-2'>Discover the finest clothing collection crafted for style and comfort. From trendy casuals to elegant formals, our curated selection ensures you stay fashionable for every occasion.</p>
        </div>
    )
}

export default HomeBanner