import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// we import the store to use the subscribe(listener) method
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 1.
const render = function () {
  root.render(<App />);
};

//2.
render();

//3.
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
