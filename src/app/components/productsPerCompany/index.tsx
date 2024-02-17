import React from 'react'
import ProductCard from '../productCard'

import productsData from "@/app/productsJson/produtos.json"

interface ProductsPerCompanyProps {
  companyName: string;
}

function ProductsPerCompany({companyName}: ProductsPerCompanyProps) {

  return (
    <>
        <div className=' flex flex-col gap-5 w-[95%] justify-center items-center mt-16'>

            <div className='text-[#040716] text-opacity-80 font-bold text-[45px]'>{companyName}</div>

            <div className=' flex justify-center flex-wrap gap-4 w-full mb-20'>
                {productsData[0].map((product, index) => (
                  <ProductCard key={index} productTitle={product.title} productImages={product.Images} productId={product.id}></ProductCard>
                ))}
            </div>
        </div>
    </>
  )
}

export default ProductsPerCompany