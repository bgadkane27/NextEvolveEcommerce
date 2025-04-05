'use client'
import React from 'react'
import Container from './Container'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from '@heroui/react'


const NoAccessToCart = () => {
    return (
        <Container>
            <div className='flex flex-col items-center justify-center py-12 md:py-32 p-4'>
                <Card className='w-full max-w-md bg-gradient-to-t from-pink-300 to-blue-300'>
                    <CardHeader className='space-y-0.5 text-center'>
                        <h1 className='text-2xl font-bold tracking-wide uppercase'>Evolve</h1>
                        <h2 className='text-xl font-semibold tracking-wide'>Welcome Back!</h2>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <p className='text-center'>Log in to view your cart items and checkout. Don&apos;t miss out on your favorite products !</p>
                        <SignInButton mode='modal'>
                            <Button color='primary' className='w-full rounded-full hover:cursor-pointer'>
                                Sign in
                            </Button>
                        </SignInButton>
                    </CardContent>
                    <CardFooter className='flex flex-col items-center justify-center space-y-0.5'>
                        <p className='text-gray-800'>Don&apos;t have an account?</p>
                        <SignUpButton mode='modal'>
                            <Button color="secondary" className='w-full border border-blue-500 rounded-full hover:cursor-pointer'>
                                Sign up
                            </Button>
                        </SignUpButton>
                    </CardFooter>
                </Card>
            </div>
        </Container>
    )
}

export default NoAccessToCart