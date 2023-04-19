import { prisma } from "@lib/prisma";

export const getAllToDos = async () => await prisma.todo.findMany();

export async function createToDo(description: string) {
  await prisma
          .todo
          .create({data:{description}})
}
