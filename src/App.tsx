import { useEffect, useState } from "react";
import { ListTodoType, TodoType } from "./types";
import Todos from "./components/Todos";
import HeaderTodo from "./components/HeaderTodo";
import Footer from "./components/Footer";

const App = () => {
  const [todos, setTodos] = useState<ListTodoType>(
    JSON.parse(localStorage.getItem("items") || "[]")
  );
  const [filteredTodos, setFilteredTodos] = useState<ListTodoType>([]);
  const [state, setState] = useState("");
  const [filterId, setFilterId] = useState<number>(0);

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
    setTodos(newTodos);
  };

  const handleRemoveCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (title: string): void => {
    let lastIndex: number;
    if (todos.length === 0) {
      lastIndex = 0;
    } else {
      lastIndex = todos[todos.length - 1].id;
    }
    const newTodo = {
      id: lastIndex + 1,
      title: title,
      completed: false,
    };
    const newTodos = todos.concat(newTodo);
    setTodos(newTodos);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      if (state === "") return;
      handleAddTodo(state);
    }
  };

  const handleButtonClick = (): void => {
    handleAddTodo(state);
  };
  useEffect(() => {
    if (filterId === 1) {
      const completedTodos = todos.filter((todo) => todo.completed);
      setFilteredTodos(completedTodos);
    } else if (filterId === 2) {
      const activeTodos = todos.filter((todo) => !todo.completed);
      setFilteredTodos(activeTodos);
    } else if (filterId === 0) {
      setFilteredTodos(todos);
    }
  }, [filterId, todos]);

  const handleFilter = (filterId: number): void => {
    setFilterId(filterId);
  };
  return (
    <>
      <h1 className="text-center font-sans text-4xl	font-bold py-5">Todo App</h1>
      <div className="flex justify-center">
        <HeaderTodo
          onHandleInputChange={handleChange}
          onHandleKeyDown={handleKeyDown}
          onButtonClick={handleButtonClick}
        />
      </div>
      <div>
        <Todos
          todos={filteredTodos}
          onRemoveTodo={handleRemoveTodo}
          onToggleCompleted={handleCompleted}
          onFilterTodo={handleFilter}
          onRemoveCompleted={handleRemoveCompleted}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
