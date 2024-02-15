import ProductsImagesThumbnail from '@/app/components/productImagesThumbnail'
import React from 'react'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Chuteira from "@/app/assets/imgs/chuteira.jpg"


function ProductImages() {
  return (
    <div className='flex min-w-[44%] w-max p-5 gap-5 rounded-xl h-[700px] bg-white shadow-lg'>

        <div className='flex flex-col gap-4 mt-7'>
            <ProductsImagesThumbnail></ProductsImagesThumbnail>
            <ProductsImagesThumbnail></ProductsImagesThumbnail>
            <ProductsImagesThumbnail></ProductsImagesThumbnail>
            <ProductsImagesThumbnail></ProductsImagesThumbnail>
            <ProductsImagesThumbnail></ProductsImagesThumbnail>
        </div>


        <div className='flex flex-col w-full h-full'>
            <div className='flex h-[90%] bg-red-400 mt-2 rounded-2xl'>
                <Image
                src={Chuteira}
                className=''
                alt="Picture of the author"
                />
            </div>

            <div className=' flex w-full items-center justify-center mt-5 gap-2'>
                <Search size={15} color='rgb(75 85 99 / 0.9)'></Search>
                <div className='text-center text-[14px] text-gray-600/90'>Passe o mouse sobre a imagem para ampliar</div>
            </div>
        </div>

    </div>
  )
}

export default ProductImages