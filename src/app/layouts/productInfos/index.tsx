"use client"

import React,{useState, useEffect} from 'react'
import { Truck, Undo2, ShieldCheck, Award, Plus, Minus } from 'lucide-react'
import ProductVariantCard from '@/app/components/productVariantCard';
interface ProductsImageProps {
    productInfos: any;
    pathname: string;
    hasAddedNewProductsToCart: () => void;
}

function ProductInfos({productInfos, pathname, hasAddedNewProductsToCart} : ProductsImageProps) {

    const [isHoveringBuyButton, setIsHoveringBuyButton] = useState(false)
    const [numberOfProductsToBuy, setNumberOfProductsToBuy] = useState(1)

    const [activeProductVariant, setActiveProductVariant] = useState({Index: 0, VariantName: "Cor: ", VariantWhatsAppMessage: `*Cor*: `, ImageSrc: ""})

    const objDate = new Date();
    const hours = objDate.getHours();

    var greetingtext = ""

    if (hours < 12){
        greetingtext = "Bom%20dia"
    } if (hours > 12 && hours < 18){
            greetingtext = "Boa%20tarde"
    } else{
        greetingtext = "Boa%20noite"
    }

    const handleIsHoveringBuyButton = () => {
        setIsHoveringBuyButton(!isHoveringBuyButton);
    }

    const handleAddNumberOfVariants = () => {
        setNumberOfProductsToBuy(numberOfProductsToBuy + 1)
    }

    const handleSubtractNumberOfVariants = () => {
        setNumberOfProductsToBuy(numberOfProductsToBuy >= 1 ? numberOfProductsToBuy-1 : 0)
    }

    const handleSetActiveProductVariant = (value:any) => {
        setActiveProductVariant({Index: value.index, VariantName: `Cor: ${value.variantName}`, VariantWhatsAppMessage: `*Cor*: ${value.variantName}`, ImageSrc: value.imageSrc})
    }

    const handleAddToCartClick = () => {
        const newItem = { ProductName: productInfos.title, VariantName:  activeProductVariant.VariantWhatsAppMessage, Quantity: numberOfProductsToBuy <= 0 ? 1 : numberOfProductsToBuy, ImageSrc: activeProductVariant.ImageSrc};
        let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

        cartItems.push(newItem);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        hasAddedNewProductsToCart();
    }

    useEffect(() => {
        productInfos.id !== "" ? console.log(productInfos.images) : "";
        setActiveProductVariant({Index: 0, VariantName: productInfos["has-variants"] ? `Cor: ${productInfos.images[0]["variant-name"]}` : "", VariantWhatsAppMessage: productInfos["has-variants"] ? `*Cor*: ${productInfos.images[0]["variant-name"]}` : "", ImageSrc: productInfos.images !== undefined ? productInfos.images[0].src : ""})
    }, [productInfos])
    

    
  return (
    <>
        <div className=' flex items-center justify-center max-[1000px]:min-w-[90%] w-[35%] max-[600px]:min-w-[100vw] rounded-xl h-fit bg-white shadow-lg'>
            
            <div className=' w-[90%] h-[90%] '>
                <div className=' w-full flex gap-5 mt-6'>
                    <div className=' flex w-[90%] font-[600] text-[#6e6e6e] text-[25px] break-words '>{productInfos.title}</div>
                </div>

                <div className=' w-full h-[1px] bg-gray-300 rounded-lg mt-5'></div>

                {productInfos["has-variants"] ? (
                    <div className=' flex flex-col'>
                        <div className=' text-black/65 mt-5 text-[15px] font-semibold'>{activeProductVariant.VariantName}</div>

                            <div className=' flex w-full flex-wrap gap-3 '>
                                {productInfos.images.map((product:any, index:number) => (
                                    product["is-variant"] ? (
                                        <ProductVariantCard key={index} highlightedImage={activeProductVariant.Index} index={index} variantName={product["variant-name"]} imageSrc={product.src} setActiveProductVariant={handleSetActiveProductVariant}></ProductVariantCard>
                                    ) : null
                                ))}
                            </div>
                        </div>
                ) : null}

                <div className=' flex w-full justify-center items-center h-max bg-[#F2F2F5] rounded-2xl mt-5'>

                    <div className=' mt-6 mb-6 flex flex-col gap-3 w-[90%] h-[85%]'>
                        <div className=' flex items-center gap-2'>
                            <Truck color='#00b75b' size={22}></Truck>
                            <div className='text-[#00b75b] text-[12px] font-normal'>Frete Grátis</div>
                            <div className='text-[#0086ff] text-[18px] font-normal relative bottom-2'>.</div>
                            <div className='text-[#0086ff] text-[12px] font-normal text-center'>Disponível</div>
                        </div>

                        <div className=' flex  gap-2'>
                            <Undo2 className=' rotate-180 flip -scale-x-100' color='rgba(0, 0, 0, 0.55)' size={22}></Undo2>
                            <div className='text-[12px]'>Devolução Grátis.</div>
                            <div 
                            className='text-[12px] text-black/60'>Até 7 dias a partir do recebimento</div>
                        </div>

                        <div className=' flex  gap-2'>
                            <ShieldCheck  color='rgba(0, 0, 0, 0.55)' size={22}></ShieldCheck>
                            <div className='text-[12px]'>Compra garantida.</div>
                            <div className='text-[12px] break-words text-black/60'>Saia satisfeito ou devolvemos seu dinheiro</div>
                        </div>

                        <div className=' flex  gap-2'>
                            <Award className=' rotate-180 flip -scale-x-100' color='rgba(0, 0, 0, 0.55)' size={22}></Award>
                            <div className='text-[12px]'>Mais vendido</div>
                            <div className='text-[12px] text-black/60'>entre os produtos da coleção</div>
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col gap-2 w-full h-fit'>

                    <div className='flex gap-2'>
                        <div className=' text-black/65 mt-5 text-[15px] font-semibold'>Quantidade: {numberOfProductsToBuy}</div>

                    </div>

                    <div className='flex items-center gap-2 ml-1 h-fit'>
                        <div className='flex items-center justify-center w-[45px] h-[45px] rounded-full bg-white border border-gray-300 cursor-pointer' onClick={handleSubtractNumberOfVariants}>
                            <Minus color='#6c7378'></Minus>
                        </div>

                        <div className='text-black/65 text-[16px] font-semibold ml-1 mr-1'>{numberOfProductsToBuy}</div>

                        <div className='flex items-center justify-center w-[45px] h-[45px] rounded-full bg-white border border-gray-300 cursor-pointer' onClick={handleAddNumberOfVariants}>
                            <Plus color='#6c7378'></Plus>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2 w-full h-[130px] rounded-xl mt-6 mb-6'>

                <a href={`https://wa.me/556492913815?text=${greetingtext},%20tudo%20bem%3F%0AVocê%20consegue%20me%20falar%20mais%20sobre%20a%20*${productInfos.title}*${activeProductVariant.VariantWhatsAppMessage.length > 0 ? `%0a${activeProductVariant.VariantWhatsAppMessage}%0a` : "%0a"}*Link:*%20${pathname}`} className='h-2/4' target="_blank" rel="noopener noreferrer">
                    <div className='flex pisca gap-1 items-center justify-center h-full transition-all ease-in-out delay-100 hover:scale-[1.03] bg-green-600 hover:bg-green-600/80 rounded-2xl cursor-pointer'>
                        <div className='text-white font-bold'>Comprar pelo WhatsApp</div>
                    </div>
                </a>

                    <div className='flex items-center justify-center h-2/4 border-2 transition-all ease-linear delay-100 border-gray-300 hover:bg-[#3A2A2F] hover:border-[#3A2A2F] rounded-2xl cursor-pointer' onMouseEnter={handleIsHoveringBuyButton} onMouseLeave={handleIsHoveringBuyButton} onClick={handleAddToCartClick}>
                        <div className={` transition-all ease-linear delay-100 ${isHoveringBuyButton ? "text-white" : "text-black/65"} font-medium`}>Adicionar ao Carrinho</div>
                    </div>

                </div>


                
            </div>
        </div>
    </>
  )
}

export default ProductInfos