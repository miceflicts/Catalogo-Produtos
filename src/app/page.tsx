import Carousel from "./components/carousel";
import CompanyFilter from "./components/companyFilter";
import Layout from "./components/layout";
import ProductsPerCompany from "./components/productsPerCompany";


export default function Home() {
  return (
    <>
      <Layout></Layout>

      <div className=" flex justify-center min-w-[100vw] min-h-[100vh] bg-[#F7F7F7]">

        <div className=" flex items-center flex-col w-[1500px] mt-8">
          <Carousel></Carousel>

          <CompanyFilter></CompanyFilter>

          <ProductsPerCompany companyName={"Nike"}></ProductsPerCompany>
        </div>
      </div>
    </>
  );
}
