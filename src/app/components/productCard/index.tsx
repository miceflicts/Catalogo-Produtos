"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ProductsCardProps {
  productTitle: string;
  productImages: any;
  productId: string;
  productType: string;
}

function ProductCard({productTitle, productImages, productId, productType}: ProductsCardProps) {


  return (
    <>
        <Link href={`/pages/produto/${productType}/${productId}`}>
          <div className=' flex items-center justify-between flex-col w-[250px] h-[375px] transition-all ease-in-out delay-75 hover:scale-[1.03] bg-[#FCFCFC] rounded-xl shadow-lg mt-5 mb-5'>

              <div className='flex flex-col w-full items-center gap-3'>
                <div className='flex items-center justify-center w-[90%] h-[150px] mt-10 rounded-lg'>
                  <Image 
                  src={productImages[0].src}                
                  width={0}
                  height={0}
                  sizes="100vw"
                  className='rounded-2xl w-full h-auto'
                  alt='Imagem do Produto'/>
                </div>

                <div className=' w-[87%] mt-10 text-[13px] text-[#868686]'>{productTitle}</div>
              </div>

              <div className=' flex items-center justify-center mb-7 mt-4 w-[80%] h-[40px] bg-[#B29E9E] hover:bg-[#a18e8e] transition-all ease-linear delay-200 rounded-md'>
                  <div className=' text-white font-medium text-[14px]'>Ver mais</div>
              </div>
          </div>
        </Link>
    </>
  )
}

export default ProductCard