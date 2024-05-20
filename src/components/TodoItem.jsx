export default function TodoItem({ todo, isDone, onUpdate, onDelete }) {
  const handleUpdate = () => {
    const updatedTodo = { ...todo, isDone: !isDone };
    onUpdate(updatedTodo);
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flex: "1",
          gap: "10px",
        }}
      >
        <span>제목: {todo.title}</span>
        <span>내용: {todo.content}</span>
      </div>
      <button onClick={handleUpdate}>{isDone ? "취소" : "완료"}</button>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
