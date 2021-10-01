import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* @ts-ignore Inserting fragment wrapper in App didn't work for me. https://stackoverflow.com/questions/62702485/component-cannot-be-used-as-a-jsx-component-its-return-type-element-is-not */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
