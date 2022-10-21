import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container text-center mt-4">
      <h1> Use State Hook </h1>
      <h2 className="display-4 text-danger">Count:{count} </h2>
      <button onClick={increment} className="btn btn-success">
        Increment
      </button>
      <button onClick={() => setCount(0)} className="btn btn-dark">
        CLR
      </button>

      <button onClick={decrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
};

export default UseStateCounter;
