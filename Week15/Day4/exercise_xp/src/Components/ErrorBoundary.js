import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInfo: "" };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>An error has occured</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
