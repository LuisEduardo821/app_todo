import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

interface Segments {
    params: {
        id: string;
    };
}

export async function GET(request: Request, { params }: Segments) {
    const id = params.id;
    const todo = await prisma.todo.findFirst({
        where: { id: id },
    });

    if (!todo) {
        return NextResponse.json(
            {
                message: `TODO con id ${id} no existe`,
            },
            { status: 404 }
        );
    }

    return NextResponse.json({ todo });
}

const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
    try {
        const id = params.id;
        const { description, complete, ...rest } = await putSchema.validate(
            await request.json()
        );

        const todo = await prisma.todo.findFirst({
            where: { id: id },
        });

        if (!todo) {
            return NextResponse.json(
                {
                    message: `TODO con id ${id} no existe`,
                },
                { status: 404 }
            );
        }

        const updatedTodo = await prisma.todo.update({
            where: { id: id },
            data: {
                description: description,
                complete: complete,
            },
        });

        return NextResponse.json({ updatedTodo });
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}
