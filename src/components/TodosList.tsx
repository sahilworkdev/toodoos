import React from "react";

const TodosList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  console.log(todos);
  return (
    <div className="flex mx-auto flex-col items-center justify-between max-w-[400px] sm:max-w-[600px]">
      <ul className="flex flex-col items-center justify-between gap-4">
        {todos.map((todo: any) => {
          return (
            <li key={todo.id} className="text-lg text-zinc-800">
              {todo.title}
              <button className="py-1  text-red-400">Delete</button>
              <button className="text-blue-400 py-1 ">Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodosList;
