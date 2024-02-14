import React from 'react'
import { Truck, Undo2, ShieldCheck, Award } from 'lucide-react'

function ProductInfos() {
  return (
    <>
        <div className=' flex items-center justify-center w-[35%] rounded-xl h-[680px] bg-white shadow-lg'>
            
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
                            <div className='text-[#00b75b] text-[13px] font-normal'>Frete Grátis</div>
                            <div className='text-[#0086ff] text-[18px] font-normal relative bottom-2'>.</div>
                            <div className='text-[#0086ff] text-[13px] font-normal text-center'>Disponível</div>
                        </div>

                        <div className=' flex  gap-2'>
                            <Undo2 className=' rotate-180 flip -scale-x-100' color='rgba(0, 0, 0, 0.55)' size={22}></Undo2>
                            <div className='text-[13px]'>Devolução Grátis.</div>
                            <div 
                            className='text-[13px] text-black/60'>Até 7 dias a partir do recebimento</div>
                        </div>

                        <div className=' flex  gap-2'>
                            <ShieldCheck  color='rgba(0, 0, 0, 0.55)' size={22}></ShieldCheck>
                            <div className='text-[13px]'>Compra garantida.</div>
                            <div className='text-[13px] break-words text-black/60'>Saia satisfeito ou devolvemos seu dinheiro</div>
                        </div>

                        <div className=' flex  gap-2'>
                            <Award className=' rotate-180 flip -scale-x-100' color='rgba(0, 0, 0, 0.55)' size={22}></Award>
                            <div className='text-[13px]'>Mais vendido</div>
                            <div className='text-[13px] text-black/60'>entre os produtos da coleção</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default ProductInfos