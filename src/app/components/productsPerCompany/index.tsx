"use client"

import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';
import "./index.css"

import ProductCard from '../productCard'

interface ProductsPerCompanyProps {
  companyName: string;
  products: any;
  productType: string
}

function ProductsPerCompany({companyName, products, productType}: ProductsPerCompanyProps) {
  

  return (
    <>
        <div className="flex flex-col gap-10 w-full h-[500px] mt-16">
          <div className="w-fit flex-col">
            <div className=" text-[#040716] text-opacity-80 font-bold text-[30px]">{companyName}</div>
            <div className="w-full h-[5px] bg-[#ECBCA1] rounded-xl"></div>
          </div>
        

          <div className="w-full h-fit flex">
            <Swiper
              spaceBetween={100}
              slidesPerView={6}
              navigation={true}     
              modules={[Navigation]}
              className=' w-full h-full'
              >
                {products.map((product:any, index:number) => (
                  <SwiperSlide key={index} className='res-slide'>
                    <ProductCard key={index} productTitle={product.title} productImages={product.Images} productId={product.id} productType={productType}></ProductCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
    </>
  )
}

export default ProductsPerCompany