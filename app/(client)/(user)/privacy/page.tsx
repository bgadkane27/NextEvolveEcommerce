import Container from '@/components/Container'
import { termsData } from '@/constants'
import React from 'react'

const Privacypage = () => {
    return (
        <div className='my-10'>
            <Container>
                <div className='flex flex-col gap-2 w-full max-w-[800px] mx-auto p-4 bg-gray-100 rounded-lg'>
                    <h1 className='tracking-wide mb-4 text-4xl font-bold'>Tulos Privacy Policy</h1>
                    <div className='flex flex-col gap-6'>
                        {
                            termsData.map((item) => (
                                <div key={item.title} className='flex gap-2'>
                                    <h2 className='text-lg font-normal w-1/3'>{item.title}</h2>
                                    <p className='text-sm text-justify text-gray-600 w-2/3'>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Privacypage