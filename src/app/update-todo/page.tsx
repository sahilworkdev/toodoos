import CreateTodoForm from "@/components/CreateTodoForm";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col py-14 sm:py-16">
      <h1 className="text- sm:text-3xl font-bold text-zinc-900 mb-4">
        Update Todo
      </h1>
      <CreateTodoForm action={""} btnText={"Update Todo"}/>
    </div>
  );
};

export default page;
