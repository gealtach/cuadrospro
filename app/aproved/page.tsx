'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Aproved = () => {
    
    const router = useRouter();        
    const createPurchase = async (cart:any) => {  
        try {
            const response = await fetch(`/api/postpurchases`, {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
                body: JSON.stringify(cart),
            });
            const data = await response.json();
            console.log(data, 'im the purchase created bitches');
            

        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }

    useEffect(() => {
        try {
          const cart = localStorage.getItem('cart');
      
          if (cart) {
            const cartObj = JSON.parse(cart);
            createPurchase(cartObj);
            setTimeout(() => router.push('/'), 3000)
          }
        } catch (error) {
          console.error("Error al analizar JSON:", error);
        }
      }, []);
      

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className='border bg-slate-100 p-4 flex flex-col gap-y-4 justify-center items-center rounded'>
            <IoCheckmarkDoneCircleOutline className='text-green-600' size={70} />
            <h1 className='text-3xl'>Tu compra se ha realizado con exito!!</h1>
            <p>Serás redirigido en 3... 2... 1...</p>
        </div>
    </div>
  )
}

export default Aproved
