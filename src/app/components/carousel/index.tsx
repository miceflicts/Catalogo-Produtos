"use client"

import React from 'react'
import Image from 'next/image'


interface CarouselProps {
  pcImage: any,
  mobileImage: any
}

function Carousel({pcImage, mobileImage} : CarouselProps) {
  return (
    <div className='w-full rounded-lg max-[700px]:aspect-[16/11] aspect-[16/5]'>
        <Image
        src={pcImage}
        width={0}
        height={0}
        sizes="100vw"
        className='rounded-2xl w-full h-auto max-[700px]:hidden'
        alt="Banner image"
        />

        <Image
        src={mobileImage}
        width={0}
        height={0}
        sizes="100vw"
        className='rounded-2xl w-full h-auto min-[700px]:hidden'
        alt="Banner image"
        /> 
    </div>
  )
}

export default Carousel