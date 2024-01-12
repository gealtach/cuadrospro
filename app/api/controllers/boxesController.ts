import prisma from "../../../lib/prisma";

export async function getBoxesFromPurchase(id:string) {    
    return prisma.box.findMany({
      where: { purchaseId: id }
    });
  }
