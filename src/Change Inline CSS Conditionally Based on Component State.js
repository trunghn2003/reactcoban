import React, { useState } from "react";

const GateKeeper = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  let inputStyle = {
    border: "1px solid black",
  };

  if (input.length > 15) {
    inputStyle.border = "3px solid red";
  }

  return (
    <div>
      <h3>Don't Type Too Much:</h3>
      <input
        type="text"
        style={inputStyle}
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default GateKeeper;
