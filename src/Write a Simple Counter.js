import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <button className="inc" onClick={increment}>
        Increment!
      </button>
      <button className="dec" onClick={decrement}>
        Decrement!
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
      <h1>Current Count: {count}</h1>
    </div>
  );
};

export default Counter;
