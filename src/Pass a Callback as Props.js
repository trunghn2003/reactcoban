import React, { useState } from "react";

const MyApp2 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <GetInput input={inputValue} handleChange={handleChange} />
      <RenderInput input={inputValue} />
    </div>
  );
};

const GetInput = (props) => {
  return (
    <div>
      <h3>Get Input:</h3>
      <input value={props.input} onChange={props.handleChange} />
    </div>
  );
};

const RenderInput = (props) => {
  return (
    <div>
      <h3>Input Render:</h3>
      <p>{props.input}</p>
    </div>
  );
};

export default MyApp2;
