"use client";

import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
    <button onClick={() => setIsSidebarOpen(true)}>
        <AlignLeft className='hover:text-black hoverEffect md:hidden' />
    </button>
    <div className="md:hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
    </div>
    </>    
  )
}

export default MobileMenu