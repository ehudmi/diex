import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input onKeyDown={this.props.onKey} />
      </div>
    );
  }
}

export default Input;
