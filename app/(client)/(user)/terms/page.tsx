import Container from '@/components/Container'
import { termsData } from '@/constants'
import React from 'react'

const Termspage = () => {
    return (
        <div className='my-10'>
            <Container>
                <div className='flex flex-col gap-2 w-full max-w-[800px] mx-auto p-4'>
                <h1 className='tracking-wide mt-2 text-xl'>Tulos Terms of Use</h1>
                <p className='text-sm text-gray-500 text-justify mb-2'><span className='font-semibold tracking-wide'>Disclaimer:</span> In case of any discrepancy
                        or difference, the English version will take precedence over the translation.</p>                    
                </div>
                <div className='flex flex-col gap-6 w-full max-w-[800px] mx-auto bg-gray-100 p-4 rounded-lg'>
                    {
                        termsData.map((item) => (
                            <div key={item.title}>
                                <h2 className='text-lg font-normal'>{item.title}</h2>
                                <p className='text-sm text-justify text-gray-600'>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Termspage