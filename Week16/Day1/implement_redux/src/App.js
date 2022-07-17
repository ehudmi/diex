import React from "react";
import { createStore } from "redux";
import Lesson from "./Lesson";
import reducers from "./reducers";
import "./App.css";

const initialState = { subject: "Javascript" };
const store = createStore(reducers, initialState);

function App() {
  return (
    <div>
      <Lesson subject={store.getState().subject} />
    </div>
  );
}

export default App;
