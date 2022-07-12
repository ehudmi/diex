import React, { Component } from "react";
import "./App.css";
import Button from "./Components/Button";
import ErrorBoundary from "./Components/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Button />
      </ErrorBoundary>
    );
  }
}

export default App;
