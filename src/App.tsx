import { useState } from "react";
import { TodoType } from "./types";
import Todos from "./components/Todos";
import HeaderTodo from "./components/HeaderTodo";

const mockTodos = [
  { id: 1, title: "Comprar PannerNode", completed: false },
  { id: 2, title: "Comprar Panner", completed: false },
  { id: 3, title: "Comprar PannerNode", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [state, setState] = useState("");
  
  const handleRemoveTodo = (id: number): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !completed,
        };
      }
      return todo;
    });
    // console.log(newTodos)
    setTodos(newTodos);
  };

  const handleAddTodo = (title: string): void => {
    const lastIndex: number = todos[todos.length - 1].id;
    const newTodo = {
      id: lastIndex + 1,
      title: title,
      completed: false,
    };
    const newTodos = todos.concat(newTodo);
    setTodos(newTodos);
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value)
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if (e.keyCode === 13) {
      if (state=== "") return;
      handleAddTodo(state)
    }
  }
  return (
    <>
      <h1 className="text-center font-sans text-4xl	font-bold py-5">Todo App</h1>
      <HeaderTodo onHandleInputChange={handleChange} onHandleKeyDown={handleKeyDown} />
      <div>
        <Todos
          todos={todos}
          onRemoveTodo={handleRemoveTodo}
          onToggleCompleted={handleCompleted}
        />
      </div>
    </>
  );
};

export default App;
