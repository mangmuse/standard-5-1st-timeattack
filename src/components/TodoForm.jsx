import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TodoForm({ onAdd }) {
  const initialText = { title: "", content: "" };
  const [text, setText] = useState(initialText);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = text;
    if (title.trim() === "" || content.trim() === "") {
      alert("asd");
      return;
    }
    const newTodo = { id: uuid(), title, content, isDone: false };
    onAdd(newTodo);
    setText(initialText);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) =>
          setText((prev) => ({ ...prev, title: e.target.value }))
        }
        type="text"
        value={text.title}
      />
      <input
        onChange={(e) =>
          setText((prev) => ({ ...prev, content: e.target.value }))
        }
        type="text"
        value={text.content}
      />
      <button>추가</button>
    </form>
  );
}
