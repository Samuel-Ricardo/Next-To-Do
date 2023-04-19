import { Todo } from "@Types";
import { ToDo } from "./Todo";

export const ToDoList = (todos:Todo[]) => {
  
  return (
    <div className="flex flex-1">
      {
        todos?.map((todo, index) => (<ToDo key={todo.id} index={index} it={todo} />))
      }
    </div>
  )
}
