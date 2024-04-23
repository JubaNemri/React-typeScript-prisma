import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const prisma = new PrismaClient();

export  async function DELETE(request, {params}) {
    const id  = parseInt(params.id);
  
    const deletedNews = await prisma.news.delete({
        where:  { id },
      
    })

    return NextResponse.json(deletedNews)
}

export async function PUT(request ,{params}) {

    const response = await request.json()
    const id  = parseInt(params.id);
    const upsertUser = await prisma.news.update({
        where: {
          id
        },
        data: {
          name: response,
        }, 
      })
    return NextResponse.json(upsertUser)

}
