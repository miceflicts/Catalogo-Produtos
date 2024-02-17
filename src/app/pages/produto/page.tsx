import React from 'react'
import Layout from '@/app/components/layout'
import Footer from '@/app/layouts/footer'
import ProductImages from '@/app/layouts/productImages'
import ProductInfos from '@/app/layouts/productInfos'
import ProductsRecommendations from '@/app/layouts/productsRecommendations'



function Produto() {
  return (
    <>
      <Layout></Layout>

      <div className=' w-full h-full flex flex-col items-center gap-20'>
        <div className=" flex justify-center">

          <div className=' flex w-[90vw] max-[600px]:w-screen items-center justify-center  '>
            <div className=" flex max-[1000px]:flex-col max-[1000px]:items-center justify-center gap-5 max-[600px]:gap-0 max-[600px]:w-full max-[600px]:mt-0 w-[1600px] h-fit mt-8 ">
                <ProductImages></ProductImages>
                <ProductInfos></ProductInfos>
            </div>
          </div>

        </div>

{/*         <div className='flex w-[90vw] items-center justify-center bg-blue-300'>
          <div className='flex justify-center gap-5 w-[1500px] mt-8'>
            <ProductsRecommendations></ProductsRecommendations>
          </div>
        </div> */}
      </div>


      <Footer></Footer>
    </>
  )
}

export default Produto