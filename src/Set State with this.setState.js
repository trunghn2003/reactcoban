import React, { useState } from "react";

const MyComponent1 = () => {
  const [name, setName] = useState("Initial State");

  const handleClick = () => {
    setName("React Rocks!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{name}</h1>
    </div>
  );
};

export default MyComponent1;
