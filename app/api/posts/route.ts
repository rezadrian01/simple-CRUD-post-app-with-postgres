import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {
    try {
        const posts = await prisma.post.findMany();
        return NextResponse.json({ posts });
    } catch (error) {
        console.log(error);
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const data: { title: string, content: string } = await req.json();
        await prisma.post.create({
            data: { ...data }
        })
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}