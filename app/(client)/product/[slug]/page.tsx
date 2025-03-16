import Container from '@/components/Container'
import React from 'react'

const SingleProductPage = async ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params;
    console.log(slug);
    return (
        <Container>
            SingleProductPage
        </Container>
    )
}

export default SingleProductPage