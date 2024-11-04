import { deleteTodo } from "@/actions/action";


export default function DeleteButton({ id }: { id: string }) {
  const deleteWithId = deleteTodo.bind(null, id);


  return (
    <form action={deleteWithId}>
      <button className="py-1  text-red-400">Delete</button>
    </form>
  );
}
