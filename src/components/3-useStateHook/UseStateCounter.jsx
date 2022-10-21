import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    name: "Can",
    surname: "Doe",
    age: 43,
  });
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const incAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  return (
    <div className="container text-center mt-4">
      <section>
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
      </section>
      <section>
        <h1>UseState Object</h1>
        <h2> {person.name} </h2>
        <h2> {person.surname} </h2>
        <h2> {person.age} </h2>
        <button onClick={incAge} className="btn btn-info">
          ins age
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
