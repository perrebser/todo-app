import { ListTodoType, TodoType } from "../types";
import {
  List,
  ListItem,
  Checkbox,
  Card,
  CardHeader,
  Heading,
  CardBody,
} from "@chakra-ui/react";
import Todo from "./Todo";

interface Props {
  todos: ListTodoType;
  onRemoveTodo: (id: number) => void;
  onToggleCompleted:({id,completed}:Pick<TodoType,'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo,onToggleCompleted}) => {
  return (
    <div className="flex justify-center">
      <Card align="center" className="w-2/3" variant={"outline"}>
        <CardHeader> 
          <Heading size="lg">Todos</Heading>
        </CardHeader>
        <CardBody>
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
                  onToggleCompleted={onToggleCompleted}
                  onRemoveTodo={onRemoveTodo}
                />
              </ListItem>
            ))}
          </List>
        </CardBody>
      </Card>
    </div>
  );
};

export default Todos;
