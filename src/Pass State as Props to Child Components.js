import React, { useState } from "react";

const MyApp = () => {
  const [name, setName] = useState("CamperBot");

  return (
    <div>
      <Navbar name={name} />
    </div>
  );
};

const Navbar = (props) => {
  return (
    <div>
      <h1>Hello, my name is: {props.name}</h1>
    </div>
  );
};

export default MyApp;
