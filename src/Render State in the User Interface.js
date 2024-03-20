import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("freeCodeCamp");

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default MyComponent;
