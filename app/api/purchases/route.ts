import { NextResponse } from "next/server";
import { getPurchasesByEmail } from "../controllers/purchasesController";

export async function GET(req: any) {
  try {
    // Verifica si estamos en tiempo de compilación (generación estática)
    if (typeof window === 'undefined') {
      // Estamos en tiempo de compilación
      // Simula un URL para la generación estática (puedes ajustarlo según tus necesidades)
      const dummyUrl = 'http://dummyhost' + req?.url;
      const { searchParams } = new URL(dummyUrl);

      // Resto de la lógica que utiliza searchParams
      // ...

      // Retorna la respuesta (puedes ajustar según tus necesidades)
      return NextResponse.json({ data: 'Generación estática' });
    }

    // Estamos en tiempo de ejecución del lado del cliente
    // Lógica normal para obtener parámetros del URL
    const { searchParams } = new URL(req?.url || "");
    const email = searchParams.get("email");
    const purchases = await getPurchasesByEmail(email as string);
    
    return NextResponse.json(purchases);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error();
  }
}
