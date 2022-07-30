import "./Input.css";
import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <label name="todo">Add a new todo:</label>
        <input name="todo" onKeyDown={this.props.onKey} />
      </div>
    );
  }
}

export default Input;
