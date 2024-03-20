/* Giai dung tren FreeCodeCamp
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    
    componentWillMount() {
      console.log("Mounting...");
    }
    
    render() {
      return <div />
    }
  } */
//Dung useEffect cua React de dat duoc ket qua tuong duong
// do useEffect voi mang [] se chay chi khi thanh phan duoc mount thanh cong
import React, { useEffect } from "react";

const MyComponent4 = () => {
  useEffect(() => {
    console.log("Mounting...");
  }, []);

  return <div />;
};

export default MyComponent4;
