"use client"

import React,{useState} from 'react'
import { Truck, Undo2, ShieldCheck, Award, Plus, Minus } from 'lucide-react'
function ProductInfos() {

    const [isHoveringBuyButton, setIsHoveringBuyButton] = useState(false)
    const [numberOfProductsToBuy, setNumberOfProductsToBuy] = useState(1)

    const handleIsHoveringBuyButton = () => {
        setIsHoveringBuyButton(!isHoveringBuyButton);
    }

    const handleAddNumberOfVariants = () => {
        setNumberOfProductsToBuy(numberOfProductsToBuy + 1)
    }

    const handleSubtractNumberOfVariants = () => {
        setNumberOfProductsToBuy(numberOfProductsToBuy >= 1 ? numberOfProductsToBuy-1 : 0)
    }

  return (
    <>
        <div className=' flex items-center justify-center w-[35%] rounded-xl h-[700px] bg-white shadow-lg'>
            
            <div className=' w-[90%] h-[90%] '>
                <div className=' w-full flex gap-5'>
                    <div className=' flex w-[90%] text-[22px] break-words '>Chuteira Nike Mercurial Vapor XIV Elite pro </div>
                </div>

                <div className=' w-full h-[1px] bg-gray-300 rounded-lg mt-5'></div>

                <div className=' flex flex-col'>
                    <div className=' text-black/65 mt-5 text-[15px] font-semibold'>Cor: Vermelho</div>

                    <div className=' flex gap-3'>
                        <div className='w-[50px] h-[50px] rounded-lg bg-red-300 mt-3'></div>
                        <div className='w-[50px] h-[50px] rounded-lg bg-red-300 mt-3'></div>
                        <div className='w-[50px] h-[50px] rounded-lg bg-red-300 mt-3'></div>
                    </div>
                </div>

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

                <div className='flex flex-col gap-2 w-full h-[130px] rounded-xl mt-6'>

                    <div className='flex pisca gap-1 items-center justify-center h-2/4 transition-all ease-in-out delay-100 hover:scale-[1.03] bg-green-600 hover:bg-green-600/80 rounded-2xl cursor-pointer'>
                        <div className=' text-white font-bold'>Comprar Agora</div>
                    </div>

                    <div className='flex items-center justify-center h-2/4 border-2 transition-all ease-linear delay-100 border-gray-300 hover:bg-[#3A2A2F] hover:border-[#3A2A2F] rounded-2xl cursor-pointer' onMouseEnter={handleIsHoveringBuyButton} onMouseLeave={handleIsHoveringBuyButton} >
                        <div className={` transition-all ease-linear delay-100 ${isHoveringBuyButton ? "text-white" : "text-black/65"} font-medium`}>Adicionar ao Carrinho</div>
                    </div>

                </div>


                
            </div>
        </div>
    </>
  )
}

export default ProductInfos