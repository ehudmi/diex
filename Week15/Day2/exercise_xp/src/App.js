import React, { Component } from "react";
import "./App.css";
import Color from "./Components/Color";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <BuggyCounter />
      <Color />
    </>
  );
}

export default App;

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handleClick = (e) => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    if (this.state.counter === 5) {
      throw new Error("I Crashed!");
    }
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
      </div>
    );
  }
}
