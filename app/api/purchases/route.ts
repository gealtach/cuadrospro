import { NextResponse } from "next/server";
import { getPurchasesByEmail } from "../controllers/purchasesController";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const purchases = await getPurchasesByEmail(email as string);
    return NextResponse.json(purchases);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error();
  }
}
