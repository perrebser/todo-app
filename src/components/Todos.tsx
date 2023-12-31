import { ListTodoType, TodoType } from "../types";
import {
  List,
  ListItem,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Todo from "./Todo";
import PreFooter from "./PreFooter";

interface Props {
  todos: ListTodoType;
  onRemoveTodo: (id: number) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  onFilterTodo: (filterId: number) => void;
  onRemoveCompleted: ()=>void;
  onEditTodo:(id:number,title:string)=>void;
 
}

const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleted,
  onFilterTodo,
  onRemoveCompleted,
  onEditTodo,
  
}) => {

  return (
    <div className="flex justify-center">
      <Card
        align="center"
        className="my-10"
        size={"sm"}
        boxShadow={"lg"}
        variant={"outline"}
      >
        <CardHeader>
          <Heading size="lg">Todos</Heading>
        </CardHeader>
        <CardBody className="w-full">
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
                  onEditTodo={onEditTodo}
                 
                />
              </ListItem>
            ))}
          </List>
        </CardBody>
        <CardFooter>
          <div className="flex justify-between items-center">
            <strong className="text-xs text-slate-300">
              Completed Todos: {todos.filter((todo) => todo.completed).length}
            </strong>
            <PreFooter onFilterTodo={onFilterTodo} />
            {todos.filter((todo) => todo.completed).length > 0 && (
              <Button
                className="hover:text-red-600"
                colorScheme="cyan"
                size={"sm"}
                variant="ghost"
                onClick={() => {onRemoveCompleted()}}
              >
                Delete Completed
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Todos;
