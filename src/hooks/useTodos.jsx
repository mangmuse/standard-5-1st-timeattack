import { useEffect, useState } from "react";

export default function useTodos() {
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

  return {
    todos,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
}

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
