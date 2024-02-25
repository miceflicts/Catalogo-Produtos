"use client"

import React from 'react'
import Image from 'next/image';

interface ProductsImagesProps {
  index: number;
  image: string;
  highlightedImage: number,
  changedHighlightedImage: (index: number) => void,
}


function ProductsImagesThumbnail({index, image, highlightedImage, changedHighlightedImage} : ProductsImagesProps) {

  const handleImageClick = () => {
    changedHighlightedImage(index)
  }

  return (
    <div className={`flex aspect-square w-[80px] h-[80px] rounded-xl cursor-pointer`} onClick={handleImageClick}>
        
        <Image
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        className={`rounded-2xl w-full h-auto ${index === highlightedImage ? 'filter brightness-[0.97]' : ''}`}
        alt="Product Image"
        /> 

    </div>
  )
}

export default ProductsImagesThumbnail