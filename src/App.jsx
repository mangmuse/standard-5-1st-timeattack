import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());
  const handleAdd = (newTodo) => setTodos((todos) => [...todos, newTodo]);
  const handleUpdate = (updated) =>
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  const handleDelete = (toBeDeleted) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== toBeDeleted.id));
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        isDone={false}
        todos={todos}
      />
      <TodoList
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        isDone={true}
        todos={todos}
      />
    </>
  );
}

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
