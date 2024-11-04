import TodoForm from "@/components/TodoForm";
import React from "react";
import { createTodo } from "@/actions/action";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col py-14 sm:py-16">
      <h1 className="text- sm:text-3xl font-bold text-zinc-900 mb-4">
        Add Todo
      </h1>
      <TodoForm action={createTodo} btnText={"Add Todo"} />
    </div>
  );
};

export default page;
