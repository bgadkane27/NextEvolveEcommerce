import React, { FC } from 'react'
import Logo from './Logo';
import { motion } from "motion/react"
import { X } from 'lucide-react';
import { headerData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  return (
    <div className={`w-full fixed inset-y-0 left-0 z-50 hoverEffect shadow-xl bg-black/10 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5, delay:0.3}}
      className='min-w-72 max-w-96 h-full p-6 bg-black text-white/90 border-r border-white flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <button onClick={onClose}>
          <Logo />
          </button>          
          <button className=' hover:text-red-600 hover:bg-gray-100/20 p-1 rounded-full hoverEffect'
            onClick={onClose} >
            <X />
          </button>
        </div>
        <hr />
        <div className='flex flex-col gap-4 text-base font-semibold tracking-wide'>
          {
            headerData?.map((item) => (
              <Link key={item?.title} href={item?.href} onClick={onClose}
                className={`w-3 hover:text-muted-foreground hoverEffect relative group ${pathname === item?.href && 'text-white'}`}
              >
                {item?.title}
                <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-600 hoverEffect group-hover:w-1/2 group-hover:left-0
              ${pathname === item?.href && 'w-1/2'}`} />
                <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-blue-600 hoverEffect group-hover:w-1/2 group-hover:right-0
              ${pathname === item?.href && 'w-1/2'}`} />
              </Link>
            ))
          }
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar