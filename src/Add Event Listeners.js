import React, { useState, useEffect } from "react";

const MyComponent6 = () => {
  const [message, setMessage] = useState("");

  const handleEnter = () => {
    setMessage((prevMessage) => prevMessage + "You pressed the enter key! ");
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleEnter();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      handleKeyPress(event);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default MyComponent6;
