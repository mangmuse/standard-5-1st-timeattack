import TodoItem from "./TodoItem";

export default function TodoList({ todos, isDone, onUpdate, onDelete }) {
  const filteredTodos = todos.filter((todo) =>
    isDone ? todo.isDone : !todo.isDone
  );
  return (
    <section>
      <h2>{isDone ? "완료됨" : "진행중"}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            onUpdate={onUpdate}
            onDelete={onDelete}
            isDone={isDone}
            todo={todo}
          />
        ))}
      </ul>
    </section>
  );
}
