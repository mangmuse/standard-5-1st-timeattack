import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

export default function App() {
  const { todos, handleAdd, handleUpdate, handleDelete } = useTodos();
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
