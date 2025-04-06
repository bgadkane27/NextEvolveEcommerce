// components/EmptyCart.jsx
// import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@heroui/react";
import { motion } from 'motion/react';

const EmptyCart = () => {
    return (
        <Container className='flex items-center justify-center py-6'>            
                <Card className="max-w-[400px] flex items-center justify-center rounded-lg bg-white p-4">
                    <CardHeader className="flex items-center justify-center pb-4">
                        <motion.div
                        animate={{ scale: [0.9, 1, 0.9] }} 
                        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
                        >
                        <Image
                            src="/emptyCart.webp"
                            alt="empty cart icon"
                            width={250}
                            height={250}
                        />
                        </motion.div>                        
                    </CardHeader>
                    <Divider />
                    <CardBody className='flex flex-col items-center justify-center gap-2 p-2'>
                        <h1 className='text-2xl tracking-wide'>Your cart is feeling lonely</h1>
                        <p className='text-center'>It looks like you haven't added anything to your cart yet. Let's change that and find some amazing products for you!</p>
                    </CardBody>
                    <Divider />
                    <CardFooter className='flex items-center justify-center mt-4'>
                        <Button color='primary' variant='solid' className='rounded-full'>Discover Products</Button>
                    </CardFooter>
                </Card>
        </Container>
    );
};

export default EmptyCart;