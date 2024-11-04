"use server";

import prisma from "@/lib/db";
// import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";


//create todo
export async function createTodo(formData: FormData) {
  // const { user } = useUser();
  const { userId } = auth();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  console.log(title, description);

  if (!userId) {
    throw new Error("User must be logged in to create a todo");
  }

  //insert into DB
  await prisma.todo.create({
    data: {
      title,
      description,
      // userId: user.id,
      userId,
    },
  });
  redirect("/todos");
}



//delete todo
export async function deleteTodo(todoId: string) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User must be logged in to delete a todo");
  }

  // Ensure that only the owner can delete their todo
  const todo = await prisma.todo.findUnique({
    where: { id: todoId },
  });

  if (!todo || todo.userId !== userId) {
    throw new Error("Unauthorized or Todo not found");
  }

  // Delete from DB
  await prisma.todo.delete({
    where: { id: todoId },
  });
  redirect("/todos");
}


//edit todo
export async function editTodo(todoId: string, formData: FormData) {
  const { userId } = auth();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  // console.log(userId, title, description);

  if (!userId) {
    throw new Error("User must be logged in to edit a todo");
  }

  // Ensure that only the owner can edit their todo
  const todo = await prisma.todo.findUnique({
    where: { id: todoId },
  });

  if (!todo || todo.userId !== userId) {
    throw new Error("Unauthorized or Todo not found");
  }

  // Update in DB
  await prisma.todo.update({
    where: { id: todoId },
    data: {
      title,
      description,
    },
  });
  redirect("/todos");
}
