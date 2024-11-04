"use server";

import prisma from "@/lib/db";
// import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import DeleteButton from "./DeleteButton";
// import EditButton from "./EditButton";
import Link from "next/link";

const TodosList = async () => {
  const { userId } = auth();
  await new Promise((resolve) => setTimeout(resolve, 1000));


  // Fetch todos that belong to the logged-in user
  const todos = await prisma.todo.findMany({
    where: { userId: userId! },
  });

  return (
    <div className="flex mx-auto flex-col items-center justify-between max-w-[600px] sm:max-w-[600px]">
      <ul className="flex flex-col items-center justify-start gap-4">
        {todos.map((todo: any) => {
          return (
            <li
              key={todo.id}
              className="text-lg text-zinc-800 flex items-center justify-between gap-6"
            >
              <Link href={`/todos/${todo.id}`}>{todo.title}</Link>

              <DeleteButton id={todo.id} />
           
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodosList;
