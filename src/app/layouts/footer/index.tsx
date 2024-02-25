import React from 'react'
import { Instagram } from 'lucide-react'

function Footer() {
  return (
    <>
        <div className='flex flex-col w-full mt-10'>

            <div className='w-full h-[6px] bg-gradient-to-r from-black/45 to-[#ECBCA1]'></div>

            <div className=' flex flex-col items-center w-full h-[350px] max-[900px]:h-[500px] bg-[#141414]'>

                <div className=' mt-8 w-full h-fit flex flex-col justify-center items-center'>
                    <div className=' w-full flex justify-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-[75px]'
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
                    </div>

                    <div className='mt-1 text-[20px] text-[#e4e2e2] font-bold'>Costg Imports</div>
                </div>

                <div className=' flex justify-between max-[1200px]:w-[90%] w-[70%] h-[200px] mt-14'>

                    <div className=' flex justify-between max-[900px]:flex-col w-full '>
                        <div>
                            <div className='text-white font-bold text-[18px]'>Atendimento ao Cliente:</div>

                            <div className='mt-5 max-[900px]:mb-10'>
                                <a className='text-white text-[15px] mt-5' href="https://wa.me/64992913815" target="_blank"><strong className='text-[#dbdada]'>WhatsApp: </strong>+55 64 99291-3815</a>
                            </div>
                        </div>


                        <div className=' flex flex-col'>
                            <div className='text-white text-[19px] font-bold'>Horário de Atendimento:</div>
                                
                            <div className='text-white text-[15px] mt-5'><strong className=' text-[#dbdada]'>Segunda a Sexta:</strong> 09:00hs às 18:00hs</div>

                            <div className='text-white text-[15px] max-[900px]:mb-10'><strong className=' text-[#dbdada]'>Sábado, Domingo e Feriados:</strong> 09:00hs às 13:00hs</div>
                        </div>

                        <div className=''></div>
                    </div>

                    
                    <div className=' flex flex-col w-[150px] '>
                        <div className='text-white text-[19px] font-bold'>Siga-nos</div>

                        <div className=' flex max-[900px]:justify-center'>
                            <a className='flex items-center justify-center mt-5 w-[35px] h-[35px] rounded-full transition-all ease-linear delay-100 bg-[#9b9898] hover:bg-[#D83776]' href="https://www.instagram.com/costg_imports/" target="_blank">
                                <Instagram className='w-[60%]' color='#141414'></Instagram>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer