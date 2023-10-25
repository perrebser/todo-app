import { ListTodoType, TodoType } from "../types";
import {
  List,
  ListItem,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import Todo from "./Todo";

interface Props {
  todos: ListTodoType;
  onRemoveTodo: (id: number) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <div className="flex justify-center">
      <Card align="center" className="w-1/3 my-10" size={"sm"} variant={"outline"}>
        <CardHeader>
          <Heading size="lg">Todos</Heading>
        </CardHeader>
        <CardBody>
          <List spacing={4}>
            {todos.map((todo) => (
              <ListItem
                key={todo.id}
                className={todo.completed ? "line-through text-slate-300" : ""}
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
        <CardFooter>
            <p className="text-xs text-slate-300">
              Completed Todos: {todos.filter((todo) => todo.completed).length}
            </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Todos;
