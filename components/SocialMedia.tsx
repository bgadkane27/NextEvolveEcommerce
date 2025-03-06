import { cn } from '@/lib/utils';
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Facebook, Github, Instagram, Youtube } from 'lucide-react';

interface Props {
    className?: string
    iconClassName?: string
    tooltipClassName?: string
}

const socialLink = [
    {
        title: 'Github',
        href: 'https://github.com/',
        icon: <Github className='w-5 h-5' />
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/',
        icon: <Instagram className='w-5 h-5' />
    },
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/',
        icon: <Facebook className='w-5 h-5' />
    },
    {
        title: 'Youtube',
        href: 'https://www.youtube.com/',
        icon: <Youtube className='w-5 h-5' />
    }
]

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn('flex gap-6', className)}>
                {
                    socialLink?.map((item) => (
                        <Tooltip key={item?.title}>
                            <TooltipTrigger asChild>
                                <Link href={item?.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={cn('hover:text-pink-400 border rounded-full p-2 hoverEffect', iconClassName)}>
                                    {item?.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className={cn(tooltipClassName)}>
                                <span >{item?.title}</span>
                            </TooltipContent>
                        </Tooltip>
                    ))
                }
            </div>
        </TooltipProvider>
    )
}

export default SocialMedia