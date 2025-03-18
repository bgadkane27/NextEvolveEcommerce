"use client";
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from '@/sanity.types';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react';
import { urlFor } from '@/sanity/lib/image';
import { button, Image } from '@heroui/react';

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
}

const ImageView = ({ images = [] }: Props) => {

  const [active, setActive] = useState(images[0])
  return (
    <div className='w-full md:w-1/2 space-y-2 md:space-y-4'>
      <AnimatePresence mode='wait'>
        <motion.div
        key={active?._key}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full max-h-[400px] min-h-[400px] bg-gray-50 border rounded-md group overflow-hidden'>
          <Image src={urlFor(active).url()} alt="ProductImage" width={700} height={700}
            className='w-full h-96 max-h-[400px] min-h-[400px] object-contain group-hover:scale-110 hoverEffect'
          />
        </motion.div>
      </AnimatePresence>
      <div className='grid grid-cols-6 gap-2 h-20 md:h-28'>
        {
          images.map((image) => (
            <button key={image?._key}
            onClick={() => setActive(image)} 
            className={`border rounded-md overflow-hidden hover:cursor-pointer ${active?._key === image?._key && 'border border-blue-600'}`} 
            >
              <Image
                src={urlFor(image).url()}
                alt='ProductImage'
                width={120}
                height={120}
                className='w-full h-auto object-contain'
              />
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default ImageView