import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const cart = await req.json();
        if(cart){
          const preferenceInfo = {
            items:
            [{id: cart.selectedItems[0].url,
            title: cart.email,
            quantity: 1,
            currency_id: 'CLP',
            unit_price: cart.totalPrice}],
            back_urls: {
              success: `https://www.cuadrospro.cl/aproved`,
              pending: '/pending',
              failure: `https://www.cuadrospro.cl/failure`
            }
        }
        
        const response = await fetch('https://api.mercadopago.com/checkout/preferences',{
            method: "POST",
            headers: {
              'Authorization': `Bearer ${process.env.acmp}`,
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(preferenceInfo),
        })
        const data = await response.json();

        
      //return Response.redirect(`${data.init_point}`);
      return Response.json(data.init_point);
        }

    } catch (error) {
      console.error('Error:', error);
      return NextResponse.error();
    }
  }
