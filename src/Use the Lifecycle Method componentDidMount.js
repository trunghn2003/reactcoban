import React, { useState, useEffect } from "react";

const MyComponent5 = () => {
  const [activeUsers, setActiveUsers] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveUsers(1273);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <h1>Active Users: {activeUsers}</h1>
    </div>
  );
};

export default MyComponent5;
