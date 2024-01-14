'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { MdErrorOutline } from "react-icons/md";

const Failure = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() =>{
            router.push('/');
        }, 2000)
    })
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className='border bg-slate-100 p-4 flex flex-col gap-y-4 justify-center items-center rounded'>
            <MdErrorOutline className='text-red-600' size={70} />
            <h1 className='text-3xl'>Tu compra se ha realizado con exito!!</h1>
            <p>Serás redirigido a inicio...</p>
        </div>
    </div>
  )
}

export default Failure