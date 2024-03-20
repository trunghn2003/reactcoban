import React from "react";
import ReactDOMServer from "react-dom/server";

const App1 = () => {
  return <div />;
};

const appString = ReactDOMServer.renderToString(<App1 />);
export default appString;
