import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-home">
      <div className="row">
        <button
          onClick={() => {
            setCount(count + 10);
          }}
        >
          ⬆️
        </button>
      </div>
      <div className="row middle">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          ⬅️
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ➡️
        </button>
      </div>
      <div className="row">
        <button
          onClick={() => {
            setCount(count - 10);
          }}
        >
          ⬇️
        </button>
      </div>
    </div>
  );
}

export default App;
