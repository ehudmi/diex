import React, { Component } from "react";
// import Modal from "./Modal";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInfo: "", show: true };
  }

  //   occurError = (error) => {
  //     this.setState({ hasError: true });
  //   };

  //   closeModal = () => {
  //     this.setState({ show: false });
  //   };

  componentDidCatch(error, errorInfo) {
    // this.occurError();
    console.log(this.state.hasError);
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.hasError) {
      console.log(this.state);
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>;
        </div>
      );
    }

    return this.props.children;
  }
}
//   render() {
//     console.log(this.state.hasError);
//     if (this.state.hasError) {
//       return (
//         <Modal
//           errorInfo={Object.values(this.state.errorInfo)}
//           clickAction={this.closeModal}
//         />
//       );
//     }

//     return this.props.children;
//   }
// }

export default ErrorBoundary;
