import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";

class App extends Component {
  clickButton = () => {
    throw new Error("I Crashed!");
  };
  render() {
    return (
      <ErrorBoundary>
        <button onClick={this.clickButton}>Occur an error</button>
      </ErrorBoundary>
    );
  }
}

export default App;
