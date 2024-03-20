import React, { useState } from "react";

const ControlledInput = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <h4>Controlled Input:</h4>
      <p>{input}</p>
    </div>
  );
};

export default ControlledInput;
