import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInfo: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="card my-5">
          <div className="card-header">
            <p>
              An error has occurred in this component.
              <span style={{ cursor: "pointer", color: "rgb(0, 119, 255)" }}>
                Reload this page
              </span>
            </p>
          </div>
          <div className="card-body">
            <details className="error-details">
              <summary>Click for error details</summary>
              {this.state.error.toString()},
              {Object.values(this.state.errorInfo)}
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
