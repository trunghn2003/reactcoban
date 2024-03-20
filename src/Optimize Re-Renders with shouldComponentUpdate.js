import React, { useEffect, useCallback } from "react";

const OnlyEvens = ({ value }) => {
  useEffect(() => {
    console.log("Component re-rendered.");
  });

  return <h1>{value}</h1>;
};

const Controller1 = () => {
  const [value, setValue] = useState(0);

  const shouldUpdate = useCallback((nextValue) => {
    console.log("Should I update?");
    return nextValue % 2 === 0;
  }, []);

  const addValue = useCallback(() => {
    setValue((prevValue) => prevValue + 1);
  }, []);

  useEffect(() => {
    if (!shouldUpdate(value)) {
      console.log("Component not updated");
    }
  }, [shouldUpdate, value]);

  return (
    <div>
      <button onClick={addValue}>Add</button>
      <OnlyEvens value={value} />
    </div>
  );
};

export default Controller1;
