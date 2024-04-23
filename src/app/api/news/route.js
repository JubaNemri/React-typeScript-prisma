import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

export const prisma = new PrismaClient()

export async function POST(request) {
            
    const res = await request.json()
    const news = await prisma.news.create({
        data : {
            name:res
        }
    })
    return NextResponse.json(news)
}

export async function GET() {
    const news = await prisma.news.findMany() 
    return NextResponse.json(news) 
}