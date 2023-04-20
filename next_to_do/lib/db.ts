import { Todo } from "@/@types";
import { prisma } from "./prisma";

export const getAllTodos = async () => await prisma.todo.findMany();

export async function createTodo(description: string) {
  await prisma
    .todo
    .create({ data: {description} })
}

export async function deleteTodo(id:number) {
  return await prisma
                .todo
                .delete({ where:{id} })
}


