import { editTodo } from "@/actions/action";
import TodoForm from "@/components/TodoForm";
import prisma from "@/lib/db";

import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const todoId = (await params).id;

  const todo = await prisma.todo.findUnique({
    where: { id: todoId },
  });

  const editWithId = editTodo.bind(null, todoId);

  return (
    <div className="flex items-center justify-center flex-col py-14 sm:py-16">
      <h1 className="text- sm:text-3xl font-bold text-zinc-900 mb-4">
        {todo ? "Update Todo" : "Todo not found"}
      </h1>
      {todo && (
        <TodoForm
          action={editWithId}
          btnText="Update"
          initialData={{ title: todo.title, description: todo.description }}
        />
      )}
    </div>
  );
};

export default page;
