import React, { Component } from "react";
import { createStore } from "redux";
import Lesson from "./Lesson";
import reducer from "./reducers";
import "./App.css";

const initialState = { subject: "Javascript" };
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return (
      <div>
        <Lesson subject={store.getState().subject} />
      </div>
    );
  }
}

export default App;
