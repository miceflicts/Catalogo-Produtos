
import Carousel from "./components/carousel";
import ProductsCategories from "./components/productsCategories";
import ProductsPerCompany from "./components/productsPerCompany";
import Footer from "./layouts/footer";

import ProductsData from "@/app/productsJson/produtos.json"
import ProductsCategoriesJson from "@/app/productsJson/categories.json";

import Header from "./layouts/header";



export default function Home() {

  return (
    <>
      <Header></Header>

       <div className=" flex justify-center">

          <div className=" flex items-center flex-col w-[80vw] max-[700px]:w-[90vw] max-w-[1500px] mt-8">
            <Carousel pcImage="https://i.imgur.com/bR4fw7s.png" mobileImage="https://i.imgur.com/IQ0F7Ou.png"></Carousel>
            
            <div className=" flex gap-6 max-[500px]:gap-3 w-full h-fit mt-8">
              {ProductsCategoriesJson.map((product, index) => (
                <ProductsCategories key={index} categoryTitle={product.Category} categoryImageSrc={product.ImageSrc}></ProductsCategories>
              ))}
            </div>

            {ProductsData.map((product, index) => (
                <ProductsPerCompany key={index} companyName={product.products[0]["category-title"]} products={product.products[0].Products} productType={product["product-type"]} hasBanner={product["has-banner"]} bannerSrc={product["banner-src"]} />
            ))} 

          </div>
        </div>

      <Footer></Footer>

    </>
  );
}
