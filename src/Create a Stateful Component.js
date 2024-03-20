import React, { useState } from "react";

const StatefulComponent = () => {
  const [firstName, setFirstName] = useState("Ngo The Quang Tien");

  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
};

export default StatefulComponent;
