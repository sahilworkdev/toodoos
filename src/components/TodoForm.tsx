import React from "react";

const TodoForm = async ({
  action,
  btnText,
  initialData,
}: {
  action: any;
  btnText: string;
  initialData?: { title: string; description: string };
}) => {
  return (
    <form action={action} className="flex flex-col">
      <input
        type="text"
        name="title"
        defaultValue={initialData?.title || ""}
        placeholder="Title"
        className="border-2 border-zinc-700 px-4 py-2 rounded-md mb-4"
        required
      />
      <textarea
        name="description"
        id=""
        cols={30}
        rows={10}
        placeholder="Description"
        defaultValue={initialData?.description || ""}
        className="border-2 border-zinc-700 px-4 py-2 rounded-md mb-4"
        required
      />
      <button className="px-4 py-2 w-full bg-zinc-900 text-white font-medium rounded-md hover:bg-zinc-700">
        {btnText}
      </button>
    </form>
  );
};

export default TodoForm;
