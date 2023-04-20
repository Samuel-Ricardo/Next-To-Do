import { Todo } from "@Types";
import { ToDo } from "./Todo";

export const ToDoList = ({todos}:{todos:Todo[]}) => {
  
  return (
    <div className="items-center justify-center">
      {
        todos?.map((todo, index) => (<ToDo key={todo.id} index={index} it={todo} />))
      }
    </div>
  )
}
