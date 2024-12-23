import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Context {
    params: {
        id: string
    }
}

export const GET = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        const post = await prisma.post.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json({ success: true, post });
    } catch (error) {
        console.log(error);
    }
}

export const PUT = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        const data: { title: string, content: string } = await req.json();
        const post = await prisma.post.update({
            where: {
                id: id
            },
            data: {
                ...data
            }
        })
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}

export const DELETE = async (req: NextRequest, context: Context) => {
    try {
        const { id } = await context.params;
        await prisma.post.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
}