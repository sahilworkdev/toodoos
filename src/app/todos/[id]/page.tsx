import EditButton from "@/components/EditButton";
import prisma from "@/lib/db";

import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const todoId = await params;
  console.log(todoId);
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const todo = await prisma.todo.findUnique({
    where: { id: todoId.id },
  });
console.log(todo)
  return (
    <div>
      <h1>{todo?.title} </h1>
      <p>{todo?.description} </p>
      <EditButton id={todoId.id} />
    </div>
  );
};

export default page;
