import React, { useRef, useState, useEffect } from 'react'
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import CartProduct from '../cartProduct';
import "./index.css"

interface CartWindowProps {
    cartItems: any;
    isClickingOnCartIcon: boolean;
    closeCart: any;
    changeIsClickingOnCartIcon: any;
    hasUpdatedCartItems: () =>void;
}

function CartWindow({cartItems, isClickingOnCartIcon, closeCart, changeIsClickingOnCartIcon, hasUpdatedCartItems} : CartWindowProps) {

   const ref = useRef<HTMLDivElement>(null);

   const objDate = new Date();
   const hours = objDate.getHours();


   const [cartProducts, setCartProducts] = useState(cartItems)

   const [restOfWhatsAppMessage, setRestOfWhatsAppMessage] = useState<{ productName: string; productVariant: string; productQuantity: number }[]>([]);
   const [whatsAppMessage, setWhatsAppMessage] = useState("")

   const handleIsRemovingProduct = (index:number) => {
    const updatedCartItems = [...cartProducts];
    updatedCartItems.splice(index, 1);
    setCartProducts(updatedCartItems);

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    hasUpdatedCartItems();
   }

   const handleHasChangedProductQuantity = (quantity:number, index:number) => {
    const updatedCartItems = [...cartProducts];
    updatedCartItems[index]["Quantity"] = quantity;
    setCartProducts(updatedCartItems);

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
   }
   
   useEffect(() => {
        setRestOfWhatsAppMessage(prevState => {
            let newState = [];

            for (let i = 0; i < cartItems.length; i++) {
                let product = cartItems[i];
                newState.push({ productName: product.ProductName, productVariant: product.VariantName, productQuantity: product.Quantity });
            }
            return newState;
        });
    }, [cartItems]);

   useEffect(() => {
    let greetingtext = ""

    if (hours < 12){
        greetingtext = "Bom%20dia"
    } if (hours > 12 && hours < 18){
            greetingtext = "Boa%20tarde"
    } else{
        greetingtext = "Boa%20noite"
    }

    let firstPartOfMessage = `https://wa.me/556492913815?text=${greetingtext},%20tudo%20bem%3F%0A`;
    let secondPartOfMessage = `Você%20consegue%20me%20falar%20mais%20sobre%20${restOfWhatsAppMessage.length > 1 ? "esses%20produtos%" : "esse%20produto%"}3F%0A%0a`;

    let restOfMessage = [];

    for (let i = 0; i < restOfWhatsAppMessage.length; i++) {
        let message = restOfWhatsAppMessage[i];
        restOfMessage.push(`*${message.productName}*${message.productVariant.length > 0 ? `%0a${message.productVariant}%0a` : `%0a`}*Quantidade*:%20${message.productQuantity}`);
    }

    let restOfMessageText = restOfMessage.join('%0a%0a--------------------------------------------------------%0a%0a'); // Join the elements of restOfMessage array with '%0a%0a' separator

    let finalPartMessage = `${firstPartOfMessage}${secondPartOfMessage}${restOfMessageText}`
    setWhatsAppMessage(finalPartMessage);

   }, [restOfWhatsAppMessage])
   

   useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (isClickingOnCartIcon) {
            changeIsClickingOnCartIcon(false)
        }
        else{
            closeCart(); // Call the closeCart function when clicked outside
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeCart]);

  return (
    <>
        <div className='w-fit h-fit' ref={ref}>
            {cartProducts.length > 0 ? (
                <>
                    <div className='flex flex-col items-center absolute right-[0px] top-[100px] w-[420px] h-fit bg-white rounded-xl border-4 border-[#E2B79F] z-50 max-[1300px]:mr-10 max-[720px]:mr-[60px] max-[500px]:w-full max-[500px]:mr-0 max-[500px]:border-0 max-[500px]:rounded-none max-[500px]:shadow-lg'>
                        
                        <div className='flex flex-col items-center w-full h-full max-h-[350px] overflow-y-scroll overflow-x-hidden custom-scrollbar'>
                            {cartProducts.map((product:any, index:number) => (
                                <CartProduct key={index} index={index} productImage={product.ImageSrc} productTitle={product.ProductName} productQuantity={product.Quantity} isRemovingProduct={handleIsRemovingProduct} hasChangedProductQuantity={handleHasChangedProductQuantity}></CartProduct>
                            ))}
                        </div>

                        <a href={whatsAppMessage} target="_blank" rel="noopener noreferrer" className='flex mt-5 w-[90%] h-[50px]'>
                            <div className='flex items-center justify-center w-full h-full transition-all ease-in-out delay-100 hover:scale-[1.03] bg-[#E2B79F] hover:bg-[#cea690] rounded-2xl cursor-pointer'>
                                <div className='text-white font-bold'>Finalizar Compra pelo WhatsApp</div>
                            </div>
                        </a>

                        <div className='mb-5'></div>
                    </div>
                </>
            ) : (
                <div className='absolute flex flex-col items-center justify-between right-[0px] top-[100px] w-[480px] h-[330px] bg-white rounded-xl border-4 border-[#E2B79F] z-50 max-[1300px]:mr-10 max-[720px]:mr-[60px]'>
                    <div className='w-full h-[79%] flex flex-col gap-2 items-center justify-center'>
                        <ShoppingCart size={90} strokeWidth={1} color='#5f5e5e'></ShoppingCart>
                        <div className='text-[# ] font-medium'>Seu carrinho está vazio</div>
                    </div>

                    <Link href="/" className='w-[90%] h-[50px] mb-5'>
                        <div className='flex gap-1 items-center justify-center h-full w-full transition-all ease-in-out delay-100 hover:scale-[1.03] bg-[#E2B79F] hover:bg-[#cea690] rounded-2xl cursor-pointer'>
                            <div className='text-white font-bold'>Veja nossos Produtos</div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    </>
  )
}

export default CartWindow