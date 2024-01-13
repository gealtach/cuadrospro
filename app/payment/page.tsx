'use client'
import React, { useEffect } from 'react'
import { useFileContext } from '../FileContext';
import { useRouter } from 'next/navigation';
import webpayLogo from '../img/1348844731.svg';
import mercadoPagoLogo from '../img/Mercado_Pago-OGfnlreJZ_brandlogos.net.svg';
import Image from 'next/image';
import { env } from 'process';

function Payment() {
  const { state } = useFileContext();
  const cart = state.buyCart;
  const router = useRouter();
  
  const handlermp = async () => {
    try {
      const response = await fetch('/api/createpreference', {
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
      console.log(data,'imResponseinfront');
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
  }
  useEffect(()=>{
    if(!cart) router.push('/');
  },[]);

    //<div className='border p-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-blue-500'>
    //  <Image src={webpayLogo} alt='webpay' width={250} height={200} />
    //</div>
  
  return (
    <div>
      <div className='m-4 p-4 flex gap-x-10'>
        <h1 className='text-xl'>Tu total es de:</h1>
        <h1 className='text-3xl font-bold'>{cart?.totalPrice || 0}CLP</h1>
      </div>
      <div className='flex flex-col items-center gap-y-6'>
        <h1>Métodos de pago</h1>
        <div className='border p-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-blue-500' onClick={handlermp}>
          <Image src={mercadoPagoLogo} alt='mercadoPago' width={250} height={200} />
        </div>
      </div>
    </div>
  )
}

export default Payment
