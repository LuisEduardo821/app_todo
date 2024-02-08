import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

    await prisma.todo.deleteMany(); // delete * from todo

    await prisma.todo.createMany({
        data: [
            { description: 'Comprar viveres' },
            { description: 'Sacar la basura' },
            { description: 'Pasear al perro' },
            {description: 'Conquistar el mundo', complete: true},
            {description: 'recolectar las gemas del infinito'},
        ]
    })

    return NextResponse.json({
        msg: 'Seed executed'
    });
}