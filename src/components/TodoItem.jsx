export default function TodoItem({ todo, isDone, onUpdate, onDelete }) {
  const handleUpdate = () => {
    const updatedTodo = { ...todo, isDone: !isDone };
    onUpdate(updatedTodo);
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <span>{todo.title}</span>
      <span>{todo.content}</span>
      <button onClick={handleUpdate}>{isDone ? "취소" : "완료"}</button>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
