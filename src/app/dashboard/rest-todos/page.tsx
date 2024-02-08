import { NewTodo } from "@/components";
import prisma from "@/lib/prisma"
import { TodosGrid } from "@/todos";

export const metadata = {
    title: 'Listado de TODOS',
    description: 'SEO title',
}


export default async function RestTodosPage() {

    const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
    return (

        <div>
            <div className="w-full px-5 mx-5 mb-5">
                <NewTodo />
            </div>
            <h1>Rest TODOS</h1>
            <TodosGrid todos={todos} />
        </div>
    )
}