import { NextResponse } from "next/server";
import { getPurchasesByEmail } from "../controllers/purchasesController";

export async function GET(req: any) {
 try {
    const email = req.query.get("email");
    const purchases = await getPurchasesByEmail(email as string);
    return NextResponse.json(purchases);
 } catch (error) {
    console.error('Error:', error);
    return NextResponse.error();
 }
}

export const revalidate = 60; // 1 minute, or set it to false to disable ISR
