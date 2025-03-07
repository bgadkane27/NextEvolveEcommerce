import React, { FC } from 'react'
import Logo from './Logo';
import { motion } from "motion/react"
import { X } from 'lucide-react';
import { headerData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div className={`w-full fixed inset-y-0 left-0 z-50 hoverEffect cursor-auto shadow-xl bg-black/10 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5, delay:0.3}}
      ref={sidebarRef}
      className='min-w-72 max-w-96 h-full py-6 px-10 bg-black text-white/90 border-r border-pink-600 flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <button onClick={onClose}> 
          <Logo />
          </button>          
          <button className=' hover:text-red-600 hover:bg-gray-100/10 p-1 rounded-full hoverEffect'
            onClick={onClose} >
            <X />
          </button>
        </div>
        <hr />
        <div className='flex flex-col gap-4 text-base tracking-wide'>
          {
            headerData?.map((item) => (
              <Link key={item?.title} href={item?.href} onClick={onClose}
                className={`w-3 hover:text-pink-400 hoverEffect font-semibold ${pathname === item?.href && 'text-pink-600'}`}
              >
                {item?.title}
              </Link>
            ))
          }
        </div>
        <SocialMedia />
      </motion.div>
    </div>
  )
}

export default Sidebar