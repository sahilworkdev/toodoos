import React from "react";

const Form = async () => {
  return (
    <form action="" className="flex flex-col">
      <input
        type="text"
        placeholder="Title"
        className="border-2 border-zinc-800 px-4 py-2 rounded-sm mb-4"
      />
      <textarea
        name="description"
        id=""
        cols={30}
        rows={10}
        placeholder="Description"
        className="border-2 border-zinc-800 px-4 py-2 rounded-sm mb-4"
      />
      <button className="px-4 py-2 w-full bg-zinc-900 text-white font-medium rounded-sm hover:bg-zinc-700">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
