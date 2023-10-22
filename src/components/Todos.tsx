import { ListTodoType } from "../types";
import { List, ListItem, Checkbox } from "@chakra-ui/react";
import Todo from "./Todo";

interface Props {
  todos: ListTodoType;
  onRemoveTodo: (id:number) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <>
      <div className="flex justify-center">
        <List spacing={4}>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              className={todo.completed ? "line-through" : ""}
            >
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onRemoveTodo={onRemoveTodo}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default Todos;
