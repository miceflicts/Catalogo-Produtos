"use client"

import React from 'react'
import Image from 'next/image'
import ProdutsJson from "@/app/productsJson/produtos.json"

interface ProductsCategoriesProps {
  categoryTitle: string;
  categoryImageSrc: string
}

function ProductsCategories({categoryTitle, categoryImageSrc} : ProductsCategoriesProps) {


  return (
    <div className="flex flex-col items-center justify-between w-[200px] h-fit bg-gray-200/50 rounded-2xl cursor-pointer">

        <div className='absolute flex justify-center z-10'>
            <div className='text-[#040716] font-medium mt-5 text-[16px] max-[500px]:text-[12px]'>{categoryTitle}</div>
        </div>

        <div className='relative hover:-translate-y-2 transition-all ease-in-out delay-150 flex justify-center mt-7'>
           <Image
            src={categoryImageSrc}
            width={0}
            height={0}
            sizes="100vw"
            className='rounded-2xl w-[90%] h-[auto]'
            alt="Product image"
            />
        </div>
    </div>
  )
}

export default ProductsCategories