"use client"

import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';
import "./index.css"

import ProductCard from '../productCard'
import Carousel from '../carousel';

interface ProductsPerCompanyProps {
  companyName: string;
  products: any;
  productType: string
  hasBanner: boolean,
  bannerSrc: any,
}

function ProductsPerCompany({companyName, products, productType, hasBanner, bannerSrc}: ProductsPerCompanyProps) {
  
  const maxIndex = products.length - 1

  return (
    <>
        <div className="flex flex-col gap-10 w-[97%] h-fit mt-16 max-[500px]:mt-10">

          <div className="w-fit flex-col">
            <div className=" text-[#040716] text-opacity-80 font-bold text-[30px]">{companyName}</div>
            <div className="w-full h-[5px] bg-[#ECBCA1] rounded-xl"></div>
          </div>
        

          <div className="w-full flex h-fit">
            <Swiper
              modules={[Navigation]}
              observer
              observeParents={true}
              navigation={true}
              className=' w-full'
              slidesPerView={6}
              spaceBetween={120}
              breakpoints={{
                  0: {
                    slidesPerView: 1.5,
                    spaceBetween: 120,
                  },
                  400: {
                    slidesPerView: 2,
                    spaceBetween: 170,
                  },
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 120,
                  },
                  700: {
                    slidesPerView: 2.5,
                    spaceBetween: 120,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 120,
                  },
                  1100: {
                    slidesPerView: 3.5,
                    spaceBetween: 120,
                  },
                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 120,
                  },
                  1400: {
                    slidesPerView: 4.5,
                    spaceBetween: 120,
                  },
                  1500: {
                    slidesPerView: 5,
                    spaceBetween: 80,
                  },
                  1700: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                  1800: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                  },
              }}
              >
                
                {products.map((product:any, index:number) => (
                    <SwiperSlide key={index} className=' box-border'>
                      <ProductCard key={index} index={index} maxIndex={maxIndex} isProductMargin={product["is-product-margin"]} productTitle={product.title} productImages={product.Images} productId={product.id} productType={productType}></ProductCard>
                    </SwiperSlide>
                ))}
            </Swiper>
          </div>

          {hasBanner ? (
            <Carousel pcImage={bannerSrc[0]["banner-pc"]} mobileImage={bannerSrc[0]["banner-mobile"]}></Carousel>
          ) : null}
        </div>
    </>
  )
}

export default ProductsPerCompany