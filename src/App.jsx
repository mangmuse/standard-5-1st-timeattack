import { useState } from "react";

export default function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          onChange={(e) => setNum(e.target.value)}
          value={num}
          type="number"
        />{" "}
        만큼을{" "}
        <button onClick={() => setTotalCount((prev) => prev + +num)}>
          더할게요
        </button>
        <button onClick={() => setTotalCount((prev) => prev - +num)}>
          뺄게요
        </button>
        <button onClick={() => setTotalCount(0)}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{totalCount}</p>
      </div>
    </div>
  );
}
