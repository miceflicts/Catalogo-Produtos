"use client"

import React from 'react'
import Image from 'next/image'

interface ProductVariantProps {
    index: number,
    highlightedImage: number,
    variantName: string,
    imageSrc: string,
    setActiveProductVariant: (variantInfo: { index: number, variantName: string, imageSrc: string }) => void,
}

function ProductVariantCard({index, highlightedImage, variantName, imageSrc, setActiveProductVariant} : ProductVariantProps) {

    const handleVariantClick = () => {
        setActiveProductVariant({index: index, variantName: variantName, imageSrc: imageSrc})
    }

  return (
    <div className='w-[70px] h-[70px] rounded-lg mt-3 cursor-pointer' onClick={handleVariantClick}>
        <Image
        src={imageSrc}
        width={0}
        height={0}
        sizes="100vw"
        className={`rounded-2xl w-full h-auto ${index === highlightedImage ? 'border-[2px] border-[#E8BAA0] border-opacity-70 scale-[1.02]' : 'border-2 border-gray-100/90'}`}
        alt="Product Image"
        /> 
    </div>
  )
}

export default ProductVariantCard