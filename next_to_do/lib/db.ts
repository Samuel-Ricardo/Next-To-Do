import { prisma } from "./prisma";

export const getAllTodos = async () => await prisma.todo.findMany();

export async function createTodo(description: string) {
  await prisma
    .todo
    .create({ data: description })
}
