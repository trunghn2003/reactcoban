import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import StatefulComponent from "./Create a Stateful Component";
import MyComponent from "./Render State in the User Interface";
import MyComponent1 from "./Set State with this.setState";
import MyComponent2 from "./Bind 'this' to a Class Method";
import MyComponent3 from "./Use State to Toggle an Element";
import Counter from "./Write a Simple Counter";
import ControlledInput from "./Create a Controlled Input";
import MyForm from "./Create a Controlled Form";
import MyApp from "./Pass State as Props to Child Components";
import MyApp2 from "./Pass a Callback as Props";
import MyComponent4 from "./Use the Lifecycle Method componentWillMount";
import MyComponent5 from "./Use the Lifecycle Method componentDidMount";
import MyComponent6 from "./Add Event Listeners";
import Controller1 from "./Optimize Re-Renders with shouldComponentUpdate";
import Colorful from "./Introducing Inline Styles";
import Colorful2 from "./Add Inline Styles in React";
import MagicEightBall from "./Use Advanced JavaScript in React Render Method";
import MyComponent7 from "./Render with an If-Else Condition";
import MyComponent8 from "./Use && for a More Concise Conditional";
import CheckUserAge from "./Use a Ternary Expression for Conditional Rendering";
import GameOfChance from "./Render Conditionally from Props";
import GateKeeper from "./Change Inline CSS Conditionally Based on Component State";
import MyToDoList from "./Use Array.map() to Dynamically Render Elements";
import Frameworks from "./Give Sibling Elements a Unique Key Attribute";
import MyComponent9 from "./Use Array.filter() to Dynamically Filter an Array";
import appString from "./Render React on the Server with renderToString";
//import  from "./";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>1) Create a Stateful Component:</h1>
    <StatefulComponent />
    <br />
    <h1>2) Render State in the User Interface:</h1>
    <MyComponent />
    <br />
    <h1>3) Set State with this.setState:</h1>
    <MyComponent1 />
    <br />
    <h1>4) Bind 'this' to a Class Method:</h1>
    <MyComponent2 />
    <br />
    <h1>5) Use State to Toggle an Element:</h1>
    <MyComponent3 />
    <br />
    <h1>6) Write a Simple Counter:</h1>
    <Counter />
    <br />
    <h1>7) Create a Controlled Input:</h1>
    <ControlledInput />
    <br />
    <h1>8) Create a Controlled Form:</h1>
    <MyForm />
    <br />
    <h1>9) Pass State as Props to Child Components:</h1>
    <MyApp />
    <br />
    <h1>10) Pass a Callback as Props:</h1>
    <MyApp2 />
    <br />
    <h1>11) Use the Lifecycle Method componentWillMount:</h1>
    <MyComponent4 />
    <br />
    <h1>12) Use the Lifecycle Method componentDidMount:</h1>
    <MyComponent5 />
    <br />
    <h1>13) Add Event Listeners:</h1>
    <MyComponent6 />
    <br />
    <h1>14) Optimize Re-Renders with shouldComponentUpdate:</h1>
    <br />
    <h1>15) Introducing Inline Styles:</h1>
    <Colorful />
    <br />
    <h1>16) Add Inline Styles in React:</h1>
    <Colorful2 />
    <br />
    <h1>17) Use Advanced JavaScript in React Render Method:</h1>
    <MagicEightBall />
    <br />
    <h1>18) Render with an If-Else Condition:</h1>
    <MyComponent7 />
    <br />
    <h1>19) Use && for a More Concise Conditional:</h1>
    <MyComponent8 />
    <br />
    <h1>20) Use a Ternary Expression for Conditional Rendering:</h1>
    <CheckUserAge />
    <br />
    <h1>21) Render Conditionally from Props:</h1>
    <GameOfChance />
    <br />
    <h1>22) Change Inline CSS Conditionally Based on Component State:</h1>
    <GateKeeper />
    <br />
    <h1>23) Use Array.map() to Dynamically Render Elements:</h1>
    <MyToDoList />
    <br />
    <h1>24) Give Sibling Elements a Unique Key Attribute:</h1>
    <Frameworks />
    <br />
    <h1>25) Use Array.filter() to Dynamically Filter an Array :</h1>
    <MyComponent9 />
    <br />
    <h1>26) Render React on the Server with renderToString:</h1>
    <appString />
    <br />
  </StrictMode>
);
