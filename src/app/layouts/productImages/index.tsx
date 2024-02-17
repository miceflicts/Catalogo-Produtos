"use client"

import ProductsImagesThumbnail from '@/app/components/productImagesThumbnail'
import React,{useState, useEffect} from 'react'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Chuteira from "@/app/assets/imgs/chuteira.jpg"


interface ProductsImageProps {
  productInfos: any;
}

function ProductImages({productInfos}: ProductsImageProps) {

  console.log(productInfos.images)

  const [highlightedImage, setHighlightedImage] = useState("")


/* 
  productInfos.images.map((image: { src: string}) => (
    console.log(image.src)
  )) */


  return (
    <div className='flex max-[1000px]:flex-col max-[1000px]:min-w-[90%] max-[1000px]:max-w-[90%] min-w-[44%] w-max p-5 gap-5 rounded-xl h-fit bg-white max-[600px]:min-w-[100vw] min-[600px]:shadow-lg'>


        <div className='max-[1000px]:hidden flex flex-col gap-4 mt-4'>

            {productInfos !== "" && productInfos.images && productInfos.images.map((image: {src:string}, index: number) => (
                <ProductsImagesThumbnail key={index} image={image.src}></ProductsImagesThumbnail>
            ))}

        </div>


        <div className='flex items-center flex-col w-full h-full'>
            <div className=' flex h-[90%] w-[90%] mt-4 '>
                <Image
                src={productInfos.images !== undefined ? productInfos.images[0].src : ""}
                width={0}
                height={0}
                sizes="100vw"
                className='rounded-2xl w-full h-auto'
                alt="Product image"
                />
            </div>

            <div className=' flex w-full items-center justify-center mt-5 gap-2 max-[1000px]:hidden'>
                <Search size={15} color='rgb(75 85 99 / 0.9)'></Search>
                <div className='text-center text-[14px] text-gray-600/90'>Passe o mouse sobre a imagem para ampliar</div>
            </div>
        </div>

        <div className='min-[1000px]:hidden flex gap-4 ml-3 mt-2'>
{/*             {productInfos.images.map((image: {src:string}, index: number) => (
              <ProductsImagesThumbnail key={index} image={image.src}></ProductsImagesThumbnail>
            ))} */}
        </div>

    </div>
  )
}

export default ProductImages