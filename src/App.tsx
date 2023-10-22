import { useState } from "react";
import Todos from "./components/Todos";

const mockTodos = [
  { id: 1, title: "Comprar PannerNode", completed: true },
  { id: 2, title: "Comprar Panner", completed: false },
  { id: 3, title: "Comprar PannerNode", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemoveTodo = (id: number): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="text-center font-sans text-4xl	font-bold py-5">Todo App</h1>
      <div>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      </div>
    </>
  );
};

export default App;
