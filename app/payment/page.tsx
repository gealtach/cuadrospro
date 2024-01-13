'use client'
import React, { useEffect } from 'react'
import { useFileContext } from '../FileContext';
import mercadoPagoLogo from '../img/Mercado_Pago-OGfnlreJZ_brandlogos.net.jpg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Payment() {
  const { state } = useFileContext();
  const cart = state.buyCart;
  const navigate = useRouter();
  const handlermp = async () => {
    try {
      if(cart){
        const response = await fetch(`api/createpreference`, {
          method: "POST",
          headers: {
              'Authorization': `Bearer ${process.env.acmp}`,
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
          body: JSON.stringify(cart),
      });
      const data = await response.json();
      
        window.location.href = data.init_point;
      }
      
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
  }
  useEffect(()=>{
    if(!cart) navigate.push('/');
    localStorage.setItem('cart', JSON.stringify(cart)); 
  },[cart, navigate]);
  return (
    <div>
      <div className='m-4 p-4 flex gap-x-10'>
        <h1 className='text-xl'>Tu total es de:</h1>
        <h1 className='text-3xl font-bold'>{cart?.totalPrice || 0}CLP</h1>
      </div>
      <div className='flex flex-col items-center gap-y-6'>
        <h1>Métodos de pago</h1>
        {/* <div className='border p-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-blue-500'>
          <img src={webpayLogo} alt='webpay' width={250} height={200} />
        </div> */}
        <div className='border p-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-blue-500' onClick={handlermp}>
          <Image src={mercadoPagoLogo} alt='mercadoPago' width={250} height={200} />
        </div>
      </div>
    </div>
  )
}

export default Payment
