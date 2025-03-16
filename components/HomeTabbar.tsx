import { productData } from '@/constants';
import { Repeat } from 'lucide-react';
import React from 'react';

interface Props {
  selectedTab: string;
  onTabSelect?: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className='flex items-center gap-1.5 text-sm font-semibold'>
      <div className='flex items-center gap-1.5'>
        {
          productData?.map((item) => (
            <button 
              key={item?.title} 
              onClick={(event) => {
                event.preventDefault();
                onTabSelect?.(item?.title);
              }}  
              className={`px-4 py-1.5 md:px-6 md:py-2 border border-black rounded-full hover:bg-black hover:text-white hoverEffect 
              ${selectedTab === item?.title && 'bg-black text-white'}`}
            >
              {item?.title}
            </button>
          ))
        }
      </div>
      <button 
        className='p-2 border border-black rounded-full hover:bg-black hover:text-white hoverEffect'
        onClick={(event) => event.preventDefault()}
      >
        <Repeat className='w-5 h-5' />
      </button>
    </div>
  );
};

export default HomeTabbar;
