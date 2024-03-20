import React, { useState } from "react";

const MyComponent3 = () => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Click Me</button>
      {visibility ? <h1>Now you see me!</h1> : null}
    </div>
  );
};

export default MyComponent3;
