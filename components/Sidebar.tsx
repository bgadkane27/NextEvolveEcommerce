import React, { FC } from 'react'
import Logo from './Logo';
import { motion } from "motion/react"
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar:FC<SidebarProps> = ({isOpen, onClose}) => {  
  return (
    <div className={`w-full fixed inset-y-0 left-0 z-50 hoverEffect shadow-xl bg-black/10 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <motion.div className='min-w-72 max-w-96 h-full p-6 bg-black text-white/90 border-r border-white
      flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <Logo />
          <button className=' hover:text-red-600 hover:bg-gray-100/20 p-1 rounded-full hoverEffect'
          onClick={onClose} >
            <X />
          </button>
        </div>
        <div>
          Sidebar
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar