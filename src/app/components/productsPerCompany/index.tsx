import React from 'react'
import ProductCard from '../productCard'

interface ProductsPerCompanyProps {
  companyName: string;
}

function ProductsPerCompany({companyName}: ProductsPerCompanyProps) {
  return (
    <>
        <div className=' flex flex-col gap-5 w-full justify-center items-center mt-16'>

            <div className='text-[#040716] text-opacity-80 font-bold text-[45px]'>{companyName}</div>

            <div className=' flex justify-center flex-wrap gap-4 w-full mb-20'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    </>
  )
}

export default ProductsPerCompany