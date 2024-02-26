"use client"

import React,{useState, useEffect, useRef} from 'react'
import Header from '@/app/layouts/header'
import Footer from '@/app/layouts/footer'
import ProductImages from '@/app/layouts/productImages'
import ProductInfos from '@/app/layouts/productInfos'
import ProductsRecommendations from '@/app/layouts/productsRecommendations'

import ProductsJson from "@/app/productsJson/produtos.json"

import { usePathname } from 'next/navigation'

function Produto() {
    const [productInfos, setProductInfos] = useState({})
    const [hasAddedProductToCart, setHasAddedProductToCart] = useState(false)
    const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

    const pathname = usePathname()

    const splitPathName = pathname.split("/");
    const productId = splitPathName.slice(4).join('/');

    const myRef = useRef<HTMLDivElement>(null);

    const regex = /\/produto\/([^\/]+)/;
    const resultado = pathname.match(regex);
    

    const handleHasAddedNewProductsToCart = () => {
      setHasAddedProductToCart(!hasAddedProductToCart)

      if (myRef.current) {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }

    useEffect(() => {
      if (resultado) {
        for (let i = 0; i < ProductsJson.length; i++) {
            let products = ProductsJson[i];
  
            if (products['product-type'] === resultado[1]) {
                setRelatedProducts([products])
  
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
      <div ref={myRef}>
        <Header hasAddedProductToCart={hasAddedProductToCart}></Header>
      </div>

      <div className=' w-full h-full flex flex-col items-center gap-20'>
        
        <div className=" flex justify-center">


          <div className=' flex w-[90vw] max-[600px]:w-screen items-center justify-center  '>
            <div className=" flex max-[1000px]:flex-col max-[1000px]:items-center justify-center gap-5 max-[600px]:gap-0 max-[600px]:w-full max-[600px]:mt-0 w-[1600px] h-fit mt-8 ">
                <ProductImages productInfos={productInfos}></ProductImages>
                <ProductInfos productInfos={productInfos} hasAddedNewProductsToCart={handleHasAddedNewProductsToCart} pathname={pathname}></ProductInfos>
            </div>
          </div>

        </div>

        <div className='flex w-[90vw] max-[600px]:w-screen items-center justify-center '>

          <div className='flex max-[1000px]:flex-col max-[1000px]:items-center justify-center gap-5 max-[600px]:gap-0 max-[600px]:w-full max-[600px]:mt-0 max-w-[1600px] w-[90vw] h-fit mt-8'>
            {relatedProducts[0] !== undefined ? (
              <ProductsRecommendations sectionTitle={"Produtos Relacionados"} products={relatedProducts[0].products[0].Products} productType={relatedProducts[0]["product-type"]}></ProductsRecommendations>
            ) : ""}
          </div>
        </div>

      </div>


      <Footer></Footer>
    </>
  )
}

export default Produto