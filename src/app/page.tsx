import Carousel from "./components/carousel";
import CompanyFilter from "./components/companyFilter";
import Layout from "./components/layout";
import ProductsDivision from "./components/productsDivision";
import ProductsPerCompany from "./components/productsPerCompany";
import Footer from "./layouts/footer";


export default function Home() {
  return (
    <>
      <Layout></Layout>

      <div className=" flex justify-center">

        <div className=" flex items-center flex-col w-[1500px] mt-8">
          <Carousel></Carousel>

{/*           <div className=" flex w-full gap-5 mt-10 mb-10 ">
            <ProductsDivision></ProductsDivision>
          </div> */}

          <CompanyFilter></CompanyFilter>

          <ProductsPerCompany companyName={"Nike"}></ProductsPerCompany>
        </div>

      </div>

      <Footer></Footer>

    </>
  );
}
