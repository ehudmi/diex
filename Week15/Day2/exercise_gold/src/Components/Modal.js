import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <div>Error: Something went wrong!</div>
          <details>
            {this.props.errorInfo}
            <p>Please try it again</p>
          </details>
          <button onClick={this.props.clickAction}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
