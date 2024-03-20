import React, { useState } from "react";

const MyForm = () => {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} />
        <button type="submit">Submit!</button>
      </form>
      <h1>{submit}</h1>
    </div>
  );
};

export default MyForm;
