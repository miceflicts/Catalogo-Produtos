"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ProductsCardProps {
  productTitle: string;
  productImages: any;
  productId: string;
}

function ProductCard({productTitle, productImages, productId}: ProductsCardProps) {



  return (
    <>
        <Link href={`/produto`}>
          <div className='flex gap-3 items-center flex-col w-[250px] h-[320px] transition-all ease-in-out delay-75 hover:scale-105 bg-[#FCFCFC] rounded-lg shadow-lg mt-5'>

              <div className='flex items-center justify-center w-[90%] h-[150px] bg-gray-200 mt-5 rounded-lg'>
                <Image src={productImages[0].src} width={100} height={100} alt='Imagem do Produto'/>
              </div>

              <div className=' w-[87%]  text-[13px] text-[#868686]'>{productTitle}</div>

              <div className=' flex items-center justify-center mt-5 w-[80%] h-[40px] bg-[#B29E9E] rounded-md'>
                  <div className=' text-white font-medium text-[14px]'>Ver mais</div>
              </div>
          </div>
        </Link>
    </>
  )
}

export default ProductCard