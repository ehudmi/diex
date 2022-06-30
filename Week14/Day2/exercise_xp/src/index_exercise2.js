import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const sum = 5 + 5;
const myelement = <h1>Hello World</h1>;
const myelement1 = <h1>I Love JSX!</h1>;
const myelement2 = <h1>React is {sum} times better with JSX</h1>;
const all = (
  <div>
    {myelement} , {myelement1} , {myelement2};
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  all,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
