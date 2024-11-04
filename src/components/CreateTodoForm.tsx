import React from "react";

const Form = async ({ action, btnText }: { action: any; btnText: string }) => {
  return (
    <form action={action} className="flex flex-col">
      <input
        type="text"
        name="title"
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
        className="border-2 border-zinc-700 px-4 py-2 rounded-md mb-4"
        required
      />
      <button className="px-4 py-2 w-full bg-zinc-900 text-white font-medium rounded-md hover:bg-zinc-700">
        {btnText}
      </button>
    </form>
  );
};

export default Form;
