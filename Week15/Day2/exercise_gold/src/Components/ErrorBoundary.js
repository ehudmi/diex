import React, { Component } from "react";
import Modal from "./Modal";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInfo: "", show: true };
  }

  closeModal = () => {
    this.setState({ show: false });
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError && this.state.show) {
      return (
        <Modal
          show={this.state.show}
          errorInfo={Object.values(this.state.errorInfo)}
          clickAction={this.closeModal}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
