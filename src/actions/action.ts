"use server";

import prisma from "@/lib/db";

import { redirect } from "next/navigation";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  console.log(title, description);

  //insert into DB
  await prisma.todo.create({
    data: {
      title,
      description,
    },
  });
  redirect("/todos");
}
