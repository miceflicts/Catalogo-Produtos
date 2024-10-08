"use client"

import HeaderSearch from '@/app/components/headerSearch'
import React,{useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import CartWindow from '@/app/components/cartWindow'

interface HeaderProps {
    hasAddedProductToCart?: any;
}

function Header({hasAddedProductToCart,} : HeaderProps) {
  
    const [isShowingSearchArea, setIsShowingSearchArea] = useState(false)
    const [isHoveringCartDiv, setIsHoveringCartDiv] = useState(false)
    
    const [isShowingCart, setIsShowingCart] = useState(false)

    const [isClickingOnCartIcon, setIsClickingOnCartIcon] = useState(false);


    const [cartItems, setCartItems] = useState<any[]>([]);

    const cartRef = useRef<HTMLDivElement>(null);

    
    // Function to trigger a re-render when cart items are updated
    const handleUpdateCartItems = () => {
        // Retrieve cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

        setCartItems(storedCartItems);
    };
    
    const handleClickedOnSearch = () => {
        setIsShowingSearchArea(!isShowingSearchArea)
    }
    
    const handleHoverCartDiv = () => {
        setIsHoveringCartDiv(!isHoveringCartDiv)
    }
    
    
    const handleCartToggle = () => {
        setIsShowingCart(false);
    };
    
    const handleChangeIsClickingOnCartIcon = () => {
        setIsClickingOnCartIcon(!isClickingOnCartIcon);
    }
    
    const handleCartClick = () => {
        setIsShowingCart(!isShowingCart)
    }

    
    useEffect(() => {
      handleUpdateCartItems()
    
    }, [hasAddedProductToCart])

    useEffect(() => {
        handleUpdateCartItems()
    }, [])
    
    useEffect(() => {
        const handleCLickInside = (event:any) => {
            if (cartRef.current && cartRef.current.contains(event.target)) {
                handleChangeIsClickingOnCartIcon();
                handleCartClick();
            }
        };
        
        document.addEventListener('mousedown', handleCLickInside);
        
        return () => {
            document.removeEventListener('mousedown', handleCLickInside);
        };
    }, []);
    

    useEffect(() => {
        if (isClickingOnCartIcon === false && isShowingCart === true) {
            handleCartToggle()
        }

    }, [isClickingOnCartIcon])
    
    
  return (
    <>
        <div className=' flex flex-col w-full'>

            <div className="flex items-center justify-center w-full h-[35px] bg-gradient-to-r from-[#c98962] to-[#ECBCA1]">
                <div className='text-[14px] text-white font-bold'>COSTG IMPORTS - QUALIDADE E CONFIANÇA</div>
            </div>


            <div className='flex justify-center items-center w-full h-[120px] max-[720px]:h-[100px] bg-[#141414]'>

                <div className=' flex justify-between relative items-center resize-none w-[1300px] h-full  '>

                    <Link href="/">
                        <div className=' flex items-center gap-3 max-[1300px]:ml-10 max-[430px]:ml-4'>
                            
                            {/* Logo */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className='relative bottom-[10px] w-[75px]'
                                fill="none"
                                viewBox="0 0 176 177"
                                >
                                <path
                                    fill="#EDEDED"
                                    d="M175.909 112.818h-25.636c-.182-2.121-.667-4.045-1.455-5.773a13.019 13.019 0 00-3.182-4.454c-1.333-1.273-2.954-2.243-4.863-2.91-1.909-.696-4.076-1.045-6.5-1.045-4.243 0-7.834 1.03-10.773 3.091-2.909 2.061-5.121 5.015-6.636 8.864-1.485 3.848-2.228 8.47-2.228 13.864 0 5.697.758 10.469 2.273 14.318 1.546 3.818 3.773 6.697 6.682 8.636 2.909 1.909 6.409 2.864 10.5 2.864 2.333 0 4.424-.288 6.273-.864 1.848-.606 3.454-1.47 4.818-2.591a13.426 13.426 0 003.318-4.045c.879-1.606 1.47-3.409 1.773-5.409l25.636.181c-.303 3.94-1.409 7.955-3.318 12.046-1.909 4.061-4.621 7.818-8.136 11.273-3.485 3.424-7.803 6.181-12.955 8.272s-11.136 3.137-17.955 3.137c-8.545 0-16.212-1.834-23-5.5-6.757-3.667-12.106-9.061-16.045-16.182-3.91-7.121-5.864-15.833-5.864-26.136 0-10.364 2-19.091 6-26.182 4-7.121 9.394-12.5 16.182-16.137 6.788-3.666 14.364-5.5 22.727-5.5 5.879 0 11.288.803 16.228 2.41 4.939 1.605 9.272 3.954 13 7.045 3.727 3.06 6.727 6.833 9 11.318 2.272 4.485 3.651 9.621 4.136 15.409z"
                                ></path>
                                <path
                                    fill="#EDEDED"
                                    d="M136.909 65.818h-25.636c-.182-2.121-.667-4.045-1.455-5.773a13.022 13.022 0 00-3.182-4.454c-1.333-1.273-2.954-2.242-4.863-2.91-1.91-.696-4.076-1.045-6.5-1.045-4.243 0-7.834 1.03-10.773 3.091-2.91 2.06-5.121 5.015-6.636 8.864-1.485 3.848-2.228 8.47-2.228 13.863 0 5.698.758 10.47 2.273 14.319 1.545 3.818 3.773 6.697 6.682 8.636 2.909 1.909 6.409 2.864 10.5 2.864 2.333 0 4.424-.288 6.273-.864 1.848-.606 3.454-1.47 4.818-2.59a13.42 13.42 0 003.318-4.046c.879-1.606 1.47-3.41 1.773-5.41l25.636.183c-.303 3.939-1.409 7.954-3.318 12.045-1.909 4.061-4.621 7.818-8.136 11.273-3.485 3.424-7.803 6.181-12.955 8.272s-11.136 3.137-17.954 3.137c-8.546 0-16.213-1.834-23-5.5-6.758-3.667-12.107-9.061-16.046-16.182-3.91-7.121-5.864-15.833-5.864-26.136 0-10.364 2-19.091 6-26.182 4-7.122 9.394-12.5 16.182-16.137 6.788-3.666 14.364-5.5 22.728-5.5 5.878 0 11.287.803 16.227 2.41 4.939 1.605 9.272 3.954 13 7.045 3.727 3.06 6.727 6.833 9 11.318 2.272 4.485 3.651 9.621 4.136 15.41z"
                                ></path>
                                <path
                                    fill="#EDEDED"
                                    d="M92.91 112.818H67.272c-.182-2.121-.667-4.045-1.455-5.773a13.031 13.031 0 00-3.182-4.454c-1.333-1.273-2.954-2.243-4.863-2.91-1.91-.696-4.076-1.045-6.5-1.045-4.243 0-7.834 1.03-10.773 3.091-2.91 2.061-5.121 5.015-6.636 8.864-1.485 3.848-2.228 8.47-2.228 13.864 0 5.697.758 10.469 2.273 14.318 1.546 3.818 3.773 6.697 6.682 8.636 2.909 1.909 6.409 2.864 10.5 2.864 2.333 0 4.424-.288 6.273-.864 1.848-.606 3.454-1.47 4.818-2.591a13.424 13.424 0 003.318-4.045c.879-1.606 1.47-3.409 1.773-5.409l25.636.181c-.303 3.94-1.409 7.955-3.318 12.046-1.91 4.061-4.621 7.818-8.136 11.273-3.485 3.424-7.803 6.181-12.955 8.272-5.151 2.091-11.136 3.137-17.955 3.137-8.545 0-16.212-1.834-23-5.5-6.757-3.667-12.106-9.061-16.045-16.182-3.91-7.121-5.864-15.833-5.864-26.136 0-10.364 2-19.091 6-26.182 4-7.121 9.394-12.5 16.182-16.137 6.788-3.666 14.364-5.5 22.727-5.5 5.88 0 11.288.803 16.228 2.41 4.94 1.605 9.273 3.954 13 7.045 3.727 3.06 6.727 6.833 9 11.318 2.273 4.485 3.651 9.621 4.136 15.409z"
                                ></path>
                            </svg>

                            <div className='max-[340px]:hidden relative top-[2px] text-[20px] text-[#e4e2e2] font-bold'>COSTG</div>
                        </div>
                    </Link>

                    <div className=' max-[720px]:hidden flex mr-5 ml-5 w-[60%] h-[42px]'>
                        <HeaderSearch></HeaderSearch>
                    </div>

                    <div className=' flex max-[720px]:gap-5 items-center justify-center h-[40px] max-[1300px]:mr-10 max-[430px]:mr-4 '>

                        {/* Search Icon */}
                        <div className='flex w-full h-full min-[720px]:hidden cursor-pointer' onClick={handleClickedOnSearch}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className='w-[30px] max-[340px]:w-[25px]'
                                x="0"
                                y="0"
                                version="1.1"
                                viewBox="0 0 122.879 119.799"
                                xmlSpace="preserve"
                                fill='white'
                                >
                                <path d="M49.988 0h.016v.007C63.803.011 76.298 5.608 85.34 14.652c9.027 9.031 14.619 21.515 14.628 35.303h.007V50.028h-.007a49.932 49.932 0 01-3.471 18.301v.007a50.011 50.011 0 01-5.547 10.307l29.082 26.139.018.016.157.146.011.011a8.602 8.602 0 012.649 5.78 8.611 8.611 0 01-1.979 5.971l-.011.016-.175.203-.035.035-.146.16-.016.021a8.594 8.594 0 01-5.78 2.646 8.602 8.602 0 01-5.971-1.978l-.015-.011-.204-.175-.029-.024-29.745-26.734c-.88.62-1.778 1.209-2.687 1.765a50.063 50.063 0 01-3.813 2.115c-6.699 3.342-14.269 5.222-22.272 5.222v.007h-.016v-.007c-13.799-.004-26.296-5.601-35.338-14.645C5.605 76.291.016 63.805.007 50.021H0v-.049h.007c.004-13.799 5.601-26.296 14.645-35.338C23.683 5.608 36.167.016 49.955.007V0h.033zm.016 11.21v.007h-.049v-.007c-10.686.007-20.372 4.35-27.384 11.359-7.011 7.009-11.358 16.705-11.361 27.404h.007v.049h-.007c.007 10.686 4.347 20.367 11.359 27.381 7.009 7.012 16.705 11.359 27.403 11.361v-.007h.049v.007c10.686-.007 20.368-4.348 27.382-11.359 7.011-7.009 11.358-16.702 11.36-27.4h-.006v-.049h.006c-.006-10.686-4.35-20.372-11.358-27.384-7.009-7.012-16.702-11.359-27.401-11.362z"></path>
                            </svg>
                        </div>

                        {/* Icone Sacola */}
                            <div className='flex w-full h-full items-center cursor-pointer' onMouseEnter={handleHoverCartDiv} onMouseLeave={handleHoverCartDiv} ref={cartRef}>
                                <div className='flex w-full h-full'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="relative bottom-[2px] w-[40px] max-[340px]:w-[30px]"
                                        viewBox="0 0 512 512"
                                        fill='white'
                                        >
                                        <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
                                    </svg>
                                    <div className={`relative flex items-center justify-center right-[10px] top-[-3px] bg-[#B29E9E] w-[25px] h-[25px] max-[340px]:w-[20px] max-[340px]:h-[20px] rounded-full transition-all ease-linear delay-150 ${isHoveringCartDiv ? "scale-[1.1]" : ""}`}>
                                        <div className=' text-white font-black max-[340px]:text-sm'>{cartItems !== undefined ? cartItems.length : 0}</div>
                                    </div>
                                </div>

                                <div className=' relative right-[5px] flex items-center justify-center w-full h-full max-[720px]:hidden '>
                                    <div className=' text-white font-bold'>Carrinho</div>
                                </div>

                                {isShowingCart ? (
                                    <CartWindow cartItems={cartItems} isClickingOnCartIcon={isClickingOnCartIcon} closeCart={handleCartToggle} changeIsClickingOnCartIcon={handleChangeIsClickingOnCartIcon} hasUpdatedCartItems={handleUpdateCartItems}></CartWindow>   
                                ) : null}
                            </div>

                    </div>

                </div>

            </div>

            {isShowingSearchArea ? (
                <div className='flex justify-center min-[720px]:hidden w-full h-[60px] bg-[#141414]'>
                    <HeaderSearch></HeaderSearch>
                </div>
            ) : null}

            <div className='w-full h-[6px] bg-gradient-to-r from-black/45 to-[#ECBCA1]'></div>
        </div>
    </>
  )
}

export default Header