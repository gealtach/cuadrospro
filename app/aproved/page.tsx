import React, { useEffect } from 'react'
import { useFileContext } from '../FileContext';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

export const Arpoved = () => {
    const { dispatch } = useFileContext();
    const loadCart = () => {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : null;
    }
    const createPurchase = async (cart:any) => {
        console.log(cart);
        
        try {
            const response = await fetch(`/api/purchase`, {
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

    useEffect(()=> {
        const cart = loadCart();
        if(cart){
            createPurchase(cart);
        }

      },[dispatch])
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className='border bg-slate-100'>
            <IoCheckmarkDoneCircleOutline className='text-green-600' size={70} />
            <h1 className='text-3xl'>Tu compra se ha realizado con exito!!</h1>
        </div>
    </div>
  )
}
