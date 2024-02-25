"use client"

import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'

interface CartProductProps {
    index: number;
    productImage: string;
    productTitle: string;
    productQuantity: number;
    isRemovingProduct: (arg0:number) => void;
    hasChangedProductQuantity: (arg0:number, arg1:number) => void;
}

function CartProduct({index, productImage, productTitle, productQuantity, isRemovingProduct, hasChangedProductQuantity} : CartProductProps) {

    const [productQuantitytoBuy, setproductQuantitytoBuy] = useState(productQuantity)

    const handleRemoveProductClick = () => {
        isRemovingProduct(index)
    }

    const handleRemoveProductQuantity = () => {
        productQuantitytoBuy > 1 ? setproductQuantitytoBuy(productQuantitytoBuy - 1) : null;
    }

    const handleAddProductQuantity = () => {
        setproductQuantitytoBuy(productQuantitytoBuy + 1)
    }

    useEffect(() => {
        hasChangedProductQuantity(productQuantitytoBuy, index)
      
    }, [productQuantitytoBuy])
    

  return (
    <div className='flex gap-5 w-[90%] h-[100px] items-center mt-5 bg-red-300/00'>
        <div className=' flex items-center w-[100px] h-full'>
            <Image
            src={productImage}
            width={0}
            height={0}
            sizes="100vw"
            className='w-full h-auto rounded-md'
            alt="Cart Product Image"
            /> 
        </div>

        <div className='flex-col flex justify-center w-[80%] h-full'>
            <div className='text-[14px] text-[#5f5e5e]'>{productTitle}</div>

            <div className='flex items-center gap-2 w-[70%] h-[30px] mt-3'>
                <div className='flex justify-between items-center w-full h-full bg-gray-200/80 shadow-xl rounded-3xl'>
                    <div className='w-[20px] h-[20px] ml-2 bg-gray-300 hover:bg-gray-400/60 rounded-md flex items-center justify-center cursor-pointer' onClick={handleRemoveProductQuantity}>
                        <Minus color="#5f5e5e"></Minus>
                    </div>
                    
                    <div className='text-[#5f5e5e] text-[14px]'>{productQuantitytoBuy}</div>
                    
                    <div className='w-[20px] h-[20px] mr-2 bg-gray-300 hover:bg-gray-400/60 rounded-md flex items-center justify-center cursor-pointer' onClick={handleAddProductQuantity}>
                        <Plus color='#5f5e5e'></Plus>
                    </div>
                </div>

                <div className='text-[13px] text-[#5f5e5e] hover:text-[#000000] cursor-pointer' onClick={handleRemoveProductClick}>Remover</div>
            </div>
        </div>
    </div>
  )
}

export default CartProduct