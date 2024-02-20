"use client"

import Carousel from "./components/carousel";
import CompanyFilter from "./components/companyFilter";
import Layout from "./components/layout";
import ProductsDivision from "./components/productsDivision";
import ProductsPerCompany from "./components/productsPerCompany";
import Footer from "./layouts/footer";

import ProductsData from "@/app/productsJson/produtos.json"


export default function Home() {


  const handleClick = () => {
    console.log(ProductsData)
  }

  return (
    <>
      <Layout></Layout>

      <div className=" flex justify-center">

        <div className=" flex items-center flex-col w-[1500px] mt-8" onClick={handleClick}>
          <Carousel></Carousel>
          
          <div className=" flex gap-6 w-full h-[220px] mt-8">
            <div className="w-[200px] h-full bg-gray-200 rounded-lg"></div>
            <div className="w-[200px] h-full bg-gray-200 rounded-lg"></div>
            <div className="w-[200px] h-full bg-gray-200 rounded-lg"></div>
          </div>

          {ProductsData.map((product, index) => (
              <ProductsPerCompany key={index} companyName={product.products[0]["category-title"]} products={product.products[0].Products} productType={product["product-type"]}></ProductsPerCompany> 
          ))}


          {/*<div className=" flex w-full gap-5 mt-10 mb-10 ">
            <ProductsDivision></ProductsDivision>
          </div> */}

{/*           <CompanyFilter></CompanyFilter>

          {ProductsData[0].map((product, index) => (
              <ProductsPerCompany key={index} companyName={product.company}></ProductsPerCompany> 
          ))} */}

        </div>

      </div>

      <Footer></Footer>

    </>
  );
}
