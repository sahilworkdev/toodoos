import { editTodo } from "@/actions/action";
import React from "react";

const EditButton = ({ id}: { id: string }) => {
  const editWithId = editTodo.bind(null, id);
  return (
    <form action={editWithId}>
      <button className="py-1 text-blue-400">Edit</button>
    </form>
  );
};
export default EditButton;
