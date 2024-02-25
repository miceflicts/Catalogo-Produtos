"use client"

import React,{useState, useEffect} from 'react'
import Header from '@/app/layouts/header'
import Footer from '@/app/layouts/footer'
import ProductImages from '@/app/layouts/productImages'
import ProductInfos from '@/app/layouts/productInfos'

import ProductsJson from "@/app/productsJson/produtos.json"

import { usePathname } from 'next/navigation'


function Produto() {
    const [productInfos, setProductInfos] = useState({})
    const [hasAddedProductToCart, setHasAddedProductToCart] = useState(false)

    const [hasOppenedCart, setHasOppenedCart] = useState(false)

    const pathname = usePathname()

    const splitPathName = pathname.split("/");
    const productId = splitPathName.slice(4).join('/');

    const regex = /\/produto\/([^\/]+)/;
    const resultado = pathname.match(regex);
    

    const handleHasAddedNewProductsToCart = () => {
      setHasAddedProductToCart(!hasAddedProductToCart)
    }

    const handleHasOppenedCart = () => {
      setHasOppenedCart(!hasOppenedCart)
    }


    useEffect(() => {
      if (resultado) {
        for (let i = 0; i < ProductsJson.length; i++) {
            let products = ProductsJson[i];
  
            if (products['product-type'] === resultado[1]) {
  
                for (let j = 0; j < products.products[0].Products.length; j++) {
  
  
                  let product = products.products[0].Products[j]
                  if (product.id === productId) {
                    setProductInfos({"title": product.title, "id": product.id, "has-variants": product['has-variants'], "images": product.Images});
                    return;
                  }
                }
                console.log("No results found")
            }
        }
      } else {
        console.log("404 resultado is null")
      }
    }, []);


  return (
    <>
      <Header hasAddedProductToCart={hasAddedProductToCart}></Header>

      <div className=' w-full h-full flex flex-col items-center gap-20'>
        <div className=" flex justify-center">


          <div className=' flex w-[90vw] max-[600px]:w-screen items-center justify-center  '>
            <div className=" flex max-[1000px]:flex-col max-[1000px]:items-center justify-center gap-5 max-[600px]:gap-0 max-[600px]:w-full max-[600px]:mt-0 w-[1600px] h-fit mt-8 ">
                <ProductImages productInfos={productInfos}></ProductImages>
                <ProductInfos productInfos={productInfos} hasAddedNewProductsToCart={handleHasAddedNewProductsToCart} pathname={pathname}></ProductInfos>
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