import { prisma } from "@lib/prisma";

export const getAllToDos = async () => await prisma.todo.findMany();


